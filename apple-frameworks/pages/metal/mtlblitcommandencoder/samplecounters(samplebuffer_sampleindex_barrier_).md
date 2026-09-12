> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/samplecounters(samplebuffer:sampleindex:barrier:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/samplecounters(samplebuffer:sampleindex:barrier:))

# sampleCounters(sampleBuffer:sampleIndex:barrier:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Encodes a command that samples the GPU’s hardware counters during a blit pass and stores the data in a counter sample buffer.

## Declaration

```swift
func sampleCounters(sampleBuffer: any MTLCounterSampleBuffer, sampleIndex: Int, barrier: Bool)
```

## Parameters

- `sampleBuffer`: A counter sample buffer where the command stores the sample data.
- `sampleIndex`: A location within `sampleBuffer` where the command stores the sample data.
- `barrier`: A Boolean value that indicates whether the command inserts a barrier before taking the sample.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Inserting a barrier ensures that any work you encode with this encoder is complete before the GPU samples the hardware counters. If you don’t insert a barrier, the GPU can sample the counters concurrently with other commands you encode with this encoder. Using a barrier can help the counter results be more predictable and repeatable, but it may adversely affect your app’s runtime performance.

> **Note**

>  The GPU doesn’t isolate this sampling command from any commands that come from another encoder, with or without a barrier.

## See Also

### Sampling counters

- [resolveCounters(\_:range:destinationBuffer:destinationOffset:)](resolvecounters%28__range_destinationbuffer_destinationoffset_%29.md): Encodes a command that resolves the data from the samples in a sample counter buffer and stores the results into a buffer.

# sampleCountersInBuffer:atSampleIndex:withBarrier: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Encodes a command that samples the GPU’s hardware counters during a blit pass and stores the data in a counter sample buffer.

## Declaration

```objectivec
- (void) sampleCountersInBuffer:(id<MTLCounterSampleBuffer>) sampleBuffer atSampleIndex:(NSUInteger) sampleIndex withBarrier:(BOOL) barrier;
```

## Parameters

- `sampleBuffer`: A counter sample buffer where the command stores the sample data.
- `sampleIndex`: A location within `sampleBuffer` where the command stores the sample data.
- `barrier`: A Boolean value that indicates whether the command inserts a barrier before taking the sample.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Inserting a barrier ensures that any work you encode with this encoder is complete before the GPU samples the hardware counters. If you don’t insert a barrier, the GPU can sample the counters concurrently with other commands you encode with this encoder. Using a barrier can help the counter results be more predictable and repeatable, but it may adversely affect your app’s runtime performance.

> **Note**

>  The GPU doesn’t isolate this sampling command from any commands that come from another encoder, with or without a barrier.

## See Also

### Sampling counters

- [resolveCounters:inRange:destinationBuffer:destinationOffset:](resolvecounters_inrange_destinationbuffer_destinationoffset_.md): Encodes a command that resolves the data from the samples in a sample counter buffer and stores the results into a buffer.
