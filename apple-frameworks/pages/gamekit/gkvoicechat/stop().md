> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/stop()](https://developer.apple.com/documentation/gamekit/gkvoicechat/stop())

# stop() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Ends communication with other players in a channel.

> No longer supported

## Declaration

```swift
func stop()
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

This method disconnects the player from the channel. You should call `stop()` before you set the voice chat object to `nil`.

## See Also

### Related Documentation

- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.

### Starting and Stopping Voice Chat

- [start()](start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [isActive](isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.

# stop (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Ends communication with other players in a channel.

> No longer supported

## Declaration

```objectivec
- (void) stop;
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

This method disconnects the player from the channel. You should call `stop()` before you set the voice chat object to `nil`.

## See Also

### Related Documentation

- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.

### Starting and Stopping Voice Chat

- [start](start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [active](isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.
