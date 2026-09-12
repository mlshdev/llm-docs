> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex)

# endOfEncoderSampleIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.

## Declaration

```swift
var endOfEncoderSampleIndex: Int { get set }
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

This property indicates where the GPU stores the counter data within an [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance that it samples at the end of a blit pass.

You can tell the GPU to skip sampling at the end of the blit pass by assigning [MTLCounterDontSample](../mtlcounterdontsample.md) to this property.

> **Important**

>  For [MTLDevice](../mtldevice.md) instances that don’t support [MTLCounterSamplingPoint.atStageBoundary](../mtlcountersamplingpoint/atstageboundary.md) (see [supportsCounterSampling(\_:)](../mtldevice/supportscountersampling%28__%29.md)), set this property to [MTLCounterDontSample](../mtlcounterdontsample.md).

## See Also

### Configuring the sample buffer attachment

- [sampleBuffer](samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the blit pass.
- [startOfEncoderSampleIndex](startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.

# endOfEncoderSampleIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.

## Declaration

```objectivec
@property (nonatomic) NSUInteger endOfEncoderSampleIndex;
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

This property indicates where the GPU stores the counter data within an [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance that it samples at the end of a blit pass.

You can tell the GPU to skip sampling at the end of the blit pass by assigning [MTLCounterDontSample](../mtlcounterdontsample.md) to this property.

> **Important**

>  For [MTLDevice](../mtldevice.md) instances that don’t support [MTLCounterSamplingPointAtStageBoundary](../mtlcountersamplingpoint/atstageboundary.md) (see [supportsCounterSampling:](../mtldevice/supportscountersampling%28__%29.md)), set this property to [MTLCounterDontSample](../mtlcounterdontsample.md).

## See Also

### Configuring the sample buffer attachment

- [sampleBuffer](samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the blit pass.
- [startOfEncoderSampleIndex](startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.
