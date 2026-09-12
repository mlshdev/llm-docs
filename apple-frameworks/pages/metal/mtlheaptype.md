> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheaptype](https://developer.apple.com/documentation/metal/mtlheaptype)

# MTLHeapType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The options you use to choose the heap type.

## Declaration

```swift
enum MTLHeapType
```

## Topics

### Specifying the heap type

- [MTLHeapType.automatic](mtlheaptype/automatic.md): A heap that automatically places new resource allocations.
- [MTLHeapType.placement](mtlheaptype/placement.md): The app controls placement of resources on the heap.
- [MTLHeapType.sparse](mtlheaptype/sparse.md): The heap contains sparse texture tiles.

### Initializers

- [init(rawValue:)](mtlheaptype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# MTLHeapType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The options you use to choose the heap type.

## Declaration

```objectivec
enum MTLHeapType : NSInteger;
```

## Topics

### Specifying the heap type

- [MTLHeapTypeAutomatic](mtlheaptype/automatic.md): A heap that automatically places new resource allocations.
- [MTLHeapTypePlacement](mtlheaptype/placement.md): The app controls placement of resources on the heap.
- [MTLHeapTypeSparse](mtlheaptype/sparse.md): The heap contains sparse texture tiles.

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.
