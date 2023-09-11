//Khai Bao Bien
// var fullName = 'Vu Manh Hung';
// var age = '21';

/**
 * Khai bao bien
 * Khai bao ten
 */
//Khai Bao Tuoi
// alert(fullName);
// alert(age);

//Cac Ham Trong Javascript

/*Ham In (console)*/
// console.log('Yeu Vo Nhat Nha');

//Canh Bao 
// console.warn(age);

// //Loi
// console.error(fullName);

/*Ham Xac Nhan (confirm),(prompt)*/
//confirm('Xac nhan ban du tuoi');
//prompt('Xac nhan ban du tuoi');

// setTimeout(function() {
//     alert('Thong bao')
// }, 1000);

// setInterval(function(){
//     console.log('Day la ham in' + Math.random())
// }, 1000);

// Toán Tử ++ --
// Prefix & Postfix

// Prefix
// var a = 6;

//Việc 1: +1 cho a, a = a + 1 => a = 7
//Việc 2: Trả về a sau khi được + 1

// console.log(++a);

//Postfix
//Việc 1: 'a copy', 'a copy' =6
//Việc 2: + 1 cho a, a = a + 1 = 7
//Việc 3: Trả về 'a copy'
// var b = 6;

// var output = b++;

// console.log('output: ', output);

// console.log('b: ',b);

// var number = 6;

// var output = number++ + --number;

// console.log('output: ', output);


/**Toán Tử Gán
 * Toán Tử         Ví Dụ           Tương Đương
 * =               x = y            x = y
 * +=              x += y           x = x + y
 * -=              x -= y           X = x - y
   *=              x *= y           x = x * y
 * /=              x /= y           x = x / y
 * **=             x **= y          x = x ** y
 * 
*/

// var a = 1;
// a -= 2;
// console.log(a)

/**Toán Tử Chuỗi

// var firstName = 'Hung';
// var lastName = 'Vu';

// console.log(firstName + ' ' + lastName);

var name = 'Hung';

name += ' Dang';

console.log(name);

/**
 * Toán Tử So Sánh
 Toán Tử
 ==
 !=
 >
 <
 >=
 <=

var a = 'Hung Vu';

var b = 'Hung Vu';

if(a == b){
    console.log('Dieu Kien Dung');
}else{
    console.log('Dieu Kien Sai');
}
*/

/**
 * Boolean
 */

// var a = 1;
// var b = 2;

// var isSuccess = a > b;

// console.log(isSuccess);

/**
 * If-else
 */

 /**
  * Java
  * 0
  * false
  * '' - ""
  * undefined
  * null
  * NaN
  */
// var isSuccess = 1 < 2;
// if(isSuccess){
//     console.log('Dieu Kien Dung');
// }else{
//     console.log('Dieu Kien Sai');
// }


/**
 * Toán Tử Logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

//  var a = 1;
//  var b = 2;
//  var c = 3;

//  if (!(a < 0) || b > 0 && c > 0){
//      console.log('Dieu Kien Dung');
//  }



                                                    /** Kieu Du Lieu
 
 1. Dữ liệu nguyên thủy - Primitive Data
 - Number
 - String
 - Boolean
 - Undefine
 - Null
 - Symbol

 2. Dữ Liệu Phức Tạp - Complex Data
 - Function
 - Object
 */
// Number Type
//  var a = 1;
//  var b = 2;
//  var c = 1.5;
// console.log(typeof a);
//  console.log(a);

 // String Type
//  var fullName = 'Vu \'Hung';
//  console.log(fullName);

 // Boolean
//  var isSuccess = true;
//  console.log(isSuccess);

 // Undefine Type
//  var age;

//  //Null
//  var isNull = null;

// Symbol
// var id = Symbol('id'); // unique
// var id2 = Symbol('id');

// console.log(id);

// Function

// var myFunction = function() {
//     alert('Yeu Vo Nhat Nha');
// }

// myFunction();

// // Object Type

// var myObject = {
//     name: 'Vu Hung',
//     age: 18,
//     address: 'Ha Noi'
// };
// console.log('myObject: ', myObject);

// var myArray = [
//     'Javascript',
//     'php',
//     'Ruby'
// ];

// console.log(myArray);


/**
 * Toán Tử So Sánh - P2
 */

/**
 * ===
 !==
 */

//  var a = 1;
//  var b = '1';

//  console.log(a !== b);

/**Chuoi */
// var firstName = 'Hung';
// var lastName = 'Vu';

// console.log(`Toi la: ${firstName} ${lastName}`);



                                            // 29: Lam Viec Voi Chuoi //
 
 /*var myString = 'Hoc JS Tai JS JS F8!';

//Key word: JS string method

// 1. Length
//  console.log(myString.length);

// 2. Find Index
//console.log(myString.indexOf('JS'));

// 3. Cut String
Cắt những phần tử của chuỗi mà mình mong muốn
//console.log(myString.slice(-3, -1));

// 4. Replace
Thay đổi phần tử của chuỗi
// console.log(myString.replace(/JS/g, 'Javascript'));

// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase())

// 7. Trim
//Loại bỏ những khoảng trống thừa trong chuỗi
// console.log(myString.trim());

// 8. Split
//Biến một chuỗi thành một array
// var languages = 'Javascript, PHP, Ruby';
// console.log(languages.split(', '))

// 9/ Get a character by index
//Cắt ra một phần tử của chuỗi dựa trên vị trí của phần tử đó.
// const myString2 = 'Hung Vu';
// console.log(myString2.charAt(6));



                                           /** 29: Kieu So (Number) Trong Javascript
 1. Tạo Giá Trị Number
 - Các Cách Tạo
 - Dùng Cách Nào? Tại Sao?
 -Kiểm Tra DataType

 2. Làm Việc Với Number
 -To string: Đổi từ số thành chuỗi.
 -To Fixed: Làm tròn số.

 */

//Keyword: Javascript number methods
// Chuyển đổi Number thành String
//var age = 18;
//Làm tròn phần số thập phân của phần tử
//var PI = 3.14;

// var result = 20 / 'ABC';
// console.log(isNaN(result));

// console.log(age.toString());
// console.log(PI.toFixed());


                                            /* 30 : Mảng Trong Javascript - Array
 
 1. Create Array
 - Cách Tạo
 - Sử Dụng Cách Nào? Tại Sao?
 - Kiểm Tra Datatype

 2. Truy Xuất Mảng
 - Độ dài mảng
 - Lấy phần tử theo index
 */

// var languages = [
//      'Javascript',
//      'PHP',
//      'Ruby',
//      'Dart' ,  
// ];

//  console.log(typeof languages);
//  console.log(Array.isArray(languages));

// console.log(languages[2]); // Lấy ra một phần tử trong mảng bằng cách nhập index của phần tử đó.




                                            /** 31 : Làm Việc Với Array
 
 // Keyword: Js Array Methods
 1. To String: Biến mảng thành chuỗi
 2. Join: Ngăn cách giua cac phan tu trong mang bằng kí tự mà mình mong muốn
 3. Pop: Xóa element cuối mảng và trả về phần tử đã xóa.
 4. Push: Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng.
 5. Shift: Xóa đi phần tử ở đầu mảng và trả về phần tử đó.
 6. Unshift: Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
 7. Splicing: Delete, Chen
 8. Concat: Noi hai Array voi nhau.
 9. Slicing: Cat lay Element
 */

/*var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart' ,  
];
*/

// console.log(languages.join(', '));

// console.log(languages.pop());

// console.log(languages.push('Java'));

// console.log(languages.shift());

// console.log(languages.unshift('Thuy'));

// languages.splice(1, 0, 'Thuy');

// var languages2 = [
//     'Hung',
//     'Vu'
// ];
// console.log(languages.concat(languages2));

// console.log(languages.slice(1));


                                                /** 32 : Function 
                                                 * 
 * Hàm - Function
 1. Hàm Là Gì?
 - Một Khối Mã
 - Làm Một Việc Cụ Thể

 2. Loại Hàm
 - Built-in
 - Tự Định Nghĩa

 3. Tính Chất
 - Không Thực Thi Khi Định Nghĩa
 - Sẽ Thực Thi Khi Được Gọi
 - Có Thể Nhận Tham Số
 - Có Thể Trả Về 1 Giá Trị

 4. Tạo Hàm Đầu Tiên
 */

 // a-z A-Z 0-9 _ $

//  function showDialog() {
//      // code
//      alert('Hi xin chao cac ban!');
//  }

//  showDialog();



                                                // 33: Tham Số Hàm //
                                                     
/*                                                     
 1. Tham So?
 - Dinh Nghia
 - Kieu Du Lieu
 - Tinh Private
 - 1 Tham So
 - Nhieu Tham So

 2. Truyen Tham So
 - 1 Tham So
 - Nhieu Tham So

 3. Arguments
 - Doi Tuong Argument
 - Gioi Thieu Vong For of
 */

// function writeLog() {
//     var myString = '';
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// writeLog('Log1', 'Log2', 'Log3', 5, 6);

    


                                      // 34: Return In Function //
 

// var isConfirm = confirm('Message?');

// console.log(isConfirm);

// function cong(a, b) {
//     return a + b;
// }

// var result = cong(2,8);

// console.log(result);



                                        // 35: Hiểu hơn về Function //
/*
1: Khi function đặt trùng tên
Chỉ thực thi hàm được khởi tạo muộn nhất
2: Khai báo biến trong hàm
ĐƯợc but biến chỉ có hiệu lực khi gọi hàm đó. Nếu đặt bên ngoài sẽ báo lỗi
3: Khai báo hàm trong hàm
ĐƯợc, tương tự như khi khai báo biến trong hàm.
*/


                                        // 37: Các Loại Function //
/*
1: Declaration Function
Bắt buộc phải đặt tên cho function khi khởi tạo
function message() {
    console.log('Declaration Function');
}
2: Expression Function
Có thể được gán giá trị khác của một biến, chứa trong một hàm khác, chứa trong một object.

var showMessage2 = function() {
    console.log('Expression Function')
}

setTimeout(function() {

});

var myObject = {
    myFunction: function() {

    }
}
3: Arrow Function

*/


                                           // 38: Object Trong Javascript //

/*
. Khởi tạo một key cho Object dựa vào biến đã khai báo từ trước:
var emailKey = 'email';

. Tạo một đối tượng để lưu trữ thông tin
var myInfo = {
    name: 'Hùng Vũ',
    'full-name': 'Hùng Vũ', Nếu muốn đặt tên key với kí tự đặc biệt thì cần phải biến đổi key sang dạng string.
    age: 18,
    address: 'Hà Nội, Việt Nam',
    [emailKey]: 'hung@gmail.com',
    getName: function() {
        return this.name;
    }
};

myInfo.email = 'hungvmgch17180@gmail.com'; // Khai báo một key mới bên ngoài Object đã khởi tạo

myInfo['my-email'] = ..... Khai báo key với kí tự đặc biệt.

console.log(myInfo); // In ra Object

var myKey = 'address'; // gán giá trị cho biến myKey = 'address' của Object myInfo

console.log(myInfo[myKey]); // In ra giá trị Hà nội, việt nam của adress

. Xóa một cặp Key - value trong Object:
delete myInfor.name;

. Trong trường hợp key là một Function --> Call it Phương thức --> Method

. Trong trường hợp key là dữ liệu bình thường --> Call it Thuộc tính --> Property

console.log(myInfo.getName());

*/


                  // 39: Object Constructor Ta có thể hiểu là xây dựng một khung thiết kế cho đối tượng có thể được sử dụng lại //

/*
function User(firstName, lastName, avatar) {
    this.firstName = firstName; // Tạo cơ sở cho việc gán giá trị cho các thuộc tính sau này tùy theo đối tượng
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Hùng', 'Vũ', 'Avatar'); // Những dữ liệu trong ngoặc sẽ tương ứng với những thuộc tính bên phải trong form.
author.title = 'Hùng yêu Thúy';

var user = new User('Ngọc', 'Thúy', 'Avatar');
user.comment = 'Thúy yêu Hùng';

console.log(author.getName());

console.log(user.getName());

*/


                         // 40: Object Property : Nguyên mẫu của một đối tượng, những nguyên liệu để tạo nên bản thiết kế //


// 1. Property là gì ?

// 2. Sử dụng khi nào ?
/*
function User(firstName, lastName, avatar) {
    this.firstName = firstName; // Tạo cơ sở cho việc gán giá trị cho các thuộc tính sau này tùy theo đối tượng
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8'; // Khởi tạo thêm một thuộc tính cho bản thiết kế chung

Vì không có thuộc tính this nên không thể gán giá trị theo những đối tượng được tạo ra sau này.

User.prototype.getClassName = function() {
    return this.className;
}
var author = new User('Hùng', 'Vũ', 'Avatar'); // Những dữ liệu trong ngoặc sẽ tương ứng với những thuộc tính bên phải trong form.


var user = new User('Ngọc', 'Thúy', 'Avatar');


console.log(author.className);

console.log(user.getClassName());
*/


                                // 41: Đối tượng Date Thể hiện Thời gian mà mình mong muốn //


/*
var date = new Date();

var year = date.getFullYear();

var month = date.getMonth() + 1;

var day = date.getDate();

console.log(`${day} / ${month} / ${year}`);

*/


                                        // 42: Câu lệnh rẽ nhánh If - Else //

// Nếu như một điều kiện đúng thì hệ thống sẽ không xét những điều kiện còn lại nữa và return kết quả.
/*
var date = 4;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
    } else if(date === 3) {
        console.log('Hôm nay là thứ 3');
    } else if(date === 4) {
        console.log('Hôm nay là thứ 4');
    } else{
        console.log('Unknown');
    }
*/


                                           // 43: Lệnh rẽ nhánh - Switch //


/*
var date = 2;
 
switch(date) {
    case 2: // Trong trường hợp biến date = 2 --> Thực hiện đoạn mã phía bên dưới
        console.log('Hôm này là thứ hai');
        break; // Thoát khỏi khối case này
        . Nếu không có từ khóa break thì từ case đúng trở đi thì dù những case sau có đúng hay không cũng đều in ra giá trị của case đúng.
    case 3:
        console.log('Hôm nay là thứ ba');
        break;
    case 4:
        console.log('Hôm nay là thứ tư');
        break;
    case 5:
        console.log('Hôm nay là thứ năm');
        break;
    default:
        console.log('Unkown');

    . Sử dụng If - Else khi thực hiện việc so sánh tính đúng sai > < !==

    . Khi được cho trước những giá trị và có từ 3 case trở lên thì sử dụng câu lệnh switch - case.
    
}
*/


                                    // 44: Toán tử ba ngôi - Ternary Operator //

/*
var course = {
    name: 'Javascript',
    coin: 250
}

if(course.coin > 0) {
    console.log(`${course.coin} Coin`);
} else {
    console.log('Miễn Phí');
}


var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn Phí';
. Điều kiện đề ra -> dấu ? -> Nếu điều kiện đúng thì thực hiện cái số 2 -> Dấu : -> Nếu điều kiện sai thì thực hiện cái số 3.
. Chỉ sử dụng với những so sánh đơn giản
console.log(result);
*/


                                           // 45: Vòng Lặp - Loop //

/*
1. for : Vòng lặp với điiều kiện đúng
2. for/in : Lặp qua key của đối tượng
3. for/of : Lặp qua value của đối tượng
4. while : Lặp khi điều kiện đúng
5. do/while : Lặp ít nhất một lần sau đó lặp khi điều kiện đúng
*/



                                           // 46: Vòng lặp For //


/*for(var i = 1; i <= 1000; i++) { // biến i bằng 1 được khai báo sẽ chỉ chạy một lần trước khi vòng lặp được thực hiện.
    // Sau khi chạy xong vòng đầu tiên, i sẽ tăng lên 1 và quay lại đối chiếu với điều kiện chứ không quay lại biến var i nữa
    // Có thể khai báo biến ở bên ngoài, vẫn phải giữ lại dấu ;
    console.log(i);
}



var myArray = [
    'Javascript',
    'PHP',
    'Ruby',
    'Python',
    'Dart'
]
// Để xác định độ dài của mảng sử dụng thuộc tính .length

var arrayLength = myArray.length;

for(i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

*/


                                               // 47: Vòng Lặp for/in //

/*
var myInfo = { // Khai báo một object mới
    name: 'Hùng Vũ',
    age: 22,
    address: 'Hai Dương'
}
1. For / in in Object
for(var key in myInfo) {
    console.log(key);

     Có thể sử dụng dấu ngoặc vuông myInfo[key] để lấy ra value của object.
    console.log(myInfo[key]);
}

2. For / in in Array
var languages = [
    'Js',
    'PHP',
    'Python',
    'Java'
];

for(var key1 in languages) {
    console.log(key1); // Lấy ra những key ở trong mảng đã tạo. Đối với mảng thì key là vị trí index của phần tử trong mảng.
    console.log(languages[key1]); // Lấy ra lần lượt những value trong Array.
}

3. For / in in String
var string = 'Javascript';

console.log(string[2]); // lấy ra kí tự của chuỗi tại vị trí index = 2.

for(var key2 in string) {
    console.log(key2); // Lấy ra index của các kí tự trong chuỗi.
    console.log(string[key2]); // Lấy ra từng kí tự của string.
}
*/


                  // 50: Vòng lặp For / of  Không áp dụng được với object, nếu muốn thì cần phương pháp đặc biệt.//

// Sử dụng tương tự như vòng lặp for /in
/*
var languages = [
    'Javascript',
    'PHP',
    'Python'
];

for(var value of languages){
    console.log(value);
}

 Đối với Object cần phải sử dụng cách khác

var myInfo = {
    name: 'Hùng Vũ',
    age: 22
}

console.log(Object.keys(myInfo)) // lấy ra key của Object mà mình mong muốn

for(var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}

console.log(Object.values(myInfo)) // Gọi đến value của Object
for(var value of Object.values(myInfo)) {
    console.log(value);
}
*/



                                                // 51: Vòng lặp while //

/*
var i = 0;

/*while(i < 1000){ // Trong vòng lặp là điều kiện để còng lặp có thể chạy được.
    i++;
    console.log(i);
}

 Vòng lặp while của một mảng
var myArray = [
    'Javascript',
    'PHP'
]

var array = myArray.length;
while(i < array) {
    console.log(myArray[i]);
    i++;
}
*/


                                                 // 52: Vòng lặp do / while //

// Thực hiện lệnh ở vòng lặp do 1 lần rồi sau đó mới bắt đầu xét điều kiện ở vòng lặp while.
/* 
var i = 0;
var isSuccess = false;


do{
    i++;
    if(isSuccess === false){
      console.log('Ban vui long nhap lai ma the cao');
    } 
    else{
      console.log('Ma the cao hop le');
    }
}while(!isSuccess === true && i<= 3) // chung nao ma the cao con sai thi se lap lai vong lap


do{
    i++;
    console.log('Nạp thẻ lần ' + i);

    Thành công
    /*if(true) {
        isSuccess = true;
    }
    
    Thất bại
    if(false) {
        isSuccess = false;
    }
    
} while (!isSuccess && i <=3);
*/



                                               // 53: Break & Continue In Loop


/*
for(var i = 0; i < 10; i++) {
    

    if(i >= 5) { // Nếu như i thỏa mãn điều kiện trong ngoặc thì sẽ chạy câu lệnh Break để thoát vòng lặp.
        break;
    }

    if(i % 2 !== 0) {
        continue; // Nếu như gặp điều kiện thỏa mãn thì sẽ trực tiếp thực hiện vòng lặp tiếp theo và nỏ qua câu lệnh bên dưới.
    }

    console.log(i);
}

*/


                                         // 54: Vòng lặp lồng nhau - Nested Loop //

// Sau khi chạy vòng lặp cha thì sẽ tiếp tục chạy vòng lặp con. 
// Sau khi chạy xong hết một vòng lặp con thì sẽ quay lại chạy tiếp vòng lặp cha.
/*
var myArray = [ // Khai báo một mảng bên trong đó là một vài mảng con khác.
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray.length; i++) { // Vòng lặp đầu tiên để lấy ra các mảng con của mảng to myArray
    for(var j = 0; j < myArray[i].length; j++) { // Vồng lặp con để lấy ra những phần tử trong mảng con.
        console.log(myArray[i][j]);
    }
}
*/

// 55: Thêm ví dụ về vòng lặp
/*
for(var i = 100; i > 0; i--) { // Vòng lặp for in ngược lại dãy số từ 100 về 1.
    console.log(i);
}

for(var i = 0; i <=100; i+=5){ // Vòng lặp in dãy số từ 1 đến 100 cách 5 đơn vị
    console.log(i);
}
*/


                                                     // 56: Array Methods:

/* forEach(); // Thuật toán giúp duyệt qua từng phần tử ở trong mảng đã cho trả về từng phần tử trong mảng và index của chúng.
   every(); //Duyệt qua từng phần tử trong mảng. Nếu tất cả đều thỏa mãn điều kiện đề ra thì trả về giá trị true,
              Nếu bất cứ một cái nào không thỏa mãn điều kiện thì trả về giá trị false và lập tức dừng vòng lặp. 
   some(); // Tương tự như phương thức every() nhưng chỉ cần có một phần tử thỏa mã điều kiện sẽ trả về giá trị true và kết thúc vòng lặp.
   find(); // Giúp tìm kiếm xem trong mảng có 1 phần từ mà mình mong muốn hay không. Ví dụ như 'Ruby'.
            Khi tìm thấy phần tử thỏa mãn thì in ra và kết thúc vòng lặp.
   filter(); // Tương tự như method find() nhưng filter sẽ trả về tất cả những phần tử thỏa mãn điều kiện chứ không phải chỉ duy nhất một.
   map(); // Vẫn lặp qua từng phần tử trong mảng cho trước nhưng có thể thay đổi những phần tử trong mảng.
   reduce(); // Sử dụng khi muốn nhận về một giá trị duy nhất sau khi tính toán với các phần tử trong mảng.
*/
/*
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },

    {
        id: 2,
        name: 'HTML, Css',
        coin: 0
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },

    {
        id: 4,
        name: 'PHP',
        coin: 400
    },

    {
        id: 5,
        name: 'ReacJS',
        coin: 500
    },

    {
        id: 6,
        name: 'Ruby',
        coin: 200
    },

    {
        id: 7,
        name: 'Ruby',
        coin: 500
    }
]
*/

/*
courses.forEach(function(course, index) { // Việc truyền một hàm qua tham số được gọi là Callback.
    console.log(index, course);
});

var isFree = courses.every(function(course, index) { 
    return course.coin === 0; // Nếu thỏa mãn điều kiện thì return giá trị
});

console.log(isFree);

var isFree1 = courses.some(function(course, index) { 
    return course.coin === 0; // Nếu thỏa mãn điều kiện thì return giá trị
});

console.log(isFree1);

var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});

console.log(course);

var listCourse = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});

console.log(listCourse);
*/


                                               /* 57: Map() Array Method


function courseHandler(course, index) { // Có thể trả về thêm tham số thứ 3 là originArray: Đây là mảng ban đầu trước khi ta 
                                         sử dụng map() , dùng trong trường hợp ta muốn sử dụng mảng cũ để thực hiện một công việc nào đó.
    // console.log(course);
    return{
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,

    }
}


var newCourses = courses.map(courseHandler);

console.log(newCourses);
*/


                                            /*58:  Reduce() Method
                                      
Trong trường hợp không muốn sử dụng hàm Reduce() để tính toán ta có thể sử dụng vòng lặp For
1. Dễ hiểu: For()
2. Ngắn Gọn: Reduce() Method
3. Hiệu năng: For() tốt hơn.

var totalCoin = 0; // Biến lưu trữ ban đầu

for (var course of courses) { // Lặp qua các phần tử

    totalCoin += course.coin; // Thực hiện việc lưu trữ
}

console.log(totalCoin);



var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // accumulator: Biến lưu trữ nhận giá trị khởi tạo của reduce()
    // currentValue: Trả về giá trị hiện tại của mảng ví dụ như khi vòng lặp đến vị trí số 2 thì sẽ trả về phần tử đó
    // currentIndex: Trả về vị trí index của phần tử mà vòng lặp đang trỏ tới.
    // originArray: Trả về mảng gốc(mảng sử dụng thuộc tính reduce()). Nếu thay đổi thì mảng gốc cũng sẽ thay đổi theo.

    i++;
  
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến lưu trữ: ': accumulator,
        "Giá khóa học: ": currentValue.coin,
        'Tích trữ được: ': total
    });

    return total;
}

var totalCoin = courses.reduce(coinHandler, 0); //Thuộc tính reduce sẽ có hai tham số 
                                                // 1: function (bắt buộc) bên trong nó thực hiện một câu lệnh
                                                // 2: initial  value là giá trị khởi tạo khi bắt đầu, tùy thuộc vào bài toán.
                                                // Không bắt buộc but nếu bỏ đi nó sẽ trả về một object. 
console.log(totalCoin);

*/

// Flat - "Làm Phẳng" mảng từ Depth array - "Mảng sâu"
/*
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, [])

console.log(flatArray);

*/

                                                 // 59: Reduce Logic //


// Cách để khởi tạo một phương thức reduce() mới.
/*
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
};

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce2(function(total, number) {
    return total + number
}, 0)

console.log(result);
*/


                // 61: String / Array includes() method : includes() chỉ có tác dụng khi sử dụng với Array và String.//


// Trường hợp sử dụng với chuỗi:
/*
var title  = 'Responsive web design';

console.log(title.includes('Responsive', 0)); // Kiểm tra xem chuỗi có phần tử  cần tìm hay không. Trả về true or false
                                              0 thể hiện vị trí bắt đầu tìm kiếm.
Trường hợp sử dụng với Array:

var courses = ['Javascript', 'PHP', 'Ruby']; // Kiểm tra xem array có phần tử  cần tìm hay không. Trả về true or false

console.log(courses.includes('Ruby', 0)); 
*/

                                             // 62: Math Object//

/* 
- Math.PI
- Math.round()  // Làm tròn số thập phân Vd 1.3 => 1.
- Math.abs()    // Trả về giá trị tuyệt đối, biến số âm thành số dương.
- Math.ceil()   // Only làm tròn trên
- Math.floor()  // Only làm tròn dưới
- Math.random() // Trả về một số thập phân ngẫu nhiên nhỏ hơn 1
- Math.min()    // Lấy ra số nhỏ nhất trong dãy số
- Math.max()    // Lấy ra số lớn nhất trong dãy số
*/

/*
var random = Math.floor(Math.random() * 100);  // 100: lấy số random nhân với 100, là tạo ra ngẫu nhiên 100 phần tử từ 0 đến 99

if (random <50) {
    console.log("Cường hóa thành công")
}
*/


                                               // 63: Call Back //

// Call Back ? 

/* Là một Hàm(Function) được truyền qua đối số khi gọi hàm khác

1. Là hàm
2. Được truyền qua đối số
3. Được gọi lại ( Bên trong hàm nhận đối số)
*/

/*
Array.prototype.map2 = function(callback) {

    var output = [];
    var arrayLength = this.length; // Tăng hiệu suất khi không cần phải chọc vào this.length mỗi lần lặp

    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);

        output.push(result);
    }

    return output;
}

var course = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls  = course.map2(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));

*/


                                       // 65: Empty Elements Of Array //
                                      
// Tự mình viết lại những function forEach, find, filter, some, every, reduce.

/*
var courses = [
    'Javascript',
    'PHP'
];

var courses = new Array(10); Khai báo một mảng có length = 10. 
Nếu có từ hai phần tử trở lên thì nó sẽ là một array có hai phần tử chứ không phải một mảng có độ dài bằng 10 nữa.

courses.push('Ruby', 'PHP'); // Thêm hai phần tử thực vào mảng và tăng độ dài của mảng lên thành 12.

courses.length = 10; // Khi ta khai báo như vậy thì độ dài của mảng sẽ trở thành 10.

for (var index in courses) {      // Lặp qua những phần tử thực có index của mảng.
    console.log(courses[index]);
}

*/

// forEach() Function" : Lặp qua từng phần tử trong mảng và trả về mảng đó.

//1. Object Prototype:
//2. For in : Lặp qua cả những phần tử có thuộc tính prototype
//3. hasOwnPrototype
/*
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) { // hasOwnProperty sẽ xác định xem những phần tử trong mảng có chứa index thật hay không.
            callback(this[index], index, this);
        }
    }
}

Trường hợp 2: var course = new Array(100);

courses.push('Javascript', 'Ruby');

var courses = [
    'Javascript',
    'PHP'
];

courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
})
*/

// filter() Function: Trả về những phần tử trong mảng thỏa mãn điều kiện tìm kiếm

/*
Array.prototype.filter2 = function(callback) {  // Không lặp qua mảng trống

    var output = [];
    for (var index in this) {
        if (this.hasOwnPrototy(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        };
    }

    return output;
}
*/


// some() Function: Trả về true / false, xác định xem trong mảng có bất cứ phần tử nào thỏa mãn điều kiện hay không.

/*
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};


var courses = [
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true,
    },

    {
        name: 'PHP',
        coin: 380,
        isFinish: false,
    },

    {
        name: 'Drak',
        coin: 600,
        isFinish: false,
    }
];

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result);

*/

// every() Function: Nếu tất cả các phần tử trong mảng đều thỏa mãn điều kiện đề ra thì return true, else => return false.

/*
Array.prototype.every2 = function (callback) {

    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
};

/*  Kết thúc phần kiến thức cốt lõi 1. */


                                        
                                       // PHẦN: HTML DOM //

                                       // 70: HTML DOM Là gì ? //
// HTML DOM
/*
Có 3 thành phần:   
1. Elements
2. Attribute
3. Text
*/

// Node: Điểm nối trong HTML DOM, đại biểu cho tất cả các thành phần của DOM.

// Khi ta sử dụng JS nó có thể truy cập vào HTML DOM để thay đổi các thành phần của nó.

//---------------------------------------------------------------------------------------//
                                      // 71: DOM API //

// Javascript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> WEB API

                                      // 72: Document Object //

// Document Object được hiểu là đại diện cho toàn bộ website của mình.
// Để có thể truy xuất vào những thành phần con thì phải đi qua document object.

// document.write("Hello Guys"); Nhận vào một chuỗi, nằm bên trong thẻ body, phía dưới cùng.

                                  
                                       // Get Element Methods //

// Cách để get Element : ID, class, tag, CSS selector, HTML collection.

/*
var headingNodes = document.getElementById('heading');  // select element duy nhất có ID bằng heading.

document.getElementsByClassName('heading1'); // Trả về HTML Collection là một mảng các elements có class name = heading1. 
                                             Có thể sử dụng vòng lặp for để lặp qua HTMLCollection đến các elements đó.

document.getElementsByTagName("h1");  //    Trả về một mảng các elements có tagName là h1.

var headingNode = document.querySelector('.box .heading2'); // Select phần tử có class là heading_2 nằm trong class box.
                                                            Chỉ selector ra phần tử đầu tiên thỏa mãn.

var headingNode = document.querySelectorAll('.box .heading2'); // Trả về một NodeList chứa các phần tử thỏa mãn, có thể sử dụng vòng lặp For.

console.log(document.forms.testForm);    // Đối với form thì không cần sử dụng getElement or querySelector.

console.log(document.anchors);           // Lấy ra thẻ a có thuộc tính name = ''.


var boxNode = document.querySelector('.box-1');

Công việc 1: Sử dụng tới `boxNode`
//.....

console.log(boxNode);

Công việc 2: Sử dụng tới các li elements là con của `.box-1`

console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.querySelector('p'));
*/

                                        // 75: Get Element Methods Summary //

// 1. getElementById
// 2. getElementByClassName
// 3. getElementByTagName
// 4. querySelector
// 5. querySelectorAll

// 6. HTML Collection

// 7. document.write.


                                          // 76: Attribute Node & Text Node //
                                        
// Attribute Node: Là những attribute nằm trong các cặp thẻ đóng mở ngoặc như div, <h1>, span,...                                          
// Ví dụ của atrribute node: class, title, meta viewport, id,...

//Text Node: Những đoạn text trong thẻ ví dụ như <h1>Header<h1>.


                                        // 77: DOM Attribute //

/*                                        
var headingElement = document.querySelector('h1');

headingElement.title = 'Heading';

headingElement.className = 'Heading';  // Ta phải đặt là className vì trong JS có một thuộc tính là class nên phải đặt ntn để k trùng.
Cách 1: Setter : set trực tiếp giá trị cho attribute bằng phương pháp gán.

Cách 2: Gọi function vsf truyền vào giá trị.
headingElement.setAttribute('href', 'heading');


Cách để lấy ra giá trị của attribute
headingElement.getAttribute('class');

//Bài Tập: 

<a href="https://f8.edu.vn/">Học lập trình</a>

<a>Học lập trình</a>

<div>Lập trình Javascript</div>

1. Lấy element node của thẻ a thứ nhất lưu vào biến f8LinkElement
var f8LinkElement = document.querySelectorAll('a')[0];

2. Lấy nội dung href attribute của thẻ a thứ nhất và lưu vào biến f8ShortLink
var f8ShortLink = f8LinkElement.getAttribute('href');

3. Thêm href attribute cho thẻ a thứ hai từ giá trị của biến f8ShortLink
var setHref = document.querySelectorAll('a')[1];
setHref.setAttribute('href',f8ShortLink);

4. Thêm data-url attribute vào div element, giá trị của attribute lấy từ biến f8ShortLink
var setDataUrl = document.querySelector('div');
setDataUrl.setAttribute('data-url',f8ShortLink);
*/


                                        //78: InnerText vs textContent Property //

// geter: Lấy ra nội dung

// seter: Thay đổi nội dung

/*
var headingElement = document.querySelector('h1');

console.log(headingElement.innerText);      // In ra giá trị của text note nằm trong thẻ h1.

headingElement.innerText = 'New Heading';   // Gán cho text note một giá trị mới.

console.log(headingElement.textContent);

Khác biệt giữa innerText & textContent:

innerText: chỉ hiển thị ra những thành phần được xuất hiện trên trình duyệt.

textContent: hiển thị tất cả những thành phần được xác định là text note kể cả là trong thẻ <script> or những css class
không được khai báo . 
*/


                                        // 79: Inner HTML & Outer HTML Property //

/*                                       
.innerHTML : Có thể thêm một Element Node vào bên trong một element node khác, 
            đồng thời cũng có thể thêm vào attribute node và text node mà mình mong muốn.

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 title = "heading">Heading</h1>';

.outerHTML : Sẽ thay đổi chính thẻ bao ngoài.
*/


                                           // 80: Node Properties //


                                           // 81: DOM CSS //

// DOM style
/*
var boxElement = document.querySelector('.box');

.Thay  vì sử dụng dấu - (background-color) như trong css, ta viết liền dưới dạng camelCase vd backgroundColor = "".
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

.Có thể viết gọn hơn bằng cách sử dụng Object.assign function:
Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green',
});

.Cách để in ra giá trị bất kì ta sử dụng get.
console.log(boxElement.style.backgroundColor);
*/


                                        // 82: ClassList Property //
// Là một thuộc tính của element node => chỉ có thể sử dụng khi truy cập vào element node.
// Sẽ tạo ra một đối tượng DOMTokenList nhằm quản lí các phương thức của classlist.

// add      : Thêm class vào element
// contains : Kiểm tra một class có nằm trong element hay không, trả về true / false
// remove   : Xóa một class khỏi element.
// toggle   : Nếu đang có class trong element => xóa class đó, nếu không có thì add thêm vào.

/*
var boxElement = document.querySelector('.box');

console.log(boxElement.classList.length);  // Lấy ra số lượng class trong classlist.

console.log(boxElement.classList.value);  // Trả về chuỗi tên những class nằm bên trong classlist, kể cả dấu cách.

console.log(boxElement.classList[1]);     // Trả về class name có index = 1 trong classlist.

boxElement.classList.add('red', 'blue');  // là một function truyền vào đối số. Có thể truyền vào nhiều đối số ngăn cách với nhau
                                            bằng dấu , .

console.log(boxElement.classList.contains('red'));  // Truyền vào một function để kiểm tra xem có class 'red' bên trong boxElement hay không.

setTimeout( () => {   
    boxElement.classList.remove('red');
}, 3000);

setInterval( () => {   
    boxElement.classList.toggle('red');   // Check xem boxElement có class 'red' hay không. Nếu có thì nó sẽ xóa class đó đi.                                         
}, 1000);                                    Nếu không có thì nó sẽ thêm class đó vào bên trong boxElement.
*/


                                           // 83: DOM Events //

// 1. Attribute events : Cách chúng ta sử dụng để lắng nghe hành động của người dùng.
// 2. Assign event using the element node : Gán sự kiện với element node.
/*
var h1Element = document.querySelectorAll('h1');

for (var i = 0; i < h1Element.length; ++i) {
    h1Element[i].onclick = function(e) {     // Trả về một function với tham số even(e)
        console.log(e.target);    // target sẽ lấy ra phần tử nằm bên trong thẻ được click.
    }
}
*/

                                        // 84: DOM Events Example //

// 1. Input / Select
// 2. Key up / down :       Nhấp chuột lên / Nhấp chuột xuống.
/*
var inputValue;

var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(e) {
    console.log(inputValue =  e.target.value);
}

var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.onchange = function(e) {
    console.log(e.target.checked);   // Trả về kết quả true / false xác định box có được check hay không.
}

var inputElement = document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value);    // Trả về value được khai báo trong attribute value = " 1 ".
}

document.onkeydown = function(e) {
                         onkeypress: Nhấn và giữ nút => tăng liên tục ngoại trừ phím ESC.
    switch(e.which) {    // which sẽ cho ta biết đối tượng tương đương với số là bao nhiêu
        case 27:         // Trường hợp số là 27 
        console.log('EXIT');
        break;

        case 13: 
        console.log('SEND CHAT');
        break;
    }
}
*/ 

                                        // 85 : PreventDefault and StopPropagation //

// DOM events

// 1. preventDefault  : Sử dụng để ngăn chặn những hành động mặc định của trình duyệt ví dụ như click vào thẻ link.

// 2. stopPropagation : Sử dụng để ngăn chặn sự kiện nổi bọt của thẻ con tới thẻ cha chứa nó.

/*
var  aElements = document.links;             // Lấy ra tất cả thẻ a trong trình duyệt.

for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://fullstack.edu.vn/learning/javascript-co-ban?id=2284')) {  // Nếu k đúng thẻ href cần tìm
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {  // onmousedown : Hành động khi click chuột xuống
    e.preventDefault();                // Ngăn chặn việc hủy đi focus của thẻ input.
}

ulElement.onclick = function(e) {
        console.log(e.target);         // Hiển thị phần tử nằm bên trong thẻ ul được click đến.
    }

stopPropagation

document.querySelector('div').onclick = function() {
    console.log('DIV')
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me!');
}

*/

                                                  // 86 : Event Listener //

// Event Listener

// 1. Xử lí nhiều việc khi một event xảy ra.
// 2. Lắng nghe / Hủy bỏ lắng nghe.
/*
var btn = document.getElementById('btn');

DOM Events

btn.onclick = function() {
    Viec 1
    console.log('Viec 1');

    Viec 2
    console.log('Viec 2');

    Viec 3
    alert('Viec 3');
}

setTimeout(function() {
    btn.onclick = function () {    // Ta có thể gán cho hàm onclick là một function rỗng thay thế cho function được khai báo bên trên
                                   Sau 3 giây thì function bên trên sẽ không hoạt động nữa.
    }
}, 3000);


Events Listener

btn.addEventListener('click', function(e) {  // Đối với Event Listener thì sẽ không có on ở trước event, tham số thứ 
    console.log(Math.random());              // hai là một function();
});

function viec1() {
    console.log('Viec 1');
}

function viec2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viec1);

btn.addEventListener('click', viec2);

setTimeout(function() {
    btn.removeEventListener('click', viec1);    // Xóa đi sự kiện EventListener sau 3 giây.
}, 3000);
*/


                                     // Phần 5: Kiến thức cốt lõi Phần 2 //
    

// 1. Event Listener --> OK
// 2. JSON
// 3. Fetch
// 4. DOM Location
// 5. Local Storage
// 6. Session Storage
// 7. Coding Convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance
// 11. Promise.


                                        // 87: Json Là Gì //

// 1. JSON là một định dạng dữ liệu (chuỗi)
// 2. Javascript Object Notation.
// 3. JSON: Number, Boolean, Null, Array, Object, String.

// Stringify (Chuyển dữ liệu từ Javascript về dạng JSON) / Parse(Biến từ JSON trở lại dịnh dạng Javascript ban đầu).

// var json = '["Javascript", "PHP"]' Khi sử dụng JSON với mảng thì cần phải sử dụng dấu " " để bọc các phần tử nằm trong array đó.
// var json = '{"name" : "Hùng Vũ", "age" : 23}'; Với Object ta cũng cần phải sử dụng dấu " " để bọc key và value của Object.

// var a = '1';

// console.log(JSON.parse(a));
// console.log(JSON.parse(json));


                                        // 88: Promise Là Gì (sync, async) //
/*
Trả lời câu hỏi về Promise: 
1. Promise là khái niệm được sinh ra để xử lí bất đồng bộ, trước khi có promise ta sử dụng callback but sẽ có vấn đề về 
callback hell. Promise sẽ khắc phục tình trạng này.

Sync (Đồng Bộ) / Async (Bất Đồng Bộ)

setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame (Async example).
=> Khai báo trước nhưng k nhất định sẽ chạy trước.
Ứng dụng Callback

sleep : Hệ thống sẽ chạy câu lệnh console.log(2) trước rồi sau 2 giây sẽ chạy câu lệnh console.log(1)
setTimeout(function() {
    console.log(1);
}, 2000);

console.log(2);
*/


                                       // 89: Promise (pain) //

/*
Callback Hell
setTimeout(function() {
    console.log(1);  // Viec 1 
    setTimeout(function() {
        console.log(2);  // Viec 2
        setTimeout(function() {
            console.log(3); // Viec 3
            setTimeout(function() {
                console.log(4); // Viec 4
            }, 1000);
        },1000);
    },1000);
},1000);
Pyramid of doom

*/

                                    // 90: Promise Concept //

/*                                    
1. new Promise
2. Executor

Memory Leak : Rò rỉ bộ nhớ khi không set trạng thái Thành công && Thất bại

3 Trạng thái của Promise

1. Pendding: Khi chưa set resolve and reject => vòng lặp chạy mãi không kết thúc.
2. Fulfilled: Khi resolve được chạy => trả về .then và .finally
3. Rejected: Khi reject() được chạy => trả về .catch và  .finally

var promise = new Promise(
    Executor : function sẽ được chạy khi gọi đến Promise
    function(resolve, rejeact) {
        Logic
        Thành công: => gọi function resolve()
        Thất bại: => gọi function reject()

        Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);
        rejeact('Có Lỗi');
    }
);                                    
   
promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });
*/


                                        // 91: Promise Chain // 
/* Tính Chất Chuỗi Của Promise Để Giải Quyết Bài Toán Callback Hell
var promise = new Promise(
    function(resolve, reject) {
        resolve();
    }
);

* promise *
    1. Sau khi function trả về resolve => .then sẽ được chạy. Sau mỗi lần .then thì nó sẽ return về 1 kết quả và .then tiếp theo
    có thể nhận được kết quả đó => thực hiện 1 công việc gì đó.
    2. Điều này tương tự với việc sử dụng callback lồng nhau, sau khi callback ngoài trả về kết quả thì callback bên trong có thể 
    nhận được kết quả đó và thực hiện công việc mà nó được khai báo.
    3. Nếu như .then không return 1 Promise or 0 return thì .then liền kề sẽ trả về giá trị ngay lập tức. Nếu trong .then đầu tiên có chứa 
    Promise thì sẽ cần phải đợi thực hiện xong Promise đó mới có thể thực hiện tiếp .then tiếp theo.
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
        return 3;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    });

*/
                                // 92: Promise Methods (resolve, reject, all) //

/*
1. Promise.resolve
2. Promise.reject
3. Promise.all

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Có Lỗi');
        })
    . Nếu như có một đối tượng Promise được khai báo reject thì nó sẽ chỉ chạy đến đó và không tiếp tục chạy .then() tiếp theo
    . Nếu như không có .catch để bắt sự kiện này => báo lỗi (in promise ).
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })
    .catch(function(error) {  // Dùng catch để bắt sự kiện reject() của Promise.
        console.log(error);
    });

    var promise = new Promise(
        function(resolve, reject) {
            resolve('Successfull!');

            reject('Error');
        }
    )

* Cách để trả về 1 Promise thành công:
    var promise = Promise.resolve('Success!');

* Cách để trả về 1 Promise thất bại:
    var promise = Promise.reject('Error');

promise
    .then(function(result) {
        console.log('result:', result);
    })
    .catch(function(error) {
        console.log("error: ", error);
    })


var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000)
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000)
    }
);

Promise.all([promise1, promise2]) 
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })

    .catch(function() {
        console.log('error');
    })
* Nếu như khi sử dụng Promise.all mà có 1 Promise trả về reject thì nó sẽ chỉ trả về .catch() và không trả về any .then() nào.
*/


                                        //93: Promise Example //
/*
var users = [
    {
        id: 1,
        name: 'Hùng Vũ',
    },

    {
        id: 2,
        name: 'Lanh',
    },

    {
        id: 3,
        name: 'Thúy',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "I am superman!"
    },

    {
        id: 2,
        user_id: 2,
        content: 'Number one super trâu'
    },

];

1. Lấy comment ra
2. Từ comment lấy ra user_id
3. Từ user_id lấy ra user tương ứng.

Tạo Fake API:

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                }
            }); 
    })

    .then(function(data) {
        
        var commentBlock = document.getElementById('comment-block');

        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });

            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;

    });
*/


                                        // 94: Fetch //
 
// 1. Front-end: Xây dựng giao diện người dùng

// 2. Back-end: Xâydựng logic xử lý & Cơ sở dữ liệu.
 
// API (URL) -> Application Programming Interface
//              Cổng giao tiếp giữa các PM.

// Backend -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Trả về Javascript types
// -> Render ra giao diện HTML.

/*
var postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
    .then(function(response) {
        return response.json();
        -->JSON.parse: Chuyển từ dạng JSON sang javascript type.
    })                                        
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(error) {
        alert('Error!');
    });
*/

                                        //95: Json Server //

// 1. Json Server --> Tạo ra Fake API Server. / Mock API
/*
- Để sử dụng Json Server cần phải cài đặt Nodejs
- Tạo một forder mới name: json_server
- Sử dụng câu lệnh npm init để tạo file packet.json. Nó là nơi để quản lí những thư viện đã cài.
- npm i json-server để cài json-server.
- tạo file db.json để chứa dữ liệu 
- Ta có thể tạo đường dẫn trong package.json để tiết kiệm thời gian:
"scripts": {
    "start": "json-server --watch db.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

var courseApi = "http://localhost:3000/courses"

fetch(courseApi)
  .then(function(responsive) {
      return responsive.json();  Chuyển dữ liệu từ dạng Json về Javascript
  })
  .then(function(courses) {
      console.log(courses);
  });
*/

                                    // 96: Sử Dụng Postman Làm Việc Với REST API //

/*
1. Hiểu về CRUD: 
    - Create: Tạo mới -> POST
    - Read: Lấy dữ liệu -> GET
    - Update: Chỉnh sửa dữ liệu -> PUT / PATCH
    - Delete: Xóa dữ liệu -> DELETE

2. Postman:

*/               


                                // 97: Thêm / Sửa / Xóa Khóa Học Với Fetch và REST API //

                                /*
var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(function(courses) {
        renderCourses(courses);
    });

    handleCreateForm();
}

start();

// Functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'    
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name = "description"]').value;

        var formData = {
            name: name,
            description: description
        }
        createCourse(formData);
    }
}
*/


                            // ECMAScript 6 - ECMAScript 2015 - ES6 //

/*
1. Let, Const
2. Template Literals
3. Multi-line String
4. Arrow Function
5. Classes
6. Default Parameter Values
7. Destructuring
8. Rest Parameters
9. Spread
10. Enhanced Object Literals
11. Tagged Template Literal
12. Modules
*/
                                   // 98: ECMAScript 6 Là Gì?  //


                                      // 99: Let  & Const //

// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment (Toán tử gán)

// Code block: If Else, Loop, {}, ...

// Code thuần: Using Var;

// Babel: Using Const, Let
// - Khi định nghĩa biến và không gán lại giá trị của biến đó => Sử dụng Const
// - Khi cần gán lại giá trị cho biến => Sử dụng Let.
// if (true) {
    // var course = "Javascript Basic!";

    // let course = "Javascript Basic!"; -> Báo lỗi nếu gọi bên ngoài cặp {}

    // const course = "Javascript Basic!"; -> Báo lỗi nếu gọi bên ngoài cặp {}
    // => Biến được khai báo bằng Let và Const chỉ có thể được sử dụng bên trong cặp {} của chúng.

    // => Khi ta sử dụng var để khai báo biến ở trong Block Scope thì ta có thể gọi được nó cả ở bên ngoài cặp {}
    // Tuy nhiên nếu trước đó ta đã khai báo biến đó trước rồi thì biến var ở trong {} sẽ thay thế giá trị của biến var ban đầu
    // -> Có thể gây ra một số lỗi không đáng có.
// }

//console.log(course);

/*
    Hosting: Đưa biến được khai báo lên trên đầu. Áp dụng với Var, không áp dụng với Let và Const.
    Ví dụ:
    a = 1;

    var a;

    console.log(a); => Vẫn trả ra kết quả bình thường vì hosting sẽ đẩy var a lên trên đầu.
*/

// 2. Assignment
/*
var or let a = 1;

a = 100;

console.log(a) => Return 100;

=> Khi sử dụng var or let thì ta có thể gán lại giá trị cho biến được khai báo.
Với const thì không thể thay đổi giá trị của biến đã được tạo nếu không sẽ báo lỗi.

const a = {
    name: "Javascript"
}

a.name = "PHP"
console.log(a.name) => Vẫn có thể thay đổi thuộc tính của a được khi khai báo với const mà không gặp lỗi.

Tuy nhiên nếu gán lại a = ...; thì sẽ báo lỗi.
*/

                                        // 100: Template Literals //

/*
    const a = "Javascript";

    const b = "`Course name: ${a}`"

    console.log(b); => return Course name: Javascript.

    * VD sử dụng Multi-line String:

    const lines = 'line 1\n'
    + 'line 2\n'
    + 'line 3\n' => \n là xuống dòng.

    * VD với Template

    const lines = `line 1
    line 2
    line 3`;
    => Không cần \n và '' ở mỗi line.
*/


                                    // 101: Arrow Function //

/*
const logger  = (log) => {  // Khi function chỉ có một đối số ta có thể bỏ cặp dấu () bao xung quanh nó.
    console.log(log);
}  

logger("Message...!");

const sum = (a, b) => {  // Nếu có cặp dấu ngoặc nhọn {} thì bên trong cần có từ khóa return
    return a + b;
};

const sum1 = (a, b) => a + b; // Ta có thể khai báo trực tiếp mà không cần cặp dấu {}, arrow function sẽ tự hiểu là cần phải return.

const sum2 = (a, b) => {
    return {
        a: a,
        b: b
    };
}

const sum3 = (a, b) => ({a:a, b:b}); // Để có thể sử dụng arrow function without return để khai báo một object thì cần phải cho nó 
                                        vào bên trong cặp ().


console.log(sum(2, 2));

console.log(sum1(5, 8));

console.log(sum2(4, 6));

console.log(sum3(3, 3))

=> Arrow Function không thể đóng vai trò như một constructor

const Course = function(name, price) {
    this.name = name;
    this.price = price;
}

const Course = (name, price) => { // Nếu sử dụng arrow function sẽ báo lỗi Course is not a constructor.
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('Javascript', 1000);

console.log(jsCourse);

*/
                                    // 102: Classes //
                                    
// Classes là một cách viết khác của Constructor function. 
// Nó cung cấp một cách viết gọn và rõ ràng hơn, phù hợp khi dự án mở rộng.

// Ví dụ về một Constructor Function :
/*
function Course(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    }
}
*/

// Sử dụng Classese để tạo Object Constructor

/*
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 2000);

console.log(phpCourse.getName());

console.log(jsCourse);

*/
                                        // 103: Default Parameter Values //
                                        // Giá Trị Mặc Định Của Tham Số //
                                        
// Khi ta khởi tạo một hàm và truyền cho nó một tham số. Nếu khi gọi lại function đó mà ta không truyền giá trị cho tham số => sẽ 
// trả về undefined. Vì thế ta có thể gán giá trị mặc định cho tham số khi khởi tạo function để giải quyết vấn đề đó.

// Sử dụng với những tham số không bắt buộc phải truyền vào giá trị. Thường là tham số thứ 2.

/*
function logger(log, type = 'log') {
    console[type](log);
}

logger('Messages...', 'warn');

*/

                                        // 104: Enhanced Object Literals //

// 1. Định nghĩa key : value cho object một cách ngắn gọn hơn.
// 2. Định nghĩa methods cho object
// 3. Định nghĩa key cho object dưới dạng biến

/* Ví Dụ 1:
var name = 'Javascript';

var price = 1000;

var course = {
    name,    // name : name,  Ta có thể viết gọn lại như phía bên trái.
    price,   // price : price,

    getName() {
        return this.name;
    }
};

console.log(course.name)
*/

/* Ví dụ 2:
var fieldName = 'new-name';

var filedPrice = 'price';

const course = {
    name: 'Javascript',
    [fieldName] : 'Javascript',
    [filedPrice] : 1000
}

console.log(course)
*/

                                    // 105 : Destructuring //

// Ta có thể hiểu nó là phân rã, sử dụng với Object and Array

/* Destructuring with Array
var array  = ['Javascript', 'PHP', 'Ruby'];

* Cách thông thường :

var a = array[0];
var b = array[1];
var c = array[2];


* Làm với Destructuring:
var [a, , c] = array; // Nếu muốn bỏ qua phần tử ở giữa => không khai báo nó nhưng vẫn giữ nguyên dấu , ,
console.log(a, c)

* ...Rest : Lấy ra những phần còn lại.

var [a1, ...rest] = array;

console.log(a1);
console.log(rest);

*/
/* Destructuring with Object:
var course = {
    name : 'Javascript',
    price : 1000,
    image : 'image-adress',
    children: {
        name : 'React JS',
    },
    description : 'Description Value' 
};

var { name : firstName, price, image } = course;  // Khi ta khai báo name ta có thể gán tên mới cho nó để tránh trùng tên.

console.log(firstName, price, image);

* Sử dụng Rest với object:

var { name, children : { name : childrenName}, description = 'Default Description' } = course;   
* Để gọi một key trong một object con của object cha thì ta chỉ cần thêm cặp : { } và truyền tên của key của object con vào.
                                        
* Có thể thay thế rest bằng một tên bất kì.

console.log(childrenName);

console.log(description)

console.log(rest);

* Rest in function: 

function logger(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
};

console.log(logger(1, 2, 3, 4, 5, 6))

* Ta có thể kết hợp sử dụng Destructuring khi khai báo function:

function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger({
    name : 'Javascript',
    price : 1000,
    description: 'Description Value'
})
*/

                                                // 106 : Spread //

// Khi sử dụng Spread(...) phía trước một array nó sẽ bỏ đi cặp dấu [] của array đó.

/*
var array1 = ['Javascript', 'PHP', 'Ruby'];

var array2 = ['ReactJS', 'VueJS'];

var array3 = [...array1, ...array2];

console.log(array3);

*/

                                    // 108 : Modules //

//1. Modules : Import (Nạp vào) / Export (Xuất ra)   
// Ta có thể chia dữ liệu thành các modules riêng biệt để dễ dàng quản lí và chỉnh sửa.                
// Để có thể sử dụng được những thuộc tính trong file logger.js ta cần phải export nó ra và import vào file main.js

import logger from './logger.js'

logger('Message...', 'error')