<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body" type="text" class="text-input" placeholder="Add new card" @focus="startEditing" @focusout="finishEditing">
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>


<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      body: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      return classList
    },
  },
  methods: {
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
    addCardToList() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex})
      this.body = ''
    }
  }
  
}
</script>