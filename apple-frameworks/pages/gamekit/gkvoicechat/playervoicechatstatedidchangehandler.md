> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/playervoicechatstatedidchangehandler](https://developer.apple.com/documentation/gamekit/gkvoicechat/playervoicechatstatedidchangehandler)

# playerVoiceChatStateDidChangeHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A method that handles when a player’s voice chat changes state.

> No longer supported

## Declaration

```swift
var playerVoiceChatStateDidChangeHandler: (GKPlayer, GKVoiceChat.PlayerState) -> Void { get set }
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

Set this property to update your interface when the state of any player in the chat changes, including the local player. For example, update the names or avatars when the players are connecting, speaking, or disconnecting.

The handler receives the following parameters:

- **`player`**: The player whose status changed.
- **`state`**: The new state of the player.

## See Also

### Receiving Updates About Other Participants

- [GKVoiceChat.PlayerState](playerstate.md): Deprecated. The state of a player in a voice chat.

# playerVoiceChatStateDidChangeHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A method that handles when a player’s voice chat changes state.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, copy) void (^)(GKPlayer *, enum GKVoiceChatPlayerState) playerVoiceChatStateDidChangeHandler;
```

```objectivec
@property (atomic, copy) void (^)(GKPlayer *, enum GKVoiceChatPlayerState) playerVoiceChatStateDidChangeHandler;
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

Set this property to update your interface when the state of any player in the chat changes, including the local player. For example, update the names or avatars when the players are connecting, speaking, or disconnecting.

The handler receives the following parameters:

- **`player`**: The player whose status changed.
- **`state`**: The new state of the player.

## See Also

### Receiving Updates About Other Participants

- [GKVoiceChatPlayerState](playerstate.md): Deprecated. The state of a player in a voice chat.
