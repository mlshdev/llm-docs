> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelines](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelines)

# AVAssetWritingPlanner.SegmentBoundaryGuidelines (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedVideoSegmentBoundaryGuidelines provides guidance on determining planned segment boundaries for a video track in an incremental writing session executed by the AVAssetWritingPlanner.

## Declaration

```swift
struct SegmentBoundaryGuidelines
```

<a id="overview"></a>

## Overview

The properties provide guidance on determining segment boundaries for a video track in an incremental writing session. All conditions should be supported for best results. The client should choose frame count and minimum duration that meet the minimum requirement. However, the client should also consider the balance between overhead caused by completing and saving states for small segments, and the cost of having to redo a large segment if the incremental session stopped in the middle of a segment due to errors or crashes. For example, use 1 minute segments for 4K60fps video.

## Topics

### Initializers

- [init()](segmentboundaryguidelines/init%28%29.md)
- [init(minimumFrameCount:minimumDuration:)](segmentboundaryguidelines/init%28minimumframecount_minimumduration_%29.md)

### Instance Properties

- [minimumDuration](segmentboundaryguidelines/minimumduration.md): The minimum duration of each incremental segment. kCMTimeZero means there is no minimum segment duration requirement. kCMTimePositiveInfinity means that incremental segmentation is not supported for this codecType.
- [minimumFrameCount](segmentboundaryguidelines/minimumframecount.md): The minimum number of frames in each incremental segment. 0 means that incremental segmentation is not supported for this codecType. 1 means there is no frame count restriction for incremental encoding for this codecType. Using 1 for segment frame count is not recommended because of the performance overhead, so the client should choose a value that represents a reasonable amount of work.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AVPlannedVideoSegmentBoundaryGuidelines (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

AVPlannedVideoSegmentBoundaryGuidelines provides guidance on determining planned segment boundaries for a video track in an incremental writing session executed by the AVAssetWritingPlanner.

## Declaration

```objectivec
typedef struct { ... } AVPlannedVideoSegmentBoundaryGuidelines;
```

<a id="overview"></a>

## Overview

The properties provide guidance on determining segment boundaries for a video track in an incremental writing session. All conditions should be supported for best results. The client should choose frame count and minimum duration that meet the minimum requirement. However, the client should also consider the balance between overhead caused by completing and saving states for small segments, and the cost of having to redo a large segment if the incremental session stopped in the middle of a segment due to errors or crashes. For example, use 1 minute segments for 4K60fps video.

## Topics

### Instance Properties

- [minimumDuration](segmentboundaryguidelines/minimumduration.md): The minimum duration of each incremental segment. kCMTimeZero means there is no minimum segment duration requirement. kCMTimePositiveInfinity means that incremental segmentation is not supported for this codecType.
- [minimumFrameCount](segmentboundaryguidelines/minimumframecount.md): The minimum number of frames in each incremental segment. 0 means that incremental segmentation is not supported for this codecType. 1 means there is no frame count restriction for incremental encoding for this codecType. Using 1 for segment frame count is not recommended because of the performance overhead, so the client should choose a value that represents a reasonable amount of work.
