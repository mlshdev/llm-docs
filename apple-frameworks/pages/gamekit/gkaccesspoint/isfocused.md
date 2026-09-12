> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/isfocused](https://developer.apple.com/documentation/gamekit/gkaccesspoint/isfocused)

# isFocused (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

A Boolean value that indicates whether the access point is in focus on tvOS.

## Declaration

```swift
var isFocused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To change the focus to the access point, set this property to [true](https://developer.apple.com/documentation/swift/true); otherwise, set it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the access point

- [trigger(handler:)](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(state:handler:)](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [trigger(player:handler:)](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [trigger(achievementID:handler:)](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [trigger(leaderboardID:playerScope:timeScope:handler:)](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [trigger(leaderboardSetID:handler:)](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

# focused (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

A Boolean value that indicates whether the access point is in focus on tvOS.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isFocused) BOOL focused;
```

<a id="Discussion"></a>

## Discussion

To change the focus to the access point, set this property to [true](https://developer.apple.com/documentation/swift/true); otherwise, set it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the access point

- [triggerAccessPointWithHandler:](trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithState:handler:](trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [triggerAccessPointWithPlayer:handler:](trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [triggerAccessPointWithAchievementID:handler:](trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler:](trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [triggerAccessPointWithLeaderboardSetID:handler:](trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.
