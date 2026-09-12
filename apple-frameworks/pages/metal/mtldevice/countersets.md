> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/countersets](https://developer.apple.com/documentation/metal/mtldevice/countersets)

# counterSets (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The counter sets supported by the device object.

## Declaration

```swift
var counterSets: [any MTLCounterSet]? { get }
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)

## See Also

### Sampling a GPU device’s counters

- [supportsCounterSampling(\_:)](supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.
- [makeCounterSampleBuffer(descriptor:)](makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.

# counterSets (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The counter sets supported by the device object.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<id<MTLCounterSet>> * counterSets;
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)

## See Also

### Sampling a GPU device’s counters

- [supportsCounterSampling:](supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.
- [newCounterSampleBufferWithDescriptor:error:](makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.
