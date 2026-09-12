> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/playerscope-swift.enum](https://developer.apple.com/documentation/gamekit/gkleaderboard/playerscope-swift.enum)

# GKLeaderboard.PlayerScope (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Specifies the type of players for filtering data.

## Declaration

```swift
enum PlayerScope
```

## Topics

### Constants

- [GKLeaderboard.PlayerScope.global](playerscope-swift.enum/global.md): Loads data for all players of the game.
- [GKLeaderboard.PlayerScope.friendsOnly](playerscope-swift.enum/friendsonly.md): Loads only data for friends of the local player.

### Initializers

- [init(rawValue:)](playerscope-swift.enum/init%28rawvalue_%29.md)

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
- [GKLeaderboard.TimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboard.Entry](entry.md): Information about a single score by a player on a leaderboard.

# GKLeaderboardPlayerScope (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Specifies the type of players for filtering data.

## Declaration

```objectivec
enum GKLeaderboardPlayerScope : NSInteger;
```

## Topics

### Constants

- [GKLeaderboardPlayerScopeGlobal](playerscope-swift.enum/global.md): Loads data for all players of the game.
- [GKLeaderboardPlayerScopeFriendsOnly](playerscope-swift.enum/friendsonly.md): Loads only data for friends of the local player.

## See Also

### Loading Scores

- [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboardTimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboardEntry](entry.md): Information about a single score by a player on a leaderboard.
