> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentresult/success](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentresult/success)

# AVAssetWritingPlanner.SegmentResult.success

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Finish the segment successfully without saving state.

## Declaration

```swift
case success
```

<a id="discussion"></a>

## Discussion

Use this case when the segment completed successfully and you don’t need to save any custom state for resumption.

This is equivalent to calling `finish()` on the segment request.

## See Also

### Completion Options

- [AVAssetWritingPlanner.SegmentResult.successWithState(\_:)](successwithstate%28__%29.md): Finish the segment successfully with custom client state.
- [AVAssetWritingPlanner.SegmentResult.cancelled](cancelled.md): Cancel the current segment while allowing future resumption.
