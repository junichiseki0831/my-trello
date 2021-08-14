import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//localStorageに保存したリストを取得
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    //localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置
    //localStorageにはJSON形式の文字列型でデータが保存されている、取得するときにはJSON.parse(取得するデータ)でオブジェクトに変換する必要
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  }
})

//データの状態を更新後にlocalStorageへデータの状態を保存
store.subscribe((mutation, state) => {
  //データを文字列型にするにはJSON.stringify(保存するデータ)でJSON形式に変換
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
