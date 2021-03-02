x = 42

const summationFor = (list)=>{
  let sum = 0;
  for(let i = 0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
}

const summationForEach = (list)=>{
  let sum = 0;
  list.forEach((i) => sum+=i);
  return sum;
}

const summationReduce = (list)=>{
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return list.reduce(reducer, 0);
}

const decorate = (list)=>{
  return list.map(
    (str) => '-<< ' + str + ' >>-'
  );
}

module.exports = {
  summationFor,
  summationForEach,
  summationReduce,
  decorate
};
