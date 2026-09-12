> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener/session(_:player:didchange:)](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener/session(_:player:didchange:))

# session(\_:player:didChange:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player’s connection state has changed.

## Declaration

```swift
optional func session(_ session: GKGameSession, player: GKCloudPlayer, didChange newState: GKConnectionState)
```

## Parameters

- `session`: The game session affected by the connection state change.
- `player`: The player who’s connection state has changed.
- `newState`: The new connection state for the player.

## See Also

### Changing Player Status

- [session(\_:didAdd:)](session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session(\_:didRemove:)](session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [GKConnectionState](../gkconnectionstate.md): Possible connection states for a player

# session:player:didChangeConnectionState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player’s connection state has changed.

## Declaration

```objectivec
- (void) session:(GKGameSession *) session player:(GKCloudPlayer *) player didChangeConnectionState:(GKConnectionState) newState;
```

## Parameters

- `session`: The game session affected by the connection state change.
- `player`: The player who’s connection state has changed.
- `newState`: The new connection state for the player.

## See Also

### Changing Player Status

- [session:didAddPlayer:](session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session:didRemovePlayer:](session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [GKConnectionState](../gkconnectionstate.md): Possible connection states for a player
