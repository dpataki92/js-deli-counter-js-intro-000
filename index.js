function takeANumber (line, name) {

  line.push(name);

  let length = line.length;

  return `Welcome, ${name}. You are number ${length} in line.`

}


function nowServing (line) {

  if (line === undefined) {return 'There is nobody waiting to be served!'}
  else {
    let first = line[0];
    line.shift();
    return first;
  }
  }

  function currentLine (line) {

    if (line === undefined) {return `The line is currently empty.`}

    let str  = `The line is currently: `;

    for (let i = 1; i <= line.length; i++) {

      i === line.length ? str += `${i}. ${line[i]}` : str += `${i}. ${line[i]}, ` }

    return str;
    }
