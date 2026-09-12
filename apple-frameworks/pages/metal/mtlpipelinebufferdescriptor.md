> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelinebufferdescriptor](https://developer.apple.com/documentation/metal/mtlpipelinebufferdescriptor)

# MTLPipelineBufferDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The mutability options for a buffer that a render or compute pipeline uses.

## Declaration

```swift
class MTLPipelineBufferDescriptor
```

<a id="overview"></a>

## Overview

Metal can perform additional optimizations if you guarantee that neither the CPU nor the GPU modify a buffer’s contents before starting a pass. Use immutable buffers as much as possible to take advantage of Metal optimizations.

To declare that a buffer is immutable, set the [mutability](mtlpipelinebufferdescriptor/mutability.md) property of their associated [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md) object to [MTLMutability.immutable](mtlmutability/immutable.md).

## Topics

### Setting buffer mutability

- [mutability](mtlpipelinebufferdescriptor/mutability.md): A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.
- [MTLMutability](mtlmutability.md): The options that determine the mutability of a buffer’s contents.

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

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTLPipelineBufferDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The mutability options for a buffer that a render or compute pipeline uses.

## Declaration

```objectivec
@interface MTLPipelineBufferDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Metal can perform additional optimizations if you guarantee that neither the CPU nor the GPU modify a buffer’s contents before starting a pass. Use immutable buffers as much as possible to take advantage of Metal optimizations.

To declare that a buffer is immutable, set the [mutability](mtlpipelinebufferdescriptor/mutability.md) property of their associated [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md) object to [MTLMutabilityImmutable](mtlmutability/immutable.md).

## Topics

### Setting buffer mutability

- [mutability](mtlpipelinebufferdescriptor/mutability.md): A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.
- [MTLMutability](mtlmutability.md): The options that determine the mutability of a buffer’s contents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
