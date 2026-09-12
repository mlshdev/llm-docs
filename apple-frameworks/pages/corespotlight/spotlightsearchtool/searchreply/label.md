> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/label](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/label)

# label

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A short, LLM-generated description of what the result represents.

## Declaration

```swift
let label: String?
```

<a id="discussion"></a>

## Discussion

Use this property to determine what information the model requested. For complex requests, the tool provides the simplest string that describes the current portion of the task. For example, the string might contain a value like “Attachments from John” or “Documents about the deadline.” You can display the string in your app’s interface or use it as an accessibility label.

## See Also

### Getting the reply details

- [content](content-swift.property.md): The result content — determines what to display and how.
- [status](status-swift.property.md): An indicator of whether the current query is complete or still in progress.
- [SpotlightSearchTool.SearchReply.Content](content-swift.enum.md): What this set of results represents — determines display strategy.
- [SpotlightSearchTool.SearchReply.Status](status-swift.enum.md)
