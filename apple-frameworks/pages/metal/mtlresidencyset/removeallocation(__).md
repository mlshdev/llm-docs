> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/removeallocation(_:)](https://developer.apple.com/documentation/metal/mtlresidencyset/removeallocation(_:))

# removeAllocation(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages a single resource to leave the residency set’s list of allocations.

## Declaration

```swift
func removeAllocation(_ allocation: any MTLAllocation)
```

## Parameters

- `allocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all others changes you stage, by calling a residency set’s [commit()](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllAllocations()](removeallallocations%28%29.md): Stages all the resources in the residency set to leave its list of allocations.
- [removeAllocations(\_:)](removeallocations%28__%29.md): Stages multiple resources to leave the residency set’s list of allocations.

# removeAllocation: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages a single resource to leave the residency set’s list of allocations.

## Declaration

```objectivec
- (void) removeAllocation:(id<MTLAllocation>) allocation;
```

## Parameters

- `allocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all others changes you stage, by calling a residency set’s [commit](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllAllocations](removeallallocations%28%29.md): Stages all the resources in the residency set to leave its list of allocations.
- [removeAllocations:count:](removeallocations_count_.md): Stages multiple resources to leave the residency set’s list of allocations.
