> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/addallocations(_:)](https://developer.apple.com/documentation/metal/mtlresidencyset/addallocations(_:))

# addAllocations(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS

Stages multiple resources to join the residency set’s list of allocations.

## Declaration

```swift
func addAllocations(_ allocations: [any MTLAllocation])
```

## Parameters

- `allocations`: An array of resource allocations, whose elements can be an arbitrarily mix of [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Finalize the inclusion of these resource allocations, and all other changes you stage, by calling a residency set’s [commit()](commit%28%29.md) method.

## See Also

### Adding allocations

- [addAllocation(\_:)](addallocation%28__%29.md): Stages a single resource to join the residency set’s list of allocations.
