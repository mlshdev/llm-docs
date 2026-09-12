> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/heapoffset](https://developer.apple.com/documentation/metal/mtlresource/heapoffset)

# heapOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.

## Declaration

```swift
var heapOffset: Int { get }
```

<a id="discussion"></a>

## Discussion

If the heap is not a placement heap ([MTLHeapType.placement](../mtlheaptype/placement.md)), the value is always `0` and should be ignored.

## See Also

### Managing heap resources

- [heap](heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable()](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable()](isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

# heapOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.

## Declaration

```objectivec
@property (readonly) NSUInteger heapOffset;
```

<a id="discussion"></a>

## Discussion

If the heap is not a placement heap ([MTLHeapTypePlacement](../mtlheaptype/placement.md)), the value is always `0` and should be ignored.

## See Also

### Managing heap resources

- [heap](heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
- [isAliasable](isaliasable%28%29.md): A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.
