> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadentries(for:timescope:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadentries(for:timescope:completionhandler:))

# loadEntries(for:timeScope:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the scores for the local player and other players for the specified time period.

## Declaration

```swift
func loadEntries(for players: [GKPlayer], timeScope: GKLeaderboard.TimeScope, completionHandler: @escaping @Sendable (GKLeaderboard.Entry?, [GKLeaderboard.Entry]?, (any Error)?) -> Void)
```

```swift
func loadEntries(for players: [GKPlayer], timeScope: GKLeaderboard.TimeScope) async throws -> (GKLeaderboard.Entry?, [GKLeaderboard.Entry])
```

## Parameters

- `players`: The players whose scores this method returns.
- `timeScope`: Specifies the time period for the scores. This parameter is applicable to nonrecurring leaderboards only. For recurring leaderboards, pass [GKLeaderboard.TimeScope.allTime](timescope-swift.enum/alltime.md) for this parameter.
- `completionHandler`: A block that GameKit calls when this method loads the scores.

  The block receives the following parameters:

  - **localPlayerEntry**: The score for the local player, or `nil` if the player has no score.
  - **entries**: The scores for the players during the specified time period, including the local player’s score if it exists.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

## See Also

### Loading Scores

- [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [GKLeaderboard.PlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboard.TimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboard.Entry](entry.md): Information about a single score by a player on a leaderboard.

# loadEntriesForPlayers:timeScope:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the scores for the local player and other players for the specified time period.

## Declaration

```objectivec
- (void) loadEntriesForPlayers:(NSArray<GKPlayer *> *) players timeScope:(GKLeaderboardTimeScope) timeScope completionHandler:(void (^)(GKLeaderboardEntry *localPlayerEntry, NSArray<GKLeaderboardEntry *> *entries, NSError *error)) completionHandler;
```

## Parameters

- `players`: The players whose scores this method returns.
- `timeScope`: Specifies the time period for the scores. This parameter is applicable to nonrecurring leaderboards only. For recurring leaderboards, pass [GKLeaderboardTimeScopeAllTime](timescope-swift.enum/alltime.md) for this parameter.
- `completionHandler`: A block that GameKit calls when this method loads the scores.

  The block receives the following parameters:

  - **localPlayerEntry**: The score for the local player, or `nil` if the player has no score.
  - **entries**: The scores for the players during the specified time period, including the local player’s score if it exists.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

## See Also

### Loading Scores

- [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [GKLeaderboardPlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboardTimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboardEntry](entry.md): Information about a single score by a player on a leaderboard.
