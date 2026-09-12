> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/drawablesize](https://developer.apple.com/documentation/quartzcore/cametallayer/drawablesize)

# drawableSize (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The size, in pixels, of textures for rendering layer content.

## Declaration

```swift
var drawableSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a layer creates textures sized to match its content—that is, this property’s value is the layer’s [bounds](../calayer/bounds.md) size multiplied by its [contentsScale](../calayer/contentsscale.md) factor.

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.

# drawableSize (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The size, in pixels, of textures for rendering layer content.

## Declaration

```objectivec
@property CGSize drawableSize;
```

<a id="Discussion"></a>

## Discussion

By default, a layer creates textures sized to match its content—that is, this property’s value is the layer’s [bounds](../calayer/bounds.md) size multiplied by its [contentsScale](../calayer/contentsscale.md) factor.

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [colorspace](colorspace.md): The color space of the rendered content.
- [framebufferOnly](framebufferonly.md): A Boolean value that determines whether the layer’s textures are used only for rendering.
