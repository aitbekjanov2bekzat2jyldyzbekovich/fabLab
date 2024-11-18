<template>
  <div class="cardwrapper">
    <div class="cardHead">
      <h1>лечебние ростения</h1>
    </div>
    <div class="cards">
      <div class="card" v-for="i in this.contentStore.ddata">
        <div class="cardImg">
          <img :src="i.image" alt="" />
        </div>
        <div class="cardbottom">
          <h3>{{ i.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useContentStore } from "@/stores/counter";
export default {
  computed: {
    ...mapStores(useContentStore),
  },

  mounted() {
    this.contentStore.getData();
  },
};
</script>

<style lang="scss" scoped>
.cardHead {
  margin-bottom: 20px;

  h1 {
    color: #07ee18;
  }
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    h3 {
      color: #07ee18;
    }
    cursor: pointer;
    width: 200px;
    height: auto;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #07ee1600;

    &:hover{
      border: 1px solid #07ee18;
    }
    .cardImg {
      width: 100%;
      height: 150px;

      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
