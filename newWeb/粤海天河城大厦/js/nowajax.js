function ajax(url, fnSuss,fnfalses){
    //创建XMLHttpREquest对象
    var xmlhttp;
    if (window.XMLHttpRequest){
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }else{
        // IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } 
    //指定回调函数 即服务器处理完请求后返回响应，会调用此指定的js函数
    xmlhttp.onreadystatechange = setData;
    // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-urlencoded');

    //建立到服务端的请求,url去缓存
    // xmlhttp.open("GET", 'data.json?t='+new Date().getTime(), true); //get的去缓存的一种方式；
    xmlhttp.open("GET", url, true);
    //发送请求
    xmlhttp.send();
    //回调函数
    function setData(){
        if(xmlhttp.readyState == 4){
            if(xmlhttp.status == 200){
               var data = xmlhttp.responseText;
               list = JSON.parse(data).data;
               //渲染页面
               renderlist(list);
            }
        }
    }
}