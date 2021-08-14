import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//localStorageに保存したリストを取得
const savedLists = localStorage.getItem('trello-lists')
console.log(savedLists);

const store = new Vuex.Store({
  state: {
    //localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置
    lists: savedLists ? JSON.parse(savedLists): [
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
      state.lists.push({ title: payload.title, cards:[] })
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

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
