> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/resetachievements(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/resetachievements(completionhandler:))

# resetAchievements(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Resets the percentage completed for all of the player’s achievements.

## Declaration

```swift
class func resetAchievements(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func resetAchievements() async throws
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameter:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

This method sets the percentage complete for all of the player’s achievements to zero. If you hide an achievement when you create it in App Store Connect, this method hides the achievement again.

## See Also

### Reporting Progress on Achievements

- [report(\_:withCompletionHandler:)](report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.

# resetAchievementsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Resets the percentage completed for all of the player’s achievements.

## Declaration

```objectivec
+ (void) resetAchievementsWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameter:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

This method sets the percentage complete for all of the player’s achievements to zero. If you hide an achievement when you create it in App Store Connect, this method hides the achievement again.

## See Also

### Reporting Progress on Achievements

- [reportAchievements:withCompletionHandler:](report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [reportAchievements:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
