window.onload=function(){
//banner 轮播
	var win=$(".banner1")[0];
	//console.log(win)
	var imgs=$("a",win);
	//console.log(imgs.length);
	var lis=$("li",win);
	var num=0;
	var flag;
	var huadongzuo=document.getElementsByClassName("huadongzuo")[0];
	/// console.log(huadongzuo)
    var huadongyou=document.getElementsByClassName("huadongyou")[0];
	 
	// 自动轮播
	var t=setInterval(move,1500);
	// 改变当前下标	
	win.onmouseover=function(){
		clearInterval(t);
		huadongyou.style.display="block";
		huadongzuo.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(move,1500);
		huadongzuo.style.display="none";
		console.log(2)
    	huadongyou.style.display="none";
	}
  function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		// 所有的层级降低
		for(var i=0;i<imgs.length;i++){
			 //animate(imgs[i],{opacity:0},1000)
			imgs[i].style.display="none";
			lis[i].className="";
		}/*当前的层级调高*/
		// animate(imgs[num],{opacity:1},1000)
		imgs[num].style.display="block";
		lis[num].className="tot";
	}

	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var j=0;j<imgs.length;j++){
				//animate(imgs[i],{opacity:0})
				 imgs[j].style.display="none";
				lis[j].className="";
			}
			 //animate(imgs[num],{opacity:1})
			imgs[this.index].style.display="block";
			lis[this.index].className="tot";
		}
	}

   huadongyou.onclick=function(){
   	move();
   }
   huadongzuo.onclick=function(){
   	moveL();
   }
function moveL(){
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(var i=0;i<imgs.length;i++){
		// animate(imgs[i],{opacity:0},500)
		 imgs[i].style.display="none";
		lis[i].style.background="gray";
	}
	// animate(imgs[num],{opacity:1},500)
	 imgs[num].style.display="block";
	lis[num].style.background="red"
}



//节点轮播   今日推荐
var nodebanner = document.querySelector(".nodebanner");
console.log(nodebanner)
var box= document.querySelectorAll(".nodebox")
console.log(box)
var btnL = document.querySelector(".btnL")
console.log(btnL)
var btnR = document.querySelector(".btnR")
console.log(btnR)
var jrtjnum=0;
var jrtjindex=0;
for(var i=0;i<box.length;i++){
	box[i].style.left="1000px"
}
box[jrtjindex].style.left=0;
btnR.onclick=function(){
	jrtjnum++;
  if(jrtjnum==4){jrtjnum=0};
  for(var i=0;i<box.length;i++){
  	box[i].style.left="1000px";
  }
  box[jrtjindex].style.left=0;
  animate(box[jrtjindex],{left:-1000});
  animate(box[jrtjnum],{left:0});
  jrtjindex=jrtjnum;
}
btnL.onclick=function(){
	jrtjnum--;
  if(jrtjnum<0){jrtjnum=3};
  for(var i=0;i<box.length;i++){
  	box[i].style.left="-1000px";
  }
  box[jrtjindex].style.left=0;
  animate(box[jrtjindex],{left:1000});
  animate(box[jrtjnum],{left:0});
  jrtjindex=jrtjnum;
}
nodebanner.onmouseover=function(){
  btnL.style.display="block";
  btnR.style.display="block";
}
nodebanner.onmouseout=function(){
  btnL.style.display="none";
  btnR.style.display="none";
}




//楼层选项卡
// var clothess= document.querySelector(".clothess")
// var clothes=document.querySelector(".clothess-right")
// console.log(clothes)
// var right1 = clothes.querySelectorAll('.clothess-right1')
// var hong = clothes.querySelectorAll('.yilouxian1')
// console.log(hong)
// var ylspan=clothes.getElementsByTagName("span")
// console.log(ylspan)
// var yilou2=document.querySelectorAll('.yilou2');
// console.log(yilou2)
// for(var i=0;i<hong.length;i++){
// 	right1[i].style.width=hong[i].offsetWidth+1+"px";
// 	hong[i].index=i;
// 	hong[i].onmouseover=function(){
		
// 		for(var i=0;i<hong.length;i++){
// 			hong[i].className="yilouxian1";
// 			yilou2[i].style.display="none";
// 		}
// 		for(var i=0;i<ylspan.length-1;i++){
// 			ylspan[i].style.display="block"
// 			clothes[i].style["border-left-color"]="#ededed"
// 			clothes[i].style["border-right-color"]="#ededed"
// 		}
// 		this.className="yilouxian";
// 		console.log(this)
// 		yilou2[this.index].style.display="block"
// 		if (this.index==0) {
//                 ylspan[this.index].style.display="none";
//                 clothes.style["border-left-color"]="#fff";
//             }else if(this.index==hong.length-1){
//                 ylspan[this.index].style.display="none";
//                 ylspan[this.index-1].style.display="none";
//                 clothes.style["border-right-color"]="#fff";

//             }else{
//                 ylspan[this.index].style.display="none";
//                 ylspan[this.index-1].style.display="none";
//             }
// 	}
// }
// hong[0].className="yilouxian";
// yilou2[0].style.display="block";
// ylspan[0].style.display="none";
// clothes.style["border-left-color"]="#fff"

// var remen=document.querySelector(".clothess-right")
// var res = remen.querySelectorAll('.clothess-right1')
// var rms = remen.querySelectorAll('.yilouxian1')
// var respans=remen.getElementsByTagName("span")
// var yilou2=document.querySelectorAll('.yilou2');
// for (var i = 0; i < rms.length; i++) {
//         res[i].style.width=rms[i].offsetWidth+1+"px";
//         rms[i].index=i;
//         rms[i].onmouseover=function(){
//             // for (var i = 0; i < rms.length; i++) {
//             //     rms[i].className="yilouxian1";
//             //     yilou2[i].style.display="none";                
//             // };
//             for (var i = 0; i < respans.length-1; i++) {
//                 respans[i].style.display="block";
//                 remen.style["border-left-color"]="#ededed";
//                 remen.style["border-right-color"]="#ededed";
//             };
//             this.className="yilouxian";
//             yilou2[this.index].style.display="block";
//             if (this.index==0) {
//                 respans[this.index].style.display="none";
//                 remen.style["border-left-color"]="#fff";
//             }else if(this.index==rms.length-1){
//                 respans[this.index].style.display="none";
//                 respans[this.index-1].style.display="none";
//                 remen.style["border-right-color"]="#fff";

//             }else{
//                 respans[this.index].style.display="none";
//                 respans[this.index-1].style.display="none";
//             }
            
//         }            
//     };  
//        rms[0].className="rm1";
//                 yilou2[0].style.display="block";            
//                 respans[0].style.display="none";
//                 remen.style["border-left-color"]="#fff";   
//楼层轮播

var slider=document.querySelectorAll(".slider")
//console.log(slider)
for(var j=0;j<slider.length;j++){
	(function(){
		var as=slider[j].querySelectorAll("a");
		var spans=slider[j].querySelectorAll("span");
		//console.log(spans)
		var dians=slider[j].querySelectorAll("li");
		//console.log(dians)
		var num=0;
		var index=0;
		var w=as[0].offsetWidth;
		var flag=true;
		dians[index].style.background="#c81623";
		var t=setInterval(you,1000);
		slider[j].onmouseover=function(){
			clearInterval(t);
			spans[0].style.display="block";
			spans[1].style.display="block";
		}
		slider[j].onmouseout=function(){
			t=setInterval(you,1000);
			spans[0].style.display="none";
			spans[1].style.display="none";
		}


		spans[0].onclick=function(){
	    zuo();
    }
        spans[1].onclick=function(){
    	you();
    }


//zi dong bo
function you(){
		if(!flag){
			return;
		}
		flag=false;
		num++;
		if(num==as.length){
			num=0;
		}
		as[num].style.left=w+"px";
		animate(as[index],{left:-w},600,function(){
			flag=true;
		})
		animate(as[num],{left:0},600)
		for(var i=0;i<as.length;i++){
			dians[i].style.background="#3e3e3e"; 
		}
		    dians[num].style.background="red";
		    index=num;
	}


function zuo(){
	if(!flag){
			return;
		}
		flag=false;
		num--;
		if(num<0){
			num=as.length-1;
		}
		as[num].style.left=-w+"px";
		animate(as[index],{left:w},600,function(){
			flag=true;
		})
		animate(as[num],{left:0},600)
		for(var i=0;i<as.length;i++){
		  dians[i].style.background="#ccc"; 
		}
		    dians[num].style.background="red";
		    index=num;
}

//yuan dian
for(var i=0;i<dians.length;i++){
    dians[i].index=i;
   dians[i].onclick=function(){
     if(index==this.index){
      return;                                 
     }
      for(var i=0;i<as.length;i++){
      dians[i].style.background="#3e3e3e";
    }
      dians[this.index].style.background="red";
      as[this.index].style.left=w+"px";
      
      animate(as[index],{left:-w},600 );
      animate(as[this.index],{left:0},600);
      index=num=this.index;
    }
}
	})()
}















}
