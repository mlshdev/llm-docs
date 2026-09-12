> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/achievements](https://developer.apple.com/documentation/gamekit/gkgameactivity/achievements)

# achievements (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All achievements that have been associated with this activity.

## Declaration

```swift
var achievements: Set<GKAchievement> { get }
```

<a id="discussion"></a>

## Discussion

Progress of each achievement will be reported when the activity ends.

## See Also

### Getting and removing achievements

- [removeAchievements(\_:)](removeachievements%28__%29.md): Removes all achievements if they exist.
- [progress(on:)](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgress(on:to:)](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted(\_:)](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

# achievements (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All achievements that have been associated with this activity.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<GKAchievement *> * achievements;
```

<a id="discussion"></a>

## Discussion

Progress of each achievement will be reported when the activity ends.

## See Also

### Getting and removing achievements

- [removeAchievements:](removeachievements%28__%29.md): Removes all achievements if they exist.
- [getProgressOnAchievement:](progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgressOnAchievement:toPercentComplete:](setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted:](setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.
