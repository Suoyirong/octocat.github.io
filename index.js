var app = new Vue({
    el: '#app',
    data: {
        userId: 'a80238023',
        password: '',
        message: 'Hello Vue!',
        page: 1,
        money: null,
        name: '',
        phone: '',
        id: '',
        animate: false,
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
    mounted() {
        // this.rollEvent = setInterval(this._rollApi,1000)
        // this.dataTime = this.getCurrentTime()
    },
    methods: {
        checkUser() {
            let that = this
            this.$prompt('请输入密码', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                $.ajax({
                    url: '/tools/verifyUser',
                    type: 'GET',
                    data: { userId: this.userId, password: value },
                    success: function (response) {
                        if (response.data !== null) {
                            // 请求成功时的回调函数
                            that.page = 2

                        }else{
                            this.$message.error('登录失败');  
                        }

                    },
                    error: function (xhr, status, error) {
                        // 请求失败时的回调函数
                        console.error(error);
                    }
                });

            })







        },
        check() {
            if (!this.name || !this.id || !this.phone) {
                this.$message.error('请输入用户信息');
            } else {
                window.scrollTo = 0
                this.page = 3
                //  每秒执行一次-滚动

                this.rollEvent = setInterval(this._rollApi, 1000)
                this.dataTime = this.getCurrentTime()
            }

        },
        idInput(e) {
            console.log(e);

        },
        addDou(num) {
            if (!num) return
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
        getCurrentTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = this.padNumber(now.getMonth() + 1);
            const day = this.padNumber(now.getDate());
            const hours = this.padNumber(now.getHours());
            const minutes = this.padNumber(now.getMinutes());
            const seconds = this.padNumber(now.getSeconds());


            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },
        _rollApi() {
            let refRollDiv = this.$refs.refRoll;

            refRollDiv.style.marginTop = '10px';
            this.animate = !this.animate;

            var that = this;
            setTimeout(function () {
                that.arr.push(that.arr[0]);
                that.arr.shift();
                refRollDiv.style.marginTop = '0px';
                that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
            }, 500)

        },
        mEnter() {
            clearInterval(this.rollEvent)
        },
        mLeave() {
            this.rollEvent = setInterval(this._rollApi, 1000)
        },
        padNumber(num) {
            return num < 10 ? '0' + num : num;
        }
    },
})