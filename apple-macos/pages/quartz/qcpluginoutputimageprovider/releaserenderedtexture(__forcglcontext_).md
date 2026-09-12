> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/releaserenderedtexture(_:forcglcontext:)](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/releaserenderedtexture(_:forcglcontext:))

# releaseRenderedTexture(\_:forCGLContext:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases the previously copied texture.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func releaseRenderedTexture(_ name: GLuint, forCGLContext cgl_ctx: CGLContextObj!)
```

## Parameters

- `name`: The name of the previously bound texture.
- `cgl_ctx`: The CGL context.

<a id="Discussion"></a>

## Discussion

Your OpenGL code should save and restore all states *except* for those that are part of `GL_CURRENT_BIT` (vertex position, color, texture, and so on). Also use CGL macros instead of changing the current context, by including this statement:

`#import <OpenGL/CGLMacro.h>`

For more details, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).

## See Also

### Rendering an Image to a Destination

- [render(toBuffer:withBytesPerRow:pixelFormat:forBounds:)](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:)](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [render(withCGLContext:forBounds:)](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.

# releaseRenderedTexture:forCGLContext: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases the previously copied texture.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) releaseRenderedTexture:(GLuint) name forCGLContext:(CGLContextObj) cgl_ctx;
```

## Parameters

- `name`: The name of the previously bound texture.
- `cgl_ctx`: The CGL context.

<a id="Discussion"></a>

## Discussion

Your OpenGL code should save and restore all states *except* for those that are part of `GL_CURRENT_BIT` (vertex position, color, texture, and so on). Also use CGL macros instead of changing the current context, by including this statement:

`#import <OpenGL/CGLMacro.h>`

For more details, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).

## See Also

### Rendering an Image to a Destination

- [renderToBuffer:withBytesPerRow:pixelFormat:forBounds:](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped:](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md): Deprecated. Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.
- [renderWithCGLContext:forBounds:](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
