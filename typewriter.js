
let typerwriter = (sentence, num) => {
  sentence += '\n';
  for (const char of sentence) {
    setTimeout(()=>process.stdout.write(char), num);
    num += 50;
  }
};
typerwriter("hello there from lighthouse labs",50);
