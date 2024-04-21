// interface User {
//     name:string,
//     age:number,
// }
// function sumOfAge(user1:User,user2:User){
//     return user1.age + user2.age
// }
// sumOfAge({
//     name:'Taro',
//     age:54
// },{
//     name:"Rato",
//     age:57
// })
interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
// Here i just want to update name,age,email
type UpdateProps = Pick<User,'name'|'age'|'email'>
type UpdatePropsData = Partial<UpdateProps>
function updateUser(updateProps:UpdatePropsData){
    console.log(updateProps.name + " "+ updateProps.age + " " + updateProps.email)
}
updateUser({
    name:"rajesh"
})