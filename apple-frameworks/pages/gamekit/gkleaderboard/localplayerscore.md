> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/localplayerscore](https://developer.apple.com/documentation/gamekit/gkleaderboard/localplayerscore)

# localPlayerScore (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The score that the local player earns.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var localPlayerScore: GKScore? { get }
```

<a id="Discussion"></a>

## Discussion

This property is invalid until a call to [loadScores(completionHandler:)](loadscores%28completionhandler_%29.md) is complete. Afterward, it contains a score object representing the local player’s score on the leaderboard according to the filters you apply to the query.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [isLoading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# localPlayerScore (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The score that the local player earns.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) GKScore * localPlayerScore;
```

```objectivec
@property (atomic, strong, readonly, nullable) GKScore * localPlayerScore;
```

<a id="Discussion"></a>

## Discussion

This property is invalid until a call to [loadScoresWithCompletionHandler:](loadscores%28completionhandler_%29.md) is complete. Afterward, it contains a score object representing the local player’s score on the leaderboard according to the filters you apply to the query.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [loading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
