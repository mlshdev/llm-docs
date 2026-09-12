> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/removeallallocations()](https://developer.apple.com/documentation/metal/mtlresidencyset/removeallallocations())

# removeAllAllocations() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages all the resources in the residency set to leave its list of allocations.

## Declaration

```swift
func removeAllAllocations()
```

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all others changes you stage, by calling a residency set’s [commit()](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllocation(\_:)](removeallocation%28__%29.md): Stages a single resource to leave the residency set’s list of allocations.
- [removeAllocations(\_:)](removeallocations%28__%29.md): Stages multiple resources to leave the residency set’s list of allocations.

# removeAllAllocations (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Stages all the resources in the residency set to leave its list of allocations.

## Declaration

```objectivec
- (void) removeAllAllocations;
```

<a id="discussion"></a>

## Discussion

Finalize the removal of these resource allocations, and all others changes you stage, by calling a residency set’s [commit](commit%28%29.md) method.

## See Also

### Removing allocations

- [removeAllocation:](removeallocation%28__%29.md): Stages a single resource to leave the residency set’s list of allocations.
- [removeAllocations:count:](removeallocations_count_.md): Stages multiple resources to leave the residency set’s list of allocations.
