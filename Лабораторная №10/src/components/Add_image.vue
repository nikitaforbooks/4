<!-- <template>
  <form @submit.prevent="Add()"
  	enctype="multipart/form-data">
    <input type="file" @change ="loadImage" multiple accept="image/*,image/jpeg">
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default{
    data(){
      return{
        NewImage:""
      }
    },
  	methods: {
		Add()
		{
			// this.$emit('AddImage', 11);
      alert(this.NewImage);
      // this.$emit('AddImage',this.NewImage);
		},
  	loadImage: function(e)
  	{
  		let file = e.target.files[0];
  		let reader = new FileReader();
      this.AddIm(1000);
  		 // reader.onload = function(e){

        // this.NewImage = e.target.result;
        this.AddIm(e.target.result);
        // alert(this.NewImage);
  		 	// this.$emit('AddImage',e.target.result);
  		 // };
  		 // reader.readAsDataURL(file);
       //document.getElementById("image").src = e.target.result;
  	}
  }
}
</script>

<style>
form{
	display: flex;
	flex-wrap: wrap;
	max-width: 300px;
}
</style>
 -->