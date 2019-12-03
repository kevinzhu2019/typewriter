// const sentence = "hello there from lighthouse labs";
// let i = 0;
// const typewriter = function(str) {
//   if(i < str.length) {
//     for(const char of str) {
//       setTimeout(function() {
//         process.stdout.write(char);
//       }, 300*i)
//       i++;
//     }
//   }
//   console.log("\n");
// }
// typewriter(sentence);

const sentence = "hello there from lighthouse labs";
const typewriter = function(takeinStr) {
  let i = 0;
  for (const char of takeinStr) {
    setTimeout(() => {
      process.stdout.write(char);
    }, i * 300);
    i ++;
  }
}

typewriter(sentence);