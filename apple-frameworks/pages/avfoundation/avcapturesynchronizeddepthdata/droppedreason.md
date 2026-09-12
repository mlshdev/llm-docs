> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddepthdata/droppedreason](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/droppedreason)

# droppedReason (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value indicating why the capture output failed to deliver depth data, if applicable.

## Declaration

```swift
var droppedReason: AVCaptureOutput.DataDroppedReason { get }
```

## See Also

### Handling dropped data

- [depthDataWasDropped](depthdatawasdropped.md): A Boolean value indicating whether depth data was discarded between capture and processing.

# droppedReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value indicating why the capture output failed to deliver depth data, if applicable.

## Declaration

```objectivec
@property (readonly) AVCaptureOutputDataDroppedReason droppedReason;
```

## See Also

### Handling dropped data

- [depthDataWasDropped](depthdatawasdropped.md): A Boolean value indicating whether depth data was discarded between capture and processing.
