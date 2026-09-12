> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(state:handler:)](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(state:handler:))

# trigger(state:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.

## Declaration

```swift
func trigger(state: GKGameCenterViewControllerState, handler: @escaping () -> Void)
```

## Parameters

- `state`: The type of content to present.
- `handler`: The block that GameKit calls after it displays the dashboard.

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

For games that use controllers or the Apple TV remote, you can use this method to programmatically display the dashboard.

## See Also

### Managing the access point

- [isFocused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [trigger(handler:)](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(player:handler:)](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [trigger(achievementID:handler:)](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [trigger(leaderboardID:playerScope:timeScope:handler:)](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [trigger(leaderboardSetID:handler:)](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

# triggerAccessPointWithState:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.

## Declaration

```objectivec
- (void) triggerAccessPointWithState:(GKGameCenterViewControllerState) state handler:(void (^)()) handler;
```

## Parameters

- `state`: The type of content to present.
- `handler`: The block that GameKit calls after it displays the dashboard.

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

For games that use controllers or the Apple TV remote, you can use this method to programmatically display the dashboard.

## See Also

### Managing the access point

- [focused](isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [triggerAccessPointWithHandler:](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithPlayer:handler:](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [triggerAccessPointWithAchievementID:handler:](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler:](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [triggerAccessPointWithLeaderboardSetID:handler:](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.
