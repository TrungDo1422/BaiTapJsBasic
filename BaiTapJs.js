//bai 1
function giaiThua(n) {
  if (n < 1 || n > 20) return 0;
  let element = 1;
  for (let i = 1; i <= n; i++) {
    element = element * i;
  }
  return element;
}
console.log(giaiThua(21));

//bai 2
function daoChuoi(s) {
  return s.split('').reverse().join('');
}

console.log(daoChuoi('program'));

//bai 3
function run(name, job) {
  const person = {
    name: '',
    job: '',
    printIntroduction: function () {
      console.log(`My name is ${this.name}.My job is ${this.job}`);
    },
  };
  const me = Object.create(person);
  me.name = name;
  me.job = job;

  me.printIntroduction();
}

run('Trung', 'developer');

//bai 4
function run() {
  var person = {
    firstName: 'Trung',
    lastName: 'Vuong',
    age: 50,
    eyeColor: 'blue',
  };
  console.log(Object.values(person));
}
run();
