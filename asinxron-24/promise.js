const mail="mosh@gmail.com";
const pass=12345;
 //PROMISE-3 STATUSU VAR=PENDING,RESOLVE=SUCCESS,REJECT=ERROR,IDLE
//  then ve cacth a cahining deyilir
//promise all un isleme vaxti en cox vaxt alan asinxron prosese beraberdi.
function getIdByAuth(mail,pass){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(mail==="mosh@gmail.com" && pass===12345){
                const data={id:3348};
                
                return resolve(data);
            }else{
                return reject({err:"Auth failed"})
            }
        
        },2000)
    })
}

function getStudentList(id){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(id===3348){
          return resolve(["Aysun","Konul","musfiq","Huseyn"])
      }
      else{
          return reject( {err:"No student list found"})
      }
    },3000)
})
}

function getStudentDetails(name){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(name){
            return resolve({name,age:20,slogan:"This is man "})
        }
        else{
            return reject( {err:"No details found"})
        }
    },3000)

})
}

// getIdByAuth(mail,pass)
// .then(
//     data=>getStudentList(data)
//     .then(
//     studentList => console.log(studentList))
// )
// .catch(err=>console.log(err))


// getIdByAuth(mail,pass).then(data=>console.log(data)).catch(err => console.log(err))           

 Promise.all([getIdByAuth(mail,pass),getStudentList(3348),getStudentDetails("Aysun")])
 .then(data => console.log(data))
 .catch(err=> console.log(err))