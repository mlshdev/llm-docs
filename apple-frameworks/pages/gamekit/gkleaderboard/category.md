> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/category](https://developer.apple.com/documentation/gamekit/gkleaderboard/category)

# category (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The named leaderboard to retrieve information from.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var category: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, Game Center only returns scores from the matching leaderboard. If `nil`, Game Center searches all previous scores of the game. The default is `nil`.

## See Also

### Deprecated properties

- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [isLoading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# category (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The named leaderboard to retrieve information from.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * category;
```

```objectivec
@property (atomic, copy, nullable) NSString * category;
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, Game Center only returns scores from the matching leaderboard. If `nil`, Game Center searches all previous scores of the game. The default is `nil`.

## See Also

### Deprecated properties

- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [loading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
