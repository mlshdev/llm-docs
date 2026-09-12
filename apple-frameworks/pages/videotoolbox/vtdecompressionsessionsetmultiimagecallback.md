> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessionsetmultiimagecallback](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessionsetmultiimagecallback)

# VTDecompressionSessionSetMultiImageCallback

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Provides a callback capable of receiving multiple images for individual frame decoding requests.

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionSetMultiImageCallback(VTDecompressionSessionRef decompressionSession, VTDecompressionOutputMultiImageCallback outputMultiImageCallback, void *outputMultiImageRefcon);
```

## Parameters

- `decompressionSession`: The decompression session.
- `outputMultiImageCallback`: A callback to handle multi-image output.
- `outputMultiImageRefcon`: Your reference value for the session.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

In multi-image decompression, a single video sample contains a single frame (with one PTS) that the system decodes to produce multiple images.

The system uses the multi-image callback when the video decoder outputs [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) objects, or when frame decoding fails and returns a nonzero status. The original single-image callback is only used in the case where the video decoder outputs a [CVImageBufferRef](../corevideo/cvimagebuffer.md) instead of a [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md).

## Topics

### Output Callback

- [VTDecompressionOutputMultiImageCallback](vtdecompressionoutputmultiimagecallback.md): A callback that the system invokes when multi-image frame decompression completes.

## See Also

### Decoding Multi-Image Frames

- [VTIsStereoMVHEVCDecodeSupported](vtisstereomvhevcdecodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.
- [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md): Decompresses a multi-image frame and calls the specified output handler upon completion.
- [VTDecompressionMultiImageCapableOutputHandler](vtdecompressionmultiimagecapableoutputhandler.md): A type alias for callback that the system invokes when it finishes decompressing a frame.
