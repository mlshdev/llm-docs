> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/maxavailablesize(alignment:)](https://developer.apple.com/documentation/metal/mtlheap/maxavailablesize(alignment:))

# maxAvailableSize(alignment:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The maximum size of a resource, in bytes, that can be currently allocated from the heap.

## Declaration

```swift
func maxAvailableSize(alignment: Int) -> Int
```

## Parameters

- `alignment`: The alignment of the resource, in bytes. This value needs to be a power of two.

<a id="return-value"></a>

## Return Value

The maximum size for the resource, in bytes.

<a id="discussion"></a>

## Discussion

This method measures fragmentation within the heap. You can use the [heapBufferSizeAndAlign(length:options:)](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) and [heapTextureSizeAndAlign(descriptor:)](../mtldevice/heaptexturesizeandalign%28descriptor_%29.md) methods to help you determine the correct alignment for the resource.

## See Also

### Checking a heap’s size information

- [size](size.md): The total size of the heap, in bytes.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](currentallocatedsize.md): The size, in bytes, of the current heap allocation.

# maxAvailableSizeWithAlignment: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The maximum size of a resource, in bytes, that can be currently allocated from the heap.

## Declaration

```objectivec
- (NSUInteger) maxAvailableSizeWithAlignment:(NSUInteger) alignment;
```

## Parameters

- `alignment`: The alignment of the resource, in bytes. This value needs to be a power of two.

<a id="return-value"></a>

## Return Value

The maximum size for the resource, in bytes.

<a id="discussion"></a>

## Discussion

This method measures fragmentation within the heap. You can use the [heapBufferSizeAndAlignWithLength:options:](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) and [heapTextureSizeAndAlignWithDescriptor:](../mtldevice/heaptexturesizeandalign%28descriptor_%29.md) methods to help you determine the correct alignment for the resource.

## See Also

### Checking a heap’s size information

- [size](size.md): The total size of the heap, in bytes.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](currentallocatedsize.md): The size, in bytes, of the current heap allocation.
