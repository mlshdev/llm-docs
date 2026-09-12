> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/drawablesize](https://developer.apple.com/documentation/metalkit/mtkview/drawablesize)

# drawableSize (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current size of drawable textures.

## Declaration

```swift
var drawableSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

Changing this value adjusts the size of any color, depth, stencil, and multisampling textures created by the view. If [autoResizeDrawable](autoresizedrawable.md) is [true](https://developer.apple.com/documentation/swift/true), this property is updated automatically whenever the view’s size changes. If [autoResizeDrawable](autoresizedrawable.md) is [false](https://developer.apple.com/documentation/swift/false), set this value to change the size of the texture objects.

The default value is derived from the current view’s size, in native pixels.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

# drawableSize (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current size of drawable textures.

## Declaration

```objectivec
@property (nonatomic) CGSize drawableSize;
```

<a id="Discussion"></a>

## Discussion

Changing this value adjusts the size of any color, depth, stencil, and multisampling textures created by the view. If [autoResizeDrawable](autoresizedrawable.md) is [true](https://developer.apple.com/documentation/swift/true), this property is updated automatically whenever the view’s size changes. If [autoResizeDrawable](autoresizedrawable.md) is [false](https://developer.apple.com/documentation/swift/false), set this value to change the size of the texture objects.

The default value is derived from the current view’s size, in native pixels.

## See Also

### Configuring the Color Render Target

- [colorPixelFormat](colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [preferredDrawableSize](preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.
