> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener/session(_:didreceivemessage:with:from:)](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener/session(_:didreceivemessage:with:from:))

# session(\_:didReceiveMessage:with:from:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player has received a message from another player.

## Declaration

```swift
optional func session(_ session: GKGameSession, didReceiveMessage message: String, with data: Data, from player: GKCloudPlayer)
```

## Parameters

- `session`: The game session the sending player is associated with.
- `message`: A `String` containing the message sent to other players.
- `data`: Any data associated with the message. The value of this parameter can be `nil`.
- `player`: The player who sent the message.

<a id="Discussion"></a>

## Discussion

This event fires after the [sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:)](../gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md) method has been called. Only players contained in the `players` argument of the [sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:)](../gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md) method are notified.

## See Also

### Transferring Data

- [session(\_:didReceive:from:)](session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session(\_:player:didSave:)](session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.

# session:didReceiveMessage:withData:fromPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the listener a player has received a message from another player.

## Declaration

```objectivec
- (void) session:(GKGameSession *) session didReceiveMessage:(NSString *) message withData:(NSData *) data fromPlayer:(GKCloudPlayer *) player;
```

## Parameters

- `session`: The game session the sending player is associated with.
- `message`: A `String` containing the message sent to other players.
- `data`: Any data associated with the message. The value of this parameter can be `nil`.
- `player`: The player who sent the message.

<a id="Discussion"></a>

## Discussion

This event fires after the [sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler:](../gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md) method has been called. Only players contained in the `players` argument of the [sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler:](../gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md) method are notified.

## See Also

### Transferring Data

- [session:didReceiveData:fromPlayer:](session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session:player:didSaveData:](session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.
