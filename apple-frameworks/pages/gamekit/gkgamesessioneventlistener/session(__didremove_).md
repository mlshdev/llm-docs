> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener/session(_:didremove:)](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener/session(_:didremove:))

# session(\_:didRemove:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player left a game session.

## Declaration

```swift
optional func session(_ session: GKGameSession, didRemove player: GKCloudPlayer)
```

## Parameters

- `session`: The game session the player left.
- `player`: The player that left the game session.

## See Also

### Changing Player Status

- [session(\_:didAdd:)](session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session(\_:player:didChange:)](session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.
- [GKConnectionState](../gkconnectionstate.md): Possible connection states for a player

# session:didRemovePlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player left a game session.

## Declaration

```objectivec
- (void) session:(GKGameSession *) session didRemovePlayer:(GKCloudPlayer *) player;
```

## Parameters

- `session`: The game session the player left.
- `player`: The player that left the game session.

## See Also

### Changing Player Status

- [session:didAddPlayer:](session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session:player:didChangeConnectionState:](session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.
- [GKConnectionState](../gkconnectionstate.md): Possible connection states for a player
