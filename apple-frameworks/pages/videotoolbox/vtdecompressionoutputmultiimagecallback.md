> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionoutputmultiimagecallback](https://developer.apple.com/documentation/videotoolbox/vtdecompressionoutputmultiimagecallback)

# VTDecompressionOutputMultiImageCallback (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A callback that the system invokes when multi-image frame decompression completes.

## Declaration

```swift
typealias VTDecompressionOutputMultiImageCallback = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer?, OSStatus, VTDecodeInfoFlags, __CMTaggedBufferGroup?, CMTime, CMTime) -> Void
```

## Parameters

- `decompressionOutputMultiImageRefCon`: The callback’s reference value, copied from the `outputMultiImageRefcon` argument passed to [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md).
- `sourceFrameRefCon`: The frame’s reference value, copied from the `sourceFrameRefCon` argument passed to [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md).
- `status`: A value of `noErr` if decompression succeeds or an error code if decompression fails.
- `infoFlags`: Contains information about the decode operation:

  - An [asynchronous](vtdecodeinfoflags/asynchronous.md) flag indicates the decode ran asynchronously.
  - A [frameDropped](vtdecodeinfoflags/framedropped.md) flag indicates the session dropped a frame.
  - An [imageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag indicates that you can safely modify the image buffer.
- `taggedBufferGroup`: Contains the decompressed frame’s multiple images, if decompression was successful; otherwise, `NULL`.
- `presentationTimeStamp`: The frame’s presentation timestamp, which the system determines by calling [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](../coremedia/cmsamplebuffergetoutputpresentationtimestamp%28__%29.md); otherwise, [invalid](../coremedia/cmtime/invalid.md) if the timestamp isn’t available.
- `presentationDuration`: The frame’s presentation duration, which the system determines by calling [CMSampleBufferGetOutputDuration(\_:)](../coremedia/cmsamplebuffergetoutputduration%28__%29.md); otherwise, [invalid](../coremedia/cmtime/invalid.md) if the duration isn’t available.

<a id="Discussion"></a>

## Discussion

The system doesn’t guarantee that it calls this function in display order.

> **Important**

>  The video decompressor may still reference the pixel buffers returned in this callback if the [imageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag isn’t set. It’s not safe to modify the image buffer in this state.

# VTDecompressionOutputMultiImageCallback (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A callback that the system invokes when multi-image frame decompression completes.

## Declaration

```objectivec
typedef void (*)(void *, void *, int, enum VTDecodeInfoFlags, struct OpaqueCMTaggedBufferGroup *, CMTime, CMTime) VTDecompressionOutputMultiImageCallback;
```

## Parameters

- `decompressionOutputMultiImageRefCon`: The callback’s reference value, copied from the `outputMultiImageRefcon` argument passed to [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md).
- `sourceFrameRefCon`: The frame’s reference value, copied from the `sourceFrameRefCon` argument passed to [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md).
- `status`: A value of `noErr` if decompression succeeds or an error code if decompression fails.
- `infoFlags`: Contains information about the decode operation:

  - An [kVTDecodeInfo_Asynchronous](vtdecodeinfoflags/asynchronous.md) flag indicates the decode ran asynchronously.
  - A [kVTDecodeInfo_FrameDropped](vtdecodeinfoflags/framedropped.md) flag indicates the session dropped a frame.
  - An [kVTDecodeInfo_ImageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag indicates that you can safely modify the image buffer.
- `taggedBufferGroup`: Contains the decompressed frame’s multiple images, if decompression was successful; otherwise, `NULL`.
- `presentationTimeStamp`: The frame’s presentation timestamp, which the system determines by calling [CMSampleBufferGetOutputPresentationTimeStamp](../coremedia/cmsamplebuffergetoutputpresentationtimestamp%28__%29.md); otherwise, [kCMTimeInvalid](../coremedia/cmtime/invalid.md) if the timestamp isn’t available.
- `presentationDuration`: The frame’s presentation duration, which the system determines by calling [CMSampleBufferGetOutputDuration](../coremedia/cmsamplebuffergetoutputduration%28__%29.md); otherwise, [kCMTimeInvalid](../coremedia/cmtime/invalid.md) if the duration isn’t available.

<a id="Discussion"></a>

## Discussion

The system doesn’t guarantee that it calls this function in display order.

> **Important**

>  The video decompressor may still reference the pixel buffers returned in this callback if the [kVTDecodeInfo_ImageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag isn’t set. It’s not safe to modify the image buffer in this state.
