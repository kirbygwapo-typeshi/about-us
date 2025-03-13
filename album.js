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
          title: "SILLY",
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
          img1: "images/cat baby2.jpg",
          img2: "images/cat baby.jpg",
          img3: "images/cat baby3.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "images/cat sleep.jpg",
          img2: "images/cat sleep2.jpg",
          img3: "images/cat sleep 3.jpg",
          title: "SLEEP",
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
