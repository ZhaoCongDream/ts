import { IndexState } from '@/types/views/index.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as IndexApi from '@/api/index'

const state: IndexState = {
  index: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
  author: (state: IndexState) => state.index.author
}

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: IndexState, data: IndexState) {
    const d:any = data
    const s:any = state
    for (const key in d) {
      if (!data.hasOwnProperty(key)) { return }
      s[key] = d[key]
    }
  }
}

const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN({ commit, state: IndexState }, data: IndexState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Index.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

