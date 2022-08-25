// const mail="mosh@gmail.com";
// const pass=12345;

// function getIdByAuth(mail,pass,successCallback,errorCallback){
//     setTimeout(()=>{
//         if(mail==="mosh@gmail.com" && pass===12345){
//             const data={id:3348};
            
//             return successCallback(data);
//         }else{
//             return errorCallback({err:"Auth failed"})
//         }
//     },5000)
// }

// function getStudentList(id,successCallback,errorCallback){
//   setTimeout(()=>{
//     if(id===3348){
//         return successCallback(["Aysun","Konul","musfiq","Huseyn"])
//     }
//     else{
//         return errorCallback( {err:"No student list found"})
//     }
//   },2000)
// }

// function getStudentDetails(name,successCallback,errorCallback){
//     setTimeout(() =>{
//         if(name){
//             return successCallback({name,age:20,slogan:"This is man "})
//         }
//         else{
//             return errorCallback( {err:"No details found"})
//         }
//     },3000)
// }

// getIdByAuth(mail,pass,(data)=>{
//     getStudentList(data , (StudentList)=>{
//     getStudentDetails(StudentList[0],(details)=>{
//         console.log(details)
//     })},
//     (err)=> console.log("This is error for studenlist",err)
// )},
// (err)=> console.log("This is error",err)

// );
