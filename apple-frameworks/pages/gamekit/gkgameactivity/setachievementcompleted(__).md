> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/setachievementcompleted(_:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/setachievementcompleted(_:))

# setAchievementCompleted(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set progress to 100% for an achievement for a player.

## Declaration

```swift
func setAchievementCompleted(_ achievement: GKAchievement)
```

<a id="discussion"></a>

## Discussion

The system reports achievement completion when the activity ends.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements(\_:)](removeachievements%28__%29.md): Removes all achievements if they exist.
- [progress(on:)](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgress(on:to:)](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.

# setAchievementCompleted: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set progress to 100% for an achievement for a player.

## Declaration

```objectivec
- (void) setAchievementCompleted:(GKAchievement *) achievement;
```

<a id="discussion"></a>

## Discussion

The system reports achievement completion when the activity ends.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements:](removeachievements%28__%29.md): Removes all achievements if they exist.
- [getProgressOnAchievement:](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgressOnAchievement:toPercentComplete:](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
