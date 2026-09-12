> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplingpoint/atdispatchboundary](https://developer.apple.com/documentation/metal/mtlcountersamplingpoint/atdispatchboundary)

# MTLCounterSamplingPoint.atDispatchBoundary (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Counter sampling is allowed between kernel dispatches in a compute pass.

## Declaration

```swift
case atDispatchBoundary
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

When a Metal device instance supports this sampling boundary, you can call the [sampleCounters(sampleBuffer:sampleIndex:barrier:)](../mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) method on an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) to sample the counters between individual dispatch commands.

## See Also

### Reading sampling boundary types

- [MTLCounterSamplingPoint.atBlitBoundary](atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPoint.atDrawBoundary](atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPoint.atStageBoundary](atstageboundary.md): Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.
- [MTLCounterSamplingPoint.atTileDispatchBoundary](attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.

# MTLCounterSamplingPointAtDispatchBoundary (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Counter sampling is allowed between kernel dispatches in a compute pass.

## Declaration

```objectivec
MTLCounterSamplingPointAtDispatchBoundary
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

When a Metal device instance supports this sampling boundary, you can call the [sampleCountersInBuffer:atSampleIndex:withBarrier:](../mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) method on an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) to sample the counters between individual dispatch commands.

## See Also

### Reading sampling boundary types

- [MTLCounterSamplingPointAtBlitBoundary](atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPointAtDrawBoundary](atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPointAtStageBoundary](atstageboundary.md): Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.
- [MTLCounterSamplingPointAtTileDispatchBoundary](attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.
