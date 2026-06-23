// function countlength(words){

//     let count = 0;

//     for(let word of words) {

//         if(word.length>5){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countlength(["chaddnn", "sarthak"]))



// //.

// const skills = ["HTML", "CSS", "JavaScript"];

// for (let i = 0; i < skills.length; i++) {
//   console.log(skills[i]);
// }

// //.

// //Cleaner:

// const skills = ["HTML", "CSS", "JavaScript"];

// for (let skill of skills) {
//   console.log(skill);
// }


// const array = [ "applee", "bannana", "orange"];

// const newarray = array.map(item => item + "okay");

// const filterarray = array.filter(word => word.endsWith("lee") );
// console.log(newarray);

// console.log(filterarray);

// console.log(newarray.includes("appleeokay"));




// const numbers = [10, 5 , 20 ,99 ];

// let total = 0;
//  for (let num of numbers){
//     total= total+num;
//  }
// // const total = numbers.reduce((sum,num) => {return sum +num;}, 0);
// console.log(total);


// numbers.sort((a,b) => b-a); 

// console.log(numbers);


// const users = [
//   { name: "Aman", active: true },
//   { name: "Simran", active: false },
//   { name: "Raj", active: true }
// ];

// //const activeusers = users.filter(activeuser => activeuser.active === true);
// const username = users.map(usr => usr.name);



// console.log(username);



async function submitcontactform(formdata){

    try{
        const response = await fetch("/contact", {method: POST, header:{
            "Content-type": "application/json"
        }, body: JSON.stringify(formData)});

        if(!response.ok){
            throw new Error("Form submission failed");
        }

        const result = await response.json();

        return result;
    }   catch(error) {
        console.log(error.message);
        return null
    }

}