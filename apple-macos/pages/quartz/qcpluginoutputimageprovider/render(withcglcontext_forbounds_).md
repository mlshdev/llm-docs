> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/render(withcglcontext:forbounds:)](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/render(withcglcontext:forbounds:))

# render(withCGLContext:forBounds:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Renders a subregion of the image to the provided CGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func render(withCGLContext cgl_ctx: CGLContextObj!, forBounds bounds: NSRect) -> Bool
```

## Parameters

- `cgl_ctx`: The CGL context to render to.
- `bounds`: The bounds of the subregion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false) on failure or if the image provider doesn’t support GPU rendering.

<a id="Discussion"></a>

## Discussion

The view port is set for you. The model view and projection  matrixes are set to the identity.

Your OpenGL code should save and restore all states *except* for those that are part of `GL_CURRENT_BIT` (vertex position, color, texture, and so on). Also use CGL macros instead of changing the current context, by including this statement:

`#import <OpenGL/CGLMacro.h>`

For more details, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).

## See Also

### Rendering an Image to a Destination

- [render(toBuffer:withBytesPerRow:pixelFormat:forBounds:)](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:)](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [releaseRenderedTexture(\_:forCGLContext:)](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.

# renderWithCGLContext:forBounds: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Renders a subregion of the image to the provided CGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) renderWithCGLContext:(CGLContextObj) cgl_ctx forBounds:(NSRect) bounds;
```

## Parameters

- `cgl_ctx`: The CGL context to render to.
- `bounds`: The bounds of the subregion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false) on failure or if the image provider doesn’t support GPU rendering.

<a id="Discussion"></a>

## Discussion

The view port is set for you. The model view and projection  matrixes are set to the identity.

Your OpenGL code should save and restore all states *except* for those that are part of `GL_CURRENT_BIT` (vertex position, color, texture, and so on). Also use CGL macros instead of changing the current context, by including this statement:

`#import <OpenGL/CGLMacro.h>`

For more details, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).

## See Also

### Rendering an Image to a Destination

- [renderToBuffer:withBytesPerRow:pixelFormat:forBounds:](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped:](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [releaseRenderedTexture:forCGLContext:](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.
