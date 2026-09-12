> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmentreportsampleinformation/presentationtimestamp](https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation/presentationtimestamp)

# presentationTimeStamp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The presentation timestamp (PTS) of a sample.

## Declaration

```swift
var presentationTimeStamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This timestamp may be different from the [earliestPresentationTimeStamp](../avassetsegmenttrackreport/earliestpresentationtimestamp.md) if the video’s author encodes it using frame reordering.

## See Also

### Inspecting the information

- [offset](offset.md): The offset of a sample in the segment.
- [length](length.md): The length of the sample data.
- [isSyncSample](issyncsample.md): A Boolean value that indicates whether the sample is a key frame.

# presentationTimeStamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The presentation timestamp (PTS) of a sample.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime presentationTimeStamp;
```

<a id="Discussion"></a>

## Discussion

This timestamp may be different from the [earliestPresentationTimeStamp](../avassetsegmenttrackreport/earliestpresentationtimestamp.md) if the video’s author encodes it using frame reordering.

## See Also

### Inspecting the information

- [offset](offset.md): The offset of a sample in the segment.
- [length](length.md): The length of the sample data.
- [isSyncSample](issyncsample.md): A Boolean value that indicates whether the sample is a key frame.
