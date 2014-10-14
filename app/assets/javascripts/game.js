// var a1 = 14;
// var a2 = 15;
// var a3 = 15;
// var a4 = 15;
// var toggle1 = false;
// var toggle2 = false;
// var toggle3 = false;
// var toggle4 = false;
// function chgCol(){
// 	console.log();
	
// 	if(a1>15) toggle1=false;
// 	if(a1<10) toggle1=true;

// 	if(a2>16) toggle2=false;
// 	if(a2<11) toggle2=true;

// 	if(a3>16) toggle3=false;
// 	if(a3<1) toggle3=true;

// 	if(a4>16) toggle4=false;
// 	if(a4<6) toggle4=true;

// 	if(toggle1) a1++;
// 	else a1--;
// 	if(toggle2) a2++;
// 	else a2--;
// 	if(toggle3) a3++;
// 	else a3--;
// 	if(toggle4) a4++;
// 	else a4--;


// 	$('.wrapper').css('background','#1D'+a1.toString(16)+a2.toString(16)+a3.toString(16)+a4.toString(16));
// }

window.onload = function(){
	$('.wrapper').css('height',$(window).height());
	//setInterval(chgCol,2000);
}

function getNum(){
	number =  Math.floor(Math.random()*9999);
	number = number.toString();

	for(var i = 0 ; i < 4 ;i++){
		for(var j = 0 ; j < 4 ;j++){
			if(i!=j){
				if(number.charAt(i) == number.charAt(j)){
					getNum();
				}
			}
		}	
	}
	return number;
}
var count = 0;
var number = getNum();




console.log(number);
console.log(number.length);

if(number.length == 1){ number = '000'+number;}
if(number.length == 2){ number = '00'+number;}
if(number.length == 3){ number = '0'+number;}
console.log(number);


function getCount(answer){
	answer = answer.toString();
	var ball = 0;
	var str = 0;

	for(var i = 0; i<4;i++){
		for(var j = 0; j<4;j++){
			if(answer.charAt(i) == number.charAt(j)){
				if(i==j) str++;
				else ball++;
			}
		}		
	}

	return {
		'ball' : ball,
		'str' : str
	}
	
}

function report(){
	var answer = $('.number').val();
	var error = document.getElementById('error');
	var result_page = document.getElementById('result_page');

	console.log(typeof answer);
	console.log(answer);
	console.log(number);


	if((answer == '' || answer == null) || answer == undefined ){
		error.innerHTML = "입력해줘잉";
		return false;
	}

	answer = parseInt(answer);
	if((!(typeof answer == 'number'))|| (!answer) ){
		error.innerHTML = "숫자만 ㅋ";
		return false;	
	}
	if(answer.toString().length != 4){
		error.innerHTML = "4글자라고 ";
		return false;
	}

	for(var i = 0 ; i < 4 ;i++){
		for(var j = 0 ; j < 4 ;j++){
			if(i!=j){
				if(answer.toString().charAt(i) == answer.toString().charAt(j)){
					error.innerHTML = " 중복된 숫자 ㄴㄴ 해 ";
					return false;
				}
			}
		}	
	}

	var getAnswer = getCount(answer);

	var div = document.createElement('div');
	div.id = "result_div"+count;
	div.innerHTML = answer+'      '+getAnswer.ball+'b'+getAnswer.str+'s';
	result_page.appendChild(div);
	count++;
	if(getAnswer.str == 4){
		$('#result_page').empty();
		$('.report').css('display','none');
		$('#onemore').css('display','block');
		result_page.innerHTML = "콩그레츄레이셔언 ~~ !! "
	}

	if(count > 15){
		$('#result_page').empty();
		result_page.innerHTML = "장난치는거지....? ? "
		location.reload();
	}



}
