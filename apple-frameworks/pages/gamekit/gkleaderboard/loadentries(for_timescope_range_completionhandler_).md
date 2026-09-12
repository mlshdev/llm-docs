> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadentries(for:timescope:range:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadentries(for:timescope:range:completionhandler:))

# loadEntries(for:timeScope:range:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the scores for the local player and other players for the specified type of player, time period, and ranks.

## Declaration

```swift
func loadEntries(for playerScope: GKLeaderboard.PlayerScope, timeScope: GKLeaderboard.TimeScope, range: NSRange, completionHandler: @escaping @Sendable (GKLeaderboard.Entry?, [GKLeaderboard.Entry]?, Int, (any Error)?) -> Void)
```

```swift
func loadEntries(for playerScope: GKLeaderboard.PlayerScope, timeScope: GKLeaderboard.TimeScope, range: NSRange) async throws -> (GKLeaderboard.Entry?, [GKLeaderboard.Entry], Int)
```

## Parameters

- `playerScope`: Specifies whether to get scores from friends or all players.
- `timeScope`: Specifies the time period for the scores. This parameter is applicable to nonrecurring leaderboards only. For recurring leaderboards, pass [GKLeaderboard.TimeScope.allTime](timescope-swift.enum/alltime.md) for this parameter.
- `range`: Specifies the range of ranks to use for getting the scores. The difference between the minimum rank and maximum rank must not exceed `100`.
- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - **localPlayerEntry**: The score for the local player, or `nil` if the player has no score.
  - **entries**: The scores this method loads that match the `playerScope`, `timeScope`, and `range` parameters, including the local player’s score if it exists.
  - **totalPlayerCount**: The total number of players whose scores match the `playerScope` and `timeScope` parameters, but not the `range` parameter.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

<a id="Discussion"></a>

## Discussion

GameKit uses the following algorithm to fetch [GKLeaderboard](../gkleaderboard.md) scores:

1. Begins with the set of all possible scores for the leaderboard.
2. Discards any scores that don’t match the `playerScope` and `timeScope` properties.
3. For each player, keeps the best score that player earns and discards the rest.
4. Sorts the scores from best to worst.
5. Uses the range property to determine which scores return.

## See Also

### Loading Scores

- [loadEntries(for:timeScope:completionHandler:)](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboard.PlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboard.TimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboard.Entry](entry.md): Information about a single score by a player on a leaderboard.

# loadEntriesForPlayerScope:timeScope:range:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the scores for the local player and other players for the specified type of player, time period, and ranks.

## Declaration

```objectivec
- (void) loadEntriesForPlayerScope:(GKLeaderboardPlayerScope) playerScope timeScope:(GKLeaderboardTimeScope) timeScope range:(NSRange) range completionHandler:(void (^)(GKLeaderboardEntry *localPlayerEntry, NSArray<GKLeaderboardEntry *> *entries, NSInteger totalPlayerCount, NSError *error)) completionHandler;
```

## Parameters

- `playerScope`: Specifies whether to get scores from friends or all players.
- `timeScope`: Specifies the time period for the scores. This parameter is applicable to nonrecurring leaderboards only. For recurring leaderboards, pass [GKLeaderboardTimeScopeAllTime](timescope-swift.enum/alltime.md) for this parameter.
- `range`: Specifies the range of ranks to use for getting the scores. The difference between the minimum rank and maximum rank must not exceed `100`.
- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - **localPlayerEntry**: The score for the local player, or `nil` if the player has no score.
  - **entries**: The scores this method loads that match the `playerScope`, `timeScope`, and `range` parameters, including the local player’s score if it exists.
  - **totalPlayerCount**: The total number of players whose scores match the `playerScope` and `timeScope` parameters, but not the `range` parameter.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

<a id="Discussion"></a>

## Discussion

GameKit uses the following algorithm to fetch [GKLeaderboard](../gkleaderboard.md) scores:

1. Begins with the set of all possible scores for the leaderboard.
2. Discards any scores that don’t match the `playerScope` and `timeScope` properties.
3. For each player, keeps the best score that player earns and discards the rest.
4. Sorts the scores from best to worst.
5. Uses the range property to determine which scores return.

## See Also

### Loading Scores

- [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboardPlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboardTimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboardEntry](entry.md): Information about a single score by a player on a leaderboard.
