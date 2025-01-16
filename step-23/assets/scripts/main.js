//API: https://pokeapi.co/api/v2/pokemon/{id or name}/
const pokeAPI1 = 'https://pokeapi.co/api/v2/pokemon/';
const pokeAPI2 = 'https://pokeapi.co/api/v2/';
const pokeAPI3 = 'https://pokeapi.co/api/v2/pokemon-species/';
const pokeAPI4 = 'https://pokeapi.co/api/v2/type/';

//要素の取得
const pokeSearch = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('#pk-result');

//<input type="text" name="pokeName" placeholder="Name or Number">にポケモンの名前か番号を入力して、<button type="submit">Get Data</button>をクリックすると、そのポケモンの情報が<div class="result" id="pk-result"></div>に表示、挿入されるようにしてください。
btn.addEventListener('click', async (event) => {
    event.preventDefault();  // ページのリロードを防ぐ
    try {
        result.innerHTML = ''; // ここで結果をクリア

        //pokeAPI1
        const info = pokeSearch.value.toLowerCase(); // 入力されたポケモンの名前または番号を取得
        const response = await fetch(`${pokeAPI1}${info}`); // URLに追加
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
