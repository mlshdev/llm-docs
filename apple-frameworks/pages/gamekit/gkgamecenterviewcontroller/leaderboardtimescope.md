> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/leaderboardtimescope](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/leaderboardtimescope)

# leaderboardTimeScope (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A time filter that restricts the scores to display to the player.

> Use [init(leaderboardID:playerScope:timeScope:)](init%28leaderboardid_playerscope_timescope_%29.md) instead.

## Declaration

```swift
var leaderboardTimeScope: GKLeaderboard.TimeScope { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines which tab view of the scores screen is displayed to the player. The default value is [GKLeaderboard.TimeScope.allTime](../gkleaderboard/timescope-swift.enum/alltime.md), which shows the best score each player has earned. For more information on time scopes, see [GKLeaderboard](../gkleaderboard.md).

When the leaderboard is presented, the value of this property determines the initial tab that is displayed to the player. As the player changes which tab they view, the [leaderboardTimeScope](leaderboardtimescope.md) property is automatically updated. For example, to preserve the player’s selections, you can read the [leaderboardTimeScope](leaderboardtimescope.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [viewState](viewstate.md): Deprecated. The content that the Game Center controller displays.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.

# leaderboardTimeScope (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A time filter that restricts the scores to display to the player.

> Use [initWithLeaderboardID:playerScope:timeScope:](init%28leaderboardid_playerscope_timescope_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) GKLeaderboardTimeScope leaderboardTimeScope;
```

<a id="Discussion"></a>

## Discussion

This property determines which tab view of the scores screen is displayed to the player. The default value is [GKLeaderboardTimeScopeAllTime](../gkleaderboard/timescope-swift.enum/alltime.md), which shows the best score each player has earned. For more information on time scopes, see [GKLeaderboard](../gkleaderboard.md).

When the leaderboard is presented, the value of this property determines the initial tab that is displayed to the player. As the player changes which tab they view, the [leaderboardTimeScope](leaderboardtimescope.md) property is automatically updated. For example, to preserve the player’s selections, you can read the [leaderboardTimeScope](leaderboardtimescope.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [viewState](viewstate.md): Deprecated. The content that the Game Center controller displays.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.
