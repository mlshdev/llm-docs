> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/init(identifier:)](https://developer.apple.com/documentation/gamekit/gkachievement/init(identifier:))

# init(identifier:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes an achievement for the local player.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: The identifier for the achievement that you enter in App Store Connect.

<a id="return-value"></a>

## Return Value

An achievement for a player, or `nil` if an error occurs.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Before creating an achievement, use the [loadAchievements(completionHandler:)](loadachievements%28completionhandler_%29.md) method to load the achievements that are in progress. If the achievement you want to report progress on isn’t in the array that GameKit passes to the handler, use this method to initialize the achievement.

## See Also

### Loading and Initializing Achievements

- [loadAchievements(completionHandler:)](loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [init(identifier:player:)](init%28identifier_player_%29.md): Initializes an achievement for a player.

# initWithIdentifier: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes an achievement for the local player.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier for the achievement that you enter in App Store Connect.

<a id="return-value"></a>

## Return Value

An achievement for a player, or `nil` if an error occurs.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Before creating an achievement, use the [loadAchievementsWithCompletionHandler:](loadachievements%28completionhandler_%29.md) method to load the achievements that are in progress. If the achievement you want to report progress on isn’t in the array that GameKit passes to the handler, use this method to initialize the achievement.

## See Also

### Loading and Initializing Achievements

- [loadAchievementsWithCompletionHandler:](loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [initWithIdentifier:player:](init%28identifier_player_%29.md): Initializes an achievement for a player.
