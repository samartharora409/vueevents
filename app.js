new Vue ({
    el: '#app',
    
    data: {
        Age: 25,

        upx: 0,

        upy: 0

    },
    methods: {
        addAge: function(){
            this.Age++
        },
        subAge: function(){
            this.Age--
        },
        updateXY: function(event){
            this.upx=event.offsetX;
            this.upy=event.offsetY;

        }

    }


});