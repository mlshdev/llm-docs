> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/label](https://developer.apple.com/documentation/metal/mtlresidencyset/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional name that can help you identify the residency set.

## Declaration

```swift
var label: String? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property comes from the [label](../mtlresidencysetdescriptor/label.md) property of the [MTLResidencySetDescriptor](../mtlresidencysetdescriptor.md) instance you use to create the residency set with [makeResidencySet(descriptor:)](../mtldevice/makeresidencyset%28descriptor_%29.md).

## See Also

### Inspecting a residency set

- [device](device.md): The Metal device that owns the residency set.
- [containsAllocation(\_:)](containsallocation%28__%29.md): Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocationCount](allocationcount.md): The number of resource allocations in the residency set.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional name that can help you identify the residency set.

## Declaration

```objectivec
@property (readonly, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

The value of this property comes from the [label](../mtlresidencysetdescriptor/label.md) property of the [MTLResidencySetDescriptor](../mtlresidencysetdescriptor.md) instance you use to create the residency set with [newResidencySetWithDescriptor:error:](../mtldevice/makeresidencyset%28descriptor_%29.md).

## See Also

### Inspecting a residency set

- [device](device.md): The Metal device that owns the residency set.
- [containsAllocation:](containsallocation%28__%29.md): Returns a Boolean value that indicates whether the residency set contains a specific resource allocation.
- [allAllocations](allallocations.md): The residency set’s current list of resource allocations.
- [allocationCount](allocationcount.md): The number of resource allocations in the residency set.
- [allocatedSize](allocatedsize.md): The amount of resident memory, in bytes, the residency set’s resource allocations consume.
