> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap](https://developer.apple.com/documentation/metal/mtlheap)

# MTLHeap (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A memory pool from which you can suballocate resources.

## Declaration

```swift
protocol MTLHeap : MTLAllocation
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Reducing the memory footprint of Metal apps](reducing-the-memory-footprint-of-metal-apps.md)

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself; instead, to create a heap, configure an [MTLHeapDescriptor](mtlheapdescriptor.md) instance and call the [makeHeap(descriptor:)](mtldevice/makeheap%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md) instance.

You suballocate resources from a heap and make them *aliasable* or *non-aliasable*. A sub-allocated resource is non-aliased by default, preventing future resources allocated from the heap from using its memory. Resources are *aliased* when they share the same memory allocation on a heap.

All resources sub-allocated from the same heap share the same storage mode and CPU cache mode. You can make heaps purgeable, but not the resources allocated from the heap; they can only reflect the heap’s purgeability state.

## Topics

### Naming and identifying a heap

- [label](mtlheap/label.md): A string that identifies the heap.

### Creating buffers from a heap

- [makeBuffer(length:options:)](mtlheap/makebuffer%28length_options_%29.md): Creates a buffer on the heap.
- [makeBuffer(length:options:offset:)](mtlheap/makebuffer%28length_options_offset_%29.md): Creates a buffer at a specified offset on the heap.

### Creating textures from a heap

- [makeTexture(descriptor:)](mtlheap/maketexture%28descriptor_%29.md): Creates a texture on the heap.
- [makeTexture(descriptor:offset:)](mtlheap/maketexture%28descriptor_offset_%29.md): Creates a texture at a specified offset on the heap.

### Creating acceleration structure from a heap

- [makeAccelerationStructure(size:)](mtlheap/makeaccelerationstructure%28size_%29.md)
- [makeAccelerationStructure(size:offset:)](mtlheap/makeaccelerationstructure%28size_offset_%29.md)
- [makeAccelerationStructure(descriptor:)](mtlheap/makeaccelerationstructure%28descriptor_%29.md)
- [makeAccelerationStructure(descriptor:offset:)](mtlheap/makeaccelerationstructure%28descriptor_offset_%29.md)

### Configuring a heap’s purgeable state

- [setPurgeableState(\_:)](mtlheap/setpurgeablestate%28__%29.md): Sets the purgeable state of the heap.

### Checking a heap’s size information

- [maxAvailableSize(alignment:)](mtlheap/maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [size](mtlheap/size.md): The total size of the heap, in bytes.
- [usedSize](mtlheap/usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](mtlheap/currentallocatedsize.md): The size, in bytes, of the current heap allocation.

### Checking a heap’s permanent configuration

- [device](mtlheap/device.md): The device object that created the heap.
- [type](mtlheap/type.md): The heap’s type.
- [storageMode](mtlheap/storagemode.md): The heap’s storage mode.
- [cpuCacheMode](mtlheap/cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](mtlheap/hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](mtlheap/resourceoptions.md): The options for resources created by the heap.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# MTLHeap (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A memory pool from which you can suballocate resources.

## Declaration

```objectivec
@protocol MTLHeap <MTLAllocation>
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Reducing the memory footprint of Metal apps](reducing-the-memory-footprint-of-metal-apps.md)

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself; instead, to create a heap, configure an [MTLHeapDescriptor](mtlheapdescriptor.md) instance and call the [newHeapWithDescriptor:](mtldevice/makeheap%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md) instance.

You suballocate resources from a heap and make them *aliasable* or *non-aliasable*. A sub-allocated resource is non-aliased by default, preventing future resources allocated from the heap from using its memory. Resources are *aliased* when they share the same memory allocation on a heap.

All resources sub-allocated from the same heap share the same storage mode and CPU cache mode. You can make heaps purgeable, but not the resources allocated from the heap; they can only reflect the heap’s purgeability state.

## Topics

### Naming and identifying a heap

- [label](mtlheap/label.md): A string that identifies the heap.

### Creating buffers from a heap

- [newBufferWithLength:options:](mtlheap/makebuffer%28length_options_%29.md): Creates a buffer on the heap.
- [newBufferWithLength:options:offset:](mtlheap/makebuffer%28length_options_offset_%29.md): Creates a buffer at a specified offset on the heap.

### Creating textures from a heap

- [newTextureWithDescriptor:](mtlheap/maketexture%28descriptor_%29.md): Creates a texture on the heap.
- [newTextureWithDescriptor:offset:](mtlheap/maketexture%28descriptor_offset_%29.md): Creates a texture at a specified offset on the heap.

### Creating acceleration structure from a heap

- [newAccelerationStructureWithSize:](mtlheap/makeaccelerationstructure%28size_%29.md)
- [newAccelerationStructureWithSize:offset:](mtlheap/makeaccelerationstructure%28size_offset_%29.md)
- [newAccelerationStructureWithDescriptor:](mtlheap/makeaccelerationstructure%28descriptor_%29.md)
- [newAccelerationStructureWithDescriptor:offset:](mtlheap/makeaccelerationstructure%28descriptor_offset_%29.md)

### Configuring a heap’s purgeable state

- [setPurgeableState:](mtlheap/setpurgeablestate%28__%29.md): Sets the purgeable state of the heap.

### Checking a heap’s size information

- [maxAvailableSizeWithAlignment:](mtlheap/maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [size](mtlheap/size.md): The total size of the heap, in bytes.
- [usedSize](mtlheap/usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](mtlheap/currentallocatedsize.md): The size, in bytes, of the current heap allocation.

### Checking a heap’s permanent configuration

- [device](mtlheap/device.md): The device object that created the heap.
- [type](mtlheap/type.md): The heap’s type.
- [storageMode](mtlheap/storagemode.md): The heap’s storage mode.
- [cpuCacheMode](mtlheap/cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](mtlheap/hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](mtlheap/resourceoptions.md): The options for resources created by the heap.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.
