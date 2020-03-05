// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['1', '2', '3', '4', '5'],
    index: 0,
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 输入姓名
  nameChange: function(e) {
    this.checkName(e.detail.value);
  },
  phoneChange(e) {
    this.checkPhone(e.detail.value);
  },
  formSubmit(e) {
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    console.log(name, phone);
    if (this.checkName(name) && this.checkPhone(phone)) {
      wx.showToast({
        title: '感谢您的留言,此处为模拟数据，接口正在完善中...',
        icon: 'success',
        duration: 1500
      })
    } else {
      wx.showToast({
        title: '提交失败',
        icon: 'none',
        duration: 1500
      })
    }
  },
  // 校验姓名
  checkName: function(data) {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data, reg, '姓名输入错误！');
  },
  // 效验手机号码
  checkPhone: function(data) {
    var reg = /^(((13)|(15)|(17)|(18))\d{9})$/;
    return this.check(data, reg, '手机号码输入有误！')
  },
  check: function(data, reg, errMsg) {
    if (!reg.test(data)) {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    return true;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})