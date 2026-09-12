> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/keyframeanalysisrequest](https://developer.apple.com/documentation/mediaintelligence/keyframeanalysisrequest)

# KeyFrameAnalysisRequest

**Framework:** Media Intelligence  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A request that identifies the best representative frame of a video.

## Declaration

```swift
final class KeyFrameAnalysisRequest
```

## Mentioned In

- [Finding the best moments in a video](finding-the-best-moments-in-a-video.md)

<a id="overview"></a>

## Overview

Use this type to find the single frame that best represents the overall content of the video. Pass it to [analyze(\_:for:)](videoanalyzer/analyze%28__for_%29.md) to receive a [KeyFrameAnalysisRequest.Result](keyframeanalysisrequest/result.md) value containing the frame’s timestamp.

Use the timestamp to seek a player to that position or to extract a thumbnail image.

## Topics

### Creating a request

- [init()](keyframeanalysisrequest/init%28%29.md): Creates a key frame analysis request.

### Inspecting the result

- [KeyFrameAnalysisRequest.Result](keyframeanalysisrequest/result.md): The output of a key frame analysis.

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
- [HighlightAnalysisRequest](highlightanalysisrequest.md): A request that identifies the most engaging segments of a video.
