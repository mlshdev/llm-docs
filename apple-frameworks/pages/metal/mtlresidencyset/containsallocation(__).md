> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/containsallocation(_:)](https://developer.apple.com/documentation/metal/mtlresidencyset/containsallocation(_:))

# containsAllocation(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.

## Declaration

```swift
func containsAllocation(_ anAllocation: any MTLAllocation) -> Bool
```

## Parameters

- `anAllocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

## See Also

### Inspecting a residency set

- [label](label.md): An optional name that can help you identify the residency set.
- [device](device.md): The Metal device that owns the residency set.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocationCount](allocationcount.md): The number of resource allocations in the residency set.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.

# containsAllocation: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.

## Declaration

```objectivec
- (BOOL) containsAllocation:(id<MTLAllocation>) anAllocation;
```

## Parameters

- `anAllocation`: A resource allocation, such as an [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), or [MTLHeap](../mtlheap.md).

## See Also

### Inspecting a residency set

- [label](label.md): An optional name that can help you identify the residency set.
- [device](device.md): The Metal device that owns the residency set.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocationCount](allocationcount.md): The number of resource allocations in the residency set.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.
