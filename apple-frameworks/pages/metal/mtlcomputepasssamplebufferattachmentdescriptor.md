> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepasssamplebufferattachmentdescriptor](https://developer.apple.com/documentation/metal/mtlcomputepasssamplebufferattachmentdescriptor)

# MTLComputePassSampleBufferAttachmentDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.

## Declaration

```swift
class MTLComputePassSampleBufferAttachmentDescriptor
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

For more context about configuring sample buffer attachments for compute passes, see [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md). That article is one of a series in [GPU counters and counter sample buffers](gpu-counters-and-counter-sample-buffers.md) about sampling Metal hardware counters for performance measurement.

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlcomputepasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during a compute pass.
- [startOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a compute pass.
- [endOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a compute pass.

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

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.

# MTLComputePassSampleBufferAttachmentDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.

## Declaration

```objectivec
@interface MTLComputePassSampleBufferAttachmentDescriptor : NSObject
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

For more context about configuring sample buffer attachments for compute passes, see [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md). That article is one of a series in [GPU counters and counter sample buffers](gpu-counters-and-counter-sample-buffers.md) about sampling Metal hardware counters for performance measurement.

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlcomputepasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during a compute pass.
- [startOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a compute pass.
- [endOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a compute pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.
