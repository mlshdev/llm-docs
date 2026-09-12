> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/isloading](https://developer.apple.com/documentation/gamekit/gkleaderboard/isloading)

# isLoading (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A Boolean value that indicates whether the leaderboard object is retrieving scores.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
var isLoading: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of the `loading` property is [true](https://developer.apple.com/documentation/swift/true) if the leaderboard object has any pending requests for scores.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.

# loading (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A Boolean value that indicates whether the leaderboard object is retrieving scores.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
@property (readonly, getter=isLoading) BOOL loading;
```

<a id="Discussion"></a>

## Discussion

The value of the `loading` property is [true](https://developer.apple.com/documentation/swift/true) if the leaderboard object has any pending requests for scores.

## See Also

### Deprecated properties

- [category](category.md): Deprecated. The named leaderboard to retrieve information from.
- [identifier](identifier.md): Deprecated. The named leaderboard to retrieve information from.
- [localPlayerScore](localplayerscore.md): Deprecated. The score that the local player earns.
- [maxRange](maxrange.md): Deprecated. The size of the leaderboard.
- [playerScope](playerscope-swift.property.md): Deprecated. A filter that restricts the search to a subset of the players in Game Center.
- [range](range.md): Deprecated. The numerical score rankings to return from the search.
- [scores](scores.md): Deprecated. An array of scores that contains the scores that the search returns.
- [timeScope](timescope-swift.property.md): Deprecated. A filter that restricts the search to scores within a specific period of time.
