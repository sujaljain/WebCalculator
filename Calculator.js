// Firstly display only the No. or Symbols which are pressed by the user 
// in the input screen Box until the user presses the = button 
// And Store them all the value is float or int whatever
// and when the user presses the = button then only calculate 
// and display the value in the output screen ..........


var a = ""; //first number (value) stored as a string

var nstr = ""; // New String

var result; // For Storing Result

var la; // For Storing Lenght of String a

var check;// For checking last character of a
var check1;// For more checking


var count0 = 0;
// For (for) Loop
var count1 = 0;



function Click1(num) {
    la = a.length;
    check1 = a.charAt(la - 1);
    if ((check1 == 0) && (num == 0)) { // So that more than one Zeroes do not come together
        document.getElementById('input').innerHTML = 0;
    }
    else{
        if (la <= 15) { //For limiting the no. of input characters in the input box.
            num = num + "";
            a = a + num;
            document.getElementById('input').innerHTML = a;
        }
        else {
            alert('No. of characters exceeded. Please press AC');
        }
    }
}

function Decimal() {
    la = a.length;
    //console.log(la);
    check = a.charAt(la - 1);
    if ((check == '+') || (check == '-') || (check == 'x') || (check == '/') || (check == "")) {
        console.log("yes");
        a = a + "0.";
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '.') {
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else {
        var n = 0;
        for (count0 = 0; count0 < la; count0++) {
            check1 = a.charAt(count0);
            //console.log(check1);
            if (check1 == '.') {
                nstr = a.substring(count0 + 1);
                //console.log(nstr);
                for (count1 = 0; count1 < nstr.length; count1++) {
                    check2 = nstr.charAt(count1);
                    if ((check2 == '+') || (check2 == '-') || (check2 == 'x') || (check2 == '/')) {
                        a = a + ".";
                        //console.log(a);
                        document.getElementById('input').innerHTML = a;
                        n = n + 1;
                        //console.log(n);
                    }
                    else {
                        document.getElementById('input').innerHTML = a;
                        n = n + 1;
                    }
                }
            }
        }
        if (n == 0) {
            a = a + ".";
            //console.log(a);
            document.getElementById('input').innerHTML = a;
        }
    }
}

document.onkeydown = function (e) {
    var kc = e.keyCode; // for key code
    // console.log("The Key Code is :- ", kc);
    if ((kc >= 48) && (kc <= 57)) {
        num = kc - 48;
        Click1(num);
    }
    else if (kc == 190) {
        Decimal();
    }
    else if (kc == 187) {
        Add();
    }
    else if (kc == 189) {
        Sub();
    }
    else if (kc == 88) {
        Multiply();
    }
    else if (kc == 191) {
        Divide();
    }
    else if (kc == 8) {
        Clear();
    }
    else if (kc == 13) {
        Result();
    }
}



function Add() {
    la = a.length;
    //console.log(la);
    check = a.charAt(la - 1);
    if (check == '+') {
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '-') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '+';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == 'x') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '+';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '/') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '+';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '.') {
        a = a + "0+"
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else {
        a = a + '+';
        document.getElementById('input').innerHTML = a;
    }
}


function Sub() {
    la = a.length;
    check = a.charAt(la - 1);
    if (check == '+') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '-';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '-') {
        document.getElementById('input').innerHTML = a;
    }
    else if (check == 'x') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '-';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '/') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '-';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '.') {
        a = a + "0-"
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else {
        a = a + '-';
        document.getElementById('input').innerHTML = a;
    }
}


function Multiply() {
    la = a.length;
    check = a.charAt(la - 1);
    if (check == '+') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + 'x';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '-') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + 'x';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == 'x') {
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '/') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + 'x';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '.') {
        a = a + "0x"
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else {
        a = a + 'x';
        document.getElementById('input').innerHTML = a;
    }
}


function Divide() {
    la = a.length;
    check = a.charAt(la - 1);
    if (check == '+') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '/';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '-') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '/';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == 'x') {
        la = a.length;
        la = la - 1;
        a = a.substring(0, la);
        a = a + '/';
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '/') {
        document.getElementById('input').innerHTML = a;
    }
    else if (check == '.') {
        a = a + "0/"
        //console.log(a);
        document.getElementById('input').innerHTML = a;
    }
    else {
        a = a + '/';
        document.getElementById('input').innerHTML = a;
    }
}



function Result() {
    result = 0.0;
    var str1 = ""; //For Storing String before any operator
    var str2 = ""; //For Storing String after any operator
    var op; // For operator in between
    la = a.length;
    for (count0 = 0; count0 < la; count0++) {
        check = a.charAt(count0);
        if ((check == '+') || (check == '-') || (check == 'x') || (check == '/')) {
            op = check;
            str1 = a.substring(0, count0);
            str2 = a.substring(count0 + 1);
        }
    }
    var n1 = parseFloat(str1);
    //For converting those Strings in number 
    var n2 = parseFloat(str2);
    //console.log(n1,n2);


    if (op == '+') {
        //console.log(op);
        result = n1 + n2;
        document.getElementById('output').innerHTML = result;
    }
    else if (op == '-') {
        //console.log(op);
        result = n1 - n2;
        document.getElementById('output').innerHTML = result;
    }
    else if (op == 'x') {
        //console.log(op);
        result = n1 * n2;
        document.getElementById('output').innerHTML = result;
    }
    else if (op == '/') {
        //console.log(op);
        result = n1 / n2;
        document.getElementById('output').innerHTML = result;
    }
    //console.log(n1, n2);
}


function AC() {
    a = "0";
    result = "0";
    document.getElementById('input').innerHTML = a;
    document.getElementById('output').innerHTML = result;
}


function Clear() {
    document.getElementById('output').innerHTML = "0"
    la = a.length;
    la = la - 1;
    a = a.substring(0, la);
    //console.log(a);
    if (a != "") {
        document.getElementById('input').innerHTML = a;
    }
    else {
        a = "0";
        document.getElementById('input').innerHTML = a;
    }
}