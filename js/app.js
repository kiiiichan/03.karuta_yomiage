
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
  const repeat_button = document.getElementById("repeat_button");
  const anotherhint_button = document.getElementById("anotherhint_button");
  let items = [
    { sound: ["../audio/	1-1	.mp3" , "../audio/	1-2	.mp3" , "../audio/	1-3	.mp3" , "../audio/	1-4	.mp3" , "../audio/	1-5	.mp3" , "../audio/	1-6	.mp3" , "../audio/	1-7	.mp3" , "../audio/	1-8	.mp3"] , q: 	8	 },
    { sound: ["../audio/	2-1	.mp3" , "../audio/	2-2	.mp3" , "../audio/	2-3	.mp3" , "../audio/	2-4	.mp3" , "../audio/	2-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	3-1	.mp3" , "../audio/	3-2	.mp3" , "../audio/	3-3	.mp3" , "../audio/	3-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	4-1	.mp3" , "../audio/	4-2	.mp3" , "../audio/	4-3	.mp3" , "../audio/	4-4	.mp3" , "../audio/	4-5	.mp3" , "../audio/	4-6					.mp3"] , q: 	6	 },
    { sound: ["../audio/	5-1	.mp3" , "../audio/	5-2	.mp3" , "../audio/	5-3	.mp3" , "../audio/	5-4	.mp3" , "../audio/	5-5							.mp3"] , q: 	5	 },
    { sound: ["../audio/	6-1	.mp3" , "../audio/	6-2	.mp3" , "../audio/	6-3	.mp3" , "../audio/	6-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	7-1	.mp3" , "../audio/	7-2	.mp3" , "../audio/	7-3											.mp3"] , q: 	3	 },
    { sound: ["../audio/	8-1	.mp3" , "../audio/	8-2	.mp3" , "../audio/	8-3	.mp3" , "../audio/	8-4									.mp3"] , q: 	4	 },
    { sound: ["../audio/	9-1	.mp3" , "../audio/	9-2	.mp3" , "../audio/	9-3	.mp3" , "../audio/	9-4									.mp3"] , q: 	4	 },
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
    randnum = Math.floor( Math.random() * items[i].q );
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
  itemShuffle(items);
    console.log("shuffled");
    
  start_button.addEventListener("click", () => { 
    console.log("started");
    itemNo=itemNo+1;
    counter.textContent = itemNo+1 + "／47枚";
    console.log(itemNo);    
    yomiage();
    console.log("OK");
  })
  
  repeat_button.addEventListener("click", () => { 
    console.log("repeated");
 　　let yomiageSound = new Audio(items[itemNo].sound[randnum]);
    yomiageSound.play();
    console.log("OK");
  })

  anotherhint_button.addEventListener("click", () => { 
    console.log("anotherhint");
    
    if (randnum == items[i].q-1) {
      randnum=0;

    } else {
      randnum=randnum+1;
    }
    
　　let yomiageSound = new Audio(items[itemNo].sound[randnum]);
    yomiageSound.play();
  })

  
}
