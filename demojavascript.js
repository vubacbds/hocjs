function f1() {
  document.getElementById("id1").innerHTML = "Chào mừng các bạn đến với TMA";
}

function f2() {
  document.getElementById("id2").innerHTML = "Tôi tên là Vũ Xuân Bắc";
}

var dem = 0;
function f3() {
  dem++;
  document.getElementById("id3").innerHTML =
    "Nhấn <span class='maudo'>" + dem + " </span> lần ";
  var hinh1 =
    "https://freetuts.net/upload/tut_post/images/2017/03/29/810/quan-ly-ten-mien-trong-direct-admin.gif";
  var hinh2 =
    "https://freetuts.net/upload/tut_post/images/2016/09/27/746/typescript-basic-types.gif";
  if (dem % 2 == 0) document.getElementById("id4").src = hinh1;
  else document.getElementById("id4").src = hinh2;
}

//function : Declaretion
function bac() {
  console.log("chào bạn");
}
bac();

//function : expresstion
var bac2 = function () {
  console.log("Toi ten là B A C");
};
bac2();

//object
var diachi = "address";
var obj1 = {
  name: "bac",
  age: 22,
  [diachi]: "Buôn Đôn, Đắk Lắk", //Khai báo key là một biến
  getage: function () {
    //function
    return this.age;
  },
};
obj1.phone = 0868609878;
obj1["my-email"] = "vb@gmail.com";
console.log(obj1.name);
console.log(obj1[diachi]); //Gọi lại khi key là biến
console.log(obj1["address"]); //Gọi khi dùng ngoặc vuông
console.log(obj1.address);
console.log(obj1.getage());

//object constructor  : giống bảng thiết kế ngôi nhà : Hàm tạo
function User(firstname, lastname, age, avatar) {
  //Tên chữ cái đầu hàm tạo viết hoa
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.lastname} ${this.firstname}`;
  };
}
var user1 = new User("bac", "vu", 22, "img1");
var user2 = new User("dung", "ngo", 18, "img2");
user1.title = "đây là title 1";
//Thêm thuộc tính/ phương thức cho đối tượng đã định nghĩa trong bảng thiết kế
console.log(user1.constructor); //Xem lại bản thiết kế của đối tượng này
console.log(user1);
console.log(user2.title); //không gọi được
console.log(user2.getName());

//Dùng prototype, thêm tiếp thuộc tính/phương thức vào trong hàm tạo User
User.prototype.classname = "DHTN";
User.prototype.getClassName = function () {
  return this.classname;
};
console.log(user2.classname);
console.log(user2.getClassName());

//Mảng
var arr1 = [
  "bac",
  22,
  "dhtn",
  "Dak Lak",
  {
    name: "bac",
    point: 10,
  },
  {
    name: "dung",
    point: 10,
  },
  function () {},
  "dung",
];
var arr2 = ["Cong", "IT"];
console.log(arr1.concat(arr2)); //Nối mảng
console.log(typeof arr1); //Kiểm tra kiểu dữ liệu
console.log(Array.isArray(arr1)); //Kiểm tra phải mảng không
console.log(typeof User);

console.log(arr1.toString()); //Biến array thành chuỗi, mặc định ngăn cách bởi dấu ','
console.log(arr1.join("_")); //Biến array thành chuỗi , các phần tử ngăn cách bởi dấu '_'
console.log(arr1.pop()); //Xóa phần tử cuối mảng và trả lại chính phần tử bị xóa đó
console.log(arr1.shift()); //Xóa phần tử đầu mảng và trả lại chính nó
console.log(arr1.push(19, "ok")); //thêm 1 hoặc nhiều phần tử vào cuối mảng
console.log(arr1.unshift("hi")); //Thêm 1 hoặc nhiều phần tử vào đầu mảng
arr1.splice(1, 1, 21, "yd"); //Xóa phần từ, từ vị trí 5 xóa 1 phần tử và chèn thêm những phần tử 21,yd
console.log(arr1.slice(1, 3)); //Cắt lấy mảng, từ vị trí 1 đến vị trí 3, cắt toàn bộ là slice(0)

console.log(arr1);

arr1.forEach(function (ar1, index) {
  //Duyệt qua từng phần tử của mảng
  console.log(index, ar1);
});

var a = arr1.every(function (ar1, index) {
  //Tất cả phần tử thỏa mãn điều kiện trả kết quả True, ngược lại là False
  return ar1.point === 10;
});
console.log(a);

var b = arr1.some(function (ar1, index) {
  //1 phần tử thỏa mãn điều kiện trả kết quả True, ngược lại là False
  return ar1.point === 10;
});
console.log(b);

var c = arr1.find(function (ar1, index) {
  //Lấy phần tử thỏa mãn điều kiện, duyệt trên xuống có dừng luôn (chỉ lấy 1 phần tử thỏa mãn)
  return ar1.name === "bac";
});
console.log(c);

var d = arr1.filter(function (ar1, index) {
  //Lấy phần tử thỏa mãn điều kiện (lấy tất cả phần tử thỏa mãn)
  return ar1.point === 10;
});
console.log(d);

function f8(f) {
  //f nhận giá trị của các phần tử của mảng
  return f;
}
var e = arr1.map(f8); //Dùng Map duyệt lần lượt các phần tử trong mảng truyền vào function f8 để xử lí, function f8 là đối số, map trả về mảng
console.log(e);

function f9(f, index) {
  //f nhận giá trị của các phần tử của mảng
  return {
    //tạo ra một object mới
    ten: `Tên tôi là: ${f.name} `,
    diem: f.point,
    index: index,
  };
}
var f = arr1.map(f9); //Dùng Map lấy lần lượt các phần tử trong mảng truyền vào function f9 để xử lí
console.log(f);

var arr3 = [
  {
    name: "bac",
    point: 9,
    Ms: 12,
  },
  {
    name: "dung",
    point: 10,
    Ms: 8,
  },
];

function f10(accumulator, currentValue, currentIndex, originArray) {
  //Reduce của mảng, accumulator là giắ trị ban đầu, currentValue là phần tử lúc đó, currentIndex là chỉ số của phần tủ đó, originArray là mảng truyền vào
  return (accumulator += currentValue.point);
}
var tongdiem = arr3.reduce(f10, 0); //Truyền vào function f10 và giá trị ban đầu = 0, như Tong=0
console.log(tongdiem);

//CallBack
function cb(param) {
  param("Happy");
}

function cb2(value) {
  console.log(value);
}

cb(cb2);

//Học react-route-dom v6 tại link này đầy đủ; https://viblo.asia/p/react-router-dom-v6-maGK7BQB5j2
//Video hay về JWT Token và tạo 1 dự án Nodejs với gọi API dễ hiểu với attention (Rest Client): https://www.youtube.com/watch?v=LxeYH4D1YAs
//Cách nối các table trong mongoose trong nodejs: https://dev.to/paras594/how-to-use-populate-in-mongoose-node-js-mo0
//Upload file; https://codestus.com/posts/chi-tiet-ve-upload-file-trong-html-javascript

//Sửa lỗi các tùy chọn không hoạt động trên soạn thảo react-draft-wysiwyg, sửa file index.js thành
/* 
import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";                 // add this

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

//Tạo nút copy

/*
function handleCopyTextFromParagraph() {
  const cb = navigator.clipboard;
  const paragraph = document.querySelector('p');
  cb.writeText(paragraph.innerText).then(() => alert('Text copied'));
}
*/

//Sroll tới cuối trang 1 thẻ div

// import React, { useRef } from "react";

// export default function Demo() {
//   const listInnerRef = useRef();

//   const onScroll = () => {
//     if (listInnerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
//       if (scrollTop + clientHeight === scrollHeight) {
//         console.log("reached bottom");
//       }
//     }
//   };

//   return (
//     <div>
//       <div
//         onScroll={onScroll}
//         ref={listInnerRef}
//         style={{ height: "200px", overflowY: "auto" }}
//       >
//         {Array(200)
//           .fill()
//           .map((_, i) => {
//             return <p key={i}>{i}</p>;
//           })}
//       </div>
//     </div>
//   );
// }

//Vị trí các thẻ CSS postion: https://hocwebchuan.com/tutorial/tut_css_position.php

//Login với gmail từ khóa firebase ui github >> chọn cái 10 chọn ..wrap: https://github.com/firebase/firebaseui-web-react

//Nối mảng 1 - nhiều mongoose: https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2

//Sửa lỗi deploy reactjs,và phải thêm CI= npm run build: https://stackoverflow.com/questions/72611536/netlify-build-failed-for-npm-error-in-react-app
//Video hướng dẫn deploy netlify: https://www.youtube.com/watch?v=R65aFh-Dstw
//câu lệnh: 1. npm run build, 2. cài , 3. chọn tài khoản tên, 4 đường dẫn ./build
//Lỗi chữ in hoa và chữ thường, khi up lên git ko hiểu nên netlify cũng ko hiểu (chú ý)

//Lưu tạm
// REACT_APP_API_URL=https://shop-anything.herokuapp.com
// REACT_APP_DOMAIN=http://localhost:3000

//Link fix lỗi đường dẫn deploy netlify: https://www.youtube.com/watch?v=PQNmNqTY954
//Khi login bằng gmail , deploy có domain mới cần phải thêm vào Firebase, chỗ Authencation >> Domain >> add domain

//Các mẫu boder css đẹp: https://getcssscan.com/css-box-shadow-examples

//Sửa lỗi upload ảnh trên antd (để nó ko gửi ảnh lên máy chủ) thêm cái thuộc tính như dưới đây
// beforeUpload={() => {
//   return false;
// }}

//Các bước cài 1 nodejs:
//1: cài node và vào cmd một thư mục mới: npm i
//2: tạo thư mục gốc: index.js
//3: cài: express
//4: cài nodemon để tự động chạy khi save, trong package.js cấu hình để gõ npm start nó chạy thư mục gốc
// "scripts": {
//   "start": "nodemon --inspect src/index.js",
// },
//5: cài mongoose để kết nối với mongodb, chạy db
//6: thêm route, thêm json: app.use(express.json());

//Bỏ Params: https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6

//Sửa lỗi khi deploy netlify bị lỗi các thư viện npm:
//B1: thêm file .npmrc vào thư mục gốc reactjs
//B2: thêm vào: legacy-peer-deps=true

//Tạo thong báo đẩy với socket.io: https://novu.co/blog/live-event-alert-system/

//Chỉnh thời gian theo timezone và định dạng
// b1 cài: npm i moment-timezone
// const moment = require('moment-timezone')
// const date = moment.tz('Asia/Ho_Chi_Minh').format("HH:mm DD:MM:yyyy")

//Cuộn 1 phần tử lên đầu trang trong 1 thẻ div con: https://codepen.io/rebosante/pen/eENYBv

//Đầu trang bên ngoài: document.getElementById('yourDivID').scrollIntoView();

//Phát hiện phần tử khi cuộn trang: https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
//Amination CSS: https://toidicode.com/tao-chuyen-dong-animation-trong-css3-200.html
//Sửa lỗi thu thập thông tin thẻ meta og: đẻ lấy hình ảnh, mô tả khi share link lên fb: https://developers.facebook.com/tools/debug
//Xóa URL ko còn tồn tại trên web khỏi google search console: https://www.google.com/webmasters/tools/removals
//Video tạo dự án Nodejs cơ bản dễ hiểu: https://www.youtube.com/watch?v=gjGVE0jdj3o
//Học về Genneric TypeScript: https://yeulaptrinh.vn/bai-15-typescript-generic/
//Sự khác nhau giữa Type và Interface trong TypeScript: https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
//Scroll slider: https://codepen.io/rmody3/pen/EXObmR
//transform 3d: https://3dtransforms.desandro.com/carousel | https://dev.to/shantanu_jana/3d-image-slider-using-html-css-328b
//Thẻ marquee di chuyển chữ tự động: https://viettuts.vn/html/the-marquee-trong-html
//Cài  Slick Carousel (cái này kéo thả ảnh được đỡ phải code js) cho typescript : npm install --save @types/react-slick
//Trang Slick: https://react-slick.neostack.com/
//zoom ảnh với  react-zoom-pan-pinch: https://github.com/prc5/react-zoom-pan-pinch?ref=morioh.com&utm_source=morioh.com
//tắt lỗi typescripe: https://bobbyhadz.com/blog/typescript-is-declared-but-its-value-is-never-read
//Mã icon dùng trong Conten ::before: https://fontawesome.com/v5/cheatsheet?from=io
//Link Fontawesome để dùng trong content:
{
  /* <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    /> */
}

//Truy cập mongdb từ mọi ip khác:  MongoDB Atlas-> NetworkAccess-> Edit->Allow Any
//Nhấn kéo thả quả bóng: https://javascript.info/mouse-drag-and-drop
//element.clientX: lấy so với màn hình cố định, element.pageX so với toàn bộ màn hình
//Kiến thức về React Router:
// có Browser Router dùng 99%, Hash Router,...
// Nested Route là router con, có thể gọi nội dung router con qua outlet
//  Ngoài outlet có thể gọi route con kiểu <Routes></Routes> trong chính router con đó
//  điệu kiện kiểu abc/* để nó có thể nhận cái gì đó ở sau
// outlet có thể truyền vào prop là context, gọi lại dùng useOutletContext gọi trong componentcuar của route con
// Navlink khác link là có prop 'active' - gọi dạng {{active}} trong style và class
// Trong link/navlink có replace để thay thế bỏ cái history của trang, end để khi router con active thì router mẹ bỏ active
// Trong routes chính thì /* để lấy những trang ko tồn tại để notfound
// Navigate của hook useNavigate để chuyển trang, navigate(-1) để quay lại trang liền kề trước đó
//  Navigate(-1, {replace}) tương tự replace trên,
//  Navigate('/home', {state: "cái gì đó"}) để truyền state vào trang '/home' gọi lại qua useLocation
// Có thể fix cứng 1 routes bằng cách thêm thuộc tính location='/gido' trong thằng rouses
// Lấy các giá trị query kiểu ?ten=bac&namsinh=2000 trên link qua thư viện: query-string hoặc có cách khác nhưng hơi rắc rối tí
// async/awaite khác promise: https://topdev.vn/blog/6-ly-do-asyncawait-cua-javascript-danh-bai-promises/
// Trang lấy API có sẵn: https://reqres.in/
//Để kéo slick tùy ý thêm: swipeToSlide: true,

// Hiệu ứng gõ chữ
// let element = document.getElementById('typing-effect')
// let text = `Ngoài ra còn nhiều mẫu khác và theo yêu cầu thiết kế từ gia chủ`
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// const handleText = async () => {
//   for (let i = 0; i < text.length; i++) {
//     element.textContent += text[i]
//     await sleep(88)
//   }
// }

// handleText()
// setInterval(() => {
//   element.textContent = ''
//   handleText()
// }, 8888)
// Đóng hiệu ứng gõ chữ

//Cài android studio 1 là để kết nối máy tính với điện thoại trong việc lập trình mobile android
// thứ 2 để dùng máy ảo trên android studio luôn
// để kết nối dc với điện thoại thì cần vào mã điện thoại nhấn 7 lần để có chế độ cho nhà phát triển, rồi bật sửa lỗi USB và chỉ phải thêm đường dẫn path thồi
// còn với máy ảo android studio cần thêm biến môi trường mới, cài HAXM bằng cách xóa HAXM trên máy nếu lỗi tím đến tên này để xóa : "Intel Hardware Accelerated Execution Manager" hoặc "Intel HAXM"
// xóa rồi cài lại trên android studio là cái x86, rồi cài android API 33
// xong vào tạo máy ảo rồi chạy lên là xong
// lúc đó vào react native gõ: npm run android >> chọn a là nó hiển thị à

//cài react native thì không cần cài cli nào hết chỉ cần gõ: npx react-native init TenDuAn
//nó cài cả typescript, eslint, prettier cho luôn
