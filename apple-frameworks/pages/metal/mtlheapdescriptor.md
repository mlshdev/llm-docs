> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor](https://developer.apple.com/documentation/metal/mtlheapdescriptor)

# MTLHeapDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A configuration that customizes the behavior for a Metal memory heap.

## Declaration

```swift
class MTLHeapDescriptor
```

## Mentioned In

- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Create an [MTLHeap](mtlheap.md) by configuring an [MTLHeapDescriptor](mtlheapdescriptor.md) instance’s properties and passing it to the [makeHeap(descriptor:)](mtldevice/makeheap%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md).

Each new heap inherits the descriptor’s configuration as you create it, which means you can modify and reuse a descriptor to create other heaps.

## Topics

### Configuring a heap

- [type](mtlheapdescriptor/type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](mtlheapdescriptor/storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](mtlheapdescriptor/cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](mtlheapdescriptor/hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](mtlheapdescriptor/resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](mtlheapdescriptor/size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](mtlheapdescriptor/sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

### Instance Properties

- [maxCompatiblePlacementSparsePageSize](mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md): Specifies the largest sparse page size that the Metal heap supports.

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

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# MTLHeapDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A configuration that customizes the behavior for a Metal memory heap.

## Declaration

```objectivec
@interface MTLHeapDescriptor : NSObject
```

## Mentioned In

- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Create an [MTLHeap](mtlheap.md) by configuring an [MTLHeapDescriptor](mtlheapdescriptor.md) instance’s properties and passing it to the [newHeapWithDescriptor:](mtldevice/makeheap%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md).

Each new heap inherits the descriptor’s configuration as you create it, which means you can modify and reuse a descriptor to create other heaps.

## Topics

### Configuring a heap

- [type](mtlheapdescriptor/type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](mtlheapdescriptor/storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](mtlheapdescriptor/cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](mtlheapdescriptor/hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](mtlheapdescriptor/resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](mtlheapdescriptor/size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](mtlheapdescriptor/sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

### Instance Properties

- [maxCompatiblePlacementSparsePageSize](mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md): Specifies the largest sparse page size that the Metal heap supports.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.
