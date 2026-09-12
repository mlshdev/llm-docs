> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_pixelbufferpool](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_pixelbufferpool)

# kVTDecompressionPropertyKey_PixelBufferPool (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A pixel buffer pool for pixel buffers being output by the decompression session.

## Declaration

```swift
let kVTDecompressionPropertyKey_PixelBufferPool: CFString
```

<a id="Discussion"></a>

## Discussion

This pixel buffer pool is always compatible with the client’s pixel buffer attributes as specified when calling [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

# kVTDecompressionPropertyKey_PixelBufferPool (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A pixel buffer pool for pixel buffers being output by the decompression session.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_PixelBufferPool;
```

<a id="Discussion"></a>

## Discussion

This pixel buffer pool is always compatible with the client’s pixel buffer attributes as specified when calling [VTDecompressionSessionCreate](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.
