var selectTime = 0;
var countTime = null;
var sound = true;
var counter = true;

function startTimer() {
	document.getElementById("start").disabled = "disabled";
	var mySelect = document.Form.selector.selectedIndex;
	selectTime = document.Form.selector.options[mySelect].value - 0;
	countTime = setInterval(setTimer, 1000);
}

function setTimer() {
	selectTime = selectTime - 1;
	document.getElementById("countdown").innerHTML = getRestTimeText() + "<br>Stopをおすととまります";
	if (selectTime == 0) {
		if (sound) {
			clearInterval(countTime);
			playSound();
			countTime = null;
			finishTimer();
		} else {
			clearInterval(countTime);
			alert("終了ー");
			countTime = null;
			finishTimer()
		}
	}
}

function stopTimer() {
	if (countTime != null) {
		clearInterval(countTime);
		document.getElementById("start").disabled = "";
		countTime = null;
		document.getElementById("countdown").innerHTML = getRestTimeText() + "<br>Goをおすとはじめからカウントダウンしなおします";
		selectTime = 0;
	}
}

function getRestTimeText() {
	var minutes = Math.floor(selectTime / 60);
	var seconds = selectTime % 60;
	return "残り時間：" + minutes + "分" + seconds + "秒";
}

function toggleSound() {
	if (counter) {
		sound = false;
		sound_off.value = "音を鳴らす";
		document.getElementById("sound").innerHTML = "ボタンをおすと音声を再生するか選べます（現在：音声再生OFF）";
		counter = false;
	} else {
		sound = true;
		sound_off.value = "音を鳴らさない"
		document.getElementById("sound").innerHTML = "ボタンをおすと音声を再生するか選べます（現在：音声再生ON）";
		counter = true;
	}
}

function finishTimer() {
	document.getElementById("start").disabled = "";
	document.getElementById("countdown").innerHTML = getRestTimeText() + "<br>Goをおすとカウントダウンがはじまります";
}

function playSound() {
	audio = new Audio();
	audio.src = "ata_a19.wav";
	audio.play();
}