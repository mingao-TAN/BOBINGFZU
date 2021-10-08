// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
  },
  gotoPage:function(param){
    wx.switchTab({
        url: '/pages/home/home',
      })
  },
  
})
