> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate)

# MTLComputePipelineState (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An interface that represents a GPU pipeline configuration for running kernels in a compute pass.

## Declaration

```swift
protocol MTLComputePipelineState : MTLAllocation, Sendable
```

## Mentioned In

- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

The [MTLComputePipelineState](mtlcomputepipelinestate.md) protocol is an interface that represents a specific configuration for the GPU pipeline for a compute pass. Use a pipeline state to configure a compute pass by calling the [setComputePipelineState(\_:)](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) instance.

To create a pipeline state, call the appropriate [MTLDevice](mtldevice.md) method (see [Pipeline state creation](pipeline-state-creation.md)). You typically make pipeline states at a noncritical time, like when your app first launches. This is because graphics drivers may need time to evaluate and build each pipeline state. However, you can quickly use and reuse each pipeline state throughout your app’s lifetime.

## Topics

### Identifying a pipeline state

- [device](mtlcomputepipelinestate/device.md): The device instance that created the pipeline state.
- [gpuResourceID](mtlcomputepipelinestate/gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
- [label](mtlcomputepipelinestate/label.md): A string that helps you identify the compute pipeline state during debugging.

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](mtlcomputepipelinestate/maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [threadExecutionWidth](mtlcomputepipelinestate/threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.
- [staticThreadgroupMemoryLength](mtlcomputepipelinestate/staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.

### Checking imageblock attributes

- [imageblockMemoryLength(forDimensions:)](mtlcomputepipelinestate/imageblockmemorylength%28fordimensions_%29.md): Returns the length of reserved memory for an imageblock of a given size.

### Checking indirect command buffer support

- [supportIndirectCommandBuffers](mtlcomputepipelinestate/supportindirectcommandbuffers.md): A Boolean value that indicates whether the compute pipeline supports indirect command buffers.

### Checking shader validation

- [shaderValidation](mtlcomputepipelinestate/shadervalidation.md): The current state of shader validation for the pipeline.

### Creating function handles

- [functionHandle(function:)](mtlcomputepipelinestate/functionhandle%28function_%29-7d523.md): Creates a function handle for a visible function.

### Adding visible functions

- [makeComputePipelineStateWithAdditionalBinaryFunctions(functions:)](mtlcomputepipelinestate/makecomputepipelinestatewithadditionalbinaryfunctions%28functions_%29.md): Creates a new pipeline state object with additional callable functions.

### Creating function tables

- [makeVisibleFunctionTable(descriptor:)](mtlcomputepipelinestate/makevisiblefunctiontable%28descriptor_%29.md): Creates a new visible function table.
- [makeIntersectionFunctionTable(descriptor:)](mtlcomputepipelinestate/makeintersectionfunctiontable%28descriptor_%29.md): Creates a new intersection function table.

### Instance Properties

- [forwardProgressUsage](mtlcomputepipelinestate/forwardprogressusage.md)
- [reflection](mtlcomputepipelinestate/reflection.md): The compute pipeline’s reflection information, if available.
- [requiredThreadsPerThreadgroup](mtlcomputepipelinestate/requiredthreadsperthreadgroup.md)

### Instance Methods

- [functionHandle(function:)](mtlcomputepipelinestate/functionhandle%28function_%29-8spaa.md): Gets the function handle for a function this pipeline links at the binary level.
- [functionHandle(withName:)](mtlcomputepipelinestate/functionhandle%28withname_%29.md): Gets the function handle for a function this pipeline links at the Metal IR level by name.
- [makeComputePipelineState(additionalBinaryFunctions:)](mtlcomputepipelinestate/makecomputepipelinestate%28additionalbinaryfunctions_%29.md): Allocates a new compute pipeline state by adding binary functions to this pipeline state.
- [recommendedPersistentThreadgroupsPerGrid(forThreadsPerThreadgroup:)](mtlcomputepipelinestate/recommendedpersistentthreadgroupspergrid%28forthreadsperthreadgroup_%29.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTLComputePipelineState (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An interface that represents a GPU pipeline configuration for running kernels in a compute pass.

## Declaration

```objectivec
@protocol MTLComputePipelineState <MTLAllocation, NSObject>
```

## Mentioned In

- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

The [MTLComputePipelineState](mtlcomputepipelinestate.md) protocol is an interface that represents a specific configuration for the GPU pipeline for a compute pass. Use a pipeline state to configure a compute pass by calling the [setComputePipelineState:](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) instance.

To create a pipeline state, call the appropriate [MTLDevice](mtldevice.md) method (see [Pipeline state creation](pipeline-state-creation.md)). You typically make pipeline states at a noncritical time, like when your app first launches. This is because graphics drivers may need time to evaluate and build each pipeline state. However, you can quickly use and reuse each pipeline state throughout your app’s lifetime.

## Topics

### Identifying a pipeline state

- [device](mtlcomputepipelinestate/device.md): The device instance that created the pipeline state.
- [gpuResourceID](mtlcomputepipelinestate/gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
- [label](mtlcomputepipelinestate/label.md): A string that helps you identify the compute pipeline state during debugging.

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](mtlcomputepipelinestate/maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [threadExecutionWidth](mtlcomputepipelinestate/threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.
- [staticThreadgroupMemoryLength](mtlcomputepipelinestate/staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.

### Checking imageblock attributes

- [imageblockMemoryLengthForDimensions:](mtlcomputepipelinestate/imageblockmemorylength%28fordimensions_%29.md): Returns the length of reserved memory for an imageblock of a given size.

### Checking indirect command buffer support

- [supportIndirectCommandBuffers](mtlcomputepipelinestate/supportindirectcommandbuffers.md): A Boolean value that indicates whether the compute pipeline supports indirect command buffers.

### Checking shader validation

- [shaderValidation](mtlcomputepipelinestate/shadervalidation.md): The current state of shader validation for the pipeline.

### Creating function handles

- [functionHandleWithFunction:](mtlcomputepipelinestate/functionhandle%28function_%29-7d523.md): Creates a function handle for a visible function.

### Adding visible functions

- [newComputePipelineStateWithAdditionalBinaryFunctions:error:](mtlcomputepipelinestate/makecomputepipelinestatewithadditionalbinaryfunctions%28functions_%29.md): Creates a new pipeline state object with additional callable functions.

### Creating function tables

- [newVisibleFunctionTableWithDescriptor:](mtlcomputepipelinestate/makevisiblefunctiontable%28descriptor_%29.md): Creates a new visible function table.
- [newIntersectionFunctionTableWithDescriptor:](mtlcomputepipelinestate/makeintersectionfunctiontable%28descriptor_%29.md): Creates a new intersection function table.

### Instance Properties

- [forwardProgressUsage](mtlcomputepipelinestate/forwardprogressusage.md)
- [reflection](mtlcomputepipelinestate/reflection.md): The compute pipeline’s reflection information, if available.
- [requiredThreadsPerThreadgroup](mtlcomputepipelinestate/requiredthreadsperthreadgroup.md)

### Instance Methods

- [functionHandleWithBinaryFunction:](mtlcomputepipelinestate/functionhandle%28function_%29-8spaa.md): Gets the function handle for a function this pipeline links at the binary level.
- [functionHandleWithName:](mtlcomputepipelinestate/functionhandle%28withname_%29.md): Gets the function handle for a function this pipeline links at the Metal IR level by name.
- [newComputePipelineStateWithBinaryFunctions:error:](mtlcomputepipelinestate/makecomputepipelinestate%28additionalbinaryfunctions_%29.md): Allocates a new compute pipeline state by adding binary functions to this pipeline state.
- [recommendedPersistentThreadgroupsPerGridForThreadsPerThreadgroup:](mtlcomputepipelinestate/recommendedpersistentthreadgroupspergrid%28forthreadsperthreadgroup_%29.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
