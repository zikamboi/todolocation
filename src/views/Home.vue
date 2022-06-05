<template>
  <div class="home">
    <h2>places</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              v-for="place in places"
              :key="place.id"
              class
              city="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ city.name }}
              <span class="badge badge-primary badge-pill"
                ><router-link
                  :to="{ path: `/place/234534retf` }"
                  class="btn btn-primary ml-4"
                  >Edit</router-link
                ><a href="#" class="btn btn-danger">Delete</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  data() {
    return {
      cities: [],
    };
  },
  // methods: {
  //   async fetchCities() {
  //     let citiesSnapShot = await getDocs(citiesColRef);
  //     console.log(citiesSnapShot);
  //   },

  // },
  // created() {
  //   this.fetchCities();
  // },
};
</script>

<style></style>
