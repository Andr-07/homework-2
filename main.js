//Первое задание

var age;
age = 3;

if (age>1 && age<17) {
  console.log("Учеба");
}
if (age>18 && age<64) {
  console.log("Работа");
}
if (age>64 && age<101) {
  console.log("Пенсия");
}

//Второе задание

for (var i=1; i<10; i++) {
switch(i) {
case 1: console.log(i+" разработчик");
break;
case 2:
case 3:
case 4:console.log(i+" разработчика");
break;
case 5:
case 6:
case 7:
case 8:
case 9:console.log(i+" разработчиков");
break;
}
}
