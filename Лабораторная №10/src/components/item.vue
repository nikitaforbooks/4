<template>
	<div id = "item"
	v-bind:class ="{preview:image.preview,left:image.left, right:image.right}"
	>
		<img id="img" v-on:click="$emit('clickimg',image.id)":src=image.src>
	</div>
</template>

<script>

export default 
{
	props:{
		image:{	
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
div
{
  margin:10px;
  width: 300px;
  height: 300px;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: black;
}
div.preview{
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	margin:0;
}
.preview > #img{
	height: 100vh;
  width: 100vw;
  object-fit: contain;

  animation: zoom 0.75s;
}

@keyframes zoom{
	from{ height: 20vh; width: 20vw;}
	to{height: 100vh; width: 100vw;}
}

div.left, div.right{
	position: fixed;
	z-index: 2;
	margin:0;
	padding: 0;
	width: 20vh;
	height: 20vh;
		opacity: 0.75;
}
div.left{
	animation: zoomL 0.75s;
}
div.right{
	right: 0;
	animation: zoomR 0.75s;
}

@keyframes zoomL{
	from{ left: 50%;height: 0vh; width: 0vh;}
	to{left: 0%;height: 20vh; width: 20vh;}
}
@keyframes zoomR{
	from{ right: 50%; height: 0vh; width: 0vh;}
	to{ right: 0;height: 20vh; width: 20vh;}
}
img
{
	width: 120%;
	height: 120%;
	margin: 0.1vh;
}

</style>