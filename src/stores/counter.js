import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {
  state: () => ({
    ddata: null,
  }),

  actions: {
    async getData() {
      const response = await fetch("http://localhost:3000/herbs");
      const ress = await response.json();
      this.ddata = await ress;
    },
  },
});
