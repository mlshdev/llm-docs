> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardviewcontroller/timescope](https://developer.apple.com/documentation/gamekit/gkleaderboardviewcontroller/timescope)

# timeScope (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** macOS · visionOS

A time filter used to restrict which scores are displayed to the player.

## Declaration

```swift
var timeScope: GKLeaderboard.TimeScope { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines which tab view is displayed to the player. The default value is [GKLeaderboard.TimeScope.allTime](../gkleaderboard/timescope-swift.enum/alltime.md), which shows the best score each player has earned. For more information on time scopes, see [GKLeaderboard](../gkleaderboard.md).

If the player changes which tab they view, the `timeScope` property is automatically updated. For example, you can read the `timeScope` property after the view controller is dismissed, and set that value the next time you initialize a new leaderboard view controller.

## See Also

### Configuring the Leaderboard View Controller

- [category](category.md): The named leaderboard that is displayed by the view controller.
- [leaderboardDelegate](leaderboarddelegate.md): The view controller’s delegate.

# timeScope (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time filter used to restrict which scores are displayed to the player.

## Declaration

```objectivec
@property (nonatomic, assign) GKLeaderboardTimeScope timeScope;
```

```objectivec
@property (atomic, assign) GKLeaderboardTimeScope timeScope;
```

<a id="Discussion"></a>

## Discussion

This property determines which tab view is displayed to the player. The default value is [GKLeaderboardTimeScopeAllTime](../gkleaderboard/timescope-swift.enum/alltime.md), which shows the best score each player has earned. For more information on time scopes, see [GKLeaderboard](../gkleaderboard.md).

If the player changes which tab they view, the `timeScope` property is automatically updated. For example, you can read the `timeScope` property after the view controller is dismissed, and set that value the next time you initialize a new leaderboard view controller.

## See Also

### Configuring the Leaderboard View Controller

- [category](category.md): The named leaderboard that is displayed by the view controller.
- [leaderboardDelegate](leaderboarddelegate.md): The view controller’s delegate.
