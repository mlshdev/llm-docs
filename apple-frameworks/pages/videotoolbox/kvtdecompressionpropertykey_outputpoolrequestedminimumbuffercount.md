> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_outputpoolrequestedminimumbuffercount)

# kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.

## Declaration

```swift
let kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount: CFString
```

<a id="Discussion"></a>

## Discussion

This property effectively requests that the [kCVPixelBufferPoolMinimumBufferCountKey](../corevideo/kcvpixelbufferpoolminimumbuffercountkey.md) key be used for the creation of the output [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md).

For general playback cases, standard [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md) age-out behavior is sufficient, and this property isn’t necessary.  Use this property only in unusual playback scenarios where a peak pool level is known, and the potential memory overhead is an acceptable tradeoff to avoid possible buffer reallocation. Setting this property to `NULL` or passing in the value `0` clears this setting and removes the minimum buffer count.

Setting this property while a decompression session is in use results in the creation of a new [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md). Setting this property causes new buffers to be allocated, and existing buffers to be deallocated when they are released.

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.

# kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

The requested minimum buffer count that a decompression session should use for its output pixel buffer pool, without releasing buffers while the number in use is below this level.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_OutputPoolRequestedMinimumBufferCount;
```

<a id="Discussion"></a>

## Discussion

This property effectively requests that the [kCVPixelBufferPoolMinimumBufferCountKey](../corevideo/kcvpixelbufferpoolminimumbuffercountkey.md) key be used for the creation of the output [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md).

For general playback cases, standard [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md) age-out behavior is sufficient, and this property isn’t necessary.  Use this property only in unusual playback scenarios where a peak pool level is known, and the potential memory overhead is an acceptable tradeoff to avoid possible buffer reallocation. Setting this property to `NULL` or passing in the value `0` clears this setting and removes the minimum buffer count.

Setting this property while a decompression session is in use results in the creation of a new [CVPixelBufferPool](../corevideo/cvpixelbufferpool-77o.md). Setting this property causes new buffers to be allocated, and existing buffers to be deallocated when they are released.

## See Also

### Pixel Buffer Pools

- [kVTDecompressionPropertyKey_PixelBufferPool](kvtdecompressionpropertykey_pixelbufferpool.md): A pixel buffer pool for pixel buffers being output by the decompression session.
- [kVTDecompressionPropertyKey_PixelBufferPoolIsShared](kvtdecompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether a common pixel buffer pool is shared between the video decoder and the session client.
