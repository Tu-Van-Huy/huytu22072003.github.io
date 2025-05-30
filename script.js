// const student = {
//     "name": "Huy",
//     "age": 20,
//     "abc-xyz": "bla bla bla",
//     show(){
//         console.log(this.name);
//         console.log(this.age);
//     }

// };


// student.address = "Cần thơ";
// student.ThongBao = function() {
//     console.log("Thông báo");
// };


// student.show();

// // const x = `{
// // "name": "Huy",
// // "age": 20  }`

// // const obj = JSON.parse(x);

// // console.log(obj.name);
// // console.log(obj.age);



// const btnGetStudent = document.getElementById("btnGetStudent");

// btnGetStudent.addEventListener("click", function() {
//     const name = "Huy";
//     const age = 20;
//     document.getElementById("student").innerText = `Tên: ${name}, Tuổi: ${age}`;
// });

// // let txt = document.getElementById("txt");
// // txt.innerText= `Tên: ${student.name}, Tuổi: ${student.age}`;

//học tới mảng??
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

//gọi mảng số chẵn bằng 1 cách khác của anh Tín nên lưu ý

const arr1 = [1, 2, 3, 4, 5];

const chan = [];
for (let i = 0; i < arr.length; i++) {

    if (arr1[i] % 2 == 0) {
        chan.push(arr1[i]);
    }
}
console.log(chan);


//phong cách mảng mà js đã hỗ trợ 
const chan2 = arr.filter(x => x % 2 == 0);
console.log(chan2);

const le2 = arr.filter(x => x % 2 !== 0);
console.log(le2);
//học về map ( để thay đổi dữ liệu trên mảng gốc)
const c = arr.map(i => i + 10);
console.log(c);