> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebufferdescriptor/counterset](https://developer.apple.com/documentation/metal/mtlcountersamplebufferdescriptor/counterset)

# counterSet (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A GPU device’s counter set instance that you want to sample.

## Declaration

```swift
var counterSet: (any MTLCounterSet)? { get set }
```

<a id="discussion"></a>

## Discussion

Assign this property to one of the counter sets in an [MTLDevice](../mtldevice.md) instance’s [counterSets](../mtldevice/countersets.md) property.

## See Also

### Configuring a descriptor for a counter sample buffer

- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.

# counterSet (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A GPU device’s counter set instance that you want to sample.

## Declaration

```objectivec
@property (retain, readwrite, nullable) id<MTLCounterSet> counterSet;
```

<a id="discussion"></a>

## Discussion

Assign this property to one of the counter sets in an [MTLDevice](../mtldevice.md) instance’s [counterSets](../mtldevice/countersets.md) property.

## See Also

### Configuring a descriptor for a counter sample buffer

- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.
