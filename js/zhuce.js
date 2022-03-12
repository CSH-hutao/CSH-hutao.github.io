function check(){
	var hao = document.getElementById("hao").value;
	var mi = document.getElementById("mi").value;
	var mi2 = document.getElementById("mi2").value;
	
	if (hao == "" && mi != "" && mi2 != ""){
		alert("账号不能为空");
	}else if (hao != "" && mi == "" && mi2 != ""){
		alert("密码不能为空");
	}else if (hao != "" && mi != "" && mi2 == ""){
		alert("二次密码不能为空");
	}else if (hao == "" && mi == "" && mi2 == ""){
		alert("请先填写信息！");
	}else if(mi.length < 6 || mi.length > 19){
		alert("密码长度需大于6位，小于19位");
	}else if(mi2 != mi){
		alert("两次密码不一致！");
	}else{
		window.location.href = "denglu.html";
	}
}
