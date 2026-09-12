> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/searchreply/querytoken-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/searchreply/querytoken-swift.struct)

# SpotlightSearchTool.SearchReply.QueryToken

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An opaque type you use to identify a single call to the Spotlight search tool.

## Declaration

```swift
struct QueryToken
```

<a id="overview"></a>

## Overview

When processing a request, a model might call the Spotlight search tool multiple times to retrieve results. Each time the model calls the Spotlight search tool’s [call(arguments:)](../../../foundationmodels/tool/call%28arguments_%29.md) method, the tool generates a new `QueryToken` to track that request. When delivering results to your app, the tool includes this token in the [SpotlightSearchTool.SearchReply](../searchreply.md) structures it delivers. Use the token to associate that data with a specific query.

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
- [SpotlightSearchTool.SearchReply.StageToken](stagetoken-swift.struct.md): An opaque type you use to identify a single pipeline stage within the Spotlight search tool.
