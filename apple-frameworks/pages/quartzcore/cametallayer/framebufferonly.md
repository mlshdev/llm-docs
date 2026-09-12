> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/framebufferonly](https://developer.apple.com/documentation/quartzcore/cametallayer/framebufferonly)

# framebufferOnly (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the layer’s textures are used only for rendering.

## Declaration

```swift
var framebufferOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true) (the default), the [CAMetalLayer](../cametallayer.md) class allocates its [MTLTexture](../../metal/mtltexture.md) objects with only the [renderTarget](../../metal/mtltextureusage/rendertarget.md) usage flag. Core Animation can then optimize the texture for display purposes. However, you may not sample, read from, or write to those textures. To support sampling and pixel read/write operations (at a cost to performance), set this value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [colorspace](colorspace.md): The color space of the rendered content.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.

# framebufferOnly (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the layer’s textures are used only for rendering.

## Declaration

```objectivec
@property BOOL framebufferOnly;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true) (the default), the [CAMetalLayer](../cametallayer.md) class allocates its [MTLTexture](../../metal/mtltexture.md) objects with only the [MTLTextureUsageRenderTarget](../../metal/mtltextureusage/rendertarget.md) usage flag. Core Animation can then optimize the texture for display purposes. However, you may not sample, read from, or write to those textures. To support sampling and pixel read/write operations (at a cost to performance), set this value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Layer’s Drawable Objects

- [pixelFormat](pixelformat.md): The pixel format of the layer’s textures.
- [colorspace](colorspace.md): The color space of the rendered content.
- [drawableSize](drawablesize.md): The size, in pixels, of textures for rendering layer content.
