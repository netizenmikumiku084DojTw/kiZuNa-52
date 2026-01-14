    let currentMsg = "";
    let count = 0;
    const pools = [
        "52期の絆は永遠に不滅だ！ 🎉✨",
        "No guts, no glory.\n根性なしに栄光なし！ 🔥💪",
        "未来を創るのは俺たち52期だ 🚀🎊",
        "Fortune favors the bold.\n幸運は勇者に味方する。 💎🌟",
        "桜梅桃李。個性が響き合う最高のチーム！ 🌸🌈",
        "The best is yet to come.\n最高の瞬間はこれからだ！ 🎊✨",
        "52期、100万倍のパワーで突き進め！ ⚡️🎊",
        "Stay gold.\n輝き続けよう、52期の魂よ。 ✨🏅",
        "Everything happens for a reason. 🌏💫",
        "絆こそが最強の武器だ 🛡️💖"
    ];

    async function generate() {
        count++;
        const box = document.getElementById('message-box');
        document.getElementById('counter').innerText = "Kizuna Log: " + count;
        
        // 【第一関門】52回目：伝説のラグ演出
        if (count === 52) {
            box.style.borderColor = "#ff0";
            box.innerText = "System Synchronizing...\nデータ整合中...52%\n(Keep Tapping)";
            await new Promise(r => setTimeout(r, 2000));
            currentMsg = "【✨52期 伝説の称号✨】\nお前こそが絆を繋ぐ真のリーダーだ！\n🎈🎊🪅🎁🌟💖🏆";
            updateUI("#fff", "0 0 20px #ff0");
            confetti({ particleCount: 300, spread: 100, origin: { y: 0.5 }, colors: ['#ffd700', '#ffffff'] });
            return;
        }

        // 【最終聖域】100回目：黄金の薔薇
        if (count === 100) {
            box.style.borderColor = "#ffd700";
            box.innerText = "Final Awakening...\n真価、発揮。";
            await new Promise(r => setTimeout(r, 2500)); // さらに重厚なラグ
            
            // 黄金のバラと特別なメッセージ
            currentMsg = "🌹✨ GOLDEN ROSE ✨🌹\n【不滅の栄光】\n100の鼓動を刻みし者へ。\n君の情熱が、この世界を照らす。";
            box.innerHTML = `<span style="font-size: 2.5rem; display: block; margin-bottom: 10px;">🌹</span>` + currentMsg;
            updateUI("#ffd700", "0 0 30px #ffd700");
            
            // 黄金のみの超豪華な紙吹雪
            const duration = 5 * 1000;
            const end = Date.now() + duration;
            (function frame() {
                confetti({ particleCount: 10, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ffd700'] });
                confetti({ particleCount: 10, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffd700'] });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());
            return;
        }

        // 通常生成
        currentMsg = pools[Math.floor(Math.random() * pools.length)];
        box.innerText = currentMsg;
        updateUI("#fff", "none");
        document.querySelectorAll('.share-btn').forEach(el => el.style.display = 'block');
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    }

    function updateUI(color, shadow) {
        const box = document.getElementById('message-box');
        box.style.color = color;
        box.style.textShadow = shadow;
    }
