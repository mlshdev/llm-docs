> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/player](https://developer.apple.com/documentation/gamekit/gkachievement/player)

# player (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The player who earned the achievement.

## Declaration

```swift
var player: GKPlayer { get }
```

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [isCompleted](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.

# player (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The player who earned the achievement.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) GKPlayer * player;
```

```objectivec
@property (atomic, strong, readonly, nullable) GKPlayer * player;
```

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [completed](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.
