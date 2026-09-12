> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/timerange](https://developer.apple.com/documentation/avfoundation/avcaption/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range over which the system presents the caption.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

Apple iTT format only permits captions to have overlapping time ranges if they’re associated with different regions.

CEA608 closed caption time ranges can’t start with zero, because the decoder needs transmission time. Align time ranges with the video frame rate.

## See Also

### Accessing text and timing

- [text](text.md): The caption text.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range over which the system presents the caption.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

Apple iTT format only permits captions to have overlapping time ranges if they’re associated with different regions.

CEA608 closed caption time ranges can’t start with zero, because the decoder needs transmission time. Align time ranges with the video frame rate.

## See Also

### Accessing text and timing

- [text](text.md): The caption text.
