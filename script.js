var n = parseInt(prompt("Enter N: "));
var check = true;
for (var i=2;i<=n-1;i++) {
    if (n % i ===0) {
        check = false;
        break;
    }
}
if (check == true) {
    alert("Là số nguyên tố");
} else {
    alert("Không phải số nguyên tố");
}