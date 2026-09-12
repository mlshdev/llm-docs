> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencysetdescriptor/label](https://developer.apple.com/documentation/metal/mtlresidencysetdescriptor/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional name that can help you identify a residency set you create with the descriptor.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Metal applies the value of this property to the [label](../mtlresidencyset/label.md) property of an [MTLResidencySet](../mtlresidencyset.md) that you create by passing the descriptor to [makeResidencySet(descriptor:)](../mtldevice/makeresidencyset%28descriptor_%29.md).

## See Also

### Configuring the residency set

- [initialCapacity](initialcapacity.md): The number of allocations a new residency set can store without reallocating memory.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional name that can help you identify a residency set you create with the descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Metal applies the value of this property to the [label](../mtlresidencyset/label.md) property of an [MTLResidencySet](../mtlresidencyset.md) that you create by passing the descriptor to [newResidencySetWithDescriptor:error:](../mtldevice/makeresidencyset%28descriptor_%29.md).

## See Also

### Configuring the residency set

- [initialCapacity](initialcapacity.md): The number of allocations a new residency set can store without reallocating memory.
