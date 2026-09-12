> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply)

# SpotlightSearchTool.SearchReply

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A set of search results with routing metadata for host app consumption.

## Declaration

```swift
struct SearchReply
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md)

## Topics

### Getting the reply details

- [content](searchreply/content-swift.property.md): The result content — determines what to display and how.
- [label](searchreply/label.md): A short, LLM-generated description of what the result represents.
- [status](searchreply/status-swift.property.md): An indicator of whether the current query is complete or still in progress.
- [SpotlightSearchTool.SearchReply.Content](searchreply/content-swift.enum.md): What this set of results represents — determines display strategy.
- [SpotlightSearchTool.SearchReply.Status](searchreply/status-swift.enum.md)

### Getting the tokens

- [queryToken](searchreply/querytoken-swift.property.md): An opaque value you use to identify the query that generated the reply.
- [stageToken](searchreply/stagetoken-swift.property.md): An opaque value you use to identify the pipeline stage that generated the reply.
- [SpotlightSearchTool.SearchReply.QueryToken](searchreply/querytoken-swift.struct.md): An opaque type you use to identify a single call to the Spotlight search tool.
- [SpotlightSearchTool.SearchReply.StageToken](searchreply/stagetoken-swift.struct.md): An opaque type you use to identify a single pipeline stage within the Spotlight search tool.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the search results

- [searchResults](searchresults.md): An asynchronous stream that delivers the results of a search to your app for processing.
