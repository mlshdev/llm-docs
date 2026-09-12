> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligencevideoasset](https://developer.apple.com/documentation/mediaintelligence/mediaintelligencevideoasset)

# MediaIntelligenceVideoAsset

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A video asset to analyze.

## Declaration

```swift
struct MediaIntelligenceVideoAsset
```

## Mentioned In

- [Finding the best moments in a video](finding-the-best-moments-in-a-video.md)

<a id="overview"></a>

## Overview

Create an instance of this type to identify a video for [VideoAnalyzer](videoanalyzer.md) to process. Each asset has a unique identifier you assign, and a [MediaIntelligenceVideoAsset.Kind](mediaintelligencevideoasset/kind-swift.enum.md) value that describes how the framework accesses the video data.

## Topics

### Creating an asset

- [init(id:kind:)](mediaintelligencevideoasset/init%28id_kind_%29.md): Creates a video asset with the specified identifier and kind.
- [MediaIntelligenceVideoAsset.ID](mediaintelligencevideoasset/id-swift.struct.md): A unique identifier for a video asset.
- [MediaIntelligenceVideoAsset.Kind](mediaintelligencevideoasset/kind-swift.enum.md): A value that describes the source of a video asset’s data.

### Inspecting an asset

- [id](mediaintelligencevideoasset/id-swift.property.md): A unique identifier for the asset.
- [kind](mediaintelligencevideoasset/kind-swift.property.md): A value that describes how the framework accesses the video data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video analysis

- [Finding the best moments in a video](finding-the-best-moments-in-a-video.md): Identify keyframes and highlight segments using on-device analysis.
- [VideoAnalyzer](videoanalyzer.md): An object that analyzes video assets for highlights and key frames.
- [HighlightAnalysisRequest](highlightanalysisrequest.md): A request that identifies the most engaging segments of a video.
- [KeyFrameAnalysisRequest](keyframeanalysisrequest.md): A request that identifies the best representative frame of a video.
