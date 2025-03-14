new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "2.jpg",
          img2: "3.jpg",
          img3: "4.jpg",
          title: "GOOFY",
          isOpen: false,
        },
        {
          img1: "5.jpg",
          img2: "6.jpg",
          img3: "7.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "11.jpg",
          img2: "12.jpg",
          img3: "13.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "14.jpg",
          img2: "15.jpg",
          img3: "16.jpg",
          title: "JUST BEING US",
          isOpen: false,
        },
        {
          img1: "8.jpg",
          img2: "9.jpg",
          img3: "10.jpg",
          title: "FAVE",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
