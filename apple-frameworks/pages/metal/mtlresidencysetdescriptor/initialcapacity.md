> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencysetdescriptor/initialcapacity](https://developer.apple.com/documentation/metal/mtlresidencysetdescriptor/initialcapacity)

# initialCapacity (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The number of allocations a new residency set can store without reallocating memory.

## Declaration

```swift
var initialCapacity: Int { get set }
```

<a id="discussion"></a>

## Discussion

Reduce the memory reallocations the set needs to make by setting the property to a value large enough to hold the allocations you expect. You can leave the property at its default value of `0`, which tells Metal to give the residency set the standard starting capacity.

> **Note**

>  The residency set can hold more allocations than its initial capacity.

## See Also

### Configuring the residency set

- [label](label.md): An optional name that can help you identify a residency set you create with the descriptor.

# initialCapacity (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The number of allocations a new residency set can store without reallocating memory.

## Declaration

```objectivec
@property (nonatomic) NSUInteger initialCapacity;
```

<a id="discussion"></a>

## Discussion

Reduce the memory reallocations the set needs to make by setting the property to a value large enough to hold the allocations you expect. You can leave the property at its default value of `0`, which tells Metal to give the residency set the standard starting capacity.

> **Note**

>  The residency set can hold more allocations than its initial capacity.

## See Also

### Configuring the residency set

- [label](label.md): An optional name that can help you identify a residency set you create with the descriptor.
