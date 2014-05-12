var selectTime = 0;
var countTime = null;
var sound = true;
var counter = 0;

function startTimer(){
	document.getElementById("start").disabled = "disabled";
	var mySelect = document.Form.selector.selectedIndex;
	selectTime = document.Form.selector.options[mySelect].value - 0;
	countTime = setInterval ( setTimer, 1000 );

}

function setTimer(){
	selectTime = selectTime - 1;
	document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Stopをおすととまります";
	if ( selectTime == 0 ){
		if( sound ){
			clearInterval( countTime );
			countTime = null;
			document.getElementById("start").disabled = "";
			audio = new Audio();
			audio.src = "ata_a19.wav";
			audio.play();
			document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Goをおすとカウントダウンがはじまります";
		}else{
			clearInterval( countTime );
			alert( "終了ー" );
			countTime = null;
			document.getElementById("start").disabled = "";
			document.getElementById( "countdown" ).innerHTML = getRestTimeText() + "<br>Goをおすとカウントダウンがはじまります";
		}
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

function soundOff(){
	if (counter % 2 == 0){
		sound = false;
		sound_off.value="ONにする";
		document.getElementById( "sound" ).innerHTML = "ボタンをおすと音声を再生するか選べます（現在：OFF）";
		counter++;
	}else{
		sound = true;
		sound_off.value="OFFにする"
		document.getElementById( "sound" ).innerHTML = "ボタンをおすと音声を再生するか選べます（現在：ON）";
		counter++;
	}

}