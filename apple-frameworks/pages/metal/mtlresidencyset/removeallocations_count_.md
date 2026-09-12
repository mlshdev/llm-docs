> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/removeallocations:count:](https://developer.apple.com/documentation/metal/mtlresidencyset/removeallocations:count:)

# removeAllocations:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages multiple resources to leave the residency set’s list of allocations.

## Declaration

```objectivec
- (void) removeAllocations:(id<MTLAllocation> const[]) allocations count:(NSUInteger) count;
```

## Parameters

- `allocations`: A C array of resource allocations, whose elements can be an arbitrarily mix of [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.
- `count`: The number of elements in `allocations`.

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all other changes you stage, by calling a residency set’s [commit](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllAllocations](removeallallocations%28%29.md): Stages all the resources in the residency set to leave its list of allocations.
- [removeAllocation:](removeallocation%28__%29.md): Stages a single resource to leave the residency set’s list of allocations.
