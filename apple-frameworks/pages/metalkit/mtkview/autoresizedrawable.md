> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/autoresizedrawable](https://developer.apple.com/documentation/metalkit/mtkview/autoresizedrawable)

# autoResizeDrawable (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that controls whether to resize the drawable as the view changes size.

## Declaration

```swift
var autoResizeDrawable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the view automatically resizes its underlying color, depth, stencil, and multisample textures when the view is resized. If the value is [false](https://developer.apple.com/documentation/swift/false), you must explicitly set [drawableSize](drawablesize.md) to change the size of these objects.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

# autoResizeDrawable (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that controls whether to resize the drawable as the view changes size.

## Declaration

```objectivec
@property (nonatomic) BOOL autoResizeDrawable;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the view automatically resizes its underlying color, depth, stencil, and multisample textures when the view is resized. If the value is [false](https://developer.apple.com/documentation/swift/false), you must explicitly set [drawableSize](drawablesize.md) to change the size of these objects.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.
