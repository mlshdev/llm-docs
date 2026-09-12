> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource](https://developer.apple.com/documentation/metal/mtlresource)

# MTLResource (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An allocation of memory accessible to a GPU.

## Declaration

```swift
protocol MTLResource : MTLAllocation
```

## Mentioned In

- [Choosing a resource storage mode for Intel and AMD GPUs](choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)

<a id="overview"></a>

## Overview

> **Important**

>  Don’t implement this protocol yourself. Create resources by calling methods on [MTLDevice](mtldevice.md), [MTLBuffer](mtlbuffer.md), or [MTLTexture](mtltexture.md).

When you execute commands on the GPU, those commands can only affect memory allocated as [MTLResource](mtlresource.md) objects. Only the [MTLDevice](mtldevice.md) that created these resources can modify them. Different resource types have different uses. The most common resource types are buffers ([MTLBuffer](mtlbuffer.md)), which are linear allocations of memory, and textures ([MTLTexture](mtltexture.md)), which hold structured image data.

## Topics

### Identifying the resource

- [device](mtlresource/device.md): The device object that created the resource.
- [label](mtlresource/label.md): A string that identifies the resource.

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

### Setting the purgeable state of the resource

- [setPurgeableState(\_:)](mtlresource/setpurgeablestate%28__%29.md): Specifies or queries the resource’s purgeable state.
- [MTLPurgeableState](mtlpurgeablestate.md): The purgeable state of the resource.

### Managing heap resources

- [heapOffset](mtlresource/heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [heap](mtlresource/heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable()](mtlresource/makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable()](mtlresource/isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

### Querying the allocated size

- [allocatedSize](mtlresource/allocatedsize.md): The size of the resource, in bytes.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTLAccelerationStructure](mtlaccelerationstructure.md)
- [MTLBuffer](mtlbuffer.md)
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md)
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md)
- [MTLTensor](mtltensor.md)
- [MTLTexture](mtltexture.md)
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md)

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLAllocation](mtlallocation.md): A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)

# MTLResource (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An allocation of memory accessible to a GPU.

## Declaration

```objectivec
@protocol MTLResource <MTLAllocation>
```

## Mentioned In

- [Choosing a resource storage mode for Intel and AMD GPUs](choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)

<a id="overview"></a>

## Overview

> **Important**

>  Don’t implement this protocol yourself. Create resources by calling methods on [MTLDevice](mtldevice.md), [MTLBuffer](mtlbuffer.md), or [MTLTexture](mtltexture.md).

When you execute commands on the GPU, those commands can only affect memory allocated as [MTLResource](mtlresource.md) objects. Only the [MTLDevice](mtldevice.md) that created these resources can modify them. Different resource types have different uses. The most common resource types are buffers ([MTLBuffer](mtlbuffer.md)), which are linear allocations of memory, and textures ([MTLTexture](mtltexture.md)), which hold structured image data.

## Topics

### Identifying the resource

- [device](mtlresource/device.md): The device object that created the resource.
- [label](mtlresource/label.md): A string that identifies the resource.

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

### Setting the purgeable state of the resource

- [setPurgeableState:](mtlresource/setpurgeablestate%28__%29.md): Specifies or queries the resource’s purgeable state.
- [MTLPurgeableState](mtlpurgeablestate.md): The purgeable state of the resource.

### Managing heap resources

- [heapOffset](mtlresource/heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [heap](mtlresource/heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable](mtlresource/makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable](mtlresource/isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

### Querying the allocated size

- [allocatedSize](mtlresource/allocatedsize.md): The size of the resource, in bytes.

### Instance Methods

- [setOwnerWithIdentity:](mtlresource/setownerwithidentity_.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)

### Inherited By

- [MTLAccelerationStructure](mtlaccelerationstructure.md)
- [MTLBuffer](mtlbuffer.md)
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md)
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md)
- [MTLTensor](mtltensor.md)
- [MTLTexture](mtltexture.md)
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md)

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLAllocation](mtlallocation.md): A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)
