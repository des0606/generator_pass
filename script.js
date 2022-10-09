let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];
const compareRandom = () => Math.random() - 0.5;

const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
  let arr = [];
  if (document.getElementById('arr_EN').checked) arr = arr.concat(arr_EN);
  if (document.getElementById('arr_en').checked) arr = arr.concat(arr_en);
  if (document.getElementById('arr_num').checked) arr = arr.concat(arr_num);
  if (document.getElementById('arr_symb').checked) arr = arr.concat(arr_symb);

  arr.sort(compareRandom);

  let password = '';
  let passLenght = document.querySelector('#passLenght').value;

    for (let i = 0; i < passLenght; i++) {
        password += arr[randomInteger(0, arr.length - 1)];
    }

  //for (let i = 0; i < 8; i++) {
   // password += arr[randomInteger(0, arr.length - 1)];
 // }

  // let pass= '';

  // for(let a = 0; a < 100 ;a++){
  //     pass += password+' ';
  // }

  document.getElementById('result').textContent = password;
}


document.getElementById('pass_start').addEventListener('click', generatePassword);
