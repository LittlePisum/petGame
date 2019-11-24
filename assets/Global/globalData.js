// 游戏全局数据，分为全局控制数据和全局属性数据
// 全局控制数据，例如背景音乐开关、音效开关等等，不需要从服务器获得数据，采用windows.的全局变量使用方式
// 全局属性数据，例如宠物性别、种类等，需要与服务器交互，采用require类型的全局变量，方便初始化

var globalData = {
    // 宠物种类
    species: {
        get () {
            return this._species;
        },
        set (value) {
            this._species = value;
        }
    },
    //  宠物性别
    gender: {
        get () {
            return this._gender;
        },
        set (value) {
            this._gender = value;
        }
    },
    // 宠物毛色
    skin: {
        get () {
            return this._skin;
        },
        set (value) {
            this._skin = value;
        }
    },
    // 宠物昵称
    petName: {
        get() {
            return this._petName;
        },
        set(value) {
            this._petName = value;
        }
    },
    // 主人称谓
    masterName: {
        get() {
            return this._masterName;
        },
        set(value) {
            this._masterName = value;
        }
    },

    init: function (){
        this.species = 0;
        this.skin = 0;
        this.gender = 0;
        this.petName = '小白';
        this.masterName = '小新';
    },
    
};

module.exports = globalData;
