> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/init(leaderboard:playerscope:)](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/init(leaderboard:playerscope:))

# init(leaderboard:playerScope:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents a leaderboard with data for the specified players.

## Declaration

```swift
init(leaderboard: GKLeaderboard, playerScope: GKLeaderboard.PlayerScope)
```

## Parameters

- `leaderboard`: The identifier for the leaderboard to display.
- `playerScope`: The type of players to display in the leaderboard.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [init(state:)](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboardID:playerScope:timeScope:)](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(leaderboardSetID:)](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(achievementID:)](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# initWithLeaderboard:playerScope: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents a leaderboard with data for the specified players.

## Declaration

```objectivec
- (instancetype) initWithLeaderboard:(GKLeaderboard *) leaderboard playerScope:(GKLeaderboardPlayerScope) playerScope;
```

## Parameters

- `leaderboard`: The identifier for the leaderboard to display.
- `playerScope`: The type of players to display in the leaderboard.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [initWithState:](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboardID:playerScope:timeScope:](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithLeaderboardSetID:](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithAchievementID:](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
