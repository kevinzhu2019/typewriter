const sentence = "hello there from lighthouse labs";
let i = 0;
const typewriter = function(str) {
  if(i < str.length) {
    for(const char of str) {
      setTimeout(function() {
        process.stdout.write(char);
      }, 300*i)
      i++;
    }
  }
}
typewriter(sentence);
