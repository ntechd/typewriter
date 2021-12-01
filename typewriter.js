const sentence = "hello there from lighthouse labs";
i=1;
for (const char of sentence) {

	setTimeout(() => {
  process.stdout.write(char);
}, 50*i) ; 
	i++;
}
setTimeout(()=> {
	console.log();
},50*i)
