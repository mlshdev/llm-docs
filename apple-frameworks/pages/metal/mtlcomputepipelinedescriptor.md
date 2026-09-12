> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor)

# MTLComputePipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An instance describing the desired GPU state for a kernel call in a compute pass.

## Declaration

```swift
class MTLComputePipelineDescriptor
```

## Mentioned In

- [Compiling and linking Metal dynamic libraries](compiling-and-linking-metal-dynamic-libraries.md)

<a id="overview"></a>

## Overview

> **Important**

>  Before creating a pipeline state, set the [computeFunction](mtlcomputepipelinedescriptor/computefunction.md) property on your descriptor instance. This property tells the GPU which kernel to run.

A pipeline descriptor provides information necessary for creating an [MTLComputePipelineState](mtlcomputepipelinestate.md) instance.

## Topics

### Configuring the compute execution environment

- [computeFunction](mtlcomputepipelinedescriptor/computefunction.md): The compute kernel the pipeline calls.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](mtlcomputepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxTotalThreadsPerThreadgroup](mtlcomputepipelinedescriptor/maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](mtlcomputepipelinedescriptor/maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

### Configuring buffer mutability

- [buffers](mtlcomputepipelinedescriptor/buffers.md): The buffer mutability options to apply to the next kernel call.

### Identifying the pipeline state object

- [label](mtlcomputepipelinedescriptor/label.md): A string that identifies the instance.

### Configuring indirect command buffers

- [supportIndirectCommandBuffers](mtlcomputepipelinedescriptor/supportindirectcommandbuffers.md): A Boolean value that indicates whether you can encode commands that reference the pipeline state object into an indirect command buffer.

### Configuring shader validation

- [shaderValidation](mtlcomputepipelinedescriptor/shadervalidation.md): A value that enables or disables shader validation for the pipeline.

### Reset to defaults

- [reset()](mtlcomputepipelinedescriptor/reset%28%29.md): Resets all compute pipeline descriptor properties to their default values.

### Loading dynamic libraries to link at runtime

- [preloadedLibraries](mtlcomputepipelinedescriptor/preloadedlibraries.md): The dynamic libraries that contain precompiled shader functions you want to link.
- [insertLibraries](mtlcomputepipelinedescriptor/insertlibraries.md): Deprecated. The dynamic libraries that contain precompiled shader functions you want to link.

### Setting callable functions

- [linkedFunctions](mtlcomputepipelinedescriptor/linkedfunctions.md): The functions with available function pointers for the next kernel call.

### Loading binary archives

- [supportAddingBinaryFunctions](mtlcomputepipelinedescriptor/supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
- [binaryArchives](mtlcomputepipelinedescriptor/binaryarchives.md): The binary archives that contain any precompiled shader functions to link.

### Instance Properties

- [contentionRelief](mtlcomputepipelinedescriptor/contentionrelief.md)
- [forwardProgressUsage](mtlcomputepipelinedescriptor/forwardprogressusage.md)
- [optimizeForPersistentKernel](mtlcomputepipelinedescriptor/optimizeforpersistentkernel.md)
- [requiredThreadsPerThreadgroup](mtlcomputepipelinedescriptor/requiredthreadsperthreadgroup.md)

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
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTLComputePipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An instance describing the desired GPU state for a kernel call in a compute pass.

## Declaration

```objectivec
@interface MTLComputePipelineDescriptor : NSObject
```

## Mentioned In

- [Compiling and linking Metal dynamic libraries](compiling-and-linking-metal-dynamic-libraries.md)

<a id="overview"></a>

## Overview

> **Important**

>  Before creating a pipeline state, set the [computeFunction](mtlcomputepipelinedescriptor/computefunction.md) property on your descriptor instance. This property tells the GPU which kernel to run.

A pipeline descriptor provides information necessary for creating an [MTLComputePipelineState](mtlcomputepipelinestate.md) instance.

## Topics

### Configuring the compute execution environment

- [computeFunction](mtlcomputepipelinedescriptor/computefunction.md): The compute kernel the pipeline calls.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](mtlcomputepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxTotalThreadsPerThreadgroup](mtlcomputepipelinedescriptor/maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](mtlcomputepipelinedescriptor/maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

### Configuring buffer mutability

- [buffers](mtlcomputepipelinedescriptor/buffers.md): The buffer mutability options to apply to the next kernel call.

### Identifying the pipeline state object

- [label](mtlcomputepipelinedescriptor/label.md): A string that identifies the instance.

### Configuring indirect command buffers

- [supportIndirectCommandBuffers](mtlcomputepipelinedescriptor/supportindirectcommandbuffers.md): A Boolean value that indicates whether you can encode commands that reference the pipeline state object into an indirect command buffer.

### Configuring shader validation

- [shaderValidation](mtlcomputepipelinedescriptor/shadervalidation.md): A value that enables or disables shader validation for the pipeline.

### Reset to defaults

- [reset](mtlcomputepipelinedescriptor/reset%28%29.md): Resets all compute pipeline descriptor properties to their default values.

### Loading dynamic libraries to link at runtime

- [preloadedLibraries](mtlcomputepipelinedescriptor/preloadedlibraries.md): The dynamic libraries that contain precompiled shader functions you want to link.
- [insertLibraries](mtlcomputepipelinedescriptor/insertlibraries.md): Deprecated. The dynamic libraries that contain precompiled shader functions you want to link.

### Setting callable functions

- [linkedFunctions](mtlcomputepipelinedescriptor/linkedfunctions.md): The functions with available function pointers for the next kernel call.

### Loading binary archives

- [supportAddingBinaryFunctions](mtlcomputepipelinedescriptor/supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
- [binaryArchives](mtlcomputepipelinedescriptor/binaryarchives.md): The binary archives that contain any precompiled shader functions to link.

### Instance Properties

- [contentionRelief](mtlcomputepipelinedescriptor/contentionrelief.md)
- [forwardProgressUsage](mtlcomputepipelinedescriptor/forwardprogressusage.md)
- [optimizeForPersistentKernel](mtlcomputepipelinedescriptor/optimizeforpersistentkernel.md)
- [requiredThreadsPerThreadgroup](mtlcomputepipelinedescriptor/requiredthreadsperthreadgroup.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
