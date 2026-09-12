> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/status-swift.enum](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/status-swift.enum)

# SpotlightSearchTool.SearchReply.Status

**Framework:** CoreSpotlight  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
enum Status
```

## Topics

### Enumeration Cases

- [SpotlightSearchTool.SearchReply.Status.complete](status-swift.enum/complete.md): This is the final set of results for this `queryToken`.
- [SpotlightSearchTool.SearchReply.Status.partial](status-swift.enum/partial.md): More results may be yielded for this `queryToken`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the reply details

- [content](content-swift.property.md): The result content — determines what to display and how.
- [label](label.md): A short, LLM-generated description of what the result represents.
- [status](status-swift.property.md): An indicator of whether the current query is complete or still in progress.
- [SpotlightSearchTool.SearchReply.Content](content-swift.enum.md): What this set of results represents — determines display strategy.
