// type User = {
//      age:number,
//     name:string
// }
// const user :Readonly <User> ={
//     age:21,
//     name:"Rajesh"
// }
//Record And Map
type User = Record<string,{age:number,name:string}> //Record <string,User>
const user :User = {
    "raaq@123":{age:21,name:"harish"},
    "raaaq@123": {age:42 , name : "bsnda"}
}
