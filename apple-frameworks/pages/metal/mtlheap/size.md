> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/size](https://developer.apple.com/documentation/metal/mtlheap/size)

# size (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The total size of the heap, in bytes.

## Declaration

```swift
var size: Int { get }
```

## See Also

### Checking a heap’s size information

- [maxAvailableSize(alignment:)](maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](currentallocatedsize.md): The size, in bytes, of the current heap allocation.

# size (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The total size of the heap, in bytes.

## Declaration

```objectivec
@property (readonly) NSUInteger size;
```

## See Also

### Checking a heap’s size information

- [maxAvailableSizeWithAlignment:](maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.
- [currentAllocatedSize](currentallocatedsize.md): The size, in bytes, of the current heap allocation.
