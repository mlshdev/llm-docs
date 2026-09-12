> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/videoanalyzer/request](https://developer.apple.com/documentation/mediaintelligence/videoanalyzer/request)

# VideoAnalyzer.Request

**Framework:** Media Intelligence  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that describes a video analysis operation.

## Declaration

```swift
protocol Request : Sendable
```

<a id="overview"></a>

## Overview

The framework provides two built-in request types: [HighlightAnalysisRequest](../highlightanalysisrequest.md) and [KeyFrameAnalysisRequest](../keyframeanalysisrequest.md).

## Topics

### Associated Types

- [Result](request/result.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [HighlightAnalysisRequest](../highlightanalysisrequest.md)
- [KeyFrameAnalysisRequest](../keyframeanalysisrequest.md)

## See Also

### Analyzing a video asset

- [shared](shared.md): The shared video analyzer.
- [VideoAnalyzer.Result](result.md): A type that represents the output of a video analysis operation.
- [analyze(\_:for:)](analyze%28__for_%29.md): Analyzes a video asset using the specified requests.
