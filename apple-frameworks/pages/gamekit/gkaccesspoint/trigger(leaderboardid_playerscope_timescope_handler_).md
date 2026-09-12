> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(leaderboardid:playerscope:timescope:handler:)](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(leaderboardid:playerscope:timescope:handler:))

# trigger(leaderboardID:playerScope:timeScope:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a specific leaderboard.

## Declaration

```swift
func trigger(leaderboardID: String, playerScope: GKLeaderboard.PlayerScope, timeScope: GKLeaderboard.TimeScope, handler: (() -> Void)? = nil)
```

## Parameters

- `leaderboardID`: The identifier for the leaderboard.
- `playerScope`: The type of players for scoping the leaderboard data.
- `timeScope`: The time period for filtering the leaderboard data.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [isFocused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [trigger(handler:)](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(state:handler:)](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [trigger(player:handler:)](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [trigger(achievementID:handler:)](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [trigger(leaderboardSetID:handler:)](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

# triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a specific leaderboard.

## Declaration

```objectivec
- (void) triggerAccessPointWithLeaderboardID:(NSString *) leaderboardID playerScope:(GKLeaderboardPlayerScope) playerScope timeScope:(GKLeaderboardTimeScope) timeScope handler:(void (^)()) handler;
```

## Parameters

- `leaderboardID`: The identifier for the leaderboard.
- `playerScope`: The type of players for scoping the leaderboard data.
- `timeScope`: The time period for filtering the leaderboard data.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [focused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [triggerAccessPointWithHandler:](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithState:handler:](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [triggerAccessPointWithPlayer:handler:](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [triggerAccessPointWithAchievementID:handler:](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [triggerAccessPointWithLeaderboardSetID:handler:](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.
