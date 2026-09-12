> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheaptype/automatic](https://developer.apple.com/documentation/metal/mtlheaptype/automatic)

# MTLHeapType.automatic (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A heap that automatically places new resource allocations.

## Declaration

```swift
case automatic
```

<a id="discussion"></a>

## Discussion

In an automatic heap, Metal automatically determines the locations of resources allocated by the heap, with a layout specific to the GPU. Automatic heaps may perform better than manually placing resources in the heap ([MTLHeapType.placement](placement.md)).

Use automatic heaps when the heap primarily contains temporary resources that you write to often.

## See Also

### Specifying the heap type

- [MTLHeapType.placement](placement.md): The app controls placement of resources on the heap.
- [MTLHeapType.sparse](sparse.md): The heap contains sparse texture tiles.

# MTLHeapTypeAutomatic (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A heap that automatically places new resource allocations.

## Declaration

```objectivec
MTLHeapTypeAutomatic
```

<a id="discussion"></a>

## Discussion

In an automatic heap, Metal automatically determines the locations of resources allocated by the heap, with a layout specific to the GPU. Automatic heaps may perform better than manually placing resources in the heap ([MTLHeapTypePlacement](placement.md)).

Use automatic heaps when the heap primarily contains temporary resources that you write to often.

## See Also

### Specifying the heap type

- [MTLHeapTypePlacement](placement.md): The app controls placement of resources on the heap.
- [MTLHeapTypeSparse](sparse.md): The heap contains sparse texture tiles.
