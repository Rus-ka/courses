
"use strict";

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date().toLocaleString();
  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName + ', зарегистрирован ' + this.regDate;
  }
}

function UserList() {
  this.users = [];
  this.add = function (User) {
  this.users.push(User)
}
  this.getAllUsers = function (){
    for (let i =0; i < this.users.length; i++)
      console.log(this.users[i].getFullName())
    }
};

(function reg () {
let count = 0;
let userList = new UserList();
for (let i = 0; count == 0; i++){
  let entry = prompt("Введите ваше Имя и Фамилию через пробел","");
	if(entry != null){
		let fullName = entry.split(' ');
    let firstName = fullName[0];
    let lastName = fullName[1];
    let regDate = Date();
  	if(fullName[0] == undefined || fullName[1] == undefined || fullName[0] == "" || fullName[1] == "" ){
		  alert('Проверьте написание фамилии и имени:\n-между Имя и Фамилия должен быть пробел\n-Имя и Фамили не могут быть не заполнены');
		} else{
      let newUser = new User(firstName,lastName,regDate);
			userList.add(newUser);
      alert('Пользователь ' + fullName[0] + ' ' + fullName[1] + ' зарегистрирован '+ regDate)
		}
	} else{
		count++;
    userList.getAllUsers();
	}
}
}) ();
