//  const languages = ['C', 'C++', 'java', 'Python' ];
//  languages.forEach((item, index,) =>{console.log
// (index, items)}
//  )
// const pesrson = {
    // name: 'vicky',
    // age: '21',
    // email: 'null'
    // 
// };
// 
// pesrson.name = 'New Name';
// pesrson.email = 'gbs.eamil.com';
// console.log(pesrson['name']);

// const pesrson = {
    // Name: 'vicky',
// 
    // age: '21',
    // experience: [
        // {
            // company: 'company experion',
            // years: 2
// 
        // },
        // {
            // company: 'company dlf',
            // years: 5
// 
        // }
    // ]
// };
// pesrson.experience.forEach(exp=>console.log(exp.company));
 

// const m1 = [
    // [1, 2],
    // [3, 4]
// ]
// console.log(m1)

// setTimeout(()=>{
    // console.log('code worked!');
// 
// },5000);

// setInterval(()=>{
    // console.log('code worked!');
// 
// },5000);
// 
// console.log('completed');

// const student = {
    // name: 'student 1' ,
    // mark1: 40,
    // mark2: 50,
    // total: function(){
        // constextramark = 5;
        // console.log(this.mark1 + this.mark2 + extramark);
    // }
// };
// 
// student.total();

// const student = {
    // name: 'student 1' ,
    // mark1: 40,
    // mark2: 50
// };
// 
// const copy = Object.assign({age:21},student);
// copy.name = 'New name';
// console.log(student);
// console.log(copy);


// const student = {
    // name: 'student 1',
// };
// 
// const mark = {
    // mark1: 43,
    // mark2: 45
// }
// 
// const copy = Object.assign({}, student, mark);
// console.log(copy);

// const student = {
    // fullName: 'joe vicky',
    // mark1: 40,
    // mark2: 40
// };
// const {fullName, mark1} = student;
// console.log(fullName);

const student = {
    fullName: 'joe vicky',
    mark1: 40,
    mark2: 40
};

const values = Object.values(student);
values.forEach(value=>{
    console.log(value);
});


