> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/samplecounters(samplebuffer:sampleindex:barrier:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/samplecounters(samplebuffer:sampleindex:barrier:))

# sampleCounters(sampleBuffer:sampleIndex:barrier:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Encodes a command to sample hardware counters, providing performance information.

## Declaration

```swift
func sampleCounters(sampleBuffer: any MTLCounterSampleBuffer, sampleIndex: Int, barrier: Bool)
```

## Parameters

- `sampleBuffer`: An [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance that stores the GPU hardware data.
- `sampleIndex`: An index within `sampleBuffer` the command stores the data to.
- `barrier`: Whether or not the command inserts a barrier before sampling the counter’s data.

  A barrier ensures that the commands you encode before this one complete before the GPU samples the hardware counters, but can negatively impact runtime performance.

  Running this command without a barrier means the GPU can sample counters concurrently with other commands from the encoder.

  The `barrier` parameter for the command has no impact on sampling commands from other passes.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

> **Important**

>  To use a sample buffer, it needs to be part of the [sampleBufferAttachments](../mtlcomputepassdescriptor/samplebufferattachments.md) on the compute pass descriptor.

See [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md), [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md), and [MTLCounter](../mtlcounter.md) for more information.

# sampleCountersInBuffer:atSampleIndex:withBarrier: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Encodes a command to sample hardware counters, providing performance information.

## Declaration

```objectivec
- (void) sampleCountersInBuffer:(id<MTLCounterSampleBuffer>) sampleBuffer atSampleIndex:(NSUInteger) sampleIndex withBarrier:(BOOL) barrier;
```

## Parameters

- `sampleBuffer`: An [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance that stores the GPU hardware data.
- `sampleIndex`: An index within `sampleBuffer` the command stores the data to.
- `barrier`: Whether or not the command inserts a barrier before sampling the counter’s data.

  A barrier ensures that the commands you encode before this one complete before the GPU samples the hardware counters, but can negatively impact runtime performance.

  Running this command without a barrier means the GPU can sample counters concurrently with other commands from the encoder.

  The `barrier` parameter for the command has no impact on sampling commands from other passes.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

> **Important**

>  To use a sample buffer, it needs to be part of the [sampleBufferAttachments](../mtlcomputepassdescriptor/samplebufferattachments.md) on the compute pass descriptor.

See [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md), [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md), and [MTLCounter](../mtlcounter.md) for more information.
