> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/highlightanalysisrequest/result](https://developer.apple.com/documentation/mediaintelligence/highlightanalysisrequest/result)

# HighlightAnalysisRequest.Result

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The output of a highlight analysis.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

This type describes the highlights and engagement levels the framework finds in a video.

[highlights](result/highlights.md) lists the time ranges the framework identifies as highlights. Use these ranges to build a highlight reel or to seek directly to the most interesting moments.

[levels](result/levels.md) provides a finer-grained view where every segment in the video gets a floating-point engagement level from `0` (least engaging) to `9` (most engaging). Use these values to visualize a video’s pacing or to let people scrub through segments by interest level.

## Topics

### Inspecting the result

- [highlights](result/highlights.md): The time ranges the framework identifies as highlights.
- [levels](result/levels.md): The engagement level of each segment in the video.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VideoAnalyzer.Result](../videoanalyzer/result.md)
