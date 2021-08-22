<template>
  <div id="app">
    <!-- Boardコンポーネントをレンダリング -->
    <board />
  </div>
</template>

<script>
//コンポーネントをインポート
import Board from "./components/Board.vue";
export default {
  name: "app",
  components: {
    //コンポーネント登録
    Board
  }
};
</script>