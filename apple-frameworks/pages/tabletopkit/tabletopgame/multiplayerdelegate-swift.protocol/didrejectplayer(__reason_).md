> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol/didrejectplayer(_:reason:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/multiplayerdelegate-swift.protocol/didrejectplayer(_:reason:))

# didRejectPlayer(\_:reason:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

A player that tried to join was rejected or a player that previously joined our game was ejected.

## Declaration

```swift
func didRejectPlayer(_ playerID: PlayerIdentifier, reason: any Error)
```

## See Also

### Handling errors

- [multiplayerSessionFailed(reason:)](multiplayersessionfailed%28reason_%29.md): We failed to start or join a new multiplayer session or had to terminate a previously started multiplayer session.
