> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/colorspace](https://developer.apple.com/documentation/quartzcore/cametallayer/colorspace)

# colorspace (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color space of the rendered content.

## Declaration

```swift
var colorspace: CGColorSpace? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to specify a color space for the contents of the layer. When a color space is present, Core Animation performs any necessary color space transformations when compositing this content.

The default value is `nil`, indicating that the rendered content isn’t color-matched.

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.

# colorspace (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color space of the rendered content.

## Declaration

```objectivec
@property (nullable) CGColorSpaceRef colorspace;
```

<a id="Discussion"></a>

## Discussion

Set this value to specify a color space for the contents of the layer. When a color space is present, Core Animation performs any necessary color space transformations when compositing this content.

The default value is `nil`, indicating that the rendered content isn’t color-matched.

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.
