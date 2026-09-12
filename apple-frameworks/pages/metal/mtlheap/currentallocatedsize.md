> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/currentallocatedsize](https://developer.apple.com/documentation/metal/mtlheap/currentallocatedsize)

# currentAllocatedSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The size, in bytes, of the current heap allocation.

## Declaration

```swift
var currentAllocatedSize: Int { get }
```

## See Also

### Checking a heap’s size information

- [maxAvailableSize(alignment:)](maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [size](size.md): The total size of the heap, in bytes.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.

# currentAllocatedSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The size, in bytes, of the current heap allocation.

## Declaration

```objectivec
@property (readonly) NSUInteger currentAllocatedSize;
```

## See Also

### Checking a heap’s size information

- [maxAvailableSizeWithAlignment:](maxavailablesize%28alignment_%29.md): The maximum size of a resource, in bytes, that can be currently allocated from the heap.
- [size](size.md): The total size of the heap, in bytes.
- [usedSize](usedsize.md): The size of all resources currently in the heap, in bytes.
