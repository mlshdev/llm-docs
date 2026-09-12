> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/setplayer(_:muted:)](https://developer.apple.com/documentation/gamekit/gkvoicechat/setplayer(_:muted:))

# setPlayer(\_:muted:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Mutes a player in the chat, including the local player.

> No longer supported

## Declaration

```swift
func setPlayer(_ player: GKPlayer, muted isMuted: Bool)
```

## Parameters

- `player`: The player that GameKit mutes or unmutes.
- `isMuted`: Determines whether to mute or unmute the player.

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

If you mute another player, the local player doesn’t hear voice data from that player.

## See Also

### Controlling Chat Volume

- [volume](volume.md): Deprecated. The volume level for the channel.

# setPlayer:muted: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Mutes a player in the chat, including the local player.

> No longer supported

## Declaration

```objectivec
- (void) setPlayer:(GKPlayer *) player muted:(BOOL) isMuted;
```

## Parameters

- `player`: The player that GameKit mutes or unmutes.
- `isMuted`: Determines whether to mute or unmute the player.

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

If you mute another player, the local player doesn’t hear voice data from that player.

## See Also

### Controlling Chat Volume

- [volume](volume.md): Deprecated. The volume level for the channel.
