> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/arguments

# SpotlightSearchTool.Arguments

**Framework:** CoreSpotlight  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The overlay tool uses GeneratedContent as its Arguments type so the full native schema (FullArguments or RAGSearchArguments) passes through to NativeSpotlightSearchTool without re-encoding.

## Declaration

```swift
typealias Arguments = GeneratedContent
```
