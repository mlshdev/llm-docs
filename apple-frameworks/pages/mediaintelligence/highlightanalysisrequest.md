> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/highlightanalysisrequest](https://developer.apple.com/documentation/mediaintelligence/highlightanalysisrequest)

# HighlightAnalysisRequest

**Framework:** Media Intelligence  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A request that identifies the most engaging segments of a video.

## Declaration

```swift
final class HighlightAnalysisRequest
```

## Mentioned In

- [Finding the best moments in a video](finding-the-best-moments-in-a-video.md)

<a id="overview"></a>

## Overview

[HighlightAnalysisRequest](highlightanalysisrequest.md) asks [VideoAnalyzer](videoanalyzer.md) to find the highlight segments of a video and score every segment for engagement. Pass it to [analyze(\_:for:)](videoanalyzer/analyze%28__for_%29.md) to receive a [HighlightAnalysisRequest.Result](highlightanalysisrequest/result.md) value.

## Topics

### Creating a request

- [init()](highlightanalysisrequest/init%28%29.md): Creates a highlight analysis request.

### Inspecting the result

- [HighlightAnalysisRequest.Result](highlightanalysisrequest/result.md): The output of a highlight analysis.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VideoAnalyzer.Request](videoanalyzer/request.md)

## See Also

### Video analysis

- [Finding the best moments in a video](finding-the-best-moments-in-a-video.md): Identify keyframes and highlight segments using on-device analysis.
- [VideoAnalyzer](videoanalyzer.md): An object that analyzes video assets for highlights and key frames.
- [MediaIntelligenceVideoAsset](mediaintelligencevideoasset.md): A video asset to analyze.
- [KeyFrameAnalysisRequest](keyframeanalysisrequest.md): A request that identifies the best representative frame of a video.
