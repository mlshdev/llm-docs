> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplingpoint](https://developer.apple.com/documentation/metal/mtlcountersamplingpoint)

# MTLCounterSamplingPoint (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options for different times when you can sample GPU counters.

## Declaration

```swift
enum MTLCounterSamplingPoint
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Reading sampling boundary types

- [MTLCounterSamplingPoint.atBlitBoundary](mtlcountersamplingpoint/atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPoint.atDispatchBoundary](mtlcountersamplingpoint/atdispatchboundary.md): Counter sampling is allowed between kernel dispatches in a compute pass.
- [MTLCounterSamplingPoint.atDrawBoundary](mtlcountersamplingpoint/atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPoint.atStageBoundary](mtlcountersamplingpoint/atstageboundary.md): Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.
- [MTLCounterSamplingPoint.atTileDispatchBoundary](mtlcountersamplingpoint/attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.

### Initializers

- [init(rawValue:)](mtlcountersamplingpoint/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sampling a GPU device’s counters

- [counterSets](mtldevice/countersets.md): The counter sets supported by the device object.
- [supportsCounterSampling(\_:)](mtldevice/supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [makeCounterSampleBuffer(descriptor:)](mtldevice/makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.

# MTLCounterSamplingPoint (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options for different times when you can sample GPU counters.

## Declaration

```objectivec
enum MTLCounterSamplingPoint : NSUInteger;
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Reading sampling boundary types

- [MTLCounterSamplingPointAtBlitBoundary](mtlcountersamplingpoint/atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPointAtDispatchBoundary](mtlcountersamplingpoint/atdispatchboundary.md): Counter sampling is allowed between kernel dispatches in a compute pass.
- [MTLCounterSamplingPointAtDrawBoundary](mtlcountersamplingpoint/atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPointAtStageBoundary](mtlcountersamplingpoint/atstageboundary.md): Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.
- [MTLCounterSamplingPointAtTileDispatchBoundary](mtlcountersamplingpoint/attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.

## See Also

### Sampling a GPU device’s counters

- [counterSets](mtldevice/countersets.md): The counter sets supported by the device object.
- [supportsCounterSampling:](mtldevice/supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [newCounterSampleBufferWithDescriptor:error:](mtldevice/makecountersamplebuffer%28descriptor_%29.md): Creates a counter sample buffer.
