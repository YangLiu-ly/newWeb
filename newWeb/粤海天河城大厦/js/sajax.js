//1.用户代理（发送请求和接收的对象）
var xhr = new XMLHttpRequest()
//2.输入请求方式和路劲
//注意:涉及ajax操作的页面一般情况下不能以绝对路径访问
xhr.open("GET","./../date/pro.json")

//发送响应,
xhr.send()

//这个事件在xhr对象状态发生改变，即会触发
//(五个状态，0:初始化请求代理对象，
//1:open()被调用，与服务器端口建立了一个连接
//2:xhr已经接受到了响应报文的响应头,但还没接收到响应体
//3：正在下载响应报文的响应体
//4:整个响应报文已经完全下载下来了)
xhr.onreadystatechange = function(){
    if(this.readyState !== 4) return;
}