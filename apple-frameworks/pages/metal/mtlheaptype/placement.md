> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheaptype/placement](https://developer.apple.com/documentation/metal/mtlheaptype/placement)

# MTLHeapType.placement (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The app controls placement of resources on the heap.

## Declaration

```swift
case placement
```

<a id="discussion"></a>

## Discussion

Use placement heaps when you need direct control over memory use and heap fragmentation. Typically, you use placement heaps for resources you keep for long time periods and rarely change.

## See Also

### Specifying the heap type

- [MTLHeapType.automatic](automatic.md): A heap that automatically places new resource allocations.
- [MTLHeapType.sparse](sparse.md): The heap contains sparse texture tiles.

# MTLHeapTypePlacement (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The app controls placement of resources on the heap.

## Declaration

```objectivec
MTLHeapTypePlacement
```

<a id="discussion"></a>

## Discussion

Use placement heaps when you need direct control over memory use and heap fragmentation. Typically, you use placement heaps for resources you keep for long time periods and rarely change.

## See Also

### Specifying the heap type

- [MTLHeapTypeAutomatic](automatic.md): A heap that automatically places new resource allocations.
- [MTLHeapTypeSparse](sparse.md): The heap contains sparse texture tiles.
