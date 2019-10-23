function password_is_valid(passw) {
  var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
  var result = check.test(passw);

  if (result == false){
     
    throw new Error("Password must contain atleast one uppercase letter, lowercase letter and a number");
  }
    return result;
}


function password_is_ok(passw) {
  var one = passw.length > 8;
  var two = passw.length < 1;
  var upper = /[A-Z]/;
  var three = upper.test(passw);

  var lower = /[a-z]/;
  var four = lower.test(passw);

  var num = /[a-z]/;
  var five = num.test(passw);

  if (two || one || three) {
    return true;
  } else if (two || one || four) {
    return true;
  } else if (two || one || five) {
    return true;
  } else if (two || three || five) {
    return true;
  } else if (two || three || four) {
    return true;
  } else if (two || four || five) {
    return true;
  } else return false;
}

function neverOk(passw) {
  if (passw.length < 9 || passw.length == 0) {
    return "password is never OK";
  }
}


