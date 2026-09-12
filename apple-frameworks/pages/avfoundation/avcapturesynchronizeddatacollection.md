> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddatacollection](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection)

# AVCaptureSynchronizedDataCollection (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A set of data samples collected simultaneously from multiple capture outputs.

## Declaration

```swift
class AVCaptureSynchronizedDataCollection
```

## Topics

### Accessing synchronized data

- [count](avcapturesynchronizeddatacollection/count.md): The number of synchronized data objects in the collection.
- [synchronizedData(for:)](avcapturesynchronizeddatacollection/synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.
- [subscript(\_:)](avcapturesynchronizeddatacollection/subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Synchronized capture

- [AVCaptureDataOutputSynchronizer](avcapturedataoutputsynchronizer.md): An object that coordinates time-matched delivery of data from multiple capture outputs.
- [AVCaptureSynchronizedSampleBufferData](avcapturesynchronizedsamplebufferdata.md): A container for video or audio samples collected using synchronized capture.
- [AVCaptureSynchronizedMetadataObjectData](avcapturesynchronizedmetadataobjectdata.md): A container for metadata objects collected using synchronized capture.
- [AVCaptureSynchronizedDepthData](avcapturesynchronizeddepthdata.md): A container for scene depth information collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.

# AVCaptureSynchronizedDataCollection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A set of data samples collected simultaneously from multiple capture outputs.

## Declaration

```objectivec
@interface AVCaptureSynchronizedDataCollection : NSObject
```

## Topics

### Accessing synchronized data

- [count](avcapturesynchronizeddatacollection/count.md): The number of synchronized data objects in the collection.
- [synchronizedDataForCaptureOutput:](avcapturesynchronizeddatacollection/synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.
- [objectForKeyedSubscript:](avcapturesynchronizeddatacollection/subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Synchronized capture

- [AVCaptureDataOutputSynchronizer](avcapturedataoutputsynchronizer.md): An object that coordinates time-matched delivery of data from multiple capture outputs.
- [AVCaptureSynchronizedSampleBufferData](avcapturesynchronizedsamplebufferdata.md): A container for video or audio samples collected using synchronized capture.
- [AVCaptureSynchronizedMetadataObjectData](avcapturesynchronizedmetadataobjectdata.md): A container for metadata objects collected using synchronized capture.
- [AVCaptureSynchronizedDepthData](avcapturesynchronizeddepthdata.md): A container for scene depth information collected using synchronized capture.
- [AVCaptureSynchronizedData](avcapturesynchronizeddata.md): The abstract superclass for media samples collected using synchronized capture.
