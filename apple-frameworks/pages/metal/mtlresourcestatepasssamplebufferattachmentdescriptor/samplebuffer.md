> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptor/samplebuffer](https://developer.apple.com/documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptor/samplebuffer)

# sampleBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specialized memory buffer that the GPU uses to store its counter data during the resource state pass.

## Declaration

```swift
var sampleBuffer: (any MTLCounterSampleBuffer)? { get set }
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The property defaults to `nil`, which means the GPU doesn’t save any GPU counter information during the resource state pass. For more information, see [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md) and [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md).

## See Also

### Configuring the sample buffer attachment

- [startOfEncoderSampleIndex](startofencodersampleindex.md): The index the Metal device object should use to store GPU counters when starting the resource state pass.
- [endOfEncoderSampleIndex](endofencodersampleindex.md): The index the Metal device object should use to store GPU counters when ending the resource state pass.

# sampleBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specialized memory buffer that the GPU uses to store its counter data during the resource state pass.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLCounterSampleBuffer> sampleBuffer;
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The property defaults to `nil`, which means the GPU doesn’t save any GPU counter information during the resource state pass. For more information, see [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md) and [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md).

## See Also

### Configuring the sample buffer attachment

- [startOfEncoderSampleIndex](startofencodersampleindex.md): The index the Metal device object should use to store GPU counters when starting the resource state pass.
- [endOfEncoderSampleIndex](endofencodersampleindex.md): The index the Metal device object should use to store GPU counters when ending the resource state pass.
