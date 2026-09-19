> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlresidencyset/removeallocations(_:)

# removeAllocations(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS

Stages multiple resources to leave the residency set’s list of allocations.

## Declaration

```swift
func removeAllocations(_ allocations: [any MTLAllocation])
```

## Parameters

- `allocations`: An array of resource allocations, whose elements can be an arbitrarily mix of [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all other changes you stage, by calling a residency set’s [commit()](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllAllocations()](removeallallocations%28%29.md): Stages all the resources in the residency set to leave its list of allocations.
- [removeAllocation(\_:)](removeallocation%28__%29.md): Stages a single resource to leave the residency set’s list of allocations.
