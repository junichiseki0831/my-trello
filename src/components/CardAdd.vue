<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body" type="text" class="text-input" placeholder="Add new card" @focus="startEditing" @focusout="finishEditing">
    <!-- v-if="isEditing || bodyExists"はフォームが活性時かつテキストが入力された時 -->
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
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
      if(this.bodyExists) {
        classList.push('addable')
      }
      return classList
    },
    bodyExists() {
      //入力文字の文字数でtrueかfalseを返す
      return this.body.length > 0
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