<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //ListAddコンポーネントよりデータを受け取り
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    //リスト削除メソッド
    removeList: function() {
      if (confirm("本当にこのリストを削除しますか？")) {
        this.$store.dispatch("removelist", { listIndex: this.listIndex });
      }
    }
  }
};
</script>