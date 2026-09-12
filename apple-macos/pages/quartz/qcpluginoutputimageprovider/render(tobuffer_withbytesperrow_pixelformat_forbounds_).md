> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/render(tobuffer:withbytesperrow:pixelformat:forbounds:)](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/render(tobuffer:withbytesperrow:pixelformat:forbounds:))

# render(toBuffer:withBytesPerRow:pixelFormat:forBounds:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Renders a subregion of the image into  the supplied memory buffer using the specified pixel format.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func render(toBuffer baseAddress: UnsafeMutableRawPointer!, withBytesPerRow rowBytes: Int, pixelFormat format: String!, forBounds bounds: NSRect) -> Bool
```

## Parameters

- `baseAddress`: The base address of the memory buffer. The Quartz Composer engine passes you an address that is aligned on a 16-byte boundary.
- `rowBytes`: The number of bytes per row of the image data. The Quartz Composer engine guarantees this value is a multiple of 16.
- `format`: The pixel format of the image data.
- `bounds`: The bounds of the subregion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image is rendered successfully into the buffer; [false](https://developer.apple.com/documentation/swift/false) on failure or if the image provider doesn’t support CPU rendering.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when it needs pixels. It gives you the base address, the number of row bytes, and the format. Then, you write pixels to the buffer.

## See Also

### Rendering an Image to a Destination

- [copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:)](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [render(withCGLContext:forBounds:)](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture(\_:forCGLContext:)](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.

# renderToBuffer:withBytesPerRow:pixelFormat:forBounds: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Renders a subregion of the image into  the supplied memory buffer using the specified pixel format.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) renderToBuffer:(void *) baseAddress withBytesPerRow:(NSUInteger) rowBytes pixelFormat:(NSString *) format forBounds:(NSRect) bounds;
```

## Parameters

- `baseAddress`: The base address of the memory buffer. The Quartz Composer engine passes you an address that is aligned on a 16-byte boundary.
- `rowBytes`: The number of bytes per row of the image data. The Quartz Composer engine guarantees this value is a multiple of 16.
- `format`: The pixel format of the image data.
- `bounds`: The bounds of the subregion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image is rendered successfully into the buffer; [false](https://developer.apple.com/documentation/swift/false) on failure or if the image provider doesn’t support CPU rendering.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when it needs pixels. It gives you the base address, the number of row bytes, and the format. Then, you write pixels to the buffer.

## See Also

### Rendering an Image to a Destination

- [copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped:](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [renderWithCGLContext:forBounds:](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture:forCGLContext:](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.
