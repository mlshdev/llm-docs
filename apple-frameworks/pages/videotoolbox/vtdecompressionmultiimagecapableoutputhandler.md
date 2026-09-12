> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionmultiimagecapableoutputhandler](https://developer.apple.com/documentation/videotoolbox/vtdecompressionmultiimagecapableoutputhandler)

# VTDecompressionMultiImageCapableOutputHandler (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type alias for callback that the system invokes when it finishes decompressing a frame.

## Declaration

```swift
typealias VTDecompressionMultiImageCapableOutputHandler = @Sendable (OSStatus, VTDecodeInfoFlags, CVImageBuffer?, __CMTaggedBufferGroup?, CMTime, CMTime) -> Void
```

## Parameters

- `status`: A value of `noErr` if decompression succeeds; otherwise, an error code if decompression fails.
- `infoFlags`: A [VTEncodeInfoFlags](vtencodeinfoflags.md) pointer to receive information about the decode operation.

  The [asynchronous](vtdecodeinfoflags/asynchronous.md) bit may be set if the decode is (or was) running asynchronously.

  The [frameDropped](vtdecodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you don’t want to receive this information.
- `imageBuffer`: The decompressed pixel buffer.
- `taggedBufferGroup`: A [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) that contains the multiple images for the decompressed frame, if the decompression succeeds; otherwise, `NULL`.
- `presentationTimeStamp`: The frame’s presentation timestamp; otherwise, [invalid](../coremedia/cmtime/invalid.md) if the value isn’t available.
- `presentationDuration`: The frame’s presentation duration; otherwise, [invalid](../coremedia/cmtime/invalid.md) if the value isn’t available.

<a id="Discussion"></a>

## Discussion

Pass a callback of this type to [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md) to handle the decompressed frame output. The system doesn’t necessarily invoke the callback in display order. If the multi-image decompression call returns an error, the system doesn’t call this block.

> **Important**

>  The video decompressor may still reference the pixel buffers that this callback provides if the [imageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag isn’t set. It’s not safe to modify the returned pixel buffers in this state.

## See Also

### Decoding Multi-Image Frames

- [VTIsStereoMVHEVCDecodeSupported()](vtisstereomvhevcdecodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.

# VTDecompressionMultiImageCapableOutputHandler (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type alias for callback that the system invokes when it finishes decompressing a frame.

## Declaration

```objectivec
typedef void (^)(int, enum VTDecodeInfoFlags, struct __CVBuffer *, struct OpaqueCMTaggedBufferGroup *, CMTime, CMTime) VTDecompressionMultiImageCapableOutputHandler;
```

## Parameters

- `status`: A value of `noErr` if decompression succeeds; otherwise, an error code if decompression fails.
- `infoFlags`: A [VTEncodeInfoFlags](vtencodeinfoflags.md) pointer to receive information about the decode operation.

  The [kVTDecodeInfo_Asynchronous](vtdecodeinfoflags/asynchronous.md) bit may be set if the decode is (or was) running asynchronously.

  The [kVTDecodeInfo_FrameDropped](vtdecodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you don’t want to receive this information.
- `imageBuffer`: The decompressed pixel buffer.
- `taggedBufferGroup`: A [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) that contains the multiple images for the decompressed frame, if the decompression succeeds; otherwise, `NULL`.
- `presentationTimeStamp`: The frame’s presentation timestamp; otherwise, [kCMTimeInvalid](../coremedia/cmtime/invalid.md) if the value isn’t available.
- `presentationDuration`: The frame’s presentation duration; otherwise, [kCMTimeInvalid](../coremedia/cmtime/invalid.md) if the value isn’t available.

<a id="Discussion"></a>

## Discussion

Pass a callback of this type to [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md) to handle the decompressed frame output. The system doesn’t necessarily invoke the callback in display order. If the multi-image decompression call returns an error, the system doesn’t call this block.

> **Important**

>  The video decompressor may still reference the pixel buffers that this callback provides if the [kVTDecodeInfo_ImageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md) flag isn’t set. It’s not safe to modify the returned pixel buffers in this state.

## See Also

### Decoding Multi-Image Frames

- [VTIsStereoMVHEVCDecodeSupported](vtisstereomvhevcdecodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.
- [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md): Provides a callback capable of receiving multiple images for individual frame decoding requests.
- [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md): Decompresses a multi-image frame and calls the specified output handler upon completion.
