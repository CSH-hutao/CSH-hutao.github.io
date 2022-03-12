function check(){
	var hao = document.getElementById("hao").value;
	var mi = document.getElementById("mi").value;
	if (hao == "" && mi != ""){
		alert("账号不能为空");
	}else if (hao != "" && mi == ""){
		alert("密码不能为空");
	}else if (hao == "" && mi == ""){
		alert("账号、密码不能为空");
	}else if(hao == "666" && mi =="123456" || hao == "chenshihao" && mi == "215316" ){
		window.location.href = "index.html";
	}else{
		alert("账号或密码错误！");
	}
}
function zhuCeTiao(){
	window.location.href = "zhuce.html";
}

function quxiao(){
	document.getElementById("hao").value = "";
	document.getElementById("mi").value = "";
}
