> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/clearcolor](https://developer.apple.com/documentation/metalkit/mtkview/clearcolor)

# clearColor (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color to use to clear the color target when creating a render pass descriptor.

## Declaration

```swift
var clearColor: MTLClearColor { get set }
```

<a id="Discussion"></a>

## Discussion

When the view creates a render pass, it sets the load action for the color render target to [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and uses this color as the clear color. The default value is `(0.0, 0.0, 0.0, 1.0)`.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.

# clearColor (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color to use to clear the color target when creating a render pass descriptor.

## Declaration

```objectivec
@property (nonatomic) MTLClearColor clearColor;
```

<a id="Discussion"></a>

## Discussion

When the view creates a render pass, it sets the load action for the color render target to [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and uses this color as the clear color. The default value is `(0.0, 0.0, 0.0, 1.0)`.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
