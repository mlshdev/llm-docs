> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/init(leaderboardid:playerscope:timescope:)](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/init(leaderboardid:playerscope:timescope:))

# init(leaderboardID:playerScope:timeScope:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents a leaderboard with data from the specified players and time period.

## Declaration

```swift
init(leaderboardID: String, playerScope: GKLeaderboard.PlayerScope, timeScope: GKLeaderboard.TimeScope)
```

## Parameters

- `leaderboardID`: The identifier for the leaderboard to display.
- `playerScope`: The type of players to display in the leaderboard.
- `timeScope`: The time period for the data to display in a classic leaderboard.

  For recurring leaderboards, this method ignores the time scope parameter and displays the data for the current occurrence instead.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [init(state:)](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboard:playerScope:)](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardSetID:)](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(achievementID:)](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# initWithLeaderboardID:playerScope:timeScope: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents a leaderboard with data from the specified players and time period.

## Declaration

```objectivec
- (instancetype) initWithLeaderboardID:(NSString *) leaderboardID playerScope:(GKLeaderboardPlayerScope) playerScope timeScope:(GKLeaderboardTimeScope) timeScope;
```

## Parameters

- `leaderboardID`: The identifier for the leaderboard to display.
- `playerScope`: The type of players to display in the leaderboard.
- `timeScope`: The time period for the data to display in a classic leaderboard.

  For recurring leaderboards, this method ignores the time scope parameter and displays the data for the current occurrence instead.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [initWithState:](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboard:playerScope:](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardSetID:](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithAchievementID:](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
