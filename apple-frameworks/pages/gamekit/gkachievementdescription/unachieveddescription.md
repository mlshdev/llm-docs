> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/unachieveddescription](https://developer.apple.com/documentation/gamekit/gkachievementdescription/unachieveddescription)

# unachievedDescription (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A localized description of the achievement that you display when the player hasn’t completed the achievement.

## Declaration

```swift
var unachievedDescription: String { get }
```

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [isHidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [isReplayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-4bh6k.md): The percentage of players of this game that earned the achievement.

# unachievedDescription (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A localized description of the achievement that you display when the player hasn’t completed the achievement.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * unachievedDescription;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * unachievedDescription;
```

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [hidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [replayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-3zqw6.md): The percentage of players of this game that earned the achievement.
