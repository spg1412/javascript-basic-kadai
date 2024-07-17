const today = new Date();

const year = today.getFullYear(); // Getting the Year

const month = today.getMonth() +1; // Getting the Month, adding +1 because the month starts from the number 0

const day = today.getDate(); // Getting the Date (day)

console.log(year + '年' + month + '月' + day + '日');
