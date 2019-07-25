// components/shoye/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //滑动切换
    swiperTab: function(e) {
      var that = this;
      that.setData({
        currentTba: e.detail.current
      });
    },
    //点击切换
    clickTab: function(e) {

      var that = this;

      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    }
  },

})