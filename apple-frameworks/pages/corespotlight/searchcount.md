> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchcount](https://developer.apple.com/documentation/corespotlight/searchcount)

# SearchCount

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A scalar count result (e.g., “47 emails from John”).

## Declaration

```swift
struct SearchCount
```

## Topics

### Creating the search count

- [init(value:header:)](searchcount/init%28value_header_%29.md)

### Getting the counted information

- [header](searchcount/header.md): A short description of what was counted (e.g., “Emails from John since 2003”).
- [value](searchcount/value.md): The count value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search results

- [SearchResultsTable](searchresultstable.md): Tabulated result data — rows with typed columns for display or spreadsheet export.
- [SearchStatistic](searchstatistic.md): A scalar statistic derived from search results (sum, average, max, min, median, stddev).
- [SearchTextResult](searchtextresult.md): LLM-generated text summary or analysis from a pipeline stage.
