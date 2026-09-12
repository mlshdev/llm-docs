> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/playerscope-swift.property](https://developer.apple.com/documentation/gamekit/gkleaderboard/playerscope-swift.property)

# playerScope (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A filter that restricts the search to a subset of the players in Game Center.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var playerScope: GKLeaderboard.PlayerScope { get set }
```

<a id="Discussion"></a>

## Discussion

GameKit ignores the [playerScope](playerscope-swift.property.md) property if the leaderboard request initializes using the [init(playerIDs:)](init%28playerids_%29.md) method. Otherwise, the [playerScope](playerscope-swift.property.md) property determines which players to include in the request for high scores. The default is [GKLeaderboard.PlayerScope.global](playerscope-swift.enum/global.md). See [GKLeaderboard.PlayerScope](playerscope-swift.enum.md) for more information.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [isLoading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# playerScope (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A filter that restricts the search to a subset of the players in Game Center.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, assign) GKLeaderboardPlayerScope playerScope;
```

```objectivec
@property (atomic, assign) GKLeaderboardPlayerScope playerScope;
```

<a id="Discussion"></a>

## Discussion

GameKit ignores the [playerScope](playerscope-swift.property.md) property if the leaderboard request initializes using the [initWithPlayerIDs:](init%28playerids_%29.md) method. Otherwise, the [playerScope](playerscope-swift.property.md) property determines which players to include in the request for high scores. The default is [GKLeaderboardPlayerScopeGlobal](playerscope-swift.enum/global.md). See [GKLeaderboardPlayerScope](playerscope-swift.enum.md) for more information.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [loading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
