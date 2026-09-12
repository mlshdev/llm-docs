> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeheap(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makeheap(descriptor:))

# makeHeap(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a new GPU heap instance.

## Declaration

```swift
func makeHeap(descriptor: MTLHeapDescriptor) -> (any MTLHeap)?
```

## Parameters

- `descriptor`: An [MTLHeapDescriptor](../mtlheapdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLHeap](../mtlheap.md) instance if the method completed successfully; otherwise nil.

<a id="discussion"></a>

## Discussion

For more information about using heaps, see [Memory heaps](../memory-heaps.md).

## See Also

### Working with resource heaps

- [heapBufferSizeAndAlign(length:options:)](heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlign(descriptor:)](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(size:)](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(descriptor:)](heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# newHeapWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a new GPU heap instance.

## Declaration

```objectivec
- (id<MTLHeap>) newHeapWithDescriptor:(MTLHeapDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLHeapDescriptor](../mtlheapdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLHeap](../mtlheap.md) instance if the method completed successfully; otherwise nil.

<a id="discussion"></a>

## Discussion

For more information about using heaps, see [Memory heaps](../memory-heaps.md).

## See Also

### Working with resource heaps

- [heapBufferSizeAndAlignWithLength:options:](heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlignWithDescriptor:](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithSize:](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithDescriptor:](heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.
