> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/isreplayable](https://developer.apple.com/documentation/gamekit/gkachievementdescription/isreplayable)

# isReplayable (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the player can earn the achievement multiple times.

## Declaration

```swift
var isReplayable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), players can earn the achievement only once. After the player earns the achievement, Game Center ignores any further progress you report for it. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the player earns the achievement each time you report it.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [isHidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [rarityPercent](raritypercent-4bh6k.md): The percentage of players of this game that earned the achievement.

# replayable (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the player can earn the achievement multiple times.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isReplayable) BOOL replayable;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), players can earn the achievement only once. After the player earns the achievement, Game Center ignores any further progress you report for it. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the player earns the achievement each time you report it.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [hidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [rarityPercent](raritypercent-3zqw6.md): The percentage of players of this game that earned the achievement.
