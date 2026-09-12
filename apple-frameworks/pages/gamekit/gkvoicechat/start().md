> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/start()](https://developer.apple.com/documentation/gamekit/gkvoicechat/start())

# start() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Starts communication with other players in a channel.

> No longer supported

## Declaration

```swift
func start()
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

You must provide a reason, by adding the [NSMicrophoneUsageDescription](../../bundleresources/information-property-list/nsmicrophoneusagedescription.md) key to the Information Property List, to start voice chat with other players.

If the player grants permission to use the microphone and this method successfully connects to the channel, GameKit plays voice data from the other players automatically. Use the [isActive](isactive.md) property to begin sending the local player’s microphone data to the channel.

A player can only start voice chat if their device has a microphone and they connect to Wi-Fi.

## See Also

### Starting and Stopping Voice Chat

- [stop()](stop%28%29.md): Deprecated. Ends communication with other players in a channel.
- [isActive](isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.

# start (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Starts communication with other players in a channel.

> No longer supported

## Declaration

```objectivec
- (void) start;
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

You must provide a reason, by adding the [NSMicrophoneUsageDescription](../../bundleresources/information-property-list/nsmicrophoneusagedescription.md) key to the Information Property List, to start voice chat with other players.

If the player grants permission to use the microphone and this method successfully connects to the channel, GameKit plays voice data from the other players automatically. Use the [active](isactive.md) property to begin sending the local player’s microphone data to the channel.

A player can only start voice chat if their device has a microphone and they connect to Wi-Fi.

## See Also

### Starting and Stopping Voice Chat

- [stop](stop%28%29.md): Deprecated. Ends communication with other players in a channel.
- [active](isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.
