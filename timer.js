var selectTime = 0;
var countTime = null;

function startTimer(){
	if(countTime != null){
		alert( "うごいてるー" );
	}else{
		document.getElementById("start").disabled = "disabled";
		var mySelect = document.Form.selector.selectedIndex;
		selectTime = document.Form.selector.options[mySelect].value - 0;
		countTime = setInterval ( setTimer, 1000 );
	}
}

function setTimer(){
	selectTime = selectTime - 1;
	document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Stopをおすととまります";
	if ( selectTime == 0 ){
		clearInterval( countTime );
		alert( "終了ー" );
		countTime = null;
		document.getElementById("start").disabled = "";
		document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Goをおすとカウントダウンがはじまります";
	}
}

function stopTimer(){
	if(countTime != null){
		clearInterval(countTime);
		document.getElementById("start").disabled = "";
		countTime = null;
		document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Goをおすとはじめからカウントダウンしなおします";
		selectTime = 0;
	}
}

function getRestTimeText() {
	var minutes = Math.floor(selectTime / 60);
	var seconds = selectTime % 60;
	return "残り時間：" + minutes + "分"+ seconds + "秒";
}
