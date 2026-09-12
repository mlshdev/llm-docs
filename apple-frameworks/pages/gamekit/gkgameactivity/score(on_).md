> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/score(on:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/score(on:))

# score(on:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the leaderboard score from a specific leaderboard of the local player if previously set.

## Declaration

```swift
func score(on leaderboard: GKLeaderboard) -> GKLeaderboardScore?
```

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [setScore(on:to:)](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScore(on:to:context:)](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScores(from:)](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.

# getScoreOnLeaderboard: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the leaderboard score from a specific leaderboard of the local player if previously set.

## Declaration

```objectivec
- (GKLeaderboardScore *) getScoreOnLeaderboard:(GKLeaderboard *) leaderboard;
```

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [setScoreOnLeaderboard:toScore:](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScoreOnLeaderboard:toScore:context:](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScoresFromLeaderboards:](removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.
