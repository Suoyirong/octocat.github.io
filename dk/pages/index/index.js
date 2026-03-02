//loan-amount.js
Page({
  data: {
    money: ''
  },
  onLoad: function (options) {
    // 页面加载时的初始化
  },
  // 输入事件处理
  bindMoneyInput: function(e) {
    this.setData({
      money: e.detail.value
    })
  },
  // 下一步按钮点击事件
  checkUser: function() {
    let that = this
    wx.showModal({
      title: '操作密码',
      content: '',
      editable: true,
      success: function(res) {
        if (res.confirm) {
          // 跳转到个人信息页面，并传递贷款额度
          wx.navigateTo({
            url: '../personal-info/personal-info?money=' + that.data.money
          })
        }
      }
    })
  }
})
