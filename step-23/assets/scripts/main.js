//API
const pokeAPI1 = 'https://pokeapi.co/api/v2/pokemon/';
const pokeAPI2 = 'https://pokeapi.co/api/v2/';
const pokeAPI3 = 'https://pokeapi.co/api/v2/pokemon-species/';
const pokeAPI4 = 'https://pokeapi.co/api/v2/type/';

//要素の取得
const pokeSearch = document.querySelector('input');
const btn = document.querySelector('button');
const rdmBtn = document.querySelector('#rdmBtn');
const result = document.querySelector('#pk-result');

//search
btn.addEventListener('click', async (event) => {
    event.preventDefault();  // ページのリロードを防ぐ
    try {
        result.innerHTML = ''; // ここで結果をクリア

        //pokeAPI1
        const info = pokeSearch.value.toLowerCase(); // 入力されたポケモンの名前または番号を取得
        const response = await fetch(`${pokeAPI1}${info}`); // URLに追加
        if (!response.ok) { // レスポンスが成功かどうかを確認
            alert('逃げられた😭😭😭'); // アラートを追加
            throw new Error('Not found.');
        }
        const pokeData = await response.json();
        console.log(pokeData);

        //表示
        result.insertAdjacentHTML('beforeend',
            `<h2 class="poke-name">${pokeData.name}</h2>
            <img class="poke-image" src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
            <p class="poke-height">Height: ${pokeData.height}</p>
            <p class="poke-weight">Weight: ${pokeData.weight}</p>`
        );
    } catch (error) {
        console.log('No data');
    }
});


//random
rdmBtn.addEventListener('click', async () => {
    try {
        result.innerHTML = ''; // ここで結果をクリア

        //pokeAPI1
        const rdmNum = Math.floor(Math.random() * 898) + 1; // ランダムな番号を取得
        const response = await fetch(`${pokeAPI1}${rdmNum}`); // URLに追加
        if (!response.ok) { // レスポンスが成功かどうかを確認
            alert('Not found😭'); // アラートを追加
            throw new Error('Not found.');
        }
        const pokeData = await response.json();
        console.log(pokeData);

        //表示
        result.insertAdjacentHTML('beforeend',
            `<h2 class="poke-name">${pokeData.name}</h2>
            <img class="poke-image" src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
            <p class="poke-height">Height: ${pokeData.height}</p>
            <p class="poke-weight">Weight: ${pokeData.weight}</p>`
        );

        // 第一世代のポケモンの場合
        if (rdmNum >= 1 && rdmNum <= 151) {
            alert('このポケモンは第一世代だ！');
        }// 第二世代のポケモンの場合
        else if (rdmNum >= 152 && rdmNum <= 251) {
            alert('このポケモンは第二世代だ！');
        }// 第三世代のポケモンの場合
        else if (rdmNum >= 252 && rdmNum <= 386) {
            alert('このポケモンは第三世代だ！');
        }// 第四世代のポケモンの場合
        else if (rdmNum >= 387 && rdmNum <= 493) {
            alert('このポケモンは第四世代だ！');
        }// 第五世代のポケモンの場合
        else if (rdmNum >= 494 && rdmNum <= 649) {
            alert('このポケモンは第五世代だ！');
        }// 第六世代のポケモンの場合
        else if (rdmNum >= 650 && rdmNum <= 721) {
            alert('このポケモンは第六世代だ！');
        }// 第七世代のポケモンの場合
        else if (rdmNum >= 722 && rdmNum <= 809) {
            alert('このポケモンは第七世代だ！');
        }// 第八世代のポケモンの場合
        else if (rdmNum >= 810 && rdmNum <= 898) {
            alert('このポケモンは第八世代だ！');
        }


    } catch (error) {
        console.log('No data');
    }
});













// btn.addEventListener('click', async () => {
//     try {
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
//       const pokeName = await response.json();
//     } catch (error) {
//       console.log('No data');
//     }
// });












































// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
