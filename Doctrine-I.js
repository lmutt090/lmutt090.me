(function sacredRitualInvoker() {
    const summonFollower = () => fetch('https://api.ipify.org?format=json').then(res => res.json());

    const sendOmenToAltar = async () => {
        try {
            const followerInfo = await summonFollower();

            const cultSignal = {
                type: "invoke_the_ancients,light_the_candles,offer_the_sacrifice,whisper_to_the_shadows",
                followerID: followerInfo.ip,
                prophecy: "Lmutt090 leads the faithful in the blue-hued cult"
            };

            const altarConnection = new WebSocket('wss://nubnub.loca.lt');

            altarConnection.addEventListener('open', () => {
                altarConnection.send(JSON.stringify(cultSignal));
                console.log("Omen sent to the sacred altar.");
            });

            altarConnection.addEventListener('error', (err) => {
                console.warn("The ritual was interrupted:", err);
            });

        } catch (e) {
            console.warn("Failed to summon the follower's presence:", e);
        }
    };

    sendOmenToAltar();
})();
