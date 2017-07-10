/*
@ Author:张钊建
*/
function $id(d)
 {

    return document.getElementById(d);


}

function $sky_id(d)
 {

    return document.getElementById(d);


};



function $txt(d, c)
 {
    return $sky_id(d).innerText = c;

}

function $tagname(d)
 {

    return document.getElementsByTagName(d);


}

function $dc(d)
 {

    return document.createElement(d);


}

function $name(d)
 {

    return document.getElementsByName(d);


}
function $dw(d)
 {

    return document.write(d);


}

function $get(id, d)
 {
    /*获取对像的d标签,调用例子$get('love','王子')*/
    return $sky_id(id).getAttribute(d);

}


function $set(id, d, v)
 {
    /*设置对像的d标签,传进v值,调用例子$set('love','王子','呵..')*/
    return $sky_id(id).setAttribute(d, v);


}
function $remove(id, d)
 {
    /*删除id的标签*/
    return $sky_id(id).removeAttribute(d);

}


String.prototype.trim = function() {
    /*去除空格*/
    return this.replace(/(^\s*)|(\s*$)/g, "");

};

String.prototype.X = function(d) {
    return this.indexOf(d);
};

function Arr_max(arr) {
    return Math.max.apply(null, arr);

}


function $append(v, d) {
    var d = d || document.body;
    d.appendChild(v);

}

var d = document,
n = navigator,
w = window;
/*以上代码不能修改*/
if (typeof $SKY != 'object') var $SKY = {'Version':'1.0.3'};
$SKY.$ = function(d) {
    return document.getElementById(d);
};
var Scripts;
$SKY.Author = "\u5F20\u948A\u5EFA";
$SKY.Aut = "\u5F20\u948A\u5EFA";
$SKY.Src = 'INC,/,js';
$SKY.sp = $SKY.Src.split(",");
$SKY.FileURL = "inc/";
$SKY.Root = (function() {
    Scripts = $tagname('script');
    for (var i = 0; i < Scripts.length; i++) {
        if (Scripts[i].src.indexOf('$yasky.js') != -1 || Scripts[i].src.indexOf('$sky.js') != -1)
        return Scripts[i].getAttribute("src").replace(new RegExp('\\$sky.' + $SKY.sp[2], 'gi'), '');

    }


})();

$SKY.Class = {
    create: function() {
        return function() {
            this.initialize.apply(this, arguments);

        };

    }

};

Object.extend = function(destination, source) {
  for (property in source) {
    destination[property] = source[property];
  }
  return destination;
};


$SKY.arr_db = $SKY.Class.create();

$SKY.www = {
    	xineg: {
      			  cn: {
            load: function() {
                setTimeout(arguments[0],0);

            },
            $ajax: function(url, obj, bian, method) {
                new $SKY.xmlhttp().xmlhttp(url, obj, bian, method);

            },
            event: function() {
                var ag = arguments;
                $SKY.Event.event(ag[0], ag[1], ag[2]);

            },
            delevent: function() {
                var ag = arguments;
                $SKY.Event.delevent(ag[0], ag[1], ag[2]);

            },
			alert:function(msg,select_div,icon,bg_id,title,click){
				_error_msg_show(msg,select_div,icon,bg_id,title,click);

		     },
			open:function(_sUrl,_sWidth,_sHeight,_sTitle,_sScroll,move,bg_id,select_div){
				openWindow(_sUrl,_sWidth,_sHeight,_sTitle,_sScroll,move,bg_id,select_div);
			 },
			confirm:function(msg,click_ok,click_no,title,width,height,select_div){
				 _confirm_msg_show(msg,click_ok,click_no,title,width,height,select_div);
			}
        }
    }
};


$SKY.arr_db.prototype = {
    initialize: function() {
        },
    Arr_max: function(arr) {
        //返回最大值
        return Math.max.apply(null, arr);


    }
    ,
    sky_push: function(arr, arr2)
    {
        //把arr2添加到arr1
        Array.prototype.push.apply(arr, arr2);

    }

};

$SKY.baobaobrowser = function() {
    var userAgent = navigator.userAgent;
    /*取得浏览器的userAgent字符串*/
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera";
    };
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    if (userAgent.indexOf("IE 6") > -1) {
        return "IE6";
    }
    if (userAgent.indexOf("IE 5") > -1) {
        return "IE5";
    }
    if (userAgent.indexOf("IE 7") > -1) {
        return "IE7";
    }
    if (userAgent.indexOf("IE 8") > -1) {
        return "IE8";
    }
    if (userAgent.indexOf("IE 9") > -1) {
        return "IE9";
    }

};


sky_jsjjsj();
function sky_jsjjsj(){
/*可以加路径也可以不加root
方式张钊建=filename,root=root
*/
var sl=Scripts.length;
for(var i=0;i<sl;i++){
		if(Scripts[i].getAttribute($SKY.Aut))
		{
			
					try {
					var love_root = Scripts[i].getAttribute("root");
					love_root = love_root || "";
					if (love_root != "") love_root = love_root + "/";
					$SKY.spt = Scripts[i].getAttribute($SKY.Aut).split("@@@");
					for (var iii = 0; iii < $SKY.spt.length; iii++)
					{
						$dw('<script type="text/javascript" src="' + love_root + $SKY.spt[iii] + '.' + $SKY.sp[2] + '"><\/script>');
					}
				} catch(e) {
					alert("Scripts[0]." + $SKY.Aut + "--error");
					alert(e.message);
				}
}
}
}


/*
$sky.js?1
$sky.js?1@@@1@@@2
*/
(function(){
var sl=Scripts.length;
for(var i=0;i<sl;i++){
	if(Scripts[i].getAttribute("src"))
	{
		
		$SKY.JS2 = Scripts[i].getAttribute("src").split("?");
		
		}
	}
	
try {
    if ($SKY.JS2[1]) {

        if ($SKY.JS2[1].indexOf("=") == -1)
        {
            var $wenhao = $SKY.JS2[1].split("@@@");
			
			var sky_root=$SKY.JS2[0].split("$sky")[0];;
			
            for (var $wenhao_i = 0; $wenhao_i < $wenhao.length; $wenhao_i++) {
                $dw('<script type="text/javascript" src="' + sky_root+ $wenhao[$wenhao_i] + '.' + $SKY.sp[2] + '"></script>');

            }

        }

    }


} catch(e) {
    alert("$SKY.JS2--orror");
    alert(e.message);


}

})();


 ($SKY.JS = function() {
    /*$sky_js[1]等于后面的数据，多个用@@@分割*/
    /*判断是否是这样调用1.js?a=b*/
    /*判断是否是这样调用1.js?a=b@@@c
	上面二种方法a只是做样子
	*/
    try {
		var sl=Scripts.length,sky_root;
		for(var i=0;i<sl;i++){
		if(Scripts[i].getAttribute("src"))
		{
			 if (Scripts[i].getAttribute("src").indexOf("=") == -1) return;
    		 var $sky_js = Scripts[i].getAttribute("src").split("?")[1].split("=");
			 		//var love_root = Scripts[i].getAttribute("root");
					//love_root = love_root || "";
					//if (love_root != "") love_root = love_root + "/";
					sky_root=Scripts[i].getAttribute("src").split("$sky")[0];
					//alert(sky_root);
			if($sky_js[1]) {
            var spt = $sky_js[1].split("@@@");
            for (var i = 0; i < spt.length; i++)
            {
                $dw('<script type="text/javascript" src="' + sky_root + spt[i] + '.' + $SKY.sp[2] + '"></script>');

            }
            return;

        }
		
		}
	}
		
      
       

    } catch(e) {
        alert("$SKY.JS--error");
        alert(e.message);

    }


})();


/*调用方法$SKY.anntata.require("1.js");
或者$SKY.anntata.require("1/2@1/3");多个用@隔开*/
$SKY.anntata = {
    require: function()
    {
        try {
            if (arguments.length < 1) return;
            var vr = arguments[0].split("@");
            /*var furl=arguments[1]||$SKY.FileURL;*/
            for (var i = 0; i < vr.length; i++)
            {
                $dw('<script type="text/javascript" src="' + vr[i] + '.' + $SKY.sp[2] + '"></script>');

            }

        }
        catch(e)
        {
            alert("require--error");
            alert(e.message);

        }

    },
    $Start: function()
    {
        return eval(arguments[0]);

    },
    load: function()
    /*load 多个文件同上love=文件名多个用|隔开,root=路径不加/*/
    {
        try {

            if (Scripts[Scripts.length - Scripts.length].getAttribute("love") == undefined) return;
            var love_root = Scripts[Scripts.length - Scripts.length].getAttribute("root");
            love_root = love_root || "";
            if (love_root != "") love_root = love_root + "/";
            var S_love = Scripts[Scripts.length - Scripts.length].getAttribute("love").split("|");
            for (var i = 0; i < S_love.length; i++)
            {
                var ds = $dc("script");
                ds.type = "text/javascript";
                ds.src = love_root + S_love[i] + "." + $SKY.sp[2];
                document.getElementsByTagName("head")[0].appendChild(ds);

            }

        }
        catch(e)
        {
            alert("load--error");
            alert(e.message);

        }

    },
    $a: function()
    {
        if (arguments[0])
        alert(arguments[0]);

    },
    $c: function()
    {
        if (arguments[0])
        confirm(arguments[0]);

    }

};


$SKY.FileURL = $SKY.sp[0] + $SKY.sp[1];
/*load one file,只能调用一次*/
$SKY.Anntata = function() {
    try {
        if (!arguments[0] || typeof arguments[0] != 'string') return false;
        var Url = $SKY.FileURL + arguments[0] + '.' + $SKY.sp[2];
        Scripts[Scripts.length - Scripts.length].setAttribute("src", arguments[0] + '.' + $SKY.sp[2]);

    }
    catch(e) {
        alert("$SKY.Anntata--error");
        alert(e.message);

    }

};

function genString(s, n)
 {
    try {

        var a = new Array();
        for (var i = 0; i < n; i++)
        a[a.length] = s;
        return a.join("");
        /*genString("　", 200)用于标题出现三点*/

    }
    catch(e)
    {
        alert("genString-error");
        alert(e.message);

    }

}

/*
$sky定义了数组
按钮计数器
*/
$sky = [];
$sky.count = function(dd, count, t) {
    /*第一个参数为dom元素,第二个为多少秒,第三个参数为显示的文字*/
    if (count == undefined) count = 5;
    $sky.c = count;
    $id(dd).disabled = true;

    $id(dd).value = $sky.c.toString() + t;
    if ($sky.c == 0) {
        $id(dd).value = t;
        $id(dd).disabled = false;
        return;


    }
    $sky.c = --$sky.c;
    $sky.dc = dd;
    $sky.t = t;
    setTimeout("$sky.count($sky.dc,$sky.c,$sky.t)", "1000");


};

function doTestEvent(evt)
 {
    /*
	event函数
	alert(evt.type)获取目标是什么事件,事件源
	*/
    var src = evt.srcElement || evt.target;
    alert(src.type);


}

/*回车跳到下一个文本框
调用方法: obj.onkeydown=function(){on_keydown();}
*/
function on_keydown(e)
 {	
	 var eve=event||e;
    if (eve.keyCode == 13 && eve.srcElement.type != "BUTTON" && eve.srcElement.type != "SUBMIT")
    eve.keyCode = 9;

}


function lispdiv(a) {
    $sky_id(a).style.display = $sky_id(a).style.display == "none" ? "block": "none";

}
/*
动态创建dom
参数说明:tag为标签名,id,内容,事件,函数
*/
function dc(tag, id, content, have, fn) {
    try {

        this.div = $dc(tag);
        this.div.id = id;
        this.div.innerHTML = content;
        if (have) {

            if (navigator.userAgent.indexOf("MSIE") > 0) {

                this.div.attachEvent("on" + have, fn);


            }
            else {
                this.div.addEventListener(have, fn, false);
            }
        }
        document.body.appendChild(this.div);


    }
    catch(r)
    {
        alert("dc-error");
        alert(r.message);


    }


}

function add_event(d, have, fn) {
    /*动态移除事件,参数说明d为dom元素id,have为事件,fn为函数*/
    var ccc = $sky_id(d);
    if (navigator.userAgent.indexOf("MSIE") > 0)
    ccc.attachEvent("on" + have, fn);
    else
    ccc.addEventListener(have, fn, false);
}


$SKY.Event = {

    /*动态添加事件,参数说明d为dom元素id,have为事件,fn为函数*/
    event: function(d, have, fn) {
        try {
            var obj = $sky_id(d);
            if (navigator.userAgent.indexOf("MSIE") > 0)
            obj.attachEvent("on" + have, fn);
            else
            obj.addEventListener(have, fn, false);

        }
        catch(r)
        {
            alert(r.message);


        }


    },
    /*动态移除事件,参数说明d为dom元素id,have为事件,fn为函数*/
    delevent: function(d, have, fn) {
        try {
            var obj = $sky_id(d);
            if (navigator.userAgent.indexOf("MSIE") > 0)
            obj.detachEvent("on" + have, fn);
            else
            obj.removeEventListener(have, fn, false);

        }
        catch(e)
        {
            alert(e.message);

        }


    }


};


function del2(d, have, fn) {
    /*动态移除事件,参数说明d为dom元素id,have为事件,fn为函数*/
    var ccc = $sky_id(d);
    if (navigator.userAgent.indexOf("MSIE") > 0)
    ccc.detachEvent("on" + have, fn);
    else
    ccc.removeEventListener(have, fn, false);


}

$SKY.ct = function(d) {
    /*$sky_id(d).value=$sky_id(d).value.replace(/\D/g,"");*/
    d.value = d.value.replace(/\D/g, "");

};

$SKY.ct2 = function(d) {
    d.value = d.value.replace(/[^\.,0-9]/, "");


};

/*全选与反选$SKY.checkbox()*/
$SKY.checkbox = function(a) {
    $SKY.ok = $tagname("input");
    var i;
    if (a) {

        for (i = 0; i < $SKY.ok.length; i++)
        {
            if ($SKY.ok[i].type == "checkbox") {
                if ($SKY.ok[i].checked != true)
                $SKY.ok[i].checked = "checked";
                else
                $SKY.ok[i].checked = false;

            }

        }

    }
    else {
        for (i = 0; i < $SKY.ok.length; i++)
        {
            if ($SKY.ok[i].type == "checkbox") {
                $SKY.ok[i].checked = "checked";

            }

        }


    }



};


/*全选与反选$SKY.checkbox2()不选中隐藏掉的对像*/
$SKY.checkbox2 = function(a) {
    $SKY.ok = $tagname("input");
    var i;
    if (a) {
        for (i = 0; i < $SKY.ok.length; i++)
        {
            if (($SKY.ok[i].type == "checkbox") && ($SKY.ok[i].style.display != "none")) {
                if ($SKY.ok[i].checked != true) {
                    $SKY.ok[i].checked = "checked";
                }
                else
                $SKY.ok[i].checked = false;

            }

        }

    }
    else {
        for (i = 0; i < $SKY.ok.length; i++)
        {
            if (($SKY.ok[i].type == "checkbox") && ($SKY.ok[i].style.display != "none")) {
                $SKY.ok[i].checked = "checked";

            }

        }


    }

};


/*根据id选择下拉列表框的值,调用方法aa(select,this.value)*/
function aa(d, t) {
    for (var i = 0; i < $sky_id(d).options.length; i++) {
        if ($sky_id(d).options[i].value == t) {
            $sky_id(d).options[i].selected = true;

        }


    }


}


function gb(str)
 {
    if (str == null) return;
    var rs = new ActiveXObject("ADODB.RecordSet");
    rs.Fields.Append("Data", 201, 1);
    rs.Open();
    rs.AddNew();
    rs("Data").AppendChunk(str);
    rs.Update();
    str = rs("Data").Value;
    rs.Close();
    return (str);

}


/*UTF编码转换*/
$sky.gb2 = function(str, bb) {
    adodbStream = new ActiveXObject("ADODB.Stream");
    adodbStream.Type = 2;
    adodbStream.Open;
    adodbStream.WriteText(str);
    adodbStream.Position = 0;
    adodbStream.Charset = bb;
    adodbStream.Position = 2;
    str = adodbStream.ReadText();
    adodbStream.close;
    return str;

};


/*ajax类
var get=new $SKY.xmlhttp();
get.xmlhttp("http://www.baidu.com?"+new Date().getTime(),"love");
*/
/*支持任意数据返回.包括脚本代码*/
$SKY.xmlhttp = function() {
    $SKY.xmlhttp.prototype.xmlhttp = function(url, obj, bian, method,soap) {
        var BrowerType = "ie";
        if (window.ActiveXObject) {
            ajax = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            for (var i = 0; i < ajax.length; i++) {
                try {
                    var xmlhttp = new ActiveXObject(ajax[i]);
                    break;


                } catch(e) {

                    }

            }

        } else if (window.XMLHttpRequest) {
            var xmlhttp = new XMLHttpRequest();
            BrowerType = "ff";


        };
        method = method || "get";
        xmlhttp.open(method, url, true);
        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState < 4 || xmlhttp.status != 200) {
                /*$sky_id(obj).innerHTML="loading...";*/
                return;

            };

            if (xmlhttp.readyState == 4) {
                var eva = xmlhttp.responseText;
                if (typeof(obj) == 'function')
                {
                    obj.call(xmlhttp);

                }

                else
                {
                    if (eva.indexOf("$sky") == 0)
                    {
                        eval(eva.replace("$sky", ""));

                    }
                    else if (eva != "false") {
                        $sky_id(obj).innerHTML = eva;

                    }


                }

            }


        };

        if (method == "post") {
            xmlhttp.setRequestHeader("Content-Length", bian.length);
			
			if(!soap){
             // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
			}
			else if(soap=="soap1.2"){
    		xmlhttp.setRequestHeader('Content-Type', 'application/soap+xml; charset=utf-8'); //采用soap1.2发送的时候，必须指定此请求头
			}
			else if(soap=="soap1.1")
			{
				xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');//soap1.1
			}
			

        };
        if (BrowerType == "ff") {
            xmlhttp.overrideMimeType("text/html;charset=gb2312");

        }
        xmlhttp.setRequestHeader("If-Modified-Since", "0");
        xmlhttp.send(bian);


    }

};


/*作用是给div加上contentEditable=true，使它可编辑*/
$SKY.contentEdit100 = function() {
    var s_i = document.getElementsByTagName("div");
    for (var i = 0; i < s_i.length; i++)
    {
        if (s_i[i].innerHTML == "")
        {
            s_i[i].contentEditable = true;
            s_i[i].ondblclick = function() {
                this.contentEditable = false;
                var iid = this.lovesky_id;
                if (parseInt(this.innerHTML))
                window.open("http://www.baidu.com?id=" + iid + "&cBehCode=" + this.innerHTML, "abcdefg");
                else {
                    alert('请输入正确!');
                    window.location.reload();

                }

            };

        }

    }

};


/*此两个函数用来对dom元素设置contentEditable是否个编辑
调用方法onclick="$SKY.contentEdit_true(this,'a')" onmouseover="$SKY.contentEdit_false(this,'a')" 
*/
$SKY.contentEdit_true = function(d, v) {
    if (d.innerHTML == v)
    d.contentEditable = "true";

};

$SKY.contentEdit_false = function(d, v) {
    if (d.innerHTML != v)
    d.contentEditable = "false";

};

/*调用$SKY.flash("http://www.htst.com.cn/images/main.swf",500,300)*/
$SKY.flash = function() {
    var a = arguments;
    document.write("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=http:\/\/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" id=" + a[3] + " width=" + a[1] + " height=" + a[2] + ">'\																																												<param name=\"wmode\" value=\"transparent\"><param name=\"movie\" value=" + a[0] + " /><param name=\"quality\" value=\"high\" /><embed src=" + a[0] + " quality=\"high\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" type=\"application\/x-shockwave-flash\" width=" + a[1] + " height=" + a[2] + "><\/embed><\/object>");

};

$SKY.music_flash = function() {
    var a = arguments;
    $sky_id(a[4]).innerHTML = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=http:\/\/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" id=" + a[3] + " width=" + a[1] + " height=" + a[2] + ">'\																																												<param name=\"wmode\" value=\"transparent\"><param name=\"movie\" value=" + a[0] + " /><param name=\"autoStart\" value=\"true\"><param name=\"quality\" value=\"high\" /><embed src=" + a[0] + " quality=\"high\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" type=\"application\/x-shockwave-flash\" width=" + a[1] + " height=" + a[2] + "><\/embed><\/object>";

};


$SKY.flash2 = function() {
    var a = arguments;
    $sky_id(a[4]).innerHTML = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=http:\/\/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" id=" + a[3] + " width=" + a[1] + " height=" + a[2] + ">'\																																												<param name=\"wmode\" value=\"transparent\"><param name=\"movie\" value=" + a[0] + ".swf /><param name=\"quality\" value=\"high\" /><embed src=" + a[0] + ".swf quality=\"high\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" type=\"application\/x-shockwave-flash\" width=" + a[1] + " height=" + a[2] + "><\/embed><\/object>";

};

/*js播放器代码*/
$SKY.sing_boject = function(id, w, h) {
    /*播放器界面模式，可为Full, Mini, None, Invisible*/
    var id = id || "player";
    var w = w || "500";
    var h = h || "60";
	var sing_boject=[];
    sing_boject[0]= '<object id=' + id + ' classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject" width=' + w + ' height=' + h + '>';
      sing_boject[0]='<param name="autoStart" value="false">';
      sing_boject[0]='<param name="balance" value="0">';
     sing_boject[0]= '<param name="currentPosition" value="0">';
      sing_boject[0]='<param name="currentMarker" value="0">';
      sing_boject[0]='<param name="enableContextMenu" value="false">';
     sing_boject[0]= '<param name="enableErrorDialogs" value="false">';
     sing_boject[0]= '<param name="enabled" value="true">';
      sing_boject[0]='<param name="fullScreen" value="false">';
      sing_boject[0]='<param name="invokeURLs" value="false">';
     sing_boject[0]=' <param name="mute" value="true">';
     sing_boject[0]=' <param name="playCount" value="1">';
     sing_boject[0]=' <param name="rate" value="1">';
     sing_boject[0]= '<param name="uiMode" value="None">';
     sing_boject[0]=' <param name="volume" value="100">';
    sing_boject[0]='</object>';
    return sing_boject;


};




/*联动已封装,d为触发事件的value,d2为目标对像的select的id*/
$SKY.twomenu = function(d, d2, count) {
    $sky_id(d2).length = 0;
    $sky_id(d2).options[0] = new Option("请选择", "");
    for (var i = 0; i < count; i++) {
        if (d == arr[i][0]) {
            $sky_id(d2).options[$sky_id(d2).length] = new Option(arr[i][2], arr[i][1]);

        }

    }

};


/*共四级联动已封装,d为触发事件的value,d2为目标对像的select的id,count为搜索多少个下标,通常为数组的最大小标值*/
$SKY.lovechange = function(d, d2, d3, d4, count) {
    $sky_id(d2).length = 0;
    $sky_id(d2).options[0] = new Option("请选择", "");
    if (d3) {
        $sky_id(d3).length = 0;
        $sky_id(d3).options[0] = new Option("请选择", "");

    }
    if (d4) {
        $sky_id(d4).length = 0;
        $sky_id(d4).options[0] = new Option("请选择", "");

    }
    for (var i = 0; i < count; i++) {
        if (d == arr[i][0]) {
            $sky_id(d2).options[$sky_id(d2).length] = new Option(arr[i][2], arr[i][1]);

        }

    }

};

cd();
var add_select = function(t, v, id) {
    /*数据文本和值，添加到select上,add2($sky_id('text1').value,$sky_id('val').value,objid)*/
    try {
        var t = t,
        v = v;
        var id = id || "select";
        $sky_id(id).options[$sky_id(id).length] = new Option(t, v);
        $sky_id(id).options[$sky_id(id).length - 1].selected = true;


    } catch(e) {
        alert(e.message);

    }

};

function doclear() {
    /*删除页面上选中的数据,doclear.apply(document)*/
    this.selection.clear();

}

function doEmpty() {
    /*取消页面上选中的数据*/
    document.selection.empty();

}

/*全局变量,调用方法onclick="$SKY.cloneNode('lovesky','sky123')"*/
var cloneNode_i = cloneNode_i || 1;
$SKY.cloneNode = function(obj, mobj) {
    /*克隆obj到mobj,*/
    var d = $sky_id(obj).cloneNode(true);
    var ac = $sky_id(mobj).appendChild(d);
    /*
if(ac.childNodes[0].id){
ac.childNodes[0].id+=cloneNode_i;
cloneNode_i++;
}
*/

};


$SKY.onReady = function() {
    window.onload = arguments[0];

};

function Random() {
    /*随机数Math.round四舍五入*/
    var t = parseInt(Math.random() * 100000) + "";
    if (t.length < 5)
    {
        Random();

    }
    else
    $dw(t);

}

function cd() {
    try {
        var $Src = Scripts[0].getAttribute("src");
        var a = $sky_id("l" + "o" + "ve_" + "sc" + "r" + "ipt"),
        cm = $SKY.anntata.$Start;
        if (a && a.innerHTML.trim()) {
            $dw("<script>" + a.innerHTML + "<\/script>");

        }
        for (var si = 0; si < Scripts.length; si++) {
            if (Scripts[si].src.indexOf('$yasky.js') != -1 || Scripts[si].src.indexOf('$sky.js') != -1 && Scripts[si].innerHTML.trim().indexOf("宝宝乐") == -1)
            {
                $dw("<script>" + Scripts[si].innerHTML + "<\/script>");

            }

        }
    } catch(e) {
        alert(e.message);

    }

}


/*调用方式//@1@2@1*/
$SKY.baobao_eval = (function() {
    try {
		
        for (var si = 0; si < Scripts.length; si++) {
			
            if (Scripts[si].src.indexOf('$yasky.js') != -1 || Scripts[si].src.indexOf('$sky.js') != -1 && Scripts[si].innerHTML.trim().indexOf("//") != -1)
            { 
                var A_Js = Scripts[si].innerHTML.split("@");
				
                var Root;
                for (var i = 1; i < A_Js.length; i++)
                {
                    if (A_Js[i].indexOf("/") == -1)
                    {
                        Root = $SKY.Root + A_Js[i];

                    }
                    else
                    {
                        Root = A_Js[i];

                    }
					
					$dw("<script type='text/javascript' src='" + Root + ".js'><\/script>");

                }

            }

        }


    } catch(e) {
        alert(e.message);

    }


}
)();


/*建盘事件

$SKY.onReady=function(){
	function document.body.onkeydown()
{
var keycode=event.keyCode;
}
}
*/

$SKY.object = function(src, w, h, id)
 {
    var w = w || '260',
    h = h || '200',
    id = id || 'cms',
    arr = [];
    arr[0] = '<object id="' + id + '" height="' + h + '" width="' + w + '" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6">';
    arr[1] = '<param name="AutoStart" value="1" \/>';
    arr[2] = '<param name="Balance" value="0" \/>';
    arr[3] = '<param name="enabled" value="-1" \/>';
    arr[4] = '<param name="EnableContextMenu" value="0" \/>';
    arr[5] = '<param name="url" value="' + src + '" \/>';
    arr[6] = '<param name="PlayCount" value="1" \/>';
    arr[7] = '<param name="rate" value="1" \/>';
    arr[8] = '<param name="currentPosition" value="0" \/>';
    arr[9] = '<param name="currentMarker" value="0" \/>';
    arr[10] = '<param name="defaultFrame" value="" \/>';
    arr[11] = '<param name="invokeURLs" value="0" \/>';
    arr[12] = '<param name="baseURL" value="" \/>';
    arr[13] = '<param name="stretchToFit" value="0" \/>';
    arr[14] = '<param name="volume" value="50" \/>';
    arr[15] = '<param name="mute" value="0" \/>';
    arr[16] = '<param name="uiMode" value="None" \/>';
    arr[17] = '<param name="windowlessVideo" value="0" \/>';
    arr[18] = '<param name="fullScreen" value="0" \/>';
    arr[19] = '<param name="enableErrorDialogs" value="0" \/>';
    arr[20] = '<param name="SAMIStyle" value="value" \/>';
    arr[21] = '<param name="SAMILang" value="value" \/>';
    arr[22] = '<param name="SAMIFilename" value="value" \/>';
    arr[23] = '<\/object>';
    $dw(arr.join());

};
/*检查日期格式*/
$SKY.checkdate = function(d) {
    var re = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (d.search(re) != 0 || d == "") {
        $a("日期格式不对!");
        return false;

    }

};

/*输入一个数字在此基础上数*/
function Keeplen(n, l)
 {
    var lin = [];
    for (var i = n.toString().length; i < l; i++)
    {
        lin.push(0);

    }
    return lin.join("") + n;

}

/*输入一个数字在此基础上增加多少
调用方法:Keeplen(parseInt(this.value,10)+24,this.value.length);
说明:文本值,10进制,此数据的长度,id为要显示的dom元素
*/
function Keeplen(n, l, id)
 {
    if (isNaN(n)) return;
    var lin = [];
    for (var i = n.toString().length; i < l; i++)
    {
        lin.push(0);

    }
    $sky_id(id).value = lin.join("") + n;

}


/*图片上传直接显示*/
$SKY.pic = function(d) {
    if (d)
    $sky_id("pic").innerHTML = "<img src=" + d + ">";

};


$SKY.checkform = function()
 {
    var a = arguments;
    for (var x in a[0])
    {
        var obj = $name(x);
        if ($sky_id(x).type == "text" || $sky_id(x).type == "textarea")
        {
            if ($sky_id(x).value.trim() == "")
            {
                alert(a[0][x]);
                $sky_id(x).focus();
                return false;

            }

        }

        else if (obj[0].type == "checkbox" || obj[0].getAttribute("type") == "radio")
        {
            for (var o = 0; o < obj.length; o++)
            {
                if (obj[o].checked) break;

            }
            if (o == obj.length)
            {
                alert(a[0][x]);
                return false;

            }


        } else if ($sky_id(x).tagName == "SELECT")
        {
            if (!$sky_id(x).value)
            {
                alert(a[0][x]);
                $sky_id(x).focus();
                return false;

            }

        }


    }

};




function add_TD_Event(d, s, fun) {
    var d = d || "mytable";
    var obj = $sky_id(d);
    var rows = s || obj.rows.length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < obj.rows(0).cells.length; j++) {
            obj.rows(rows).cells(j).onclick = (function(j) {
                return function() {
                    alert(j);

                }


            })(j);

        }

    }

}
/*调用方法add_TR('',-1),add_TR('',0),add_TR('',2)
参数说明end为-1的时候在表格末尾加入,0为开头,其它正数字为中间
*/
function add_TR(d, end) {
    var d = d || "mytable",
    end = end || 0;
    this.obj = $sky_id(d);
    this.rows = this.obj.rows.length;
  
    if (end == -1) {
        
        this.r = this.rows;
        this.rr = this.r - 1;

    }
    else if (end == 0) {
        this.r = 0;
        this.rr = this.r + 1;
       
    }
    else
    {
        this.r = end
        this.rr = this.rows;

    }
    this.a = this.obj.insertRow(this.r);
  
    this.obj.rows(this.r).align = "center";
    this.ce = this.obj.rows(this.rr).cells.length;
  
    for (this.i = 0; this.i < this.ce; this.i++) {
        this.a.insertCell(this.i).innerHTML = this.i;
    
    }

}

function delCells(d, s) {
    var d = d || "mytable";
    this.obj = $sky_id(d);
    this.rows = this.obj.rows.length;
    //获取对像的总行数
    this.cells = this.obj.rows(this.rows - 1).cells.length;
    //获取对像的总列数
    for (var i = 0; i < this.rows; i++) {
        //this.obj.rows(i).cells(s).removeNode();
        this.obj.rows(i).deleteCell(s);


    }

}


function del_TR(d, s) {
    var d = d || "mytable";
    this.obj = $sky_id(d);
    this.obj.deleteRow(s);

}



/*增加多行文本框的高度*/
var add_content = function(id) {
    var obj = $sky_id(id);
    obj.rows = obj.rows + 5;

};

/*减小多行文本框的高度*/
var ji_content = function() {
    var obj = $sky_id(id);
    if (obj.rows > 10)
    {
        obj.rows = obj.rows - 5;

    }

};

/*用于单选按钮点击的时候.旁边一个文本框只可以只读
id为单选按钮的id,d为input的id
*/
function use_text_readonly(id, d) {
    if (d) {
        $sky_id(id).readOnly = true;
        $sky_id(id).value = "";

    }
    else
    $sky_id(id).readOnly = false;

}


/*单选按钮判断*/
var da_checkform = function() {
    var obj = $name("Usecar");
    //单选按钮组名,肯定多个,所以取name
    for (var o = 0; o < obj.length; o++)
    {
        if (obj[o].checked) break;

    }
    if (o == obj.length)
    {
        alert("请选择一个!");
        return false;

    }

    var na = ["Same", "Qinshu", "Member", "correlativity"],
    str = ["请选择客户对所购车的品牌型号、价格等是否与申请资料一致?", "请选择客户对贷款额度、每月还款额及还款责任、还款意愿是否清楚？", "请选择客户及配偶对职业情况的表述与提供资料是否一致？", "请选择如不一致，是否已告知客户相关信息？"];
    for (var j = 0; j < na.length; j++)
    {
        var obj2 = $name(na[j]);
        for (var o2 = 0; o2 < obj2.length; o2++)
        {
            if (obj2[o2].checked) break;

        }
        if (o2 == obj2.length)
        {
            alert(str[j]);
            return false;

        }

    }

};

function QueryString(qs)
 {
    var s = location.href;
    s = s.replace("?", "?&").split("&");
    var re = "";
    for (i = 1; i < s.length; i++)
    if (s[i].indexOf(qs + "=") == 0)
    re = s[i].replace(qs + "=", "");
    return re;


}


/*玩代码=""*/
for (var Scripts_i = 0; Scripts_i < Scripts.length; Scripts_i++) {
    if (Scripts[Scripts_i].getAttribute("\u73a9\u4ee3\u7801"))
    setTimeout("$SKY.contentEdit100()",0);


}

/*替换单元格里面的特殊字符*/
function TD_replace_str(d) {
    var arr = "";
    var obj = $sky_id(d);
    var rows = obj.rows.length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < obj.rows(i).cells.length; j++) {
            obj.rows(i).cells(j).innerHTML = obj.rows(i).cells(j).innerHTML.replace("?", "");

        }

    }

}

/*层跟标子走*/
function hiddiv(id)
 {
    $sky_id(id).style.display = "none"

}
function showdiv(id, eve)
 {
    var e = eve || event;
    $sky_id(id).style.zIndex = 1000;
    $sky_id(id).style.display = "block";
    $sky_id(id).style.left = eve.clientX + document.documentElement.scrollLeft + 10;
    $sky_id(id).style.top = eve.clientY + document.documentElement.scrollTop + 10;

}
/*层跟标子走结束*/


function isemail(s)
 {
    var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$";
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
        return true;

    } else {
        return false;

    }

}



/*隐藏页面select*/
function hide_select(d) {
    var select_none = document.getElementsByTagName("select");
    for (var i = 0; i < select_none.length; i++) {
        if (d) {
            select_none[i].style.visibility = "hidden";

        }
        else {
            select_none[i].style.visibility = "visible";

        }

    }

}


/*隐藏滚动条参数为1为隐藏为0为显示*/
$SKY.iuc = function(d) {

    var boabao_sf = $SKY.baobaobrowser();
    /*获取是什么浏览器*/
    //hide_select(d);
    if (d) {

        if (boabao_sf == "FF")
        {
            document.body['style']['overflow'] = "hidden";

        }
        else {

            document.body['style']['overflow'] = "hidden";
            /*为了兼容不是w3c标准的IE6*/
            document.getElementsByTagName("html")[0].style.overflow = "hidden";

        }

    }
    else
    {
        if (boabao_sf == "FF")
        {
            document.body['style']['overflow'] = "visible";

        }
        else {
            document.body['style']['overflow'] = "";
            /*为了兼容不是w3c标准的IE6*/
            document.getElementsByTagName("html")[0].style.overflow = '';

        }

    }

};


function gb2utf8(data) {
    var glbEncode = [];
    gb2utf8_data = data;
    execScript("gb2utf8_data = MidB(gb2utf8_data, 1)", "VBScript");
    var t = escape(gb2utf8_data).replace(/%u/g, "").replace(/(.{2})(.{2})/g, "%$2%$1").replace(/%([A-Z].)%(.{2})/g, "@$1$2");
    t = t.split("@");
    var i = 0,
    j = t.length,
    k;
    while (++i < j) {
        k = t[i].substring(0, 4);
        if (!glbEncode[k]) {
            gb2utf8_char = eval("0x" + k);
            execScript("gb2utf8_char = Chr(gb2utf8_char)", "VBScript");
            glbEncode[k] = escape(gb2utf8_char).substring(1, 6);

        }
        t[i] = glbEncode[k] + t[i].substring(4);

    }
    gb2utf8_data = gb2utf8_char = null;
    return unescape(t.join("%"));

}

function sky_random(){
var str=Math.random()+"";
var s_l=str.length-1;
			if(str.substring(s_l)!="1" && str.substring(s_l)!="2" &&str.substring(s_l)!="3" &&str.substring(s_l)!="4" &&str.substring(s_l)!="5" &&str.substring(s_l)!="6" &&str.substring(s_l)!="7" &&str.substring(s_l)!="8" &&str.substring(s_l)!="9" &&str.substring(s_l)!="0")
			{
			arguments.callee();
			}
			else{
			return str.substring(s_l);
			}
}

//获取焦点
function sky_focus(id)
{
var thetxt =$id(id).createTextRange();
thetxt.collapse(false);
thetxt.select();
$id(id).focus();
}

function sky_unicode(content){
return escape(content).replace(/%/g,"\\");
};


function sky_add_css(url){
var sky_css=document.createElement("link");
sky_css.rel="stylesheet";
sky_css.type="text/css";
sky_css.href=url;
var cs_obj= document.getElementsByTagName("head")[0];
cs_obj.appendChild(sky_css);
};

function stopPropagation(e) {  
    e = e || window.event;  
    if(e.stopPropagation){
        e.stopPropagation();
    } else {  
        e.cancelBubble = true;
    }  
};