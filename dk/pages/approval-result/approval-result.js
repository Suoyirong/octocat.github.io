//approval-result.js
Page({
  data: {
    money: '',
    name: '',
    phone: '',
    id: '',
    dataTime: '',
    arr: ['恭喜吴**186****3157  ',
      '恭喜秦**168****2129  ',
      '恭喜要**186****5154  ',
      '恭喜何**152****5450  ',
      '恭喜赵**186****0055  ',
      '恭喜张**139****3157  ',
      '恭喜李**186****2279  ',
      '恭喜要**186****5550  ',
      '恭喜何**136****5788  ',
      '恭喜赵**186****6358  ',
      '恭喜孙**186****3157  ',
      '恭喜李**196****2126  ',
      '恭喜要**188****5550  ',
      '恭喜何**187****5557  ',
      '恭喜赵**186****0055  ',
      '恭喜孙**188****3157  ',
      '恭喜吴**186****2129  ',
      '恭喜要**186****5550  ',
      '恭喜何**159****5550  ',
      '恭喜赵**186****0055  ',
      '恭喜孙**156****3157  ',
      '恭喜李**175****4444  ',
      '恭喜要**175****5623  ',
      '恭喜何**189****7660  ',]
  },
  onLoad: function (options) {
    // 接收从上一个页面传递过来的用户信息
    if (options.money) {
      let that = this
      this.setData({
        money: that.addDou(options.money) ,
        name: options.name,
        phone: options.phone,
        id: options.id,
        dataTime: this.getCurrentTime()
      })
    }
    console.log(this.data);
    
    // 每秒执行一次滚动
    this.rollEvent = setInterval(this._rollApi, 1000)
  },
  onUnload: function () {
    // 页面卸载时清除定时器
    if (this.rollEvent) {
      clearInterval(this.rollEvent)
    }
  },
  // 数字格式化
  addDou: function(num) {
    if (!num) return ''
    var result = ''
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result
      num = num.slice(0, num.length - 3)
    }
    if (num) {
      result = num + result
    }
    return result
  },
  // 获取当前时间
  getCurrentTime: function() {
    const now = new Date()
    const year = now.getFullYear()
    const month = this.padNumber(now.getMonth() + 1)
    const day = this.padNumber(now.getDate())
    const hours = this.padNumber(now.getHours())
    const minutes = this.padNumber(now.getMinutes())
    const seconds = this.padNumber(now.getSeconds())
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  },
  // 滚动动画
  _rollApi: function() {
    let that = this
    
    // 直接更新数组，实现滚动效果
    let newArr = that.data.arr
    newArr.push(newArr[0])
    newArr.shift()
    that.setData({
      arr: newArr
    })
  },
  // 数字补零
  padNumber: function(num) {
    return num < 10 ? '0' + num : num
  }
})
