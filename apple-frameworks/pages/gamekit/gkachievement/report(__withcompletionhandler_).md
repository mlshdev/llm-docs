> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/report(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/report(_:withcompletionhandler:))

# report(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Reports the player’s progress of players toward one or more achievements.

## Declaration

```swift
class func report(_ achievements: [GKAchievement], withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func report(_ achievements: [GKAchievement]) async throws
```

## Parameters

- `achievements`: The achievements that you’re reporting to Game Center.
- `completionHandler`: A block that GameKit calls when the operation completes.

  The block receives the following parameter:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Call this method to communicate to Game Center about the local player’s progress towards completing one or more achievements.

Game Center only updates the achievement’s [percentComplete](percentcomplete.md) and [lastReportedDate](lastreporteddate.md) properties if the [percentComplete](percentcomplete.md) property of an achievement that you pass to this method is greater than the current value. If the achievement is hidden, Game Center also makes it visible. If the [percentComplete](percentcomplete.md) property is `100.0`, Game Center sets its [isCompleted](iscompleted.md) property to [true](https://developer.apple.com/documentation/swift/true) and may show a banner to the player.

For efficiency, include multiple achievements rather than invoking this method separately for each achievement. Since Game Center associates an achievement with the local player at the time you create the achievement, only invoke this method after you initialize the same player on the device.

## See Also

### Reporting Progress on Achievements

- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [resetAchievements(completionHandler:)](resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.

# reportAchievements:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Reports the player’s progress of players toward one or more achievements.

## Declaration

```objectivec
+ (void) reportAchievements:(NSArray<GKAchievement *> *) achievements withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `achievements`: The achievements that you’re reporting to Game Center.
- `completionHandler`: A block that GameKit calls when the operation completes.

  The block receives the following parameter:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

Call this method to communicate to Game Center about the local player’s progress towards completing one or more achievements.

Game Center only updates the achievement’s [percentComplete](percentcomplete.md) and [lastReportedDate](lastreporteddate.md) properties if the [percentComplete](percentcomplete.md) property of an achievement that you pass to this method is greater than the current value. If the achievement is hidden, Game Center also makes it visible. If the [percentComplete](percentcomplete.md) property is `100.0`, Game Center sets its [completed](iscompleted.md) property to [true](https://developer.apple.com/documentation/swift/true) and may show a banner to the player.

For efficiency, include multiple achievements rather than invoking this method separately for each achievement. Since Game Center associates an achievement with the local player at the time you create the achievement, only invoke this method after you initialize the same player on the device.

## See Also

### Reporting Progress on Achievements

- [reportAchievements:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [resetAchievementsWithCompletionHandler:](resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.
