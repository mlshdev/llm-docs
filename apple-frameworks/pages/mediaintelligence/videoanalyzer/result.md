> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/videoanalyzer/result](https://developer.apple.com/documentation/mediaintelligence/videoanalyzer/result)

# VideoAnalyzer.Result

**Framework:** Media Intelligence  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that represents the output of a video analysis operation.

## Declaration

```swift
protocol Result : Sendable
```

<a id="overview"></a>

## Overview

This type is the base protocol for analysis result types. You receive a typed value conforming to this protocol when [analyze(\_:for:)](analyze%28__for_%29.md) succeeds for a particular request. The framework uses the request’s associated [Result](request/result.md) type to determine the concrete type returned for each element in the tuple.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [HighlightAnalysisRequest.Result](../highlightanalysisrequest/result.md)
- [KeyFrameAnalysisRequest.Result](../keyframeanalysisrequest/result.md)

## See Also

### Analyzing a video asset

- [shared](shared.md): The shared video analyzer.
- [VideoAnalyzer.Request](request.md): A type that describes a video analysis operation.
- [analyze(\_:for:)](analyze%28__for_%29.md): Analyzes a video asset using the specified requests.
