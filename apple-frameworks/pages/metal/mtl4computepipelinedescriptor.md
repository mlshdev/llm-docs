> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computepipelinedescriptor](https://developer.apple.com/documentation/metal/mtl4computepipelinedescriptor)

# MTL4ComputePipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes a compute pipeline state.

## Declaration

```swift
class MTL4ComputePipelineDescriptor
```

## Topics

### Instance Properties

- [computeFunctionDescriptor](mtl4computepipelinedescriptor/computefunctiondescriptor.md): A descriptor representing the compute pipeline’s function.
- [contentionRelief](mtl4computepipelinedescriptor/contentionrelief.md)
- [forwardProgressUsage](mtl4computepipelinedescriptor/forwardprogressusage.md)
- [maxTotalThreadsPerThreadgroup](mtl4computepipelinedescriptor/maxtotalthreadsperthreadgroup.md): The maximum total number of threads that Metal can execute in a single threadgroup for the compute function.
- [optimizeForPersistentKernel](mtl4computepipelinedescriptor/optimizeforpersistentkernel.md)
- [requiredThreadsPerThreadgroup](mtl4computepipelinedescriptor/requiredthreadsperthreadgroup.md): The required number of threads per threadgroup for compute dispatches.
- [staticLinkingDescriptor](mtl4computepipelinedescriptor/staticlinkingdescriptor.md): An object that contains information about functions to link to the compute pipeline.
- [supportBinaryLinking](mtl4computepipelinedescriptor/supportbinarylinking.md): A boolean value indicating whether the compute pipeline supports linking binary functions.
- [supportIndirectCommandBuffers](mtl4computepipelinedescriptor/supportindirectcommandbuffers.md): A value indicating whether the pipeline supports Metal indirect command buffers.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](mtl4computepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth.md): A boolean value indicating whether each dimension of the threadgroup size is a multiple of its corresponding thread execution width.

### Instance Methods

- [reset()](mtl4computepipelinedescriptor/reset%28%29.md): Resets the descriptor to its default values.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

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

- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTL4ComputePipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes a compute pipeline state.

## Declaration

```objectivec
@interface MTL4ComputePipelineDescriptor : MTL4PipelineDescriptor
```

## Topics

### Instance Properties

- [computeFunctionDescriptor](mtl4computepipelinedescriptor/computefunctiondescriptor.md): A descriptor representing the compute pipeline’s function.
- [contentionRelief](mtl4computepipelinedescriptor/contentionrelief.md)
- [forwardProgressUsage](mtl4computepipelinedescriptor/forwardprogressusage.md)
- [maxTotalThreadsPerThreadgroup](mtl4computepipelinedescriptor/maxtotalthreadsperthreadgroup.md): The maximum total number of threads that Metal can execute in a single threadgroup for the compute function.
- [optimizeForPersistentKernel](mtl4computepipelinedescriptor/optimizeforpersistentkernel.md)
- [requiredThreadsPerThreadgroup](mtl4computepipelinedescriptor/requiredthreadsperthreadgroup.md): The required number of threads per threadgroup for compute dispatches.
- [staticLinkingDescriptor](mtl4computepipelinedescriptor/staticlinkingdescriptor.md): An object that contains information about functions to link to the compute pipeline.
- [supportBinaryLinking](mtl4computepipelinedescriptor/supportbinarylinking.md): A boolean value indicating whether the compute pipeline supports linking binary functions.
- [supportIndirectCommandBuffers](mtl4computepipelinedescriptor/supportindirectcommandbuffers.md): A value indicating whether the pipeline supports Metal indirect command buffers.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](mtl4computepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth.md): A boolean value indicating whether each dimension of the threadgroup size is a multiple of its corresponding thread execution width.

### Instance Methods

- [reset](mtl4computepipelinedescriptor/reset%28%29.md): Resets the descriptor to its default values.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

## See Also

### Configuring a compute pipeline state

- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
