> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/setmute(_:forplayer:)](https://developer.apple.com/documentation/gamekit/gkvoicechat/setmute(_:forplayer:))

# setMute(\_:forPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Mutes a player in a voice chat.

> Use the [setPlayer(\_:muted:)](setplayer%28__muted_%29.md) method instead.

## Declaration

```swift
func setMute(_ isMuted: Bool, forPlayer playerID: String)
```

## Parameters

- `isMuted`: Determines whether to mute or unmute the player.
- `playerID`: The player identifier string for a player in the match.

<a id="Discussion"></a>

## Discussion

If you mute a player, the local player doesn’t hear voice data transmitted by that player.

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.

# setMute:forPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Mutes a player in a voice chat.

> Use the [setPlayer:muted:](setplayer%28__muted_%29.md) method instead.

## Declaration

```objectivec
- (void) setMute:(BOOL) isMuted forPlayer:(NSString *) playerID;
```

## Parameters

- `isMuted`: Determines whether to mute or unmute the player.
- `playerID`: The player identifier string for a player in the match.

<a id="Discussion"></a>

## Discussion

If you mute a player, the local player doesn’t hear voice data transmitted by that player.

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.
