const games = {
    snake: {
        title: "Snake",
        url: "games/snake/index.html"
    },
    pong: {
        title: "Pong",
        url: "games/pong/index.html"
    },
    flappy: {
        title: "Flappy Bird",
        url: "games/flappy/index.html"
    }
}
const params = new URLSearchParams(window.location.search)
const id = params.get("game")
const game = games[id]
if (game) {
    document.getElementById("gameTitle").textContent = game.title
    document.getElementById("gameFrame").src = game.url
}