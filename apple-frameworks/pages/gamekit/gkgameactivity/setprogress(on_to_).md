> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/setprogress(on:to:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/setprogress(on:to:))

# setProgress(on:to:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set a progress for an achievement for a player.

## Declaration

```swift
func setProgress(on achievement: GKAchievement, to percentComplete: Double)
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

The framework reports achievement progress when the activity ends.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements(\_:)](removeachievements%28__%29.md): Removes all achievements if they exist.
- [progress(on:)](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setAchievementCompleted(\_:)](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

# setProgressOnAchievement:toPercentComplete: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set a progress for an achievement for a player.

## Declaration

```objectivec
- (void) setProgressOnAchievement:(GKAchievement *) achievement toPercentComplete:(double) percentComplete;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

The framework reports achievement progress when the activity ends.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements:](removeachievements%28__%29.md): Removes all achievements if they exist.
- [getProgressOnAchievement:](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setAchievementCompleted:](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.
