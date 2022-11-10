
//ページ読みこんだタイミングで実施(全体)

  /*表紙ページを表示*/
  /*問題順をシャッフル*/
  /*スタートボタンを押されたら*/
    /*itemの中のどの音声を読むかを決めて読み上げる*/
    /*スタートボタンの文言を「NEXT」に変更*/
    /*1問目の音声を読み上げ*/
  /*もういちどボタンを押されたら*/
    /*今の問題をもう一度読む
  /*NEXTボタンを押されたら*/
    /*次の問題に進んで読む*/
  /*最後の問題になったら*/
    /*NEXTボタンの文言を「おしまい」に変更*/
    /*もういちどボタンを非表示に*/
        
window.onload = function(){
  
  //　変数定義
  const start_button = document.getElementById("start_button");
  const logo_button = document.getElementById("logo_button");
  const repeat_button = document.getElementById("repeat_button");
  const anotherhint_button = document.getElementById("anotherhint_button");
  let items_rekisi = [
    { sound: ["../audio_rekisi/	1-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	2-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	3-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	4-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	5-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	6-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	7-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	8-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	9-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	10-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	11-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	12-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	13-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	14-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	15-1	.m4a" , "../audio_rekisi/	15-2	.m4a" , "../audio_rekisi/	15-3			.m4a"] , q: 	3	 },
    { sound: ["../audio_rekisi/	16-1	.m4a" , "../audio_rekisi/	16-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	17-1	.m4a" , "../audio_rekisi/	17-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	18-1	.m4a" , "../audio_rekisi/	18-2	.m4a" , "../audio_rekisi/	18-3			.m4a"] , q: 	3	 },
    { sound: ["../audio_rekisi/	19-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	20-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	21-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	22-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	23-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	24-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	25-1	.m4a" , "../audio_rekisi/	25-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	26-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	27-1	.m4a" , "../audio_rekisi/	27-2	.m4a" , "../audio_rekisi/	27-3			.m4a"] , q: 	3	 },
    { sound: ["../audio_rekisi/	28-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	29-1	.m4a" , "../audio_rekisi/	29-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	30-1	.m4a" , "../audio_rekisi/	30-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	31-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	32-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	33-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	34-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	35-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	36-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	37-1	.m4a" , "../audio_rekisi/	37-2	.m4a" , "../audio_rekisi/	37-3			.m4a"] , q: 	3	 },
    { sound: ["../audio_rekisi/	38-1	.m4a" , "../audio_rekisi/	38-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	39-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	40-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	41-1	.m4a" , "../audio_rekisi/	41-2	.m4a" , "../audio_rekisi/	41-3	.m4a" , "../audio_rekisi/	41-4	.m4a"] , q: 	4	 },
    { sound: ["../audio_rekisi/	42-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	43-1	.m4a" , "../audio_rekisi/	43-2	.m4a" , "../audio_rekisi/	43-3	.m4a" , "../audio_rekisi/	43-4	.m4a"] , q: 	4	 },
    { sound: ["../audio_rekisi/	44-1	.m4a" , "../audio_rekisi/	44-2	.m4a" , "../audio_rekisi/	44-3	.m4a" , "../audio_rekisi/	44-4	.m4a"] , q: 	4	 },
    { sound: ["../audio_rekisi/	45-1	.m4a" , "../audio_rekisi/	45-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	46-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	47-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	48-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	49-1	.m4a" , "../audio_rekisi/	49-2	.m4a" , "../audio_rekisi/	49-3	.m4a" , "../audio_rekisi/	49-4	.m4a"] , q: 	4	 },
    { sound: ["../audio_rekisi/	50-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	51-1	.m4a" , "../audio_rekisi/	51-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	52-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	53-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	54-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	55-1	.m4a" , "../audio_rekisi/	55-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	56-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	57-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	58-1	.m4a" , "../audio_rekisi/	58-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	59-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	60-1	.m4a" , "../audio_rekisi/	60-2					.m4a"] , q: 	2	 },
    { sound: ["../audio_rekisi/	61-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	62-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	63-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	64-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	65-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	66-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	67-1							.m4a"] , q: 	1	 },
    { sound: ["../audio_rekisi/	68-1							.m4a"] , q: 	1	 },
    ]
    
  let items_tiri = [
    { sound: ["../audio/	01-1	.mp3" , "../audio/	01-2	.mp3" , "../audio/	01-3	.mp3" , "../audio/	01-4	.mp3" , "../audio/	01-5	.mp3" , "../audio/	01-6	.mp3" , "../audio/	01-7	.mp3" , "../audio/	01-8	.mp3"] , q: 	8	 },
    { sound: ["../audio/	02-1	.mp3" , "../audio/	02-2	.mp3" , "../audio/	02-3	.mp3" , "../audio/	02-4	.mp3" , "../audio/	02-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	03-1	.mp3" , "../audio/	03-2	.mp3" , "../audio/	03-3	.mp3" , "../audio/	03-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	04-1	.mp3" , "../audio/	04-2	.mp3" , "../audio/	04-3	.mp3" , "../audio/	04-4	.mp3" , "../audio/	04-5	.mp3" , "../audio/	04-6					.mp3"] , q: 	6	 },
    { sound: ["../audio/	05-1	.mp3" , "../audio/	05-2	.mp3" , "../audio/	05-3	.mp3" , "../audio/	05-4	.mp3" , "../audio/	05-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	06-1	.mp3" , "../audio/	06-2	.mp3" , "../audio/	06-3	.mp3" , "../audio/	06-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	07-1	.mp3" , "../audio/	07-2	.mp3" , "../audio/	07-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	08-1	.mp3" , "../audio/	08-2	.mp3" , "../audio/	08-3	.mp3" , "../audio/	08-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	09-1	.mp3" , "../audio/	09-2	.mp3" , "../audio/	09-3	.mp3" , "../audio/	09-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	10-1	.mp3" , "../audio/	10-2	.mp3" , "../audio/	10-3	.mp3" , "../audio/	10-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	11-1	.mp3" , "../audio/	11-2	.mp3" , "../audio/	11-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	12-1	.mp3" , "../audio/	12-2	.mp3" , "../audio/	12-3	.mp3" , "../audio/	12-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	13-1	.mp3" , "../audio/	13-2	.mp3" , "../audio/	13-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	14-1	.mp3" , "../audio/	14-2	.mp3" , "../audio/	14-3	.mp3" , "../audio/	14-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	15-1	.mp3" , "../audio/	15-2	.mp3" , "../audio/	15-3	.mp3" , "../audio/	15-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	16-1	.mp3" , "../audio/	16-2	.mp3" , "../audio/	16-3	.mp3" , "../audio/	16-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	17-1	.mp3" , "../audio/	17-2	.mp3" , "../audio/	17-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	18-1	.mp3" , "../audio/	18-2	.mp3" , "../audio/	18-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	19-1	.mp3" , "../audio/	19-2	.mp3" , "../audio/	19-3	.mp3" , "../audio/	19-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	20-1	.mp3" , "../audio/	20-2	.mp3" , "../audio/	20-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	21-1	.mp3" , "../audio/	21-2	.mp3" , "../audio/	21-3	.mp3" , "../audio/	21-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	22-1	.mp3" , "../audio/	22-2	.mp3" , "../audio/	22-3	.mp3" , "../audio/	22-4	.mp3" , "../audio/	22-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	23-1	.mp3" , "../audio/	23-2	.mp3" , "../audio/	23-3	.mp3" , "../audio/	23-4	.mp3" , "../audio/	23-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	24-1	.mp3" , "../audio/	24-2	.mp3" , "../audio/	24-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	25-1	.mp3" , "../audio/	25-2	.mp3" , "../audio/	25-3	.mp3" , "../audio/	25-4	.mp3" , "../audio/	25-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	26-1	.mp3" , "../audio/	26-2	.mp3" , "../audio/	26-3	.mp3" , "../audio/	26-4	.mp3" , "../audio/	26-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	27-1	.mp3" , "../audio/	27-2	.mp3" , "../audio/	27-3	.mp3" , "../audio/	27-4	.mp3" , "../audio/	27-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	28-1	.mp3" , "../audio/	28-2	.mp3" , "../audio/	28-3	.mp3" , "../audio/	28-4	.mp3" , "../audio/	28-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	29-1	.mp3" , "../audio/	29-2	.mp3" , "../audio/	29-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	30-1	.mp3" , "../audio/	30-2	.mp3" , "../audio/	30-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	31-1	.mp3" , "../audio/	31-2	.mp3" , "../audio/	31-3	.mp3" , "../audio/	31-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	32-1	.mp3" , "../audio/	32-2	.mp3" , "../audio/	32-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	33-1	.mp3" , "../audio/	33-2	.mp3" , "../audio/	33-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	34-1	.mp3" , "../audio/	34-2	.mp3" , "../audio/	34-3	.mp3" , "../audio/	34-4	.mp3" , "../audio/	34-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	35-1	.mp3" , "../audio/	35-2	.mp3" , "../audio/	35-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	36-1	.mp3" , "../audio/	36-2	.mp3" , "../audio/	36-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	37-1	.mp3" , "../audio/	37-2	.mp3" , "../audio/	37-3	.mp3" , "../audio/	37-4	.mp3" , "../audio/	37-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	38-1	.mp3" , "../audio/	38-2	.mp3" , "../audio/	38-3	.mp3" , "../audio/	38-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	39-1	.mp3" , "../audio/	39-2	.mp3" , "../audio/	39-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	40-1	.mp3" , "../audio/	40-2	.mp3" , "../audio/	40-3	.mp3" , "../audio/	40-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	41-1	.mp3" , "../audio/	41-2	.mp3" , "../audio/	41-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	42-1	.mp3" , "../audio/	42-2	.mp3" , "../audio/	42-3	.mp3" , "../audio/	42-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	43-1	.mp3" , "../audio/	43-2	.mp3" , "../audio/	43-3	.mp3" , "../audio/	43-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	44-1	.mp3" , "../audio/	44-2	.mp3" , "../audio/	44-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	45-1	.mp3" , "../audio/	45-2	.mp3" , "../audio/	45-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	46-1	.mp3" , "../audio/	46-2	.mp3" , "../audio/	46-3	.mp3" , "../audio/	46-4	.mp3" , "../audio/	46-5	.mp3" , "../audio/	46-6					.mp3"] , q: 	6	 },
    { sound: ["../audio/	47-1	.mp3" , "../audio/	47-2	.mp3" , "../audio/	47-3	.mp3" , "../audio/	47-4									.mp3"] , q: 	4	 },
    ];
  const logo = document.getElementById("logo_button");
  const counter = document.getElementById("counter");
//  let yomiage = new Audio(itemsounds[i,randnum]);
  let itemNo = -1;
  var i=1;
  var randnum;
  var randq;
  
  //変数定義終わり
  
  // 関数１．配列をシャッフル（ChallengeClass）
  let itemShuffle = (items) => {
      for (let i = items.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        // 配列の数値を入れ替える
        [items[i], items[rand]] = [items[rand], items[i]]
      }
      return items;
  };
  

  
  //　関数２．X番目の項目からランダムに読み上げる
  let yomiage = () => {
    
    randq = items[itemNo].q;
    randnum = Math.floor( Math.random() * items[itemNo].q );
 　　let yomiageSound = new Audio(items[itemNo].sound[randnum]);
 　　
    yomiageSound.play();

/*var playAudio = function(itemNo){
    var audio = new Audio();
    randq = items[itemNo].q;
    randnum = Math.floor( Math.random() * randq);/*itemの中のどの音声を選ぶかのNoがrandnum*/
/*    audio.src = items[i,randnum];
    items[i,randnum].play();*/
  };
    
    

  
 //  関数．min-max間のランダムな整数を返す
 
 function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }
 

  
  //★★★プログラム

  logo.textContent = "地理かるた"
  let items = items_tiri; 
  itemShuffle(items);
  
  //★歴史と地理の入れ替え
  
  logo_button.addEventListener("click", () => {   
    if (logo.textContent == "地理かるた") {
      logo.textContent = "歴史かるた" 
      items = items_rekisi
    } else {
      logo.textContent = "地理かるた"
      items = items_tiri
    }
    
    itemNo = -1;
    i=1;
    itemShuffle(items);
  })
    
    
  start_button.addEventListener("click", () => { 
    console.log("started");
    itemNo=itemNo+1;
    counter.textContent = itemNo+1 + "／" + items.length + "枚";
    console.log(itemNo);    
    yomiage();
    console.log("OK");
    console.log(itemNo,randnum,items[itemNo].sound[randnum]);
  })
  
  repeat_button.addEventListener("click", () => { 
    console.log("repeated");
 　　let yomiageSound = new Audio(items[itemNo].sound[randnum]);
    yomiageSound.play();
    console.log("OK");
  })

  anotherhint_button.addEventListener("click", () => { 
    console.log("anotherhint");
    
    if (randnum == items[itemNo].q-1) {
      randnum=0;

    } else {
      randnum=randnum+1;
    }
    
　　let yomiageSound = new Audio(items[itemNo].sound[randnum]);
    yomiageSound.play();
  })

  
}

/*github

・リモートリポジトリに push
　- cd ~/environment/gitsample ： gitsample に移動
  - git status ： 最後のコミットから変更があったファイルを確認
  - git add トラッキング状態にしたいファイル名　：　このファイルをトラッキング状態にするよ
  - git add .　：　このディレクトリ配下すべてのファイルをトラッキング状態にするよ（コミットしてないファイルすべてをする場合もこれでOK）
  - git commit -m "コミットメッセージ"　：　どういう理由でコミットしたのかをコメントで入力。
　  ※ -m　はオプション
  - git log　：　コミットしたファイルや履歴の確認
(　- git remote add origin git@github.com:アカウント名/リポジトリ名.git ： 新しいローカルリポジトリを利用するときに必要なコマンド)
　- git push origin main　（旧：git push -u origin master）　：　push するために入力するコマンド
　- ～～object　：　X done　みたいに出たら完了
　- GitHubのリポジトリを見るとできてるはず*/
