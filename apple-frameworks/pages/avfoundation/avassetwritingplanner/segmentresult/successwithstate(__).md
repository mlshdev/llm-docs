> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentresult/successwithstate(_:)](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentresult/successwithstate(_:))

# AVAssetWritingPlanner.SegmentResult.successWithState(\_:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Finish the segment successfully with custom client state.

## Declaration

```swift
case successWithState(Data)
```

## Parameters

- `clientState`: Custom data to save for this segment. Commonly used to save algorithm state, progress information, or metadata needed for resumption.

<a id="discussion"></a>

## Discussion

Use this case to save custom state data that will be restored if the export session is interrupted and later resumed. The client state is available via [clientStateToRestore](../../avplannedsegmentwritingrequest/clientstatetorestore.md) when the segment is resumed. Only the last successful state data is persisted. Any previous state data will be overwritten.

## See Also

### Completion Options

- [AVAssetWritingPlanner.SegmentResult.success](success.md): Finish the segment successfully without saving state.
- [AVAssetWritingPlanner.SegmentResult.cancelled](cancelled.md): Cancel the current segment while allowing future resumption.
