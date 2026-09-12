> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchstatistic](https://developer.apple.com/documentation/corespotlight/searchstatistic)

# SearchStatistic

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A scalar statistic derived from search results (sum, average, max, min, median, stddev).

## Declaration

```swift
struct SearchStatistic
```

## Topics

### Creating a search statistic

- [init(name:value:header:)](searchstatistic/init%28name_value_header_%29.md)

### Getting the statistic details

- [name](searchstatistic/name.md): The statistic name (e.g., “average”, “max”, “total”).
- [header](searchstatistic/header.md): A short description of what was computed (e.g., “Average file size”).
- [value](searchstatistic/value.md): The computed value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search results

- [SearchCount](searchcount.md): A scalar count result (e.g., “47 emails from John”).
- [SearchResultsTable](searchresultstable.md): Tabulated result data — rows with typed columns for display or spreadsheet export.
- [SearchTextResult](searchtextresult.md): LLM-generated text summary or analysis from a pipeline stage.
