> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/playerstate](https://developer.apple.com/documentation/gamekit/gkvoicechat/playerstate)

# GKVoiceChat.PlayerState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The state of a player in a voice chat.

> Use SharePlay instead. See [Enable the local player to choose other players](../finding-multiple-players-for-a-game.md#Enable-the-local-player-to-choose-other-players) and [startGroupActivity(playerHandler:)](../gkmatchmaker/startgroupactivity%28playerhandler_%29.md).

## Declaration

```swift
enum PlayerState
```

## Topics

### States

- [GKVoiceChat.PlayerState.connected](playerstate/connected.md): Deprecated. The state when the player connects to the channel.
- [GKVoiceChat.PlayerState.disconnected](playerstate/disconnected.md): Deprecated. The state when the player left the channel.
- [GKVoiceChat.PlayerState.speaking](playerstate/speaking.md): Deprecated. The state when the player speaks.
- [GKVoiceChat.PlayerState.silent](playerstate/silent.md): Deprecated. The state when the player isn’t speaking.
- [GKVoiceChat.PlayerState.connecting](playerstate/connecting.md): Deprecated. The state when the player is connecting to the channel, but isn’t connected yet.

### Initializers

- [init(rawValue:)](playerstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving Updates About Other Participants

- [playerVoiceChatStateDidChangeHandler](playervoicechatstatedidchangehandler.md): Deprecated. A method that handles when a player’s voice chat changes state.

# GKVoiceChatPlayerState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The state of a player in a voice chat.

> Use SharePlay instead. See [Enable the local player to choose other players](../finding-multiple-players-for-a-game.md#Enable-the-local-player-to-choose-other-players) and [startGroupActivityWithPlayerHandler:](../gkmatchmaker/startgroupactivity%28playerhandler_%29.md).

## Declaration

```objectivec
enum GKVoiceChatPlayerState : NSInteger;
```

## Topics

### States

- [GKVoiceChatPlayerConnected](playerstate/connected.md): Deprecated. The state when the player connects to the channel.
- [GKVoiceChatPlayerDisconnected](playerstate/disconnected.md): Deprecated. The state when the player left the channel.
- [GKVoiceChatPlayerSpeaking](playerstate/speaking.md): Deprecated. The state when the player speaks.
- [GKVoiceChatPlayerSilent](playerstate/silent.md): Deprecated. The state when the player isn’t speaking.
- [GKVoiceChatPlayerConnecting](playerstate/connecting.md): Deprecated. The state when the player is connecting to the channel, but isn’t connected yet.

## See Also

### Receiving Updates About Other Participants

- [playerVoiceChatStateDidChangeHandler](playervoicechatstatedidchangehandler.md): Deprecated. A method that handles when a player’s voice chat changes state.
