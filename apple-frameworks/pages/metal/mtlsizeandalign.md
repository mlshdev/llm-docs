> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsizeandalign](https://developer.apple.com/documentation/metal/mtlsizeandalign)

# MTLSizeAndAlign (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The size and alignment of a resource, in bytes.

## Declaration

```swift
struct MTLSizeAndAlign
```

## Topics

### Accessing the size and alignment

- [size](mtlsizeandalign/size.md): The size of a resource, in bytes.
- [align](mtlsizeandalign/align.md): The alignment of a resource, in bytes.

### Creating instances

- [init()](mtlsizeandalign/init%28%29.md): Creates a default instance.
- [init(size:align:)](mtlsizeandalign/init%28size_align_%29.md): Creates a new instance initialized to the given values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.

# MTLSizeAndAlign (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The size and alignment of a resource, in bytes.

## Declaration

```objectivec
typedef struct { ... } MTLSizeAndAlign;
```

## Topics

### Accessing the size and alignment

- [size](mtlsizeandalign/size.md): The size of a resource, in bytes.
- [align](mtlsizeandalign/align.md): The alignment of a resource, in bytes.

## See Also

### Resource memory allocation and management

- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLHeap](mtlheap.md): A memory pool from which you can suballocate resources.
- [MTLHeapDescriptor](mtlheapdescriptor.md): A configuration that customizes the behavior for a Metal memory heap.
- [MTLHeapType](mtlheaptype.md): The options you use to choose the heap type.
