import Vue from "vue";
import axios from "axios";

const withLoader = component => {
  return Vue.component("with-loader", {
    render(createElement) {
      return createElement(component, {
        props: {
          loading: this.loading,
          title: this.title,
          body: this.body
        }
      });
    },
    props: ["id"],
    data() {
      return {
        loading: false,
        title: "",
        body: "",
      }
    },
    methods: {
      load(id) {
        this.loading = true;
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => {
            this.title = response.data.title;
            this.body = response.data.body;
            this.loading = false;
          });
      }
    },
    created() {
      this.load(this.id);
    }
  });
};

export default withLoader;