> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepassdescriptor/samplebufferattachments](https://developer.apple.com/documentation/metal/mtlcomputepassdescriptor/samplebufferattachments)

# sampleBufferAttachments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sample buffers that the compute pass can access.

## Declaration

```swift
var sampleBufferAttachments: MTLComputePassSampleBufferAttachmentDescriptorArray { get }
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The GPU uses sample buffers to record performance information. See [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md), [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md), and [MTLCounter](../mtlcounter.md) for more information.

# sampleBufferAttachments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sample buffers that the compute pass can access.

## Declaration

```objectivec
@property (readonly) MTLComputePassSampleBufferAttachmentDescriptorArray * sampleBufferAttachments;
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md)

<a id="discussion"></a>

## Discussion

The GPU uses sample buffers to record performance information. See [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md), [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md), and [MTLCounter](../mtlcounter.md) for more information.
