$(function(){
    var $selectPart = $(".s-part");
    var $mengpaiList = $(".m-list");
    var $selectortInput = $(".selector>input");
    //优化dom操作---*
    //在ajax中进行字符串链接---*
    //全选按钮马上反馈到输入框---*
    //输入框不可选中编写---*
    //按钮之类的用户互动性增加---*
    
    //选择框点击事件
    $(".selector").on("click",function(){
        if($selectPart.css("display")=="none"){
            $selectPart.show();
        }else{
            $selectPart.hide();
        }
    })

    //门牌号选中事件
    $mengpaiList.on("click",".mengpai",function(){
            $(this).children("i").toggleClass("icon-selected");
    })
    //全选门牌
    $(".all-select input").on("change",function(){
        if($(this).prop("checked")){
            $mengpaiList.find("li>i").addClass("icon-selected");
        }else{
            $mengpaiList.find("li>i").removeClass("icon-selected");
        }
        joinSelector();
    })
    //选中门牌加入框中
    function joinSelector(){
        var meng = document.querySelectorAll(".icon-selected");
        var str = "";
        for(var i=0; i<meng.length; i++){
            str += meng[i].parentElement.firstElementChild.innerHTML + ",";
        }
        var str = str.slice(0,str.length-1);
        $selectortInput.val(str);
        if($selectortInput.val()==""){
            $selectortInput.val("--请选择门牌号--")
        }
    }

    //确定按钮事件
    $(".true-btn").on("click",function(){
        joinSelector();
        $selectPart.hide();
    })
    //取消按钮事件
    $(".reselect").on("click",function(){
        $selectPart.hide();
    })
  

    getajax("./date.json");
    //ajax请求数据并根据func()传入页面,循环在此方法中进行
    function getajax(nurl){
        $.ajax({
            url: nurl,
            type: 'get',
            dateType: 'json',
            error: function(){
                console.log("错误");
            },
            success: function(date){
                var html = '';
                $.each(date.date,function(index,item) {
                    var arr = item;
                    html += `<li class="mengpai">
                        <div class="m-number">${arr.id}</div>
                        <span class="content">${arr.content}</span>
                        <i class="iconfont m-active"></i>
                    </li>`
                })
                $mengpaiList.append(html);
            }
        })
    }
})