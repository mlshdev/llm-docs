> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol/multiplayersessionfailed(reason:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol/multiplayersessionfailed(reason:))

# multiplayerSessionFailed(reason:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

We failed to start or join a new multiplayer session or had to terminate a previously started multiplayer session.

## Declaration

```swift
func multiplayerSessionFailed(reason: any Error)
```

## See Also

### Handling errors

- [didRejectPlayer(\_:reason:)](didrejectplayer%28__reason_%29.md): A player that tried to join was rejected or a player that previously joined our game was ejected.
