window.onload = function(){
	$('.wrapper').css('height',$(window).height());
}

var toggle = true;
var a1 = 43798;
function chgCol(){
	if(toggle){ 
		a1 += 1;
	}else{
		a1 -= 1;
	}
	if(a1>44031) toggle = false;
	if(a1<43793) toggle = true;



	$('.wrapper').css('background','#1D'+a1.toString(16));

}

window.onload = function(){
	$('.wrapper').css('height',$(window).height());
	setInterval(chgCol,30);
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
	var text = document.getElementById('text');

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

	error.innerHTML = '';

	var getAnswer = getCount(answer);

	var div = document.createElement('div');
	div.id = "result_div"+count;
	div.innerHTML = answer+'      '+getAnswer.ball+'b'+getAnswer.str+'s';
	result_page.appendChild(div);
	$('#result_div'+count).slideUp('slow');


	count++;
	if(getAnswer.str == 4){
		$('#result_page').empty();
		$('.report').css('display','none');
		$('#onemore').css('display','block');
		result_page.innerHTML = "콩그레츄레이셔언 ~~ !! ";
		$("#result_page").slideUp();

	}

	if(count > 15){
		$('#result_page').empty();
		result_page.innerHTML = "장난치는거지....? ? ";

		setTimeout(function(){location.reload()},3000);
		
	}

	text.value = '';
	text.onfocus();


}
$(document).keypress(function(e){
    if (e.which == 13){
        report();
    }
});
$("button").click(function(){
	alert('dd');
  $("body").slideUp();
});