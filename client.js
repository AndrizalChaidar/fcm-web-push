const config = process.env.FCM;
const str = JSON.stringify(config || "");
console.log(str);
console.log(JSON.parse(str));
// document
//   .getElementById("myForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();
//     await getData(e.target);
//   });
