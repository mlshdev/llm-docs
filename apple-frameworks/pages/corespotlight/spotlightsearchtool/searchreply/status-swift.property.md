> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/status-swift.property](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/status-swift.property)

# status

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An indicator of whether the current query is complete or still in progress.

## Declaration

```swift
let status: SpotlightSearchTool.SearchReply.Status
```

<a id="discussion"></a>

## Discussion

The of this property is [SpotlightSearchTool.SearchReply.Status.partial](status-swift.enum/partial.md) when the system has more replies to deliver for the same [queryToken](querytoken-swift.property.md) value. When delivering the last reply for a query, the tool sets this value to [SpotlightSearchTool.SearchReply.Status.complete](status-swift.enum/complete.md). Use this value to track changes to the current query. For example, you might choose to partition data for each query and display them separately in your interface.

## See Also

### Getting the reply details

- [content](content-swift.property.md): The result content — determines what to display and how.
- [label](label.md): A short, LLM-generated description of what the result represents.
- [SpotlightSearchTool.SearchReply.Content](content-swift.enum.md): What this set of results represents — determines display strategy.
- [SpotlightSearchTool.SearchReply.Status](status-swift.enum.md)
