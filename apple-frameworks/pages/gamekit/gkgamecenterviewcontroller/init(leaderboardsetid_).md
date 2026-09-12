> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/init(leaderboardsetid:)](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/init(leaderboardsetid:))

# init(leaderboardSetID:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a view controller that presents a leaderboard set.

## Declaration

```swift
init(leaderboardSetID: String)
```

## Parameters

- `leaderboardSetID`: The identifier for the leaderboard set.

## See Also

### Configuring Game Center content

- [init(state:)](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboard:playerScope:)](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardID:playerScope:timeScope:)](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(achievementID:)](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# initWithLeaderboardSetID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a view controller that presents a leaderboard set.

## Declaration

```objectivec
- (instancetype) initWithLeaderboardSetID:(NSString *) leaderboardSetID;
```

## Parameters

- `leaderboardSetID`: The identifier for the leaderboard set.

## See Also

### Configuring Game Center content

- [initWithState:](init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboard:playerScope:](init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardID:playerScope:timeScope:](init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithAchievementID:](init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
