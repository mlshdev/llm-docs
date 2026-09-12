> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstageinputoutputdescriptor](https://developer.apple.com/documentation/metal/mtlstageinputoutputdescriptor)

# MTLStageInputOutputDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A description of the input and output data of a function.

## Declaration

```swift
class MTLStageInputOutputDescriptor
```

## Topics

### Describing argument layouts

- [attributes](mtlstageinputoutputdescriptor/attributes.md): An array that describes where and how to fetch data for the function.
- [layouts](mtlstageinputoutputdescriptor/layouts.md): An array that describes how the function fetches data.

### Declaring index buffers for indirect compute commands

- [indexBufferIndex](mtlstageinputoutputdescriptor/indexbufferindex.md): The location of the index buffer for a compute function using indexed thread addressing.
- [indexType](mtlstageinputoutputdescriptor/indextype.md): The data type of the indices stored in the index buffer.

### Resetting the descriptor

- [reset()](mtlstageinputoutputdescriptor/reset%28%29.md): Resets the default state for the descriptor.

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
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTLStageInputOutputDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A description of the input and output data of a function.

## Declaration

```objectivec
@interface MTLStageInputOutputDescriptor : NSObject
```

## Topics

### Creating a input/output descriptor

- [stageInputOutputDescriptor](mtlstageinputoutputdescriptor/stageinputoutputdescriptor.md)

### Describing argument layouts

- [attributes](mtlstageinputoutputdescriptor/attributes.md): An array that describes where and how to fetch data for the function.
- [layouts](mtlstageinputoutputdescriptor/layouts.md): An array that describes how the function fetches data.

### Declaring index buffers for indirect compute commands

- [indexBufferIndex](mtlstageinputoutputdescriptor/indexbufferindex.md): The location of the index buffer for a compute function using indexed thread addressing.
- [indexType](mtlstageinputoutputdescriptor/indextype.md): The data type of the indices stored in the index buffer.

### Resetting the descriptor

- [reset](mtlstageinputoutputdescriptor/reset%28%29.md): Resets the default state for the descriptor.

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
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
