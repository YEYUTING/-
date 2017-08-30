/*轮播*/
$(function () {//等待DOM结构加载完毕后执行
    var i=0;
    var clone=$(".banner .img li").first().clone();//为实现无缝轮播，克隆第一张图到第三张图后面
    $(".banner .img").append(clone);
    var size=$(".banner .img li").size();
    $(".banner .circle li").first().addClass("on");


    /*鼠标在圆点上*/
    $(".banner .circle li").hover(function(){
        var index=$(this).index();
        i=index;
        $(".banner .img").stop().animate({left:-index*1400},700)
        $(this).addClass("on").siblings().removeClass("on")
    })


    function move(){
        /*对右边按钮的操作*/
        if(i==size){
            $(".banner .img").css({left: 0})
            i=1;
        }
        $(".banner .img").stop().animate({left: -i*1400},700)

        /*实现图片与圆点相对应*/
        if(i==size-1){
            $(".banner .circle li").eq(0).addClass("on").siblings().removeClass("on")
        }  else{
            $(".banner .circle li").eq(i).addClass("on").siblings().removeClass()
        }

        /*对左边按钮的操作*/
        if(i==-1){
            $(".banner .img").css({left:-(size-1)*1400})
            i=size-2;
        }
        $(".banner .img").stop().animate({left: -i*1400},700)
        $(".banner .circle li").eq(i).addClass("on").siblings().removeClass("on")
    }


    /*自动轮播*/
    var t=setInterval(function(){
        i++;
        move()
    },3000)
     

     /*鼠标在图片上时定时器关闭，离开时打开*/
     $(".banner").hover(function(){
        clearInterval(t);
     },function(){
        t=setInterval(function(){
        i++;
        move()
    },3000)
     })


    /*右边按钮*/
    $(".banner .btn-r").click(function(){
       i++;
       move()   //图片向左移
    })
     
    
    /*左边按钮*/
    $(".banner .btn-l").click(function(){
        i--;
        move()  //图片向右移
    })
})
/*轮播 end*/




/*搜索框*/

/*搜索框 end*/






/*遮罩层 登录弹出框*/
function open(){
	/*获取页面的高度和宽度*/
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;

	/*获取页面的可视区域高度和宽度*/
	var wHeight=document.documentElement.clientHeight;
	var wWidth=document.documentElement.clientWidth;
	
	/*将遮罩层高度和宽度设为与页面相同*/
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);

	/*给登录弹出框添加内容*/
	var oLogin=document.createElement("div");
		oLogin.id="login";
		oLogin.innerHTML=
		"<div class='loginCon'><div id='close'>x</div><p>登&nbsp&nbsp录</p><ul><li>账号<input type=''></li><br/><li>密码<input type='password'></li></ul><div class='loginC-btn'>登录</div></div>";
		document.body.appendChild(oLogin);
	
	/*获取登录框的宽和高*/
	var dHeight=oLogin.offsetHeight;
	var dWidth=oLogin.offsetWidth;

	/*设置登录框的外边距left和top,使之始终处于可视区域的中央*/
	oLogin.style.left=wWidth/2-dWidth/2+"px";//（可视区域宽度-登录框宽度）/2
	oLogin.style.top=wHeight/2-dHeight/2+"px";

	/*点击关闭按钮以及登录框以外的灰色区域关闭登录框*/
	var oClose=document.getElementById("close");	
	oClose.onclick=oMask.onclick=function(){
			document.body.removeChild(oLogin);
			document.body.removeChild(oMask);
	}
}

/*点击登录按钮 执行open函数弹出遮罩层和登录框*/
window.onload=function(){//等待页面中所有内容加载完毕后执行
	var btn=document.getElementById("dengLu");
	btn.onclick=function(){
		open();
		return false;
	}				
}
/*遮罩层 登录弹出框 end*/



