$(document).ready(function(){

//1. 변수 선언
let modal = `<div class="modal">
                <div class="modal_inner">
                  <a href="#" title="이벤트 페이지로 바로가기"> 
                    <img src="./images/main_Popup_PC_450x600.jpg" alt="모달배너">
                  </a>
                  <input type="checkbox" id="ch">
                  <label for="ch">일주일 동안 열지 않음<label>
                  <input type="button" value="닫기" id="close_btn">
                </div>
              </div>`
// 문서 출력
$('body').append(modal);

// 체크박스 변수
let ch = $('#ch');

if($.cookie('popup') == 'none'){
  $('.modal').hide();
}

function close_popup(){ //모달창이 닫히는 함수를 만들어준다.
  if(ch.is(':checked')){  //체크박스가 체크가 되어있다면
    $.cookie('popup', 'none', {expires:7, path:'/'}); //쿠키에 팝업을 none으로 변경한다. expires에 적힌 숫자만큼 none상태가 쿠키에 저장된다.
    $('.modal').hide(); //그리고 모달창을 닫는다.
  }else{
    $('.modal').hide(); //체크가 되어있지않은경우 모달창을 닫는다.
  }
}
$('#close_btn, #ch').click(function(){ //닫기버튼을 클릭하면 발생하는 이벤트
  close_popup(); //모달창이 닫히는 함수를 호출한다.
});
}); //juqery 끝