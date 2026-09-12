> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/showscompletionbanner](https://developer.apple.com/documentation/gamekit/gkachievement/showscompletionbanner)

# showsCompletionBanner (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.

## Declaration

```swift
var showsCompletionBanner: Bool { get set }
```

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), GameKit displays a notification banner to inform the player that they completed the achievement. If you want to present your own interface, set this property to [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Reporting Progress on Achievements

- [report(\_:withCompletionHandler:)](report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [resetAchievements(completionHandler:)](resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.

# showsCompletionBanner (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsCompletionBanner;
```

```objectivec
@property (atomic, assign) BOOL showsCompletionBanner;
```

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), GameKit displays a notification banner to inform the player that they completed the achievement. If you want to present your own interface, set this property to [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Reporting Progress on Achievements

- [reportAchievements:withCompletionHandler:](report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [reportAchievements:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [resetAchievementsWithCompletionHandler:](resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.
