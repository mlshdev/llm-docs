> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchresults](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchresults)

# searchResults

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An asynchronous stream that delivers the results of a search to your app for processing.

## Declaration

```swift
var searchResults: some AsyncSequence<SpotlightSearchTool.SearchReply, Never> { get }
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

Use this property to monitor the search results as the tool generates them. Each time the model calls the Spotlight search tool’s [call(arguments:)](../../foundationmodels/tool/call%28arguments_%29.md) method, the tool generates one or more [SpotlightSearchTool.SearchReply](searchreply.md) structures with information about the results. Use this information to track the tool’s behavior while responding to the model’s requests.

Monitor the asynchronous stream using a `for await` loop in a separate task, as shown in the following example:

```swift
let tool = SpotlightSearchTool()
let session = LanguageModelSession(tools: [tool])

Task {
    for await result in tool.searchResults {
        // Process each search result as it arrives.
    }
}

let response = try await session.respond(to: "Show me recent emails from Shelly”)
```

For more information about how to process search results, see [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md).

## See Also

### Getting the search results

- [SpotlightSearchTool.SearchReply](searchreply.md): A set of search results with routing metadata for host app consumption.
