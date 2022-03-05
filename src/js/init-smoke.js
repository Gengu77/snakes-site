var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

var party = smokemachine(ctx, [245,245,245])
party.start() // start animating
party.setPreDrawCallback(function(dt){
    party.addSmoke(innerWidth+50, innerHeight/2, .1)
    party.addSmoke(innerWidth+50, innerHeight+100, .1)
    party.addSmoke(-50, innerHeight/2, .1)
    party.addSmoke(-50, innerHeight+100, .1)
    canvas.width = innerWidth
    canvas.height = innerHeight
})

onmousemove = function (e) {
    var x = e.clientX
    var y = e.clientY
    var n = 0.1
    var t = 5000;
    party.addsmoke(x, y, n, t)
}
