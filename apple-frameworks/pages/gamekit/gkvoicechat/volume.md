> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/volume](https://developer.apple.com/documentation/gamekit/gkvoicechat/volume)

# volume (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The volume level for the channel.

> No longer supported

## Declaration

```swift
var volume: Float { get set }
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

GameKit mixes voice data received from all other players and scales it by the `volume` property. The `volume` property has a range between `0.0` and `1.0`, inclusive. To mute the entire channel, set the volume to `0.0`. To play the voice data at full volume, set the volume to `1.0`. The default value is `1.0`.

## See Also

### Controlling Chat Volume

- [setPlayer(\_:muted:)](setplayer%28__muted_%29.md): Deprecated. Mutes a player in the chat, including the local player.

# volume (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The volume level for the channel.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, assign) float volume;
```

```objectivec
@property (atomic, assign) float volume;
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

GameKit mixes voice data received from all other players and scales it by the `volume` property. The `volume` property has a range between `0.0` and `1.0`, inclusive. To mute the entire channel, set the volume to `0.0`. To play the voice data at full volume, set the volume to `1.0`. The default value is `1.0`.

## See Also

### Controlling Chat Volume

- [setPlayer:muted:](setplayer%28__muted_%29.md): Deprecated. Mutes a player in the chat, including the local player.
