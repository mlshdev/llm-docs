> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebufferdescriptor/samplecount](https://developer.apple.com/documentation/metal/mtlcountersamplebufferdescriptor/samplecount)

# sampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of instances of a counter set’s data that a counter sample buffer can store.

## Declaration

```swift
var sampleCount: Int { get set }
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

The counter sample buffer instances you create with the [MTLCounterSampleBufferDescriptor](../mtlcountersamplebufferdescriptor.md) can store [sampleCount](samplecount.md) instances of a counter set.

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.

# sampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of instances of a counter set’s data that a counter sample buffer can store.

## Declaration

```objectivec
@property (readwrite) NSUInteger sampleCount;
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

The counter sample buffer instances you create with the [MTLCounterSampleBufferDescriptor](../mtlcountersamplebufferdescriptor.md) can store [sampleCount](samplecount.md) instances of a counter set.

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.
