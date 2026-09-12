> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener/session(_:player:didsave:)](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener/session(_:player:didsave:))

# session(\_:player:didSave:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener data was saved by a player.

## Declaration

```swift
optional func session(_ session: GKGameSession, player: GKCloudPlayer, didSave data: Data)
```

## Parameters

- `session`: The game session data was saved to.
- `player`: The player that just saved data.
- `data`: The data that was saved.

## See Also

### Transferring Data

- [session(\_:didReceive:from:)](session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session(\_:didReceiveMessage:with:from:)](session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.

# session:player:didSaveData: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener data was saved by a player.

## Declaration

```objectivec
- (void) session:(GKGameSession *) session player:(GKCloudPlayer *) player didSaveData:(NSData *) data;
```

## Parameters

- `session`: The game session data was saved to.
- `player`: The player that just saved data.
- `data`: The data that was saved.

## See Also

### Transferring Data

- [session:didReceiveData:fromPlayer:](session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session:didReceiveMessage:withData:fromPlayer:](session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.
