> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/copyrenderedtexture(forcglcontext:pixelformat:bounds:isflipped:)](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/copyrenderedtexture(forcglcontext:pixelformat:bounds:isflipped:))

# copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func copyRenderedTexture(forCGLContext cgl_ctx: CGLContextObj!, pixelFormat format: String!, bounds: NSRect, isFlipped flipped: UnsafeMutablePointer<ObjCBool>!) -> GLuint
```

## Parameters

- `cgl_ctx`: The CGL context to render to.
- `format`: A string that represents the pixel format of the texture.
- `bounds`: The bounds of the subregion of the image.
- `flipped`: Set to [true](https://developer.apple.com/documentation/swift/true) on output if the contents of the returned texture are vertically flipped.

<a id="return-value"></a>

## Return Value

The name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format or `0` if the texture can’t be provided.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to create the texture yourself or use framebuffer objects (FBO). Use `<OpenGL/CGLMacro.h>` to send commands to the OpenGL context. Make sure to preserve all the OpenGL states except the ones defined by `GL_CURRENT_BIT`.

## See Also

### Rendering an Image to a Destination

- [render(toBuffer:withBytesPerRow:pixelFormat:forBounds:)](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [render(withCGLContext:forBounds:)](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture(\_:forCGLContext:)](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.

# copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (GLuint) copyRenderedTextureForCGLContext:(CGLContextObj) cgl_ctx pixelFormat:(NSString *) format bounds:(NSRect) bounds isFlipped:(BOOL *) flipped;
```

## Parameters

- `cgl_ctx`: The CGL context to render to.
- `format`: A string that represents the pixel format of the texture.
- `bounds`: The bounds of the subregion of the image.
- `flipped`: Set to [true](https://developer.apple.com/documentation/swift/true) on output if the contents of the returned texture are vertically flipped.

<a id="return-value"></a>

## Return Value

The name of an OpenGL texture of type `GL_TEXTURE_RECTANGLE_EXT` that contains a subregion of the image in a given pixel format or `0` if the texture can’t be provided.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to create the texture yourself or use framebuffer objects (FBO). Use `<OpenGL/CGLMacro.h>` to send commands to the OpenGL context. Make sure to preserve all the OpenGL states except the ones defined by `GL_CURRENT_BIT`.

## See Also

### Rendering an Image to a Destination

- [renderToBuffer:withBytesPerRow:pixelFormat:forBounds:](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md): Deprecated. Renders a subregion of the image into the supplied memory buffer using the specified pixel format.
- [renderWithCGLContext:forBounds:](render%28withcglcontext_forbounds_%29.md): Deprecated. Renders a subregion of the image to the provided CGL context.
- [releaseRenderedTexture:forCGLContext:](releaserenderedtexture%28__forcglcontext_%29.md): Deprecated. Releases the previously copied texture.
