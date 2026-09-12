> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/framebufferonly](https://developer.apple.com/documentation/metalkit/mtkview/framebufferonly)

# framebufferOnly (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the drawable’s textures are used only for rendering.

## Declaration

```swift
var framebufferOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true) (the default), the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) object allocates its textures with only the [renderTarget](../../metal/mtltextureusage/rendertarget.md) usage flag. Core Animation can then optimize the textures for display purposes. However, you may not sample, read from, or write to those textures. If the value is [false](https://developer.apple.com/documentation/swift/false), you can sample or perform read/write operations on the textures, but at a cost to performance.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

# framebufferOnly (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the drawable’s textures are used only for rendering.

## Declaration

```objectivec
@property (nonatomic) BOOL framebufferOnly;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true) (the default), the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) object allocates its textures with only the [MTLTextureUsageRenderTarget](../../metal/mtltextureusage/rendertarget.md) usage flag. Core Animation can then optimize the textures for display purposes. However, you may not sample, read from, or write to those textures. If the value is [false](https://developer.apple.com/documentation/swift/false), you can sample or perform read/write operations on the textures, but at a cost to performance.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.
