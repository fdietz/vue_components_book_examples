Vue.component('image-card', {
  template: "#template-image-card",
  data: function () {
    return {
      count: 0
    }
  }
})

new Vue({ el: '#demo' });
