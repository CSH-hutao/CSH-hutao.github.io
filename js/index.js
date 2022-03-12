//function xianshi(){
//	var a = document.getElementById("one");
//	a.controls = true;
//}
//function yincang(){
//	var a = document.getElementById("one");
//	a.controls = false;
//}

//上面是老方法
//===================================================
i=1;
function lunbo(){
	
	i++;
	var a = document.getElementById("lunbo");
	if(i>7){
		i = 1;
		a.src = "../images/lunbo_1/"+i+".jpg";
	}else{
		a.src = "../images/lunbo_1/"+i+".jpg";
	}
}
setInterval(lunbo,2000);


function xianshi(){
	var video_ls = document.getElementsByTagName("video"); //获取所有的video，根据的是video标签的名字，而不是id
	for(var i = 0; i < video_ls.length; i++){
		if(video_ls[i].getAttribute("id") == "one"){
			video_ls[i].controls = true;
		}
	}
	
}
function yincang(){
	var video_ls = document.getElementsByTagName("video"); //获取所有的video，根据的是video标签的名字，而不是id
	for(var i = 0; i < video_ls.length; i++){
		if(video_ls[i].getAttribute("id") == "one"){
			video_ls[i].controls = false;
		}
	}
	
}

function denglu(){
	window.location.href = "/files/denglu.html";
}
function fangke(){
	window.location.href = "/files/zhuce.html";
}