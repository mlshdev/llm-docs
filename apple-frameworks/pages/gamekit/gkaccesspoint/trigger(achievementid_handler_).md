> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(achievementid:handler:)](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(achievementid:handler:))

# trigger(achievementID:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a specific achievement.

## Declaration

```swift
func trigger(achievementID: String, handler: (() -> Void)? = nil)
```

## Parameters

- `achievementID`: The identifier for the achievement.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [isFocused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [trigger(handler:)](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(state:handler:)](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [trigger(player:handler:)](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [trigger(leaderboardID:playerScope:timeScope:handler:)](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [trigger(leaderboardSetID:handler:)](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

# triggerAccessPointWithAchievementID:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Displays the Game Center dashboard in a state that shows a specific achievement.

## Declaration

```objectivec
- (void) triggerAccessPointWithAchievementID:(NSString *) achievementID handler:(void (^)()) handler;
```

## Parameters

- `achievementID`: The identifier for the achievement.
- `handler`: The block that GameKit calls after it displays the dashboard.

## See Also

### Managing the access point

- [focused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [triggerAccessPointWithHandler:](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithState:handler:](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [triggerAccessPointWithPlayer:handler:](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler:](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [triggerAccessPointWithLeaderboardSetID:handler:](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.
