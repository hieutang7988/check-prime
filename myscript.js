var sount = " ";
var number = +prompt("Enter số nhập vào")
var count = 0
for ( var n =1;n<=100;n++) {
    check = true;
   for(var i = 2 ; i <= n-1;i++) {
       if ( n % i === 0) {
          check = false;
          break;
       }
   }
   if (check==true) {
     // alert(n);
       sount += n + "<br>";
       count ++
       if ( count >= number) {
           break;
       }
   }
}
document.write(sount);
