$SKY.mobile = $SKY.mobile || {};
$SKY.mobile = {
	html: function() {
		var c = $dc("canvas");
		c.id = "myCanvas";
		c.style.display = "none";
		c.innerHTML = "您的浏览器不支持canvas";
		document.body.appendChild(c);
		
		$sky_id("sky_pic").innerHTML = '<div class="sky_div" id="xine_add"><img src="/images/busy_anim.gif" style="position:absolute; z-index:10;display:none;height:80px;" id="ajax_pic"/><input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" onChange="$SKY.mobile.abc(this)" class="sign_file" /><img src="/images/1.png" class="phone" /><span style="position:relative;"><a href="javascript:"><img class="img_w"></a><span onClick="$SKY.mobile.delpic(this)" class="pic_del">删除</span></span></div>'
	},
	add_event: function() {
		try {
			$SKY.mobile.html();
			$SKY.Event.event("xine_add", "click", function() {
														   
				this.querySelector("input").click()
			})
		} catch (e) {
			alert(e.message)
		}
	},
	delpic: function(t) {
		var a = t;
		a.style.display = "none";
		var b = a.parentNode;
		b.parentNode.querySelector("input").value = "";
		b.querySelector("img").src = "javascript:";
		b.querySelector("a").href = "javascript:";
		b.querySelector("img").style.width = "0px";
		b.querySelector("img").style.height = "0px";
		b.querySelector("img").style.zIndex = -10;
		stopPropagation(event)
	},
	add_pic: function() {
		var c = $dc("div");
		c.className = "sky_div";
		c.onclick = function(e) {
			this.querySelector('input').click()
		};
		c.innerHTML = '<input type="file" capture="camera" accept="image/*" name="cameraInput" onChange="$SKY.mobile.abc(this)" class="sign_file" /><img src="/images/1.png" class="phone" /><span><a href="javascript:"><img class="img_w"></a><span onClick="$SKY.mobile.delpic(this)" class="pic_del">删除</span></span>';
		$sky_id("sky_pic").appendChild(c)
	},
	Orientation:1,
	picture:{},
	info:"",
	abc: function(t) {
		var a = t;
		var b = t.files[0];
	$sky_id("ajax_pic").style.display="block";
	$sky_id("ajax_pic").style.left="100px";
	
	EXIF.getData(b, function() {
	$SKY.mobile.Orientation=EXIF.getTag(this,"Orientation");
	$SKY.mobile.picture.Make=EXIF.getTag(this,"Make");
	$SKY.mobile.picture.Mode=EXIF.getTag(this,"Model");
	$SKY.mobile.picture.DateTime=EXIF.getTag(this,"DateTime");
	
$SKY.mobile.info=$SKY.mobile.picture.Make+","+$SKY.mobile.picture.Mode+","+$SKY.mobile.picture.DateTime+","+$SKY.mobile.Orientation;
});	

		var reader = new FileReader(); 

		reader.onload = function (e) { 
		var dataURL = e.target.result;
		try{
			$SKY.mobile.render(dataURL, a);
		}catch(e){alert(e.message)}
		}
		reader.readAsDataURL(b);
/*		if (window.webkitURL.createObjectURL) {
			var c = window.webkitURL.createObjectURL(b)
		} else {
			var c = window.URL.createObjectURL(b)
		}
		$SKY.mobile.render(c, a)*/
	},
	upload: function(id,flag) {
		
		var flag=flag||0;
		var s_img=canvas.toDataURL("image/png");//jpeg
		var A = {};
		A.sky_img = document.querySelectorAll("#sky_pic span img");
		A.lg = A.sky_img.length;
		A.files = [];
		for (A.i = 0; A.i < A.lg; A.i++) {
			if (A.sky_img[A.i].src != "" && A.sky_img[A.i].src != "javascript:") {
				A.files.push(A.sky_img[A.i].src)
			}
		}
		if (A.files.length == 0) {
			alert("您还没有上传照片！");
			return;
		}
		if (A.files.length<2) {
			//alert("请上传两张照片！");
			//return
		}
		A.fd = new FormData();
		for (A.j = 0; A.j < A.files.length; A.j++) {
			//A.fd.append('formFile[]', A.files[A.j].substr(22))
			A.fd.append('formFile[]', A.files[A.j].substr(A.files[A.j].indexOf(",")+1));
			
		}
		
		if($sky_id("sj_name")){
			
		var sj_name=$sky_id("sj_name").value;
		var sj_address=$("#sj_address").val();
		var tel=$("#tel").val();
		}
		
		var a = new $SKY.xmlhttp();
		
		a.xmlhttp("/app/index.php?i=2&c=entry&do=member&m=ewei_shop&p=up&id="+id+"&sj_address="+sj_address+"&sj_name="+sj_name+"&tel="+tel+"&flag="+flag+"&gms="+$sky_id("sky_text").value + "&info="+$SKY.mobile.info+"&a="+new Date().getTime(), function() {
			alert("上传成功!"+this.responseText);
			history.back();
		}, A.fd, "post")
	},
	MAX_HEIGHT: 500,
	render: function(d, t) {
		var e = t;
		var f = new Image();
		f.onload = function() {
			var a = document.getElementById("myCanvas");
			
			var w = f.width,
				h = f.height,
				scale = w / h;
			
			if(w>800)
			{
				w=800;	
				h = w / scale;
			}
			
			f.width = w;
			f.height = h;
			var b = a.getContext("2d");
			b.clearRect(0, 0, a.width, a.height);
			a.width = f.width;
			a.height = f.height;
			b.drawImage(f, 0, 0, f.width, f.height);
			
			


aw=a.width;
ah=a.height;
var smallpic=a.toDataURL("image/jpeg",0.8);
var ccc=new Image();
	ccc.onload=function(){
	
if(parseInt($SKY.mobile.Orientation)==6)
{

var step=1;
a.width=ah;
a.height=aw;
var degree = step * 90 * Math.PI / 180;
b.rotate(degree);
b.drawImage(ccc, 0,-ah);
//a.style.display="block";
}

			
			
			
			
			var c = e.parentNode.querySelector("span img");

			var dataurl=a.toDataURL("image/jpeg",0.8);
			
			                // 修复IOS
                if( navigator.userAgent.match(/iphone/i) ) {
				
                   var mpImg = new MegaPixImage(f);
				   
				   	if(parseInt($SKY.mobile.Orientation)==6){
						 mpImg.render(a, { maxWidth: ah, maxHeight: aw,quality:0.8,orientation: 6});
						  //alert($SKY.mobile.Orientation)
					}
					else{
                   		 mpImg.render(a, { maxWidth: aw, maxHeight: ah,quality:0.8});
						// alert($SKY.mobile.Orientation)
					}

						dataurl = a.toDataURL('image/jpeg',0.8);
                }

                // 修复android
                if( navigator.userAgent.match(/Android/i) ) {
                    var encoder = new JPEGEncoder();
					 	if($SKY.mobile.Orientation==6){
						
						dataurl = encoder.encode(b.getImageData(0,0,ah,aw),98);
						}
						else
						{
							dataurl = encoder.encode(b.getImageData(0,0,aw,ah),98);
						}
					
					//alert("aw="+aw)	
                }



			c.src = dataurl;
			
			c.style.width = "100px";
			c.style.height = "70px";
			c.style.position = "absolute";
			c.style.zIndex = 100;
			e.parentNode.querySelector("span span").style.display = "block";
			$sky_id("ajax_pic").style.display="none";
			e.parentNode.querySelector("span a").onclick = function() {
				
				//ͼƬʾѹԭʼС
				var t=this.querySelector("img");
				if(parseInt(t.style.width)==100)
				{
					t.style.width="auto";
					t.style.zIndex=12;
				}else
				{
					t.style.width="100px";
					t.style.zIndex=10;
				}

			 	if(parseInt(t.style.height)==70)
				{
					t.style.height="auto";
				}else
				{
					t.style.height="70px";
				}
				stopPropagation(event)
			}

}
ccc.src=smallpic;

		};
		f.src = d
	}
};
