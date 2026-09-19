> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaintelligence/keyframeanalysisrequest/result

# KeyFrameAnalysisRequest.Result

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The output of a key frame analysis.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

[KeyFrameAnalysisRequest.Result](result.md) contains the timestamp of the frame the framework selects as the best representative of the video. Use this [CMTime](../../coremedia/cmtime.md) value to seek a player to that position or to extract a thumbnail.

## Topics

### Inspecting the result

- [timestamp](result/timestamp.md): The timestamp of the key frame.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VideoAnalyzer.Result](../videoanalyzer/result.md)
