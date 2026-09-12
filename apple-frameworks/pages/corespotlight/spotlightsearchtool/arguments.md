> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/arguments](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/arguments)

# SpotlightSearchTool.Arguments

**Framework:** CoreSpotlight  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The overlay tool uses GeneratedContent as its Arguments type so the full native schema (FullArguments or RAGSearchArguments) passes through to NativeSpotlightSearchTool without re-encoding.

## Declaration

```swift
typealias Arguments = GeneratedContent
```
