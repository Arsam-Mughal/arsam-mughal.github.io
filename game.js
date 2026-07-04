const games = {
    Cowboy_MultiCatch: {
        title: "Cowboy MultiCatch",
        url: "Playables/Cowboy_MultiCatch.html"
    },
    Cowboy_Lasso_Master: {
        title: "Cowboy Lasso Master",
        url: "Playables/Cowboy_LassoMaster.html"
    },
    Jackaroo_KillWin: {
        title: "Jackaroo Kill to Win",
        url: "Playables/Jackaroo_KillWin.html"
    },
    Jackaroo_SwapMarble: {
        title: "Jackaroo Marble Swap",
        url: "Playables/Jackaroo_SwapMarble.html"
    },
    PF1_CornV2_Extended: {
        title: "My Perfect Form Corn",
        url: "Playables/PF1_CornV2_Extended.html"
    },
    PF1_MelonV1: {
        title: "My Perfect Form Watermelon",
        url: "Playables/PF1_MelonV1.html"
    },
    PF2_CornV2_Extended: {
        title: "My Perfect Form 2 Corn",
        url: "Playables/PF2_CornV2_Extended.html"
    },
    PF2_EggsV1: {
        title: "My Perfect Form 2 Eggs",
        url: "Playables/PF2_EggsV1.html"
    },
    PF3_TomatoV1: {
        title: "My Perfect Form 3 Tomato",
        url: "Playables/PF3_TomatoV1.html"
    },       
    TP_BumperV1: {
        title: "Theme Park Bumper",
        url: "Playables/TP_BumperV1.html"
    },      
    TP_WaterTubeV1: {
        title: "Theme Park Water Tube",
        url: "Playables/TP_WaterTubeV1.html"
    },      
    Twister_Long: {
        title: "Twister",
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