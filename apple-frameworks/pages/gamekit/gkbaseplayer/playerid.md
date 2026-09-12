> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkbaseplayer/playerid](https://developer.apple.com/documentation/gamekit/gkbaseplayer/playerid)

# playerID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

A unique identifier for a player.

> Use [gamePlayerID](../gkplayer/gameplayerid.md) or [teamPlayerID](../gkplayer/teamplayerid.md) instead.

## Declaration

```swift
var playerID: String? { get }
```

## See Also

### Identifying a Player

- [displayName](displayname.md): The Game Center profile name for a player.

# playerID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

A unique identifier for a player.

> Use [gamePlayerID](../gkplayer/gameplayerid.md) or [teamPlayerID](../gkplayer/teamplayerid.md) instead.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * playerID;
```

```objectivec
@property (atomic, retain, readonly, nullable) NSString * playerID;
```

## See Also

### Identifying a Player

- [displayName](displayname.md): The Game Center profile name for a player.
