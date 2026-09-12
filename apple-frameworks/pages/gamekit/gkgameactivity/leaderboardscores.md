> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/leaderboardscores](https://developer.apple.com/documentation/gamekit/gkgameactivity/leaderboardscores)

# leaderboardScores (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All leaderboard scores that have been associated with this activity.

## Declaration

```swift
var leaderboardScores: Set<GKLeaderboardScore> { get }
```

<a id="discussion"></a>

## Discussion

Scores will be submitted to the leaderboards when the activity ends.

## See Also

### Getting and removing leaderboard scores

- [score(on:)](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScore(on:to:)](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScore(on:to:context:)](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScores(from:)](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.

# leaderboardScores (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All leaderboard scores that have been associated with this activity.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<GKLeaderboardScore *> * leaderboardScores;
```

<a id="discussion"></a>

## Discussion

Scores will be submitted to the leaderboards when the activity ends.

## See Also

### Getting and removing leaderboard scores

- [getScoreOnLeaderboard:](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScoreOnLeaderboard:toScore:](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScoreOnLeaderboard:toScore:context:](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScoresFromLeaderboards:](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.
