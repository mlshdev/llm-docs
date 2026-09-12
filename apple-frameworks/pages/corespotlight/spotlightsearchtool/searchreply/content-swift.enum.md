> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/content-swift.enum](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/content-swift.enum)

# SpotlightSearchTool.SearchReply.Content

**Framework:** CoreSpotlight  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

What this set of results represents — determines display strategy.

## Declaration

```swift
enum Content
```

## Topics

### Enumeration Cases

- [SpotlightSearchTool.SearchReply.Content.count(\_:)](content-swift.enum/count%28__%29.md): A scalar count answer (e.g., “How many emails from John?” → 47).
- [SpotlightSearchTool.SearchReply.Content.groupedItems(\_:)](content-swift.enum/groupeditems%28__%29.md): Items partitioned by an attribute value (e.g. content type).
- [SpotlightSearchTool.SearchReply.Content.items(\_:)](content-swift.enum/items%28__%29.md): Ssearch result items (emails, files, etc.) — display as a list.
- [SpotlightSearchTool.SearchReply.Content.scoredItems(\_:)](content-swift.enum/scoreditems%28__%29.md): Items annotated with caller-assigned relevance scores.
- [SpotlightSearchTool.SearchReply.Content.statistic(\_:)](content-swift.enum/statistic%28__%29.md): A scalar statistic (sum, average, max, min, median, stddev).
- [SpotlightSearchTool.SearchReply.Content.table(\_:)](content-swift.enum/table%28__%29.md): Tabulated data — rows of labeled values, suitable for a table or chart.
- [SpotlightSearchTool.SearchReply.Content.text(\_:)](content-swift.enum/text%28__%29.md): LLM-generated text summary or analysis.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the reply details

- [content](content-swift.property.md): The result content — determines what to display and how.
- [label](label.md): A short, LLM-generated description of what the result represents.
- [status](status-swift.property.md): An indicator of whether the current query is complete or still in progress.
- [SpotlightSearchTool.SearchReply.Status](status-swift.enum.md)
