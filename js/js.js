$(function() {
	$("#icon-resume div").addClass("div-hover");
	$("#icon-resume").addClass("li-hover");
	$("#icon-resume").click(function() {
		$("#content-works").css({
			display: "none"
		});
		$("#content-skill").css({
			display: "none"
		});
		$("#content-resume").css({
			display: "block"
		});
		$("#icon-works").removeClass("li-hover");
		$("#icon-skill").removeClass("li-hover");
		$("#icon-works div").removeClass("div-hover");
		$("#icon-skill div").removeClass("div-hover")
	});
	$("#icon-works").click(function() {
		$("#content-resume").css({
			display: "none"
		});
		$("#content-skill").css({
			display: "none"
		});
		$("#content-works").css({
			display: "block"
		});
		$("#icon-resume").removeClass("li-hover");
		$("#icon-skill").removeClass("li-hover");
		$("#icon-resume div").removeClass("div-hover");
		$("#icon-skill div").removeClass("div-hover")
	});
	$("#icon-skill").click(function() {
		$("#content-resume").css({
			display: "none"
		});
		$("#content-works").css({
			display: "none"
		});
		$("#content-skill").css({
			display: "block"
		});
		$("#icon-works").removeClass("li-hover");
		$("#icon-resume").removeClass("li-hover");
		$("#icon-works div").removeClass("div-hover");
		$("#icon-resume div").removeClass("div-hover")
	});
	$("#icon-resume").hover(function() {
		$(this).addClass("li-hover");
		$("#icon-resume div").addClass("div-hover")
	}, function() {
		if($("#content-resume").css("display") == "none") {
			$(this).removeClass("li-hover");
			$("#icon-resume div").removeClass("div-hover")
		}
	});
	$("#icon-works").hover(function() {
		$(this).addClass("li-hover");
		$("#icon-works div").addClass("div-hover")
	}, function() {
		if($("#content-works").css("display") == "none") {
			$(this).removeClass("li-hover");
			$("#icon-works div").removeClass("div-hover")
		}
	});
	$("#icon-skill").hover(function() {
		$(this).addClass("li-hover");
		$("#icon-skill div").addClass("div-hover")
	}, function() {
		if($("#content-skill").css("display") == "none") {
			$(this).removeClass("li-hover");
			$("#icon-skill div").removeClass("div-hover")
		}
	});

	function c() {}

	function d() {}
	$("#jd").mouseenter(function() {
		$(".jd-mark").animate({
			top: 13,
			height: 500
		}, 300, function() {
			$(".jd-mark h4").html("仿爱奇艺APP〉");
			$(".jd-mark p").html("CSS&JS&视频插件制作")
		})
	});
	$("#jd").mouseleave(function() {
		$(".jd-mark").animate({
			top: 513,
			height: 0
		}, 300, function() {
			$(".jd-mark h4").html("");
			$(".jd-mark p").html("")
		})
	});
	$("#intel").mouseenter(function() {
		$(".intel-mark").animate({
			top: 13,
			height: 500
		}, 300, function() {
			$(".intel-mark h4").html("仿天猫手机端〉");
			$(".intel-mark p").html("LESS,JQ,AJAX后台调用")
		})
	});
	$("#intel").mouseleave(function() {
		$(".intel-mark").animate({
			top: 513,
			height: 0
		}, 300, function() {
			$(".intel-mark h4").html("");
			$(".intel-mark p").html("")
		})
	});
	$("#game").mouseenter(function() {
		$(".game-mark").animate({
			top: 529,
			height: 500
		}, 300, function() {
			$(".game-mark h4").html("仿美丽说静态网页");
			$(".game-mark p").html("CSS,HTML")
		})
	});
	$("#game").mouseleave(function() {
		$(".game-mark").animate({
			top: 1029,
			height: 0
		}, 300, function() {
			$(".intel-mark h4").html("");
			$(".intel-mark p").html("")
		})
	});
	$("#p360").mouseenter(function() {
		$(".p360-mark").animate({
			top: 529,
			height: 500
		}, 300, function() {
			$(".p360-mark h4").html("九宫格小游戏");
			$(".p360-mark p").html("JS,CSS")
		})
	});
	$("#p360").mouseleave(function() {
		$(".p360-mark").animate({
			top: 1029,
			height: 0
		}, 300, function() {
			$(".p360-mark h4").html("");
			$(".p360-mark p").html("")
		})
	});
});
$(function() {
	var d = document.querySelector("#bg-image");
	d.style.transition = "transform 6s linear";
	d.style.transform = "scale(1.2)";
	var c = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/home-bg.jpg"];
	var a = 1;
	var e;

	function b() {
		var f = document.querySelector("#bg-image img");
		d.style.transform = "scale(1)";
		d.style.transition = "transform 5s linear";
		$(f).fadeOut(3000, function() {
			f.src = c[a];
			$(f).fadeIn(1000, function() {
				d.style.transition = "transform 6s linear";
				d.style.transform = "scale(1.2)"
			});
			d.style.transition = "transform 5s linear";
			d.style.transform = "scale(1)";
			if(a == c.length - 1) {
				a = 0
			} else {
				a++
			}
		})
	}
	e = window.setInterval(b, 2500)
});