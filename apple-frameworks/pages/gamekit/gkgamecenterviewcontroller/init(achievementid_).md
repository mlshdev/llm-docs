> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/init(achievementid:)](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/init(achievementid:))

# init(achievementID:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents an achievement.

## Declaration

```swift
init(achievementID: String)
```

## Parameters

- `achievementID`: The identifier for the achievement to display.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [init(state:)](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboard:playerScope:)](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardID:playerScope:timeScope:)](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(leaderboardSetID:)](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(player:)](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# initWithAchievementID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a view controller that presents an achievement.

## Declaration

```objectivec
- (instancetype) initWithAchievementID:(NSString *) achievementID;
```

## Parameters

- `achievementID`: The identifier for the achievement to display.

<a id="return-value"></a>

## Return Value

The initialized view controller.

## See Also

### Configuring Game Center content

- [initWithState:](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboard:playerScope:](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardID:playerScope:timeScope:](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithLeaderboardSetID:](init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithPlayer:](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
