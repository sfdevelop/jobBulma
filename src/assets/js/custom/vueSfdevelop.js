var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        isDropdown:false
    },
    methods: {
        openBurger: function() {
            this.isActive = !this.isActive;
        },

        openDropdown: function() {
            this.isDropdown = !this.isDropdown;
         }
    }
})