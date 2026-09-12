> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchtextresult](https://developer.apple.com/documentation/corespotlight/searchtextresult)

# SearchTextResult

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

LLM-generated text summary or analysis from a pipeline stage.

## Declaration

```swift
struct SearchTextResult
```

## Topics

### Creating a text result

- [init(body:header:)](searchtextresult/init%28body_header_%29.md)

### Getting the result details

- [header](searchtextresult/header.md): A short description of what this text represents.
- [body](searchtextresult/body.md): The text body.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search results

- [SearchCount](searchcount.md): A scalar count result (e.g., “47 emails from John”).
- [SearchResultsTable](searchresultstable.md): Tabulated result data — rows with typed columns for display or spreadsheet export.
- [SearchStatistic](searchstatistic.md): A scalar statistic derived from search results (sum, average, max, min, median, stddev).
