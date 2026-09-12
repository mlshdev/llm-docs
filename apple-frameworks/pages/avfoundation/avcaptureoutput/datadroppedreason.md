> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/datadroppedreason](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/datadroppedreason)

# AVCaptureOutput.DataDroppedReason (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

Constants that define reasons for why the system dropped a frame.

## Declaration

```swift
enum DataDroppedReason
```

## Topics

### Reasons

- [AVCaptureOutput.DataDroppedReason.none](datadroppedreason/none.md): The system didn’t drop data.
- [AVCaptureOutput.DataDroppedReason.lateData](datadroppedreason/latedata.md): The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.
- [AVCaptureOutput.DataDroppedReason.outOfBuffers](datadroppedreason/outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.
- [AVCaptureOutput.DataDroppedReason.discontinuity](datadroppedreason/discontinuity.md): The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.

### Initializers

- [init(rawValue:)](datadroppedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing connections

- [connections](connections.md): The capture output object’s connections.
- [connection(with:)](connection%28with_%29.md): Returns the first connection with an input port of a specified media type.

# AVCaptureOutputDataDroppedReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

Constants that define reasons for why the system dropped a frame.

## Declaration

```objectivec
enum AVCaptureOutputDataDroppedReason : NSInteger;
```

## Topics

### Reasons

- [AVCaptureOutputDataDroppedReasonNone](datadroppedreason/none.md): The system didn’t drop data.
- [AVCaptureOutputDataDroppedReasonLateData](datadroppedreason/latedata.md): The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.
- [AVCaptureOutputDataDroppedReasonOutOfBuffers](datadroppedreason/outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.
- [AVCaptureOutputDataDroppedReasonDiscontinuity](datadroppedreason/discontinuity.md): The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.

## See Also

### Accessing connections

- [connections](connections.md): The capture output object’s connections.
- [connectionWithMediaType:](connection%28with_%29.md): Returns the first connection with an input port of a specified media type.
