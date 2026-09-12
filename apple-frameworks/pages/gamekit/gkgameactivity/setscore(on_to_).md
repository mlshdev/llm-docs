> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/setscore(on:to:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/setscore(on:to:))

# setScore(on:to:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set a score of a leaderboard for a player.

## Declaration

```swift
func setScore(on leaderboard: GKLeaderboard, to score: Int)
```

<a id="discussion"></a>

## Discussion

The framewowrk submits the score to the leaderboard when the activity ends.

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [score(on:)](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScore(on:to:context:)](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScores(from:)](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.

# setScoreOnLeaderboard:toScore: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Set a score of a leaderboard for a player.

## Declaration

```objectivec
- (void) setScoreOnLeaderboard:(GKLeaderboard *) leaderboard toScore:(NSInteger) score;
```

<a id="discussion"></a>

## Discussion

The framewowrk submits the score to the leaderboard when the activity ends.

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [getScoreOnLeaderboard:](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScoreOnLeaderboard:toScore:context:](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScoresFromLeaderboards:](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.
