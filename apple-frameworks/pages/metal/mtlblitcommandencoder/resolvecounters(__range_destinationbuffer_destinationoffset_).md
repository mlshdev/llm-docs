> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/resolvecounters(_:range:destinationbuffer:destinationoffset:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/resolvecounters(_:range:destinationbuffer:destinationoffset:))

# resolveCounters(\_:range:destinationBuffer:destinationOffset:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS

Encodes a command that resolves the data from the samples in a sample counter buffer and stores the results into a buffer.

## Declaration

```swift
func resolveCounters(_ sampleBuffer: any MTLCounterSampleBuffer, range: Range<Int>, destinationBuffer: any MTLBuffer, destinationOffset: Int)
```

## Parameters

- `sampleBuffer`: A counter sample buffer source that contains the sample data.
- `range`: A range that indicates which of the buffer’s samples the command resolves.
- `destinationBuffer`: A destination buffer where the command stores the data it resolves.
- `destinationOffset`: A starting offset, in bytes, within `destinationBuffer` where the blit pass writes the first byte of the data it resolves.

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

For an example of how and when to use this method, see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md).

> **Note**

>  The GPU stores [MTLCounterErrorValue](../mtlcountererrorvalue.md) in `destinationBuffer` each time it encounters an error resolving a sample.

## See Also

### Sampling counters

- [sampleCounters(sampleBuffer:sampleIndex:barrier:)](samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command that samples the GPU’s hardware counters during a blit pass and stores the data in a counter sample buffer.
