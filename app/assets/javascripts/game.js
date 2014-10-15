window.onload = function(){
	$('.wrapper').css('height',$(window).height());
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
