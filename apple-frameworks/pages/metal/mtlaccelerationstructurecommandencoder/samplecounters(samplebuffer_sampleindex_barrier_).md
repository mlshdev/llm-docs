> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/samplecounters(samplebuffer:sampleindex:barrier:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/samplecounters(samplebuffer:sampleindex:barrier:))

# sampleCounters(sampleBuffer:sampleIndex:barrier:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to sample hardware counters at this point in the acceleration structure pass and store the samples into a counter sample buffer.

## Declaration

```swift
func sampleCounters(sampleBuffer: any MTLCounterSampleBuffer, sampleIndex: Int, barrier: Bool)
```

## Parameters

- `sampleBuffer`: The sample buffer to sample into.
- `sampleIndex`: The index in the counter buffer to write the sample.
- `barrier`: A Boolean value that states whether to insert a barrier before taking the sample.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Inserting a barrier ensures that any work you encoded with this encoder is complete before the GPU samples the hardware counters. If you don’t insert a barrier, the GPU can sample the counters concurrently with other commands encoded by this encoder. Using a barrier leads to more repeatable counter results but can negatively impact performance.

Regardless of whether you set a barrier, the GPU doesn’t isolate the sampling from work encoded by other encoders.

# sampleCountersInBuffer:atSampleIndex:withBarrier: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to sample hardware counters at this point in the acceleration structure pass and store the samples into a counter sample buffer.

## Declaration

```objectivec
- (void) sampleCountersInBuffer:(id<MTLCounterSampleBuffer>) sampleBuffer atSampleIndex:(NSUInteger) sampleIndex withBarrier:(BOOL) barrier;
```

## Parameters

- `sampleBuffer`: The sample buffer to sample into.
- `sampleIndex`: The index in the counter buffer to write the sample.
- `barrier`: A Boolean value that states whether to insert a barrier before taking the sample.

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Inserting a barrier ensures that any work you encoded with this encoder is complete before the GPU samples the hardware counters. If you don’t insert a barrier, the GPU can sample the counters concurrently with other commands encoded by this encoder. Using a barrier leads to more repeatable counter results but can negatively impact performance.

Regardless of whether you set a barrier, the GPU doesn’t isolate the sampling from work encoded by other encoders.
