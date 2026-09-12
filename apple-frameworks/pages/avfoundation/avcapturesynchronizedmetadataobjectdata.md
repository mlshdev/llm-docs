> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizedmetadataobjectdata](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata)

# AVCaptureSynchronizedMetadataObjectData (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A container for metadata objects collected using synchronized capture.

## Declaration

```swift
class AVCaptureSynchronizedMetadataObjectData
```

## Topics

### Accessing synchronized data

- [metadataObjects](avcapturesynchronizedmetadataobjectdata/metadataobjects.md): The list of metadata objects captured at this synchronization timestamp.

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
- [AVCaptureSynchronizedDepthData](avcapturesynchronizeddepthdata.md): A container for scene depth information collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.

# AVCaptureSynchronizedMetadataObjectData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A container for metadata objects collected using synchronized capture.

## Declaration

```objectivec
@interface AVCaptureSynchronizedMetadataObjectData : AVCaptureSynchronizedData
```

## Topics

### Accessing synchronized data

- [metadataObjects](avcapturesynchronizedmetadataobjectdata/metadataobjects.md): The list of metadata objects captured at this synchronization timestamp.

## Relationships

### Inherits From

- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md)

## See Also

### Synchronized capture

- [AVCaptureDataOutputSynchronizer](avcapturedataoutputsynchronizer.md): An object that coordinates time-matched delivery of data from multiple capture outputs.
- [AVCaptureSynchronizedDataCollection](avcapturesynchronizeddatacollection.md): A set of data samples collected simultaneously from multiple capture outputs.
- [AVCaptureSynchronizedSampleBufferData](avcapturesynchronizedsamplebufferdata.md): A container for video or audio samples collected using synchronized capture.
- [AVCaptureSynchronizedDepthData](avcapturesynchronizeddepthdata.md): A container for scene depth information collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.
