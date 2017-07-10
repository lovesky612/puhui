$SKY.mobile = $SKY.mobile || {};
$SKY.mobile = {

	html: function() {
		var c = $dc("canvas");
		c.id = "myCanvas";
		c.style.display = "none";
		c.innerHTML = "您的浏览器不支持canvas";
		document.body.appendChild(c);

		$sky_id("sky_pic").innerHTML = '<div class="sky_div" id="xine_add">\
<input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" onChange="$SKY.mobile.abc(this)" class="sign_file" />\
<span style="position:relative;"><a href="javascript:"><img class="img_w"></a><span onClick="$SKY.mobile.delpic(this)" class="pic_del">删除</span></span>\
</div>';

	},

	add_event: function() {
		try {
			$SKY.mobile.html();
			$SKY.Event.event("xine_add", "click", function() {
				this.querySelector("input").click();

			})

		} catch (e) {
			alert(e.message);
		}
	},
	delpic: function(t) {
		var _this = t;
		_this.style.display = "none";
		var _tp = _this.parentNode;
		_tp.parentNode.querySelector("input").value = "";
		_tp.querySelector("img").src = "javascript:";
		_tp.querySelector("a").href = "javascript:";
		_tp.querySelector("img").style.width = "0px";
		_tp.querySelector("img").style.height = "0px";
		_tp.querySelector("img").style.zIndex = -10;
		stopPropagation(event);

	},
	add_pic: function() {
		var c = $dc("div");
		c.className = "sky_div";
		c.onclick = function(e) {

			this.querySelector('input').click();


		}
		c.innerHTML = '<input type="file" capture="camera" accept="image/*" name="cameraInput" onChange="$SKY.mobile.abc(this)" class="sign_file" />\
	<span><a href="javascript:"><img class="img_w"></a><span onClick="$SKY.mobile.delpic(this)" class="pic_del">删除</span></span>';

		$sky_id("sky_pic").appendChild(c);

	},


	abc: function(t) {
		var _this = t;
		//var r = new FileReader();
		var file = t.files[0];
		if (window.webkitURL.createObjectURL) {
			var blob = window.webkitURL.createObjectURL(file)
		} else var blob = window.URL.createObjectURL(file);

		$SKY.mobile.render(blob, _this);

		//r.onload = function(e) {
		//img.src = e.target.result;
		//alert(Math.ceil(file.size/1024))
		//_this.parentNode.querySelector("img").src=e.target.result;
		//alert(e.target.result)
		//var result=e.target.result;
		//};
		//r.readAsDataURL(file);

	},

	upload: function() {

		var A = {};
		A.sky_img = document.querySelectorAll("#sky_pic span img");
		A.lg = A.sky_img.length;
		A.files = [];

		for (A.i = 0; A.i < A.lg; A.i++) {
			if (A.sky_img[A.i].src != "" && A.sky_img[A.i].src != "javascript:") {
				A.files.push(A.sky_img[A.i].src);
			}
		}

		if (A.files.length == 0) {
			alert("您还没有上传照片!");
			return;
		}
		A.fd = new FormData();
		for (A.j = 0; A.j < A.files.length; A.j++) {
			A.fd.append('formFile[]', A.files[A.j].substr(22));
		}

		var get = new $SKY.xmlhttp();
		get.xmlhttp("up.php?" + new Date().getTime(), function() {
			alert("上传成功!");
		}, A.fd, "post");

	},

	MAX_HEIGHT: 500,

	render: function(src, t) {

		var _this = t;
		var image = new Image();

		// 绑定 load 事件处理器，加载完成后执行 
		image.onload = function() {

			var canvas = document.getElementById("myCanvas");


			//生成比例
			var w = image.width,
				h = image.height,

				scale = w / h;

			w = 300 || w;
			h = w / scale;

			image.width = w
			image.height = h;

			var ctx = canvas.getContext("2d");
			// 清屏 
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			canvas.width = image.width;
			canvas.height = image.height;

			ctx.drawImage(image, 0, 0, image.width, image.height);
			var tp = _this.parentNode.querySelector("span img");
			tp.src = canvas.toDataURL("image/jpeg", 0.8);
			tp.style.width = "100px";
			tp.style.height = "50px";
			tp.style.position = "absolute";
			tp.style.zIndex = 10;
			_this.parentNode.querySelector("span span").style.display = "block"; //让删除文字出现


			//_this.parentNode.querySelector("span a").href =canvas.toDataURL("image/jpeg",0.9);
			_this.parentNode.querySelector("span a").onclick = function() {
				stopPropagation(event);

			}

		};

		image.src = src;
	}



}
$SKY.mobile.add_event();