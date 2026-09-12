> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpassdescriptor/samplebufferattachments](https://developer.apple.com/documentation/metal/mtlblitpassdescriptor/samplebufferattachments)

# sampleBufferAttachments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of counter sample buffer attachments that you configure for a blit pass.

## Declaration

```swift
var sampleBufferAttachments: MTLBlitPassSampleBufferAttachmentDescriptorArray { get }
```

<a id="discussion"></a>

## Discussion

See [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md) for more context about configuring this property. That article is one of a series of articles in [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md).

# sampleBufferAttachments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of counter sample buffer attachments that you configure for a blit pass.

## Declaration

```objectivec
@property (readonly) MTLBlitPassSampleBufferAttachmentDescriptorArray * sampleBufferAttachments;
```

<a id="discussion"></a>

## Discussion

See [Sampling GPU data into counter sample buffers](../sampling-gpu-data-into-counter-sample-buffers.md) for more context about configuring this property. That article is one of a series of articles in [GPU counters and counter sample buffers](../gpu-counters-and-counter-sample-buffers.md).
