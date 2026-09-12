> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddepthdata](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata)

# AVCaptureSynchronizedDepthData (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A container for scene depth information collected using synchronized capture.

## Declaration

```swift
class AVCaptureSynchronizedDepthData
```

## Topics

### Accessing synchronized data

- [depthData](avcapturesynchronizeddepthdata/depthdata.md): The depth data captured at this synchronization point.

### Handling dropped data

- [depthDataWasDropped](avcapturesynchronizeddepthdata/depthdatawasdropped.md): A Boolean value indicating whether depth data was discarded between capture and processing.
- [droppedReason](avcapturesynchronizeddepthdata/droppedreason.md): A value indicating why the capture output failed to deliver depth data, if applicable.

## Relationships

### Inherits From

- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Synchronized capture

- [AVCaptureDataOutputSynchronizer](avcapturedataoutputsynchronizer.md): An object that coordinates time-matched delivery of data from multiple capture outputs.
- [AVCaptureSynchronizedDataCollection](avcapturesynchronizeddatacollection.md): A set of data samples collected simultaneously from multiple capture outputs.
- [AVCaptureSynchronizedSampleBufferData](avcapturesynchronizedsamplebufferdata.md): A container for video or audio samples collected using synchronized capture.
- [AVCaptureSynchronizedMetadataObjectData](avcapturesynchronizedmetadataobjectdata.md): A container for metadata objects collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.

# AVCaptureSynchronizedDepthData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A container for scene depth information collected using synchronized capture.

## Declaration

```objectivec
@interface AVCaptureSynchronizedDepthData : AVCaptureSynchronizedData
```

## Topics

### Accessing synchronized data

- [depthData](avcapturesynchronizeddepthdata/depthdata.md): The depth data captured at this synchronization point.

### Handling dropped data

- [depthDataWasDropped](avcapturesynchronizeddepthdata/depthdatawasdropped.md): A Boolean value indicating whether depth data was discarded between capture and processing.
- [droppedReason](avcapturesynchronizeddepthdata/droppedreason.md): A value indicating why the capture output failed to deliver depth data, if applicable.

## Relationships

### Inherits From

- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md)

## See Also

### Synchronized capture

- [AVCaptureDataOutputSynchronizer](avcapturedataoutputsynchronizer.md): An object that coordinates time-matched delivery of data from multiple capture outputs.
- [AVCaptureSynchronizedDataCollection](avcapturesynchronizeddatacollection.md): A set of data samples collected simultaneously from multiple capture outputs.
- [AVCaptureSynchronizedSampleBufferData](avcapturesynchronizedsamplebufferdata.md): A container for video or audio samples collected using synchronized capture.
- [AVCaptureSynchronizedMetadataObjectData](avcapturesynchronizedmetadataobjectdata.md): A container for metadata objects collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.
