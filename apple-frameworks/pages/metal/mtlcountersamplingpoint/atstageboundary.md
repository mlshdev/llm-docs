> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplingpoint/atstageboundary](https://developer.apple.com/documentation/metal/mtlcountersamplingpoint/atstageboundary)

# MTLCounterSamplingPoint.atStageBoundary (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.

## Declaration

```swift
case atStageBoundary
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

## See Also

### Reading sampling boundary types

- [MTLCounterSamplingPoint.atBlitBoundary](atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPoint.atDispatchBoundary](atdispatchboundary.md): Counter sampling is allowed between kernel dispatches in a compute pass.
- [MTLCounterSamplingPoint.atDrawBoundary](atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPoint.atTileDispatchBoundary](attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.

# MTLCounterSamplingPointAtStageBoundary (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Counter sampling is allowed at the start and end of a render pass’s vertex and fragment stages, and at the start and end of compute and blit passes.

## Declaration

```objectivec
MTLCounterSamplingPointAtStageBoundary
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

## See Also

### Reading sampling boundary types

- [MTLCounterSamplingPointAtBlitBoundary](atblitboundary.md): Counter sampling is allowed between blit commands in a blit pass.
- [MTLCounterSamplingPointAtDispatchBoundary](atdispatchboundary.md): Counter sampling is allowed between kernel dispatches in a compute pass.
- [MTLCounterSamplingPointAtDrawBoundary](atdrawboundary.md): Counter sampling is allowed between draw commands in a render pass.
- [MTLCounterSamplingPointAtTileDispatchBoundary](attiledispatchboundary.md): Counter sampling is allowed between tile dispatches in a render pass.
