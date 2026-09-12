> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/colorspace](https://developer.apple.com/documentation/metalkit/mtkview/colorspace)

# colorspace (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The color space of the rendered content.

## Declaration

```swift
var colorspace: CGColorSpace? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, indicating that the rendered content isn’t color-matched. If you set this to a different color space, Core Animation performs any necessary color transformations when compositing the view’s contents.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

# colorspace (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The color space of the rendered content.

## Declaration

```objectivec
@property (nonatomic, nullable) CGColorSpaceRef colorspace;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, indicating that the rendered content isn’t color-matched. If you set this to a different color space, Core Animation performs any necessary color transformations when compositing the view’s contents.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.
