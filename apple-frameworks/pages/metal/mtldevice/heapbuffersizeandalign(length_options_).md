> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/heapbuffersizeandalign(length:options:)](https://developer.apple.com/documentation/metal/mtldevice/heapbuffersizeandalign(length:options:))

# heapBufferSizeAndAlign(length:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the size and alignment, in bytes, of a buffer if you create it from a heap.

## Declaration

```swift
func heapBufferSizeAndAlign(length: Int, options: MTLResourceOptions = []) -> MTLSizeAndAlign
```

## Parameters

- `length`: The size of the buffer, in bytes.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance for a would-be buffer’s storage and hazard tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

An [MTLSizeAndAlign](../mtlsizeandalign.md) instance.

<a id="discussion"></a>

## Discussion

Use this method to help estimate an appropriate size for a new heap before you create it.

## See Also

### Working with resource heaps

- [makeHeap(descriptor:)](makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapTextureSizeAndAlign(descriptor:)](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(size:)](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(descriptor:)](heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.

# heapBufferSizeAndAlignWithLength:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the size and alignment, in bytes, of a buffer if you create it from a heap.

## Declaration

```objectivec
- (MTLSizeAndAlign) heapBufferSizeAndAlignWithLength:(NSUInteger) length options:(MTLResourceOptions) options;
```

## Parameters

- `length`: The size of the buffer, in bytes.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance for a would-be buffer’s storage and hazard tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

An [MTLSizeAndAlign](../mtlsizeandalign.md) instance.

<a id="discussion"></a>

## Discussion

Use this method to help estimate an appropriate size for a new heap before you create it.

## See Also

### Working with resource heaps

- [newHeapWithDescriptor:](makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapTextureSizeAndAlignWithDescriptor:](heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithSize:](heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithDescriptor:](heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](../mtlsizeandalign.md): The size and alignment of a resource, in bytes.
