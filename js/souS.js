window.onload=function(){
	var str="adagwhfohoei"
	var re=/(a[d-g]){2}/i;
	alert(re.test(str));
}
/*

function(){     
    var str = document.getElementById('search-border').value.trim();    
    if(str.length!=0){    
        reg=/^[\u0391-\uFFE5]+$/;    
        if(!reg.test(str)){    
            alert("输入错误，请重新输入！");
        }    
    }    
}   


function(){
	var oName=document.getElementById('search-border');

	oName.onblur=function(){
		var re=/[^\u4e00-\u9fa5]/g;//非中文
		if(re.test(this.value)){
			alert("输入错误，请重新输入！")
		}
	}
})  

function IsChinese()     
{     
        var str = document.getElementById('search-border').value.trim();    
        if(str.length!=0){    
        reg=/[^\U4E00-\U9FA5]/;    
        if(reg.test(str)){    
            alert("输入错误，请重新输入！");    
        }    
        }    
}   

window.onload=function(){
	var str="adagwhfohoei"
	var re=/(a[d-g]){2}/i;
	alert(re.test(str));
}  
 
window.onload=function(){
var str=document.getElementById('search-border');

	str.onblur=function(){
		var re=/[^\u4e00-\u9fa5]/g;//非中文
		if(re.test(this.value)){
			alert("输入错误，请重新输入！")
		}
	}
}*/