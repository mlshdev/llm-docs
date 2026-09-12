> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentresult/cancelled](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentresult/cancelled)

# AVAssetWritingPlanner.SegmentResult.cancelled

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Cancel the current segment while allowing future resumption.

## Declaration

```swift
case cancelled
```

<a id="discussion"></a>

## Discussion

Use this case when the segment should be canceled (for example, due to background task expiration) but you expect to resume the export later. This preserves the ability to restart from this segment in a future export session.

This is equivalent to calling `cancel()` on the segment request.

<a id="Use-Cases"></a>

## Use Cases

- Background task expiration handler called
- System resources unavailable
- User-initiated pause operation

## See Also

### Completion Options

- [AVAssetWritingPlanner.SegmentResult.success](success.md): Finish the segment successfully without saving state.
- [AVAssetWritingPlanner.SegmentResult.successWithState(\_:)](successwithstate%28__%29.md): Finish the segment successfully with custom client state.
