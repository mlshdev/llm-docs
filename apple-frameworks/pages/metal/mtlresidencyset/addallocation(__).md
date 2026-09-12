> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/addallocation(_:)](https://developer.apple.com/documentation/metal/mtlresidencyset/addallocation(_:))

# addAllocation(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages a single resource to join the residency set’s list of allocations.

## Declaration

```swift
func addAllocation(_ allocation: any MTLAllocation)
```

## Parameters

- `allocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Finalize the inclusion of these resource allocations, and all other changes you stage, by calling a residency set’s [commit()](commit%28%29.md) method.

## See Also

### Adding allocations

- [addAllocations(\_:)](addallocations%28__%29.md): Stages multiple resources to join the residency set’s list of allocations.

# addAllocation: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages a single resource to join the residency set’s list of allocations.

## Declaration

```objectivec
- (void) addAllocation:(id<MTLAllocation>) allocation;
```

## Parameters

- `allocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Finalize the inclusion of these resource allocations, and all other changes you stage, by calling a residency set’s [commit](commit%28%29.md) method.

## See Also

### Adding allocations

- [addAllocations:count:](addallocations_count_.md): Stages multiple resources to join the residency set’s list of allocations.
