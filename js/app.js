
//ページ読みこんだタイミングで実施(全体)
        
window.onload = function(){
  
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
    
  // 関数１．配列をシャッフル（ChallengeClass）
  let itemShuffle = (itemsounds) => {
      for (let i = itemsounds.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        // 配列の数値を入れ替える
        [itemsounds[i], itemsounds[rand]] = [itemsounds[rand], itemsounds[i]]
      }
      return itemsounds;
  };
  
  //　関数２．札を読み上げる
  
    var playAudio = function(){
    var audio = new Audio(),
    randnum = Math.floor( Math.random() * itemsounds[i].length );/*itemの中のどの音声を選ぶかのNoがrandnum*/
    audio.src = itemsounds[i,randnum];
    itemsounds[i,randnum].play();
  }
    
    

  
 //  関数．min-max間のランダムな整数を返す
 
 function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }
 
    //　変数定義
  const text4 = document.getElementById("text4");
  const start_button = document.getElementById("start_button");
  let itemsounds = [
    [ "../audio/1-1.mp3" , "../audio/1-2.mp3" ],
    [ "../audio/2-1.mp3" , "../audio/2-2.mp3" ],
    [ "../audio/3-1.mp3" , "../audio/3-2.mp3" ],
    [ "../audio/4-1.mp3" , "../audio/4-2.mp3" , "../audio/4-3.mp3" ]
    ];
  const itemCounter = document.getElementById("itemCounter");
//  let yomiage = new Audio(itemsounds[i,randnum]);
  var i;
    


  //変数定義終わり
  
  //★★★プログラム
  
  start_button.addEventListener("click", () => { 
    playAudio();
    console.log("OK");
  })
  

  

  
}
