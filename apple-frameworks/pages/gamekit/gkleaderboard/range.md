> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/range](https://developer.apple.com/documentation/gamekit/gkleaderboard/range)

# range (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The numerical score rankings to return from the search.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var range: NSRange { get set }
```

<a id="Discussion"></a>

## Discussion

GameKit ignores the [range](range.md) property if the leaderboard request initializes using the [init(playerIDs:)](init%28playerids_%29.md) method. Otherwise, the [range](range.md) property filters which scores to return to your game. For example, if you specify a range of `[1,10]`, when the search completes, your game receives the best ten scores. The default range is `[1,25]`.

The minimum index is `1`. The maximum length is `100`.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [isLoading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# range (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The numerical score rankings to return from the search.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, assign) NSRange range;
```

```objectivec
@property (atomic, assign) NSRange range;
```

<a id="Discussion"></a>

## Discussion

GameKit ignores the [range](range.md) property if the leaderboard request initializes using the [initWithPlayerIDs:](init%28playerids_%29.md) method. Otherwise, the [range](range.md) property filters which scores to return to your game. For example, if you specify a range of `[1,10]`, when the search completes, your game receives the best ten scores. The default range is `[1,25]`.

The minimum index is `1`. The maximum length is `100`.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [loading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
