> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/identifier](https://developer.apple.com/documentation/gamekit/gkleaderboard/identifier)

# identifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The named leaderboard to retrieve information from.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, Game Center only returns scores from the matching leaderboard. If `nil`, Game Center searches all previous scores of the game. The default is `nil`.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [isLoading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# identifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The named leaderboard to retrieve information from.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * identifier;
```

```objectivec
@property (atomic, copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, Game Center only returns scores from the matching leaderboard. If `nil`, Game Center searches all previous scores of the game. The default is `nil`.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [loading](isloading.md): Deprecated. A Boolean value that indicates whether the leaderboard object is retrieving scores.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
