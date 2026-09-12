> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/allocationcount](https://developer.apple.com/documentation/metal/mtlresidencyset/allocationcount)

# allocationCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The number of resource allocations in the residency set.

## Declaration

```swift
var allocationCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The value is the number of elements in [allAllocations](allallocations.md). The residency set updates the property’s value when you call the [commit()](commit%28%29.md) method.

## See Also

### Inspecting a residency set

- [label](label.md): An optional name that can help you identify the residency set.
- [device](device.md): The Metal device that owns the residency set.
- [containsAllocation(\_:)](containsallocation%28__%29.md): Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.

# allocationCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The number of resource allocations in the residency set.

## Declaration

```objectivec
@property (readonly) NSUInteger allocationCount;
```

<a id="discussion"></a>

## Discussion

The value is the number of elements in [allAllocations](allallocations.md). The residency set updates the property’s value when you call the [commit](commit%28%29.md) method.

## See Also

### Inspecting a residency set

- [label](label.md): An optional name that can help you identify the residency set.
- [device](device.md): The Metal device that owns the residency set.
- [containsAllocation:](containsallocation%28__%29.md): Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.
