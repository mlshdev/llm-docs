> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol](https://developer.apple.com/documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol)

# TabletopGame.MultiplayerDelegate

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

An object that handles players joining multiplayer games.

## Declaration

```swift
protocol MultiplayerDelegate : AnyObject
```

## Topics

### Joining games

- [joinAccepted()](multiplayerdelegate-swift.protocol/joinaccepted%28%29.md): We tried to join a game and got accepted
- [playerJoined(\_:)](multiplayerdelegate-swift.protocol/playerjoined%28__%29.md): A player joined our multiplayer session

### Handling errors

- [didRejectPlayer(\_:reason:)](multiplayerdelegate-swift.protocol/didrejectplayer%28__reason_%29.md): A player that tried to join was rejected or a player that previously joined our game was ejected.
- [multiplayerSessionFailed(reason:)](multiplayerdelegate-swift.protocol/multiplayersessionfailed%28reason_%29.md): We failed to start or join a new multiplayer session or had to terminate a previously started multiplayer session.

## See Also

### Supporting multiple players

- [attachNetworkCoordinator(\_:)](attachnetworkcoordinator%28__%29.md)
- [detachNetworkCoordinator()](detachnetworkcoordinator%28%29.md)
- [multiplayerDelegate](multiplayerdelegate-swift.property.md)
