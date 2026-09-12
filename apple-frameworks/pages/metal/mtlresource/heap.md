> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/heap](https://developer.apple.com/documentation/metal/mtlresource/heap)

# heap (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap on which the resource is allocated, if any.

## Declaration

```swift
var heap: (any MTLHeap)? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` if the resource isn’t allocated on a heap.

## See Also

### Managing heap resources

- [heapOffset](heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [makeAliasable()](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable()](isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

# heap (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap on which the resource is allocated, if any.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLHeap> heap;
```

<a id="discussion"></a>

## Discussion

This value is `nil` if the resource isn’t allocated on a heap.

## See Also

### Managing heap resources

- [heapOffset](heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [makeAliasable](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable](isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.
