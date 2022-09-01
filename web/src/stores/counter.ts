import { defineStore } from 'pinia'
import { getList } from "@/server/index";

import type { RootObject } from "./type"


interface CounterState {
  counter: number,
  list: RootObject
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: (): CounterState => ({
    counter: 0,
    list: <RootObject>{}
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    async getLists () {
      const result = await getList()
      this.list = result as RootObject
    }

  }
})
