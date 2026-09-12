> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/removeachievements(_:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/removeachievements(_:))

# removeAchievements(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes all achievements if they exist.

## Declaration

```swift
func removeAchievements(_ achievements: [GKAchievement])
```

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [progress(on:)](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgress(on:to:)](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted(\_:)](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

# removeAchievements: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes all achievements if they exist.

## Declaration

```objectivec
- (void) removeAchievements:(NSArray<GKAchievement *> *) achievements;
```

## See Also

### Getting and removing achievements

- [achievements](achievements.md): All achievements that have been associated with this activity.
- [getProgressOnAchievement:](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgressOnAchievement:toPercentComplete:](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted:](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.
