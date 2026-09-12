> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterdontsample](https://developer.apple.com/documentation/metal/mtlcounterdontsample)

# MTLCounterDontSample (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sentinel value that instructs an encoder to skip sampling a counter as the GPU runs the encoder’s pass.

## Declaration

```swift
var MTLCounterDontSample: Int { get }
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

You can skip sampling at specific stages by assigning this sentinel value to the following properties instead of an offset to a counter sample buffer:

| Types | Properties |
| --- | --- |
| [MTLRenderPassSampleBufferAttachmentDescriptor](mtlrenderpasssamplebufferattachmentdescriptor.md) | [startOfVertexSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/startofvertexsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfVertexSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/endofvertexsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [startOfFragmentSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/startoffragmentsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfFragmentSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/endoffragmentsampleindex.md) |
| [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLResourceStatePassSampleBufferAttachmentDescriptor](mtlresourcestatepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLAccelerationStructurePassSampleBufferAttachmentDescriptor](mtlaccelerationstructurepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlaccelerationstructurepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlaccelerationstructurepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |

## See Also

### Counter sample buffers

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md): Make a buffer that provides a place for a GPU to save its runtime performance metrics as it runs a pass.
- [MTLCounterSampleBufferDescriptor](mtlcountersamplebufferdescriptor.md): A group of properties that configures the counter sample buffers you create with it.
- [MTLCounterSampleBuffer](mtlcountersamplebuffer.md): A specialized memory buffer that stores a GPU’s counter set data.
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md): Retrieve a GPU’s counter data at a time the GPU supports.

# MTLCounterDontSample (Objective-C)

**Framework:** Metal  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sentinel value that instructs an encoder to skip sampling a counter as the GPU runs the encoder’s pass.

## Declaration

```objectivec
#define MTLCounterDontSample
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

You can skip sampling at specific stages by assigning this sentinel value to the following properties instead of an offset to a counter sample buffer:

| Types | Properties |
| --- | --- |
| [MTLRenderPassSampleBufferAttachmentDescriptor](mtlrenderpasssamplebufferattachmentdescriptor.md) | [startOfVertexSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/startofvertexsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfVertexSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/endofvertexsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [startOfFragmentSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/startoffragmentsampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfFragmentSampleIndex](mtlrenderpasssamplebufferattachmentdescriptor/endoffragmentsampleindex.md) |
| [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlcomputepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLResourceStatePassSampleBufferAttachmentDescriptor](mtlresourcestatepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |
| [MTLAccelerationStructurePassSampleBufferAttachmentDescriptor](mtlaccelerationstructurepasssamplebufferattachmentdescriptor.md) | [startOfEncoderSampleIndex](mtlaccelerationstructurepasssamplebufferattachmentdescriptor/startofencodersampleindex.md) ![](https://developer.apple.com/images/com.apple.metal/spacer.png) [endOfEncoderSampleIndex](mtlaccelerationstructurepasssamplebufferattachmentdescriptor/endofencodersampleindex.md) |

## See Also

### Counter sample buffers

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md): Make a buffer that provides a place for a GPU to save its runtime performance metrics as it runs a pass.
- [MTLCounterSampleBufferDescriptor](mtlcountersamplebufferdescriptor.md): A group of properties that configures the counter sample buffers you create with it.
- [MTLCounterSampleBuffer](mtlcountersamplebuffer.md): A specialized memory buffer that stores a GPU’s counter set data.
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md): Retrieve a GPU’s counter data at a time the GPU supports.
