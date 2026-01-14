# kiZuNA-52
52期の「絆」を“不滅”にする生成エンジン✴︎
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>煌めき絆メーカー✨ Premium</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <style>
        body { 
            margin: 0; 
            font-family: 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif; 
            background: linear-gradient(135deg, #1a0a2a, #050505); 
            color: #fff; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            min-height: 100vh; 
            padding: 10px;
            box-sizing: border-box;
        }
        #app { 
            width: 100%; 
            max-width: 500px; 
            text-align: center; 
            border: 3px solid #0ff; 
            padding: 20px; 
            border-radius: 30px; 
            background: rgba(0, 0, 0, 0.95); 
            box-shadow: 0 0 60px rgba(0, 255, 255, 0.2); 
            position: relative;
            max-height: 95vh;
            display: flex;
            flex-direction: column;
        }
        h1 { font-size: 1.3rem; color: #0ff; text-shadow: 0 0 10px #0ff; margin: 10px 0; font-weight: bold; }
        #message-box { 
            flex-grow: 1;
            margin-bottom: 20px; 
            padding: 20px; 
            background: #0a0a0a; 
            border: 1px solid #333; 
            border-radius: 20px; 
            font-size: 1.1rem; 
            line-height: 1.6; 
            display: flex; 
            flex-direction: column;
            align-items: center; 
            justify-content: center; 
            white-space: pre-wrap; 
            word-wrap: break-word;
            overflow-y: auto;
            color: #fff;
        }
        .simple-msg { font-size: 2.2rem !important; font-weight: bold; color: #ff66ff; text-shadow: 0 0 20px #ff66ff; line-height: 1.2; }
        .long-msg { font-size: 0.95rem; line-height: 1.4; }
        
        .btn-group { display: flex; flex-direction: column; gap: 10px; margin-bottom: 10px; }
        button { 
            padding: 15px; font-size: 1rem; cursor: pointer; border: none; border-radius: 50px; 
            font-weight: bold; transition: 0.2s; width: 100%; box-sizing: border-box;
        }
        #generate-btn { background: linear-gradient(to right, #0ff, #f0f); color: #000; }
        #generate-btn:hover { transform: scale(1.02); }

        /* シェアセクション */
        #share-section { display: none; flex-direction: column; gap: 8px; margin-top: 10px; }
        .share-btn { font-size: 0.9rem; color: #fff; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .x-btn { background: #000; border: 1px solid #444; }
        .line-btn { background: #06C755; color: #fff; }
        .insta-btn { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }

        #counter { font-size: 0.8rem; color: #0ff; font-family: monospace; margin-bottom: 10px; }
        .deco { position: absolute; font-size: 1.5rem; opacity: 0.4; pointer-events: none; }
    </style>
</head>
<body>

<div id="app">
    <div class="deco" style="top: 10px; left: 15px;">💎</div>
    <div class="deco" style="bottom: 10px; right: 15px;">🚀</div>
    <h1>煌めき絆メーカー✨ Premium</h1>
    <div id="message-box">絆をアップデートしよう☆</div>
    
    <div class="btn-group">
        <button id="generate-btn" onclick="generate()">想いを紐解く（生成）</button>
        
        <div id="share-section">
            <button class="share-btn x-btn" onclick="shareX()">X (Twitter) で不滅にする</button>
            <button class="share-btn line-btn" onclick="shareLINE()">LINE で送る</button>
            <button class="share-btn insta-btn" onclick="shareInsta()">Instagram に刻む</button>
        </div>
    </div>

    <div id="counter">共鳴パワー: 999,999,999</div>
</div>

<script>
    let currentMessage = "";
    const pools = [
        ["52期のみんな、最高！", "この瞬間を分かち合おう", "Hello 52nd generation!", "最高の夏、最高の仲間！", "感謝、感謝、感謝！"],
        ["悔しかったこともあったけど", "涙を拭いて歩んできた", "Never give up our dreams.", "自分を信じてよかった", "みんながいたから今の僕がいる"],
        ["師弟の絆を魂に刻み", "慈愛の心で分かち合い", "限界を超えた勇気で", "魂の奥底で共鳴し合い", "泥中の蓮のように"],
        ["桜梅桃李の個性を輝かせ", "金剛質実な志を胸に", "一連托生の誓いとともに", "獅子奮迅の勢いで", "一生涯の友として"],
        ["Thank you for everything.", "You are the best team ever.", "Believe in the future.", "Stay gold, stay true.", "Love and Peace 52nd."],
        ["サークル不滅！万歳！", "52期の誇りは永遠！", "我らの絆は誰にも壊せない", "歴史に名を刻む時が来た", "未来の主役は俺たちだ！"],
        ["宿命を使命に変えて", "未知なる輝きを切り拓き", "真実の勝利を掴み取り", "自分自身の革命を成し", "黄金の未来を展望して"],
        ["👍🏿👍🏾👍🏽👍🏼👍🏻👍💕", "✨✨✨🌈🌈🌈✨✨✨", "🔥🔥🔥 MISSION COMPLETE 🔥🔥🔥", "🙌🙌🙌 WE ARE ONE 🙌🙌🙌", "💫💫💫 KIZUNA FOREVER 💫💫💫"],
        ["不滅の金字塔を建てる。", "我らの歩みが伝説となる。", "絆は永遠に輝く。", "最高の歓び、やったー！", "これからも、よろしくね♪"],
        ["We are 52nd. The history starts here.", "Victory is in our hands.", "Together as one, forever.", "No limits, just us.", "Proud to be here."]
    ];
    const simplePool = ["最高！", "やったー♪", "Thank you!", "感謝。", "サークル不滅！", "桜梅桃李", "👍🏽👍🏼👍🏻💕"];

    function generate() {
        const box = document.getElementById('message-box');
        const shareSection = document.getElementById('share-section');
        box.classList.remove('simple-msg', 'long-msg');
        let result = [];
        const rand = Math.random() * 100;
        let count; 
        
        if (rand < 5) count = 0;
        else if (rand < 25) count = 2;
        else if (rand < 70) count = 3;
        else if (rand < 80) count = 5;
        else if (rand < 90) count = 8;
        else count = 10;

        if (count === 0) {
            currentMessage = simplePool[Math.floor(Math.random() * simplePool.length)];
            box.classList.add('simple-msg');
        } else {
            for (let i = 0; i < count; i++) {
                result.push(pools[i % pools.length][Math.floor(Math.random() * pools[0].length)]);
            }
            currentMessage = result.join('\n');
            if (count >= 5) box.classList.add('long-msg');
        }
        
        box.innerText = currentMessage;
        shareSection.style.display = 'flex';
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 }, colors: ['#0ff', '#f0f', '#fff'] });
    }

    function shareX() {
        const text = encodeURIComponent(currentMessage + "\n\n#52期 #煌めき絆メーカー #絆不滅\n");
        window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
        successEffect();
    }

    function shareLINE() {
        const text = encodeURIComponent(currentMessage + "\n\n#52期 #煌めき絆メーカー");
        window.open(`https://social-plugins.line.me/lineit/share?text=${text}`, '_blank');
        successEffect();
    }

    function shareInsta() {
        navigator.clipboard.writeText(currentMessage + "\n#52期 #煌めき絆メーカー").then(() => {
            alert("絆メッセージをコピーしました！Instagramを開きます。ストーリーズ等に貼り付けてください✨");
            window.open("instagram://camera", '_blank');
            // アプリが開かない場合のフォールバック
            setTimeout(() => { window.open("https://www.instagram.com/", '_blank'); }, 500);
        });
        successEffect();
    }

    function successEffect() {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
        let power = 999999999;
        setInterval(() => {
            power += Math.floor(Math.random() * 500);
            document.getElementById('counter').innerText = "共鳴パワー: " + power.toLocaleString();
        }, 50);
    }
</script>

</body>
</html>
