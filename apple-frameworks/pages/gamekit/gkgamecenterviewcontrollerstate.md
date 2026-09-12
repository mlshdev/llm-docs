> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontrollerstate](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontrollerstate)

# GKGameCenterViewControllerState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The type of content for the view controller to present.

## Declaration

```swift
enum GKGameCenterViewControllerState
```

## Topics

### States

- [GKGameCenterViewControllerState.default](gkgamecenterviewcontrollerstate/default.md): The view controller should present the default screen.
- [GKGameCenterViewControllerState.leaderboards](gkgamecenterviewcontrollerstate/leaderboards.md): The view controller should present leaderboard sets or leaderboards if there are no sets.
- [GKGameCenterViewControllerState.achievements](gkgamecenterviewcontrollerstate/achievements.md): The view controller should present a list of achievements.
- [GKGameCenterViewControllerState.challenges](gkgamecenterviewcontrollerstate/challenges.md): Deprecated. The view controller should present a list of challenges.
- [GKGameCenterViewControllerState.localPlayerProfile](gkgamecenterviewcontrollerstate/localplayerprofile.md): The view controller should present the local player’s profile.
- [GKGameCenterViewControllerState.dashboard](gkgamecenterviewcontrollerstate/dashboard.md): The view controller should present the dashboard.
- [GKGameCenterViewControllerState.localPlayerFriendsList](gkgamecenterviewcontrollerstate/localplayerfriendslist.md): The view controller should present the friends list.

### Initializers

- [init(rawValue:)](gkgamecenterviewcontrollerstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Game Center content

- [init(state:)](gkgamecenterviewcontroller/init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [init(leaderboard:playerScope:)](gkgamecenterviewcontroller/init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardID:playerScope:timeScope:)](gkgamecenterviewcontroller/init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(leaderboardSetID:)](gkgamecenterviewcontroller/init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(achievementID:)](gkgamecenterviewcontroller/init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](gkgamecenterviewcontroller/init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

# GKGameCenterViewControllerState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The type of content for the view controller to present.

## Declaration

```objectivec
enum GKGameCenterViewControllerState : NSInteger;
```

## Topics

### States

- [GKGameCenterViewControllerStateDefault](gkgamecenterviewcontrollerstate/default.md): The view controller should present the default screen.
- [GKGameCenterViewControllerStateLeaderboards](gkgamecenterviewcontrollerstate/leaderboards.md): The view controller should present leaderboard sets or leaderboards if there are no sets.
- [GKGameCenterViewControllerStateAchievements](gkgamecenterviewcontrollerstate/achievements.md): The view controller should present a list of achievements.
- [GKGameCenterViewControllerStateChallenges](gkgamecenterviewcontrollerstate/challenges.md): Deprecated. The view controller should present a list of challenges.
- [GKGameCenterViewControllerStateLocalPlayerProfile](gkgamecenterviewcontrollerstate/localplayerprofile.md): The view controller should present the local player’s profile.
- [GKGameCenterViewControllerStateDashboard](gkgamecenterviewcontrollerstate/dashboard.md): The view controller should present the dashboard.
- [GKGameCenterViewControllerStateLocalPlayerFriendsList](gkgamecenterviewcontrollerstate/localplayerfriendslist.md): The view controller should present the friends list.

## See Also

### Configuring Game Center content

- [initWithState:](gkgamecenterviewcontroller/init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [initWithLeaderboard:playerScope:](gkgamecenterviewcontroller/init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardID:playerScope:timeScope:](gkgamecenterviewcontroller/init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithLeaderboardSetID:](gkgamecenterviewcontroller/init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithAchievementID:](gkgamecenterviewcontroller/init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](gkgamecenterviewcontroller/init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.
