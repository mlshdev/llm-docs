> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/removescores(from:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/removescores(from:))

# removeScores(from:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes all scores from leaderboards for a player if exist.

## Declaration

```swift
func removeScores(from leaderboards: [GKLeaderboard])
```

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [score(on:)](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScore(on:to:)](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScore(on:to:context:)](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.

# removeScoresFromLeaderboards: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes all scores from leaderboards for a player if exist.

## Declaration

```objectivec
- (void) removeScoresFromLeaderboards:(NSArray<GKLeaderboard *> *) leaderboards;
```

## See Also

### Getting and removing leaderboard scores

- [leaderboardScores](leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [getScoreOnLeaderboard:](score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScoreOnLeaderboard:toScore:](setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScoreOnLeaderboard:toScore:context:](setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
