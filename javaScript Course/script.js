const jonas = {
    firstName: 'izbah',
    lastName: 'basheer',
    birthyear: '27',
    hasDriverLicense: false,
    job: 'developer',
    friends: ['Allah', 'Allah', 'Allah'],
  
    //   // calcAge: function(birthyear){
    //   //   return 2037 - birthyear;
    // }
    calcAge: function () {
      return 2037 - this.birthyear;
    },
  };
  // console.log(jonas.calcAge(21));
  // above: what if i write accidently wrong arguments, this approach is not repeat yourself is also voilation
  
  // solution:below
  
  console.log(jonas.calcAge());
  