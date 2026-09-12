> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebufferdescriptor](https://developer.apple.com/documentation/metal/mtlcountersamplebufferdescriptor)

# MTLCounterSampleBufferDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A group of properties that configures the counter sample buffers you create with it.

## Declaration

```swift
class MTLCounterSampleBufferDescriptor
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="overview"></a>

## Overview

To create a new counter sample buffer, create and configure an [MTLCounterSampleBufferDescriptor](mtlcountersamplebufferdescriptor.md) instance, and then call an [MTLDevice](mtldevice.md) instance’s [makeCounterSampleBuffer(descriptor:)](mtldevice/makecountersamplebuffer%28descriptor_%29.md) method. See [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md).

Each new sample counter buffer inherits the values of the descriptor’s properties when you create it. You can modify a descriptor and reuse it to create other counter sample buffers, which has no effect on existing counter sample buffers.

## Topics

### Configuring a descriptor for a counter sample buffer

- [counterSet](mtlcountersamplebufferdescriptor/counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](mtlcountersamplebufferdescriptor/label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](mtlcountersamplebufferdescriptor/samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](mtlcountersamplebufferdescriptor/storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Counter sample buffers

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md): Make a buffer that provides a place for a GPU to save its runtime performance metrics as it runs a pass.
- [MTLCounterSampleBuffer](mtlcountersamplebuffer.md): A specialized memory buffer that stores a GPU’s counter set data.
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md): Retrieve a GPU’s counter data at a time the GPU supports.
- [MTLCounterDontSample](mtlcounterdontsample.md): A sentinel value that instructs an encoder to skip sampling a counter as the GPU runs the encoder’s pass.

# MTLCounterSampleBufferDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A group of properties that configures the counter sample buffers you create with it.

## Declaration

```objectivec
@interface MTLCounterSampleBufferDescriptor : NSObject
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="overview"></a>

## Overview

To create a new counter sample buffer, create and configure an [MTLCounterSampleBufferDescriptor](mtlcountersamplebufferdescriptor.md) instance, and then call an [MTLDevice](mtldevice.md) instance’s [newCounterSampleBufferWithDescriptor:error:](mtldevice/makecountersamplebuffer%28descriptor_%29.md) method. See [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md).

Each new sample counter buffer inherits the values of the descriptor’s properties when you create it. You can modify a descriptor and reuse it to create other counter sample buffers, which has no effect on existing counter sample buffers.

## Topics

### Configuring a descriptor for a counter sample buffer

- [counterSet](mtlcountersamplebufferdescriptor/counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](mtlcountersamplebufferdescriptor/label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](mtlcountersamplebufferdescriptor/samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](mtlcountersamplebufferdescriptor/storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Counter sample buffers

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md): Make a buffer that provides a place for a GPU to save its runtime performance metrics as it runs a pass.
- [MTLCounterSampleBuffer](mtlcountersamplebuffer.md): A specialized memory buffer that stores a GPU’s counter set data.
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md): Retrieve a GPU’s counter data at a time the GPU supports.
- [MTLCounterDontSample](mtlcounterdontsample.md): A sentinel value that instructs an encoder to skip sampling a counter as the GPU runs the encoder’s pass.
