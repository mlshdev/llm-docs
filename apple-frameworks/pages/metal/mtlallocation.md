> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlallocation](https://developer.apple.com/documentation/metal/mtlallocation)

# MTLAllocation (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.

## Declaration

```swift
protocol MTLAllocation : NSObjectProtocol
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Types that conform to [MTLAllocation](mtlallocation.md), including [MTLBuffer](mtlbuffer.md), [MTLTexture](mtltexture.md), and [MTLHeap](mtlheap.md), have underlying memory. You make their memory *resident*, or GPU-accessible, by adding an allocation to an [MTLResidencySet](mtlresidencyset.md) or calling the appropriate method of a command encoder.

See [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md) for more information.

## Topics

### Inspecting an allocation

- [allocatedSize](mtlallocation/allocatedsize.md): The amount of memory, in byes, a resource consumes, such as for a buffer, texture, or heap.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4MachineLearningPipelineState](mtl4machinelearningpipelinestate.md)
- [MTLAccelerationStructure](mtlaccelerationstructure.md)
- [MTLBuffer](mtlbuffer.md)
- [MTLComputePipelineState](mtlcomputepipelinestate.md)
- [MTLHeap](mtlheap.md)
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md)
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md)
- [MTLRenderPipelineState](mtlrenderpipelinestate.md)
- [MTLResource](mtlresource.md)
- [MTLTensor](mtltensor.md)
- [MTLTexture](mtltexture.md)
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md)

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLResource](mtlresource.md): An allocation of memory accessible to a GPU.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)

# MTLAllocation (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.

## Declaration

```objectivec
@protocol MTLAllocation <NSObject>
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Types that conform to [MTLAllocation](mtlallocation.md), including [MTLBuffer](mtlbuffer.md), [MTLTexture](mtltexture.md), and [MTLHeap](mtlheap.md), have underlying memory. You make their memory *resident*, or GPU-accessible, by adding an allocation to an [MTLResidencySet](mtlresidencyset.md) or calling the appropriate method of a command encoder.

See [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md) for more information.

## Topics

### Inspecting an allocation

- [allocatedSize](mtlallocation/allocatedsize.md): The amount of memory, in byes, a resource consumes, such as for a buffer, texture, or heap.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4MachineLearningPipelineState](mtl4machinelearningpipelinestate.md)
- [MTLComputePipelineState](mtlcomputepipelinestate.md)
- [MTLHeap](mtlheap.md)
- [MTLRenderPipelineState](mtlrenderpipelinestate.md)
- [MTLResource](mtlresource.md)

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLResource](mtlresource.md): An allocation of memory accessible to a GPU.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)
