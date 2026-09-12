> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/raritypercent-4bh6k](https://developer.apple.com/documentation/gamekit/gkachievementdescription/raritypercent-4bh6k)

# rarityPercent

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The percentage of players of this game that earned the achievement.

## Declaration

```swift
var rarityPercent: Double? { get }
```

<a id="Discussion"></a>

## Discussion

The rarity percentage ranges between `0.0` and `100.0`, inclusive, where `0.0` indicates that no player has earned the achievement, and `100.0` indicates that every player has earned the achievement. This property is `nil` if there isn’t enough data to compute the rarity of the achievement.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [isHidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [isReplayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
