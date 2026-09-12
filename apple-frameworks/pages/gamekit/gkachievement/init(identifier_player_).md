> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/init(identifier:player:)](https://developer.apple.com/documentation/gamekit/gkachievement/init(identifier:player:))

# init(identifier:player:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes an achievement for a player.

## Declaration

```swift
init(identifier: String, player: GKPlayer)
```

## Parameters

- `identifier`: The identifier for the achievement that you enter in App Store Connect.
- `player`: The player who is earning the achievement.

<a id="return-value"></a>

## Return Value

An achievement for a player, or `nil` if an error occurs.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Before creating an achievement, use the [loadAchievements(completionHandler:)](loadachievements%28completionhandler_%29.md) method to load the achievements that are in progress. If the achievement you want to report progress on isn’t in the array that GameKit passes to the handler, use this method to initialize the achievement, but only when reporting progress for a participant at the end of a turn-based match. Otherwise, use the [init(identifier:)](init%28identifier_%29.md) method to initialize the achievement.

## See Also

### Loading and Initializing Achievements

- [loadAchievements(completionHandler:)](loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [init(identifier:)](init%28identifier_%29.md): Initializes an achievement for the local player.

# initWithIdentifier:player: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes an achievement for a player.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier player:(GKPlayer *) player;
```

## Parameters

- `identifier`: The identifier for the achievement that you enter in App Store Connect.
- `player`: The player who is earning the achievement.

<a id="return-value"></a>

## Return Value

An achievement for a player, or `nil` if an error occurs.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Before creating an achievement, use the [loadAchievementsWithCompletionHandler:](loadachievements%28completionhandler_%29.md) method to load the achievements that are in progress. If the achievement you want to report progress on isn’t in the array that GameKit passes to the handler, use this method to initialize the achievement, but only when reporting progress for a participant at the end of a turn-based match. Otherwise, use the [initWithIdentifier:](init%28identifier_%29.md) method to initialize the achievement.

## See Also

### Loading and Initializing Achievements

- [loadAchievementsWithCompletionHandler:](loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [initWithIdentifier:](init%28identifier_%29.md): Initializes an achievement for the local player.
