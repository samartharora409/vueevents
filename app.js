new Vue ({
    el: '#app',
    
    data: {
        Age: 25,

        upx: 0,

        upy: 0

    },
    methods: {
        addAge: function(x){
            this.Age=this.Age+x;
        },
        subAge: function(x){
            this.Age=this.Age-x;
        },
        updateXY: function(event){
            this.upx=event.offsetX;
            this.upy=event.offsetY;

        },


        print1:function(){
            alert('click me');
        }


    }


});