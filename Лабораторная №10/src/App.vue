<template>
  <div id="app">
    <div class="previewNotActive" id="prev">
      <Items v-bind:image = "left"   v-on:clickimg="clickimg"/>
      <Items v-bind:image = "center" v-on:clickimg="clickimg"/>
      <Items v-bind:image = "right"  v-on:clickimg="clickimg"/>
    </div>
    <div id="header">
      <form
        enctype="multipart/form-data">
        <input type="file" @change ="AddImage" multiple accept="image/*,image/jpeg">
      </form>
      <div >Галерея:</div>
      <div class = "block-button">
        <button v-bind:class="{on:status_delete}" v-on:click="status_delete = !status_delete"
        >Видалення елементів</button>
      </div>
    </div>
    <List_image v-bind:List="List" v-on:clickimg="clickimg"/>
  </div>
</template>

<script>
import List_image from '@/components/list_img.vue'
import Items from '@/components/item'
export default {
  name: 'App',
  data() {
    return {
      List: [
      {id:0,src:"image/1.jpg",preview:false,left:false,right:false},
      {id:1,src:"image/2.jpg",preview:false,left:false,right:false},
      {id:2,src:"image/3.jpg",preview:false,left:false,right:false},
      {id:3,src:"image/4.jpg",preview:false,left:false,right:false},
      {id:4,src:"image/5.jpg",preview:false,left:false,right:false},
      {id:5,src:"image/6.jpg",preview:false,left:false,right:false}
      ],
      status_delete:false,
      status_preview:false,
      last_id:5,

      center:{},
      left:{},
      right:{}
    }
  },
  methods: {
    clickimg(id)
    {
      if(this.status_delete)
        this.List = this.List.filter(t => t.id !== id);
      else if(!this.status_preview)
      {
        document.getElementById("prev").setAttribute("class","previewActive");
        this.status_preview = true;
        for (let i = 0; i < this.List.length; i++)
        {
          if(this.List[i].id == id)
          {
            let l = this.List[((i)?(i-1):this.List.length-1)];
            let r = this.List[((i == this.List.length-1)?0:(i+1))];

            this.left = {id:l.id,src:l.src,preview:false,left:true,right:false};
            this.center = {id:this.List[i].id, src:this.List[i].src,preview:true,left:false,right:false};
            this.right  = {id:r.id,src: r.src,preview:false,left:false,right:true};
          }
        }
      }
      else
      {
        if(id == this.center.id)
        {
          document.getElementById("prev").setAttribute("class","previewNotActive");
          this.status_preview = false;

        }else{
          this.status_preview = false;
          this.clickimg(id);
        }
        
      }
    },
    AddImage: function(e)
    {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.addEventListener('load',event=>
      {
        this.List.push({id:++(this.last_id), style_cut:"height:100%",src:event.target.result});
      });
      reader.readAsDataURL(file);
    }

  },
  components: {
    List_image,
    Items
  }
}
</script>
<style>
html,body
{
  margin:0;
  padding: 0;
  background: #111;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .previewActive{
  position: absolute;
  background: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#app .previewNotActive{
  display: none;
}
#app #header
{
  user-select: none;
  font-size: 80px;
  text-align: center;
  background: black;
  color: white;
  padding: 20px;
  margin-bottom: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#app #header div.block-header{
  width: 300px;
  height: 100px;

  display: flex;
  align-items: center;
  margin:0;
  padding: 0;
}
#app .block-button{
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  align-items: center;
}
#app button{
  display: block;

  color: #fff;
  height: 60px;
  font-size: 20px;
  padding-left: 5px;
  background: black;
  outline: none;
  transition:0.2s;
}
#app .on
{
  background: blue;
}
</style>
