// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var globalData = require('globalData');

cc.Class({
    extends: cc.Component,

    properties: {
        profile: cc.Sprite,
        pet: cc.Sprite,
        shop: cc.Sprite,
        travel: cc.Sprite,
        work: cc.Sprite,
        home: cc.Sprite,

        _isFunctionShow: true,
        
    },

    init: function() {
        // 初始化宠物形象
        let sprite = this.pet;
        if (globalData.species == 0) {
            cc.loader.loadRes("owl-simple", cc.SpriteFrame, (err, sp) => {
                console.log(err);
                if (err) return;
                if (this.node) {
                    console.log("success");
                    if(sprite){
                        sprite.spriteFrame = sp;
                    }
                }
            })
        } else if (globalData.species == 1) {
            cc.loader.loadRes("penguin-simple", cc.SpriteFrame, (err, sp) => {
                console.log(err);
                if (err) return;
                if (this.node) {
                    console.log("success");
                    if(sprite){
                        sprite.spriteFrame = sp;
                    }
                }
            })
        } else if (globalData.species == 2) {
            cc.loader.loadRes("cat-simple", cc.SpriteFrame, (err, sp) => {
                console.log(err);
                if (err) return;
                if (this.node) {
                    console.log("success");
                    if(sprite){
                        sprite.spriteFrame = sp;
                    }
                }
            })
        } else if (globalData.species == 3) {
            cc.loader.loadRes("dog-simple", cc.SpriteFrame, (err, sp) => {
                console.log(err);
                if (err) return;
                if (this.node) {
                    console.log("success");
                    if(sprite){
                        sprite.spriteFrame = sp;
                    }
                }
            })
        }    
    },

    onPlusBtnClicked: function() {
        this.showFunction();
    },

    showFunction: function() {
        this._isFunctionShow = !this._isFunctionShow;
        let actionShop = null;
        let actionWork = null;
        let actionTravel = null;
        if (this._isFunctionShow) {
            actionTravel = cc.spawn(cc.moveBy(0.5, cc.v2(0, -94)), cc.fadeOut(0.5));
            actionWork =  cc.spawn(cc.moveBy(0.6, cc.v2(0, -188)), cc.fadeOut(0.6));
            actionShop = cc.spawn(cc.moveBy(0.7, cc.v2(0, -282)), cc.fadeOut(0.7));
        } else {
            actionTravel = cc.spawn(cc.moveBy(0.5, cc.v2(0, 94)), cc.fadeIn(0.5));
            actionWork =  cc.spawn(cc.moveBy(0.6, cc.v2(0, 188)), cc.fadeIn(0.6));
            actionShop = cc.spawn(cc.moveBy(0.7, cc.v2(0, 282)), cc.fadeIn(0.7));
        }
        this.travel.node.runAction(actionTravel);
        this.work.node.runAction(actionWork);
        this.shop.node.runAction(actionShop);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(globalData);
        this.init();
    },

    start () {

    },

    // update (dt) {},
});
