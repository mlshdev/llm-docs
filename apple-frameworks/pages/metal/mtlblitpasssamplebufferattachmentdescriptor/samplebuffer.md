> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptor/samplebuffer](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptor/samplebuffer)

# sampleBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A specialized memory buffer that the GPU uses to store its counter data during the blit pass.

## Declaration

```swift
var sampleBuffer: (any MTLCounterSampleBuffer)? { get set }
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The property defaults to `nil`, which means the GPU doesn’t save any GPU counter information during the blit pass. For more information, see [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md) and [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md).

## See Also

### Configuring the sample buffer attachment

- [startOfEncoderSampleIndex](startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.
- [endOfEncoderSampleIndex](endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.

# sampleBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A specialized memory buffer that the GPU uses to store its counter data during the blit pass.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLCounterSampleBuffer> sampleBuffer;
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The property defaults to `nil`, which means the GPU doesn’t save any GPU counter information during the blit pass. For more information, see [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md) and [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md).

## See Also

### Configuring the sample buffer attachment

- [startOfEncoderSampleIndex](startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.
- [endOfEncoderSampleIndex](endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.
