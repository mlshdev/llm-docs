> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/playerstateupdatehandler](https://developer.apple.com/documentation/gamekit/gkvoicechat/playerstateupdatehandler)

# playerStateUpdateHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player in the chat changes state.

> Use the [setPlayer(\_:muted:)](setplayer%28__muted_%29.md) method instead.

## Declaration

```swift
var playerStateUpdateHandler: (String, GKVoiceChat.PlayerState) -> Void { get set }
```

<a id="Discussion"></a>

## Discussion

Your game sets this property with a block that GameKit calls when the state of any participant in the chat changes (including the local player). The block receives the following parameters:

- **`playerID`**: The player identifier for the player whose status changed.
- **`state`**: The new state of the player. See [GKVoiceChat.PlayerState](playerstate.md).

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [setMute(\_:forPlayer:)](setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.

# playerStateUpdateHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player in the chat changes state.

> Use the [setPlayer:muted:](setplayer%28__muted_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, copy) void (^playerStateUpdateHandler)(NSString *playerID, GKVoiceChatPlayerState state);
```

```objectivec
@property (atomic, copy) void (^playerStateUpdateHandler)(NSString *playerID, GKVoiceChatPlayerState state);
```

<a id="Discussion"></a>

## Discussion

Your game sets this property with a block that GameKit calls when the state of any participant in the chat changes (including the local player). The block receives the following parameters:

- **`playerID`**: The player identifier for the player whose status changed.
- **`state`**: The new state of the player. See [GKVoiceChatPlayerState](playerstate.md).

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [setMute:forPlayer:](setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.
