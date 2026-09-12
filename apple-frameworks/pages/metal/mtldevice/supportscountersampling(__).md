> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportscountersampling(_:)](https://developer.apple.com/documentation/metal/mtldevice/supportscountersampling(_:))

# supportsCounterSampling(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.

## Declaration

```swift
func supportsCounterSampling(_ samplingPoint: MTLCounterSamplingPoint) -> Bool
```

## Parameters

- `samplingPoint`: The command boundary to test.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

## See Also

### Sampling a GPU device’s counters

- [counterSets](countersets.md): The counter sets supported by the device object.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.
- [makeCounterSampleBuffer(descriptor:)](makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.

# supportsCounterSampling: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.

## Declaration

```objectivec
- (BOOL) supportsCounterSampling:(MTLCounterSamplingPoint) samplingPoint;
```

## Parameters

- `samplingPoint`: The command boundary to test.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

## See Also

### Sampling a GPU device’s counters

- [counterSets](countersets.md): The counter sets supported by the device object.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.
- [newCounterSampleBufferWithDescriptor:error:](makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.
