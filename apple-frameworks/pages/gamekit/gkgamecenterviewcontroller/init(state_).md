> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/init(state:)](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/init(state:))

# init(state:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents the specified Game Center content.

## Declaration

```swift
init(state: GKGameCenterViewControllerState)
```

## Parameters

- `state`: The type of content to present.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## Mentioned In

- [Displaying the Game Center dashboard](../displaying-the-game-center-dashboard.md)

## See Also

### Configuring Game Center content

- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboard:playerScope:)](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardID:playerScope:timeScope:)](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(leaderboardSetID:)](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(achievementID:)](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# initWithState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents the specified Game Center content.

## Declaration

```objectivec
- (instancetype) initWithState:(GKGameCenterViewControllerState) state;
```

## Parameters

- `state`: The type of content to present.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## Mentioned In

- [Displaying the Game Center dashboard](../displaying-the-game-center-dashboard.md)

## See Also

### Configuring Game Center content

- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboard:playerScope:](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardID:playerScope:timeScope:](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithLeaderboardSetID:](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithAchievementID:](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
