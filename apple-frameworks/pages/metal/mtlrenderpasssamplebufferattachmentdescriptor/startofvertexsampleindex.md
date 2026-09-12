> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpasssamplebufferattachmentdescriptor/startofvertexsampleindex](https://developer.apple.com/documentation/metal/mtlrenderpasssamplebufferattachmentdescriptor/startofvertexsampleindex)

# startOfVertexSampleIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The index the Metal device object should use to store GPU counters when starting the render pass’s vertex stage.

## Declaration

```swift
var startOfVertexSampleIndex: Int { get set }
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)
- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Specify [MTLCounterDontSample](../mtlcounterdontsample.md) if you don’t want to sample GPU counters at the start of the vertex stage. Otherwise, specify an index within the sample buffer where you want the GPU to write the sample data.

On devices that don’t support [MTLCounterSamplingPoint.atStageBoundary](../mtlcountersamplingpoint/atstageboundary.md) you need to set the value to [MTLCounterDontSample](../mtlcounterdontsample.md).

## See Also

### Configuring the sample buffer attachment

- [sampleBuffer](samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the render pass.
- [endOfVertexSampleIndex](endofvertexsampleindex.md): The index the Metal device object should use to store GPU counters when ending the render pass’s vertex stage.
- [startOfFragmentSampleIndex](startoffragmentsampleindex.md): The index the Metal device object should use to store GPU counters when starting the render pass’s fragment stage.
- [endOfFragmentSampleIndex](endoffragmentsampleindex.md): The index the Metal device object should use to store GPU counters when ending the render pass’s fragment stage.

# startOfVertexSampleIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The index the Metal device object should use to store GPU counters when starting the render pass’s vertex stage.

## Declaration

```objectivec
@property (nonatomic) NSUInteger startOfVertexSampleIndex;
```

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)
- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

Specify [MTLCounterDontSample](../mtlcounterdontsample.md) if you don’t want to sample GPU counters at the start of the vertex stage. Otherwise, specify an index within the sample buffer where you want the GPU to write the sample data.

On devices that don’t support [MTLCounterSamplingPointAtStageBoundary](../mtlcountersamplingpoint/atstageboundary.md) you need to set the value to [MTLCounterDontSample](../mtlcounterdontsample.md).

## See Also

### Configuring the sample buffer attachment

- [sampleBuffer](samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the render pass.
- [endOfVertexSampleIndex](endofvertexsampleindex.md): The index the Metal device object should use to store GPU counters when ending the render pass’s vertex stage.
- [startOfFragmentSampleIndex](startoffragmentsampleindex.md): The index the Metal device object should use to store GPU counters when starting the render pass’s fragment stage.
- [endOfFragmentSampleIndex](endoffragmentsampleindex.md): The index the Metal device object should use to store GPU counters when ending the render pass’s fragment stage.
