> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_pixelbufferpoolisshared](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_pixelbufferpoolisshared)

# kVTDecompressionPropertyKey_PixelBufferPoolIsShared (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

## Declaration

```swift
let kVTDecompressionPropertyKey_PixelBufferPoolIsShared: CFString
```

<a id="Discussion"></a>

## Discussion

This value is false if separate pools are used because the pixel buffer attributes specified by the video decoder and the client are incompatible.

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.

# kVTDecompressionPropertyKey_PixelBufferPoolIsShared (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_PixelBufferPoolIsShared;
```

<a id="Discussion"></a>

## Discussion

This value is false if separate pools are used because the pixel buffer attributes specified by the video decoder and the client are incompatible.

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount](kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount.md): The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.
- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.
