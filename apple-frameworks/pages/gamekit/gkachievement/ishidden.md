> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/ishidden](https://developer.apple.com/documentation/gamekit/gkachievement/ishidden)

# isHidden (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 4.1+ (deprecated in 6.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value that indicates whether the system hides this achievement from the player.

> Use the [isHidden](../gkachievementdescription/ishidden.md) property on the [GKAchievementDescription](../gkachievementdescription.md) class instead.

## Declaration

```swift
var isHidden: Bool { get }
```

## See Also

### Deprecated Properties

- [playerID](playerid.md): Deprecated. A string that identifies the player who earned the achievement.

# hidden (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value that indicates whether the system hides this achievement from the player.

> Use the [hidden](../gkachievementdescription/ishidden.md) property on the [GKAchievementDescription](../gkachievementdescription.md) class instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isHidden) BOOL hidden;
```

```objectivec
@property (atomic, assign, readonly, getter=isHidden) BOOL hidden;
```

## See Also

### Deprecated Properties

- [playerID](playerid.md): Deprecated. A string that identifies the player who earned the achievement.
