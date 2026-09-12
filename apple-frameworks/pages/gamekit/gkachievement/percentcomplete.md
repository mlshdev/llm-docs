> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/percentcomplete](https://developer.apple.com/documentation/gamekit/gkachievement/percentcomplete)

# percentComplete (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A percentage value that states how far the player has progressed on the achievement.

## Declaration

```swift
var percentComplete: Double { get set }
```

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

The default value for a newly initialized achievement object is `0`. The range of legal values is between `0` and `100`, inclusive. You decide how to calculate the percentage and when to change it. This value must be an integer and can’t contain a decimal.

For example, if the player earns an achievement for discovering a location in your game, then you’d report the achievement as 100 percent complete the first time you report progress to Game Center. On the other hand, for an achievement like “Capture 10 pirates”, your reporting mechanism increments by 10 percent each time the player captures a pirate.

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](player.md): The player who earned the achievement.
- [isCompleted](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.

# percentComplete (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A percentage value that states how far the player has progressed on the achievement.

## Declaration

```objectivec
@property (nonatomic, assign) double percentComplete;
```

```objectivec
@property (atomic, assign) double percentComplete;
```

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

The default value for a newly initialized achievement object is `0`. The range of legal values is between `0` and `100`, inclusive. You decide how to calculate the percentage and when to change it. This value must be an integer and can’t contain a decimal.

For example, if the player earns an achievement for discovering a location in your game, then you’d report the achievement as 100 percent complete the first time you report progress to Game Center. On the other hand, for an achievement like “Capture 10 pirates”, your reporting mechanism increments by 10 percent each time the player captures a pirate.

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](player.md): The player who earned the achievement.
- [completed](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.
