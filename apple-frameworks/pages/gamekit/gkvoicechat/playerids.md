> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/playerids](https://developer.apple.com/documentation/gamekit/gkvoicechat/playerids)

# playerIDs (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

An array of strings containing the player identifiers for the players connected to the channel.

> Use the [players](players.md) property instead.

## Declaration

```swift
var playerIDs: [String]? { get }
```

## See Also

### Deprecated Methods and Properties

- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.
- [setMute(\_:forPlayer:)](setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.

# playerIDs (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

An array of strings containing the player identifiers for the players connected to the channel.

> Use the [players](players.md) property instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * playerIDs;
```

```objectivec
@property (atomic, readonly, nullable) NSArray<NSString *> * playerIDs;
```

## See Also

### Deprecated Methods and Properties

- [playerStateUpdateHandler](playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.
- [setMute:forPlayer:](setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.
