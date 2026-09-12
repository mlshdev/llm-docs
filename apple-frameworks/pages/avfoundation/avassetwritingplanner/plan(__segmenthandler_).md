> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/plan(_:segmenthandler:)](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/plan(_:segmenthandler:))

# plan(\_:segmentHandler:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a track plan with manual segment completion control.

## Declaration

```swift
func plan(_ trackPlan: AVAssetTrackPlan, segmentHandler: @escaping @Sendable (AVPlannedSegmentWritingRequest) async throws -> AVAssetWritingPlanner.SegmentResult)
```

## Parameters

- `trackPlan`: The track plan contains information about the track and boundaries of all the segments.
- `segmentHandler`: Handler that returns a [AVAssetWritingPlanner.SegmentResult](segmentresult.md) for manual control.

<a id="discussion"></a>

## Discussion

This variant provides fine-grained control over segment completion, allowing you to return a [AVAssetWritingPlanner.SegmentResult](segmentresult.md) that explicitly controls how the segment completes.

## Topics

### See Also

- [AVAssetWritingPlanner.SegmentResult](segmentresult.md): Result type for manual segment completion control.
