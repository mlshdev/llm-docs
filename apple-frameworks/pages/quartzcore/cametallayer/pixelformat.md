> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/pixelformat](https://developer.apple.com/documentation/quartzcore/cametallayer/pixelformat)

# pixelFormat (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The pixel format of the layer’s textures.

## Declaration

```swift
var pixelFormat: MTLPixelFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLPixelFormat.bgra8Unorm](../../metal/mtlpixelformat/bgra8unorm.md).

You must use one of the following formats:

- [MTLPixelFormat.bgra8Unorm](../../metal/mtlpixelformat/bgra8unorm.md)
- [MTLPixelFormat.bgra8Unorm_srgb](../../metal/mtlpixelformat/bgra8unorm_srgb.md)
- [MTLPixelFormat.rgba16Float](../../metal/mtlpixelformat/rgba16float.md)
- [MTLPixelFormat.rgb10a2Unorm](../../metal/mtlpixelformat/rgb10a2unorm.md)
- [MTLPixelFormat.bgr10a2Unorm](../../metal/mtlpixelformat/bgr10a2unorm.md)
- [MTLPixelFormat.bgra10_xr](../../metal/mtlpixelformat/bgra10_xr.md)
- [MTLPixelFormat.bgra10_xr_srgb](../../metal/mtlpixelformat/bgra10_xr_srgb.md)
- [MTLPixelFormat.bgr10_xr](../../metal/mtlpixelformat/bgr10_xr.md)
- [MTLPixelFormat.bgr10_xr_srgb](../../metal/mtlpixelformat/bgr10_xr_srgb.md)

## See Also

### Configuring the Layer’s Drawable Objects

- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.

# pixelFormat (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The pixel format of the layer’s textures.

## Declaration

```objectivec
@property MTLPixelFormat pixelFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLPixelFormatBGRA8Unorm](../../metal/mtlpixelformat/bgra8unorm.md).

You must use one of the following formats:

- [MTLPixelFormatBGRA8Unorm](../../metal/mtlpixelformat/bgra8unorm.md)
- [MTLPixelFormatBGRA8Unorm_sRGB](../../metal/mtlpixelformat/bgra8unorm_srgb.md)
- [MTLPixelFormatRGBA16Float](../../metal/mtlpixelformat/rgba16float.md)
- [MTLPixelFormatRGB10A2Unorm](../../metal/mtlpixelformat/rgb10a2unorm.md)
- [MTLPixelFormatBGR10A2Unorm](../../metal/mtlpixelformat/bgr10a2unorm.md)
- [MTLPixelFormatBGRA10_XR](../../metal/mtlpixelformat/bgra10_xr.md)
- [MTLPixelFormatBGRA10_XR_sRGB](../../metal/mtlpixelformat/bgra10_xr_srgb.md)
- [MTLPixelFormatBGR10_XR](../../metal/mtlpixelformat/bgr10_xr.md)
- [MTLPixelFormatBGR10_XR_sRGB](../../metal/mtlpixelformat/bgr10_xr_srgb.md)

## See Also

### Configuring the Layer’s Drawable Objects

- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.
