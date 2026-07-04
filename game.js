const games = {
    Cowboy_MultiCatch: {
        title: "Cowboy MultiCatch",
        url: "Playables/Cowboy_MultiCatch.html"
    },
    Cowboy_LassoMaster: {
        title: "Cowboy LassoMaster",
        url: "Playables/Cowboy_LassoMaster.html"
    },
    Jackaroo_KillWin: {
        title: "Jackaroo Kill to Win",
        url: "Playables/Jackaroo_KillWin.html"
    },
    Jackaroo_SwapMarble: {
        title: "Jackaroo Swap Marble",
        url: "Playables/Jackaroo_SwapMarble.html"
    },
    PF1_CornV2_Extended: {
        title: "PF1 CornV2 Extended",
        url: "Playables/PF1_CornV2_Extended.html"
    },
    PF1_MelonV1: {
        title: "PF1 MelonV1",
        url: "Playables/PF1_MelonV1.html"
    },
    PF2_CornV2_Extended: {
        title: "PF2 CornV2 Extended",
        url: "Playables/PF2_CornV2_Extended.html"
    },
    PF2_EggsV1: {
        title: "PF2 EggsV1",
        url: "Playables/PF2_EggsV1.html"
    },
    PF3_TomatoV1: {
        title: "PF3 TomatoV1",
        url: "Playables/PF3_TomatoV1.html"
    },       
    TP_BumperV1: {
        title: "TP BumperV1",
        url: "Playables/TP_BumperV1.html"
    },      
    TP_WaterTubeV1: {
        title: "TP WaterTubeV1",
        url: "Playables/TP_WaterTubeV1.html"
    },      
    Twister_Long: {
        title: "Twister Long",
        url: "Playables/Twister_Long.html"
    }
}
const params = new URLSearchParams(window.location.search)
const id = params.get("game")
const game = games[id]
if (game) {
    document.getElementById("gameTitle").textContent = game.title
    document.getElementById("gameFrame").src = game.url
}