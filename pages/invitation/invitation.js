// pages/invitation/invitation.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    music_url: "http://www.zhangmingblog.com/music/zanmenjiehunba.mp3",
    animation: '',
    isPlayingMusic: true,
    interval: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.playBackgroundAudio({
      dataUrl: this.data.music_url
    });
    var n = 0,
      that = this;
    this.interval = setInterval(function() {
      n++;
      that.rotateAni(n);
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
      success: function(res) {
        console.log("res")
      }
    })
  },
  rotateAni: function(n) {
    this.animation.rotate(180 * (n)).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    clearInterval(this.interval);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  callBride: function() {
    wx.makePhoneCall({
      phoneNumber: '15039797863'
    })
  },
  callgroom: function() {
    wx.makePhoneCall({
      phoneNumber: '15039797863',
    })
  },
  playMusic: function(ev) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url
      });
      this.setData({
        isPlayingMusic: true
      });
    }
  }
})