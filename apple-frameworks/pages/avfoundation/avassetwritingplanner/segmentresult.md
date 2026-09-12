> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentresult](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentresult)

# AVAssetWritingPlanner.SegmentResult

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Result type for manual segment completion control.

## Declaration

```swift
enum SegmentResult
```

<a id="overview"></a>

## Overview

Return this type from the segment handler to explicitly control how each segment completes, including saving custom client state for resumable exports or canceling segments.

## Topics

### Completion Options

- [AVAssetWritingPlanner.SegmentResult.success](segmentresult/success.md): Finish the segment successfully without saving state.
- [AVAssetWritingPlanner.SegmentResult.successWithState(\_:)](segmentresult/successwithstate%28__%29.md): Finish the segment successfully with custom client state.
- [AVAssetWritingPlanner.SegmentResult.cancelled](segmentresult/cancelled.md): Cancel the current segment while allowing future resumption.
