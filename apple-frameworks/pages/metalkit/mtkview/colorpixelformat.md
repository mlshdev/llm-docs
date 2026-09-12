> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/colorpixelformat](https://developer.apple.com/documentation/metalkit/mtkview/colorpixelformat)

# colorPixelFormat (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color pixel format for the current drawable’s texture.

## Declaration

```swift
var colorPixelFormat: MTLPixelFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The pixel format must be one that the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) can use. See [pixelFormat](../../quartzcore/cametallayer/pixelformat.md).

The default value is [MTLPixelFormat.bgra8Unorm](../../metal/mtlpixelformat/bgra8unorm.md).

## See Also

### Configuring the Color Render Target

- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

# colorPixelFormat (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color pixel format for the current drawable’s texture.

## Declaration

```objectivec
@property (nonatomic) MTLPixelFormat colorPixelFormat;
```

<a id="Discussion"></a>

## Discussion

The pixel format must be one that the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) can use. See [pixelFormat](../../quartzcore/cametallayer/pixelformat.md).

The default value is [MTLPixelFormatBGRA8Unorm](../../metal/mtlpixelformat/bgra8unorm.md).

## See Also

### Configuring the Color Render Target

- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.
