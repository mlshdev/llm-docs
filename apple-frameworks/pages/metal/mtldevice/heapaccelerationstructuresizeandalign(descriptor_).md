> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/heapaccelerationstructuresizeandalign(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/heapaccelerationstructuresizeandalign(descriptor:))

# heapAccelerationStructureSizeAndAlign(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.

## Declaration

```swift
func heapAccelerationStructureSizeAndAlign(descriptor: MTLAccelerationStructureDescriptor) -> MTLSizeAndAlign
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

An [MTLSizeAndAlign](../mtlsizeandalign.md) instance.

<a id="discussion"></a>

## Discussion

Use this method to help estimate an appropriate size for a new heap before you create it.

## See Also

### Working with resource heaps

- [makeHeap(descriptor:)](makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapBufferSizeAndAlign(length:options:)](heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlign(descriptor:)](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(size:)](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# heapAccelerationStructureSizeAndAlignWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.

## Declaration

```objectivec
- (MTLSizeAndAlign) heapAccelerationStructureSizeAndAlignWithDescriptor:(MTLAccelerationStructureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

An [MTLSizeAndAlign](../mtlsizeandalign.md) instance.

<a id="discussion"></a>

## Discussion

Use this method to help estimate an appropriate size for a new heap before you create it.

## See Also

### Working with resource heaps

- [newHeapWithDescriptor:](makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapBufferSizeAndAlignWithLength:options:](heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlignWithDescriptor:](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithSize:](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.
