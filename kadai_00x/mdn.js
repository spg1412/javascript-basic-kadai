const today = new Date();

const year = today.getFullYear() -1; // Getting the Year

const month = today.getMonth() +2; // Getting the Month, adding +1 because the month starts from the number 0

const day = today.getDate() +5; // Getting the Date (day)

console.log(year + '年' + month + '月' + day + '日');