> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/progress(on:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/progress(on:))

# progress(on:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the achievement progress from a specific achievement of the local player if previously set.

## Declaration

```swift
func progress(on achievement: GKAchievement) -> Double
```

<a id="discussion"></a>

## Discussion

Returns `0` if the achievement hasn’t been set in the current activity.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements(\_:)](removeachievements%28__%29.md): Removes all achievements if they exist.
- [setProgress(on:to:)](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted(\_:)](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

# getProgressOnAchievement: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the achievement progress from a specific achievement of the local player if previously set.

## Declaration

```objectivec
- (double) getProgressOnAchievement:(GKAchievement *) achievement;
```

<a id="discussion"></a>

## Discussion

Returns `0` if the achievement hasn’t been set in the current activity.

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [removeAchievements:](removeachievements%28__%29.md): Removes all achievements if they exist.
- [setProgressOnAchievement:toPercentComplete:](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted:](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.
