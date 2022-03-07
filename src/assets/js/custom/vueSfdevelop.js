var app = new Vue({
    el: '#app',
    data: {
        isActive: true
    },
    methods: {
        openBurger: function() {
            this.isActive = !this.isActive;
            // some code to filter users
        }
    }
})