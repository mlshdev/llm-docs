> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/stagetoken-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/stagetoken-swift.struct)

# SpotlightSearchTool.SearchReply.StageToken

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An opaque type you use to identify a single pipeline stage within the Spotlight search tool.

## Declaration

```swift
struct StageToken
```

<a id="overview"></a>

## Overview

Within a single call to the Spotlight search tool’s [call(arguments:)](../../../foundationmodels/tool/call%28arguments_%29.md) method, the tool can run one or more pipeline stages to deliver the requested results. Each stage corresponds to a specific task needed to generate the results. For example, one stage might rank the search results based on their relevance. When delivering results to your app, the tool includes a `StageToken` value in the [SpotlightSearchTool.SearchReply](../searchreply.md) structure it delivers. You can use the token to associate that data with a particular processing stage of the tool.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the tokens

- [queryToken](querytoken-swift.property.md): An opaque value you use to identify the query that generated the reply.
- [stageToken](stagetoken-swift.property.md): An opaque value you use to identify the pipeline stage that generated the reply.
- [SpotlightSearchTool.SearchReply.QueryToken](querytoken-swift.struct.md): An opaque type you use to identify a single call to the Spotlight search tool.
