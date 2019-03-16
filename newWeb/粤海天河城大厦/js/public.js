
    //插入时间
    setInterval(function () {
        $(".h-time").text(new Date().Format("HH:mm"));
        $(".y-time").text(new Date().Format("yyyy.MM.dd"));
        $(".w-time").text(getWeekDate());
    },1000)

    //获取当前时间
    Date.prototype.Format = function(fmt) {
        var o = {
            "M+": this.getMonth() +1,//月
            "d+": this.getDate(),//日
            "H+": this.getHours(),//小时
            "m+": this.getMinutes(),//分
            "s+": this.getSeconds(),//秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds()//毫秒
        };
        if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
        for(var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
         return fmt; 
    }
    //ajax请求数据
    function getajax(iurl,func){
        $.ajax({
            url:iurl,
            type:'get',
            dataType: 'json',
            error: function(){
                console.log("错误")
            },
            success: function(prolacation){
                console.log(prolacation.date)
                $.each(prolacation.date,function(index,item){
                    var arr1 = item
                    func(arr1)
                })

            }
        })
    }


        /**
        *获取当前星期几
        *
        */
    function getWeekDate() {
        var now = new Date();
        var day = now.getDay();
        var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var week = weeks[day];
        return week;
    }



