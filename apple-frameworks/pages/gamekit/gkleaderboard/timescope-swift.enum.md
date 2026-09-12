> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/timescope-swift.enum](https://developer.apple.com/documentation/gamekit/gkleaderboard/timescope-swift.enum)

# GKLeaderboard.TimeScope (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Specifies the time period for filtering data.

## Declaration

```swift
enum TimeScope
```

## Topics

### Constants

- [GKLeaderboard.TimeScope.today](timescope-swift.enum/today.md): Loads data for the past 24 hours.
- [GKLeaderboard.TimeScope.week](timescope-swift.enum/week.md): Loads data for the past week.
- [GKLeaderboard.TimeScope.allTime](timescope-swift.enum/alltime.md): Loads a player’s best score.

### Initializers

- [init(rawValue:)](timescope-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading Scores

- [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntries(for:timeScope:completionHandler:)](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboard.PlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboard.Entry](entry.md): Information about a single score by a player on a leaderboard.

# GKLeaderboardTimeScope (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Specifies the time period for filtering data.

## Declaration

```objectivec
enum GKLeaderboardTimeScope : NSInteger;
```

## Topics

### Constants

- [GKLeaderboardTimeScopeToday](timescope-swift.enum/today.md): Loads data for the past 24 hours.
- [GKLeaderboardTimeScopeWeek](timescope-swift.enum/week.md): Loads data for the past week.
- [GKLeaderboardTimeScopeAllTime](timescope-swift.enum/alltime.md): Loads a player’s best score.

## See Also

### Loading Scores

- [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboardPlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboardEntry](entry.md): Information about a single score by a player on a leaderboard.
