> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(player:handler:)](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(player:handler:))

# trigger(player:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a player profile.

## Declaration

```swift
func trigger(player: GKPlayer, handler: (() -> Void)? = nil)
```

## Parameters

- `player`: The player to show in the dashboard.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [isFocused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [trigger(handler:)](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(state:handler:)](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [trigger(achievementID:handler:)](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [trigger(leaderboardID:playerScope:timeScope:handler:)](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [trigger(leaderboardSetID:handler:)](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

# triggerAccessPointWithPlayer:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a player profile.

## Declaration

```objectivec
- (void) triggerAccessPointWithPlayer:(GKPlayer *) player handler:(void (^)()) handler;
```

## Parameters

- `player`: The player to show in the dashboard.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [focused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [triggerAccessPointWithHandler:](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithState:handler:](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [triggerAccessPointWithAchievementID:handler:](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler:](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [triggerAccessPointWithLeaderboardSetID:handler:](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.
