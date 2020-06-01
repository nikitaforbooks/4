<template>
  <div id="list_image">
    <Items
      v-for="image of List"
      v-bind:image="image"

      v-on:clickimg="clickimg"
    />
  </div>
</template>

<script>
import Items from '@/components/item'
export default {
  props: ['List'],
  components: {
    Items
  },
  methods: {
    clickimg(id)
    {
      this.$emit('clickimg',id);
    }
  }
}
</script>

<style scoped>
#list_image{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>