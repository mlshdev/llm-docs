> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/ishidden](https://developer.apple.com/documentation/gamekit/gkachievementdescription/ishidden)

# isHidden (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the achievement is initially visible to players.

## Declaration

```swift
var isHidden: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the achievement is always visible to the player. If [true](https://developer.apple.com/documentation/swift/true), the achievement isn’t displayed in any of the standard achievement user interface screens. It remains hidden until the first time your game reports progress toward completing the achievement.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [isReplayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-4bh6k.md): The percentage of players of this game that earned the achievement.

# hidden (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the achievement is initially visible to players.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isHidden) BOOL hidden;
```

```objectivec
@property (atomic, assign, readonly, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the achievement is always visible to the player. If [true](https://developer.apple.com/documentation/swift/true), the achievement isn’t displayed in any of the standard achievement user interface screens. It remains hidden until the first time your game reports progress toward completing the achievement.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [replayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-3zqw6.md): The percentage of players of this game that earned the achievement.
