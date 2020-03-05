// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: null,
    danmuLlist: [{
        text: '第一个弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第二个弹幕',
        color: '#FF00FF',
        time: 1
      },
      {
        text: '第三个弹幕',
        color: '#ff00ff',
        time: 1
      },
      {
        text: '第四个弹幕',
        color: '#8B008B',
        time: 1
      },
      {
        text: '第五个弹幕',
        color: '#8A2BE2',
        time: 1
      },
    ],
    videoContext: null,
    inputValue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.src)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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
  bindSendDanmu: function() {
    console.log('发送')
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: "#90",
      time:1,
    })
  },
  bindInputBlur: function(e) {
    console.log("input")
    this.inputValue = e.detail.value;
  },
  // 获取本地视频
  bindTapButton: function() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: res => {
        this.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})