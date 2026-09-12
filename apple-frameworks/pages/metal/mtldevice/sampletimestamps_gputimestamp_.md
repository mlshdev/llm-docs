> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/sampletimestamps:gputimestamp:](https://developer.apple.com/documentation/metal/mtldevice/sampletimestamps:gputimestamp:)

# sampleTimestamps:gpuTimestamp:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Captures and returns a CPU timestamp and a GPU timestamp from the same moment in time.

## Declaration

```objectivec
- (void) sampleTimestamps:(MTLTimestamp *) cpuTimestamp gpuTimestamp:(MTLTimestamp *) gpuTimestamp;
```

## Parameters

- `cpuTimestamp`: A pointer the method uses to save a timestamp from the CPU.
- `gpuTimestamp`: A pointer the method uses to save a timestamp from the GPU the device instance represents.

## Mentioned In

- [Converting GPU timestamps into CPU time](../converting-gpu-timestamps-into-cpu-time.md)

<a id="discussion"></a>

## Discussion

For an example of how and when to use corresponding timestamps from the CPU and GPU, see [Converting GPU timestamps into CPU time](../converting-gpu-timestamps-into-cpu-time.md).
