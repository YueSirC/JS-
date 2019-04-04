//表单验证
var validation = {
  checkMobile: function(sMobile) {//手机号
        var mobile_tag = (/^1[23456789]\d{9}$/.test(sMobile))
        return mobile_tag;
  },
  checkPw: function(pw) {//密码规范
        var pw_tag = (/^[a-zA-Z0-9]{6,12}$/.test(pw)); //^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$
        return pw_tag;
  }
}

$(function(){
    //获取登录按钮
    var $btn = $('.xy_login_button input');
    //点击登录
    $btn.click(function(){
      var $tel = $('.xy_form_username input').val();
      var $pass = $('.xy_form_userpass input').val();
      //判断用户名或密码是否为空
      if($tel =="" || $pass == ""){
          layer.msg('您输入的手机号或密码不能为空');
          return false;
      }else if(validation.checkMobile($tel) == false){
          layer.msg('您输入的手机号错误,请重新输入');
          return false;
      }else if(validation.checkPw($pass) == false){
        layer.msg('您输入的密码错误,请重新输入');
        return false;
      }
    });

    //点击是否记住密码功能'
    var flag = false;
    $('.xy_form_back label').click(function(){
        var $tel = $('.xy_form_username input').val();
        var $pass = $('.xy_form_userpass input').val();
        if(flag == false){
          $('.xy_form_back label i').addClass('active_bg');
          //设置cookie
          setCookie('userTel',$tel,7);
          setCookie('userPass',$pass,7);
          flag =true;
        }else if( flag == true){
          $('.xy_form_back label i').removeClass('active_bg');
          //删除cookie
          unsetCookie('userPass');
          flag =false;
        }
    });
    //读取设置的cookie
    $('.xy_form_username input').val(getCookie('userTel'));
    $('.xy_form_userpass input').val(getCookie('userPass'));
});
