const cow_skin = cc.Class({
    name:"cow_skin",
    properties:{
        cows:{
            default:[],
            type:[cc.SpriteFrame]
        }
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        cow_set:{
            default:[],
            type:[cow_skin]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
    },

    start () {
        var interval = 0.1;
        var repeat = 10;
        var delay = 1;
        var start = 0;
        let cowSet = this.cow_set[0];
        let sprite = this.node.getComponent(cc.Sprite);
        setInterval(()=>{
            if(start > 4)
                start = 0;
            sprite.spriteFrame = cowSet.cows[start]; 
            start++;
         }, 80);
        // for(var i = 0; i < 10; i++){
        //     if(start > 4)
        //         start = 0;
        //     setTimeout(()=>{sprite.spriteFrame = cowSet.cows[start]; }, 30);
        //     start++;
        // }
        //setTimeout(()=>{console.log("abc"); }, 3000);
        // Component.schedule(function(){
        //     if(start > 4)
        //         start = 0;
        //     sprite.spriteFrame = cowSet.cows[start];
        //     start++;
        // }, interval, repeat, delay);
    },


    // update (dt) {
    //     this.intervalTime += dt;
    //     let index = Math.floor(this.intervalTime / 0.2);
        
    //     index = index % 5;
    //     //cc.log(index);
    //     let cowSet = this.cow_set[0];

    //     let sprite = this.node.getComponent(cc.Sprite);
    //     sprite.spriteFrame = cowSet.cows[index];

    // },
});
