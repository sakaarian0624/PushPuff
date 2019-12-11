var x = 1;
var xs = "";
var onoff = 0;
var pushobject = {
	"0": "エラー",
};
var pushMake = ()=>{
xs = x.toString();
Push.create(pushobject["0"], {
	　　body: pushobject[xs]
});
x = x + 1;
if(x == 65){
	x = 1;
};

console.log("on");}
var pushSet = ()=>{ const timer =　setInterval(()=>{
	if( onoff == 0){
		clearInterval(timer);
	}else if(onoff == 1){
	pushMake();
	}
}
,10000);};
/*var firstpush = ()=>{
	fetch("JSON/first.json")
	.then((response) => response.text())
	.then(
		(text) => {
			pushobject = JSON.parse(text);
		}
	);
};
firstpush();*/
var subNone = ()=>{
    var subjects = document.getElementsByClassName("subflex")
                var index = 0, length = subjects.length;
                for ( ; index < length; index++) {
                    subjects[index].style.display = "none";
                }
};
new Vue ({
    el: '.nav2',
    methods: {
        change:function(subject){
            const promise = new Promise((resolve)=>{
                subNone();
                resolve();
            });
            promise.then(()=>{
                document.getElementById(`F${subject}`).style.display = "flex";
            });
        },
        /*chemistry:function(){
            document.getElementById("Fchemistry").style.display = "flex";
            document.getElementById("FJapanHistory").style.display = "none";
            document.getElementById("Fprogramming").style.display = "none";
        },
        JapanHistory:function(){
            document.getElementById("Fchemistry").style.display = "none";
            document.getElementById("FJapanHistory").style.display = "flex";
            document.getElementById("Fprogramming").style.display = "none";
        },
        programming:function(){
            document.getElementById("Fchemistry").style.display = "none";
            document.getElementById("FJapanHistory").style.display = "none";
            document.getElementById("Fprogramming").style.display = "flex";
        },*/
        pushTest:function(){
            Push.create("通知は正常に送られました");
        },
        pushStart:function(){
        	if (onoff == 0){
	        	Push.create("通知が開始されました");
	        	onoff = 1;
	        	pushSet();
	        	console.log(onoff);
	        	document.getElementById("onoff").classList.remove("parts3");
	        	document.getElementById("onoff").classList.add("parts3on");
        	}else if( onoff == 1){
        		Push.create("通知が終了されました");
        		onoff = 0;
        		console.log(onoff);
        		document.getElementById("onoff").classList.remove("parts3on");
	        	document.getElementById("onoff").classList.add("parts3");
        	}
        },
        pushSelect:function(eventname){
        	Push.create("科目が指定されました");
        	fetch(`JSON/${eventname}.json`)
        	.then((response) => response.text())
        	.then(
        		(text) => {
        			pushobject = JSON.parse(text);
        		}
        	);
        }
    }
})