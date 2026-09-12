> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener/session(_:didreceive:from:)](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener/session(_:didreceive:from:))

# session(\_:didReceive:from:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener the player received data from another player.

## Declaration

```swift
optional func session(_ session: GKGameSession, didReceive data: Data, from player: GKCloudPlayer)
```

## Parameters

- `session`: The game session the sending player is associated with.
- `data`: The data sent by the player.
- `player`: The player sending data to all other connected players in the game session.

<a id="Discussion"></a>

## Discussion

This event fires after the [send(\_:with:completionHandler:)](../gkgamesession/send%28__with_completionhandler_%29.md) method has been called. All connected players except the calling player are notified.

## See Also

### Transferring Data

- [session(\_:didReceiveMessage:with:from:)](session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.
- [session(\_:player:didSave:)](session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.

# session:didReceiveData:fromPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener the player received data from another player.

## Declaration

```objectivec
- (void) session:(GKGameSession *) session didReceiveData:(NSData *) data fromPlayer:(GKCloudPlayer *) player;
```

## Parameters

- `session`: The game session the sending player is associated with.
- `data`: The data sent by the player.
- `player`: The player sending data to all other connected players in the game session.

<a id="Discussion"></a>

## Discussion

This event fires after the [sendData:withTransportType:completionHandler:](../gkgamesession/send%28__with_completionhandler_%29.md) method has been called. All connected players except the calling player are notified.

## See Also

### Transferring Data

- [session:didReceiveMessage:withData:fromPlayer:](session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.
- [session:player:didSaveData:](session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.
