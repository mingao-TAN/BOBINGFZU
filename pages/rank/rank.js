const app = getApp()
Page({
    toFirstPage(){ //跳转到首页
      wx.switchTab({  
        url: '/pages/index/index'  
      });  
    },
    
})