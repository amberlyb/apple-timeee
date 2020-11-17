sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101020202020202020101010101010101010102020202020202010101010101010101010101010101010101010101010102020202020202020202`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedSouth], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 1 1 1 9 1 1 1 9 9 . . . 
    . . 9 9 1 b b 9 1 b b 9 9 9 . . 
    . 9 9 9 1 f f 9 1 f f 9 9 9 9 . 
    . 9 9 9 1 f f 9 1 f f 9 9 9 9 . 
    . 9 9 9 3 3 9 1 9 3 3 9 9 9 9 . 
    . 9 9 9 9 f 9 f 9 f 9 9 9 9 9 . 
    . . 9 9 9 9 f f f 9 9 9 9 9 . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 . . . . . . 9 . . . . 
    . . . . 9 . . . . . . 9 . . . . 
    . . . . 9 . . . . . . 9 . . . . 
    . . . 9 9 . . . . . . 9 9 . . . 
    . . 9 9 9 . . . . . . 9 9 9 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let Apple = sprites.create(img`
    . . . . . . . . . . . 7 7 . . . 
    . . . . . e e e . . 7 7 7 . . . 
    . . . . . . . e e 7 7 7 . . . . 
    . . . . 2 2 2 2 e c c 2 . . . . 
    . . 2 2 2 2 2 2 e c 2 2 2 . . . 
    . . 2 d d 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 d 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 d 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 c . 
    . . 2 2 2 2 2 2 2 2 2 2 2 c . . 
    . . . 2 2 2 c c 2 2 2 2 c . . . 
    . . . . 2 c c . . 2 2 c . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Apple.setPosition(136, 14)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(17, 93)
