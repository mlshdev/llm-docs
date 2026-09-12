> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/settextureimagetopixelbuffer:colorbuffer:](https://developer.apple.com/documentation/appkit/nsopenglcontext/settextureimagetopixelbuffer:colorbuffer:)

# setTextureImageToPixelBuffer:colorBuffer:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.7)

Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.

> Use framebuffer objects instead.

## Declaration

```objectivec
- (void) setTextureImageToPixelBuffer:(NSOpenGLPixelBuffer *) pixelBuffer colorBuffer:(GLenum) source;
```

## Parameters

- `pixelBuffer`: The pixel buffer to attach.
- `source`: An OpenGL constant indicating which of the pixel buffer’s color buffers to use. Potential values for this parameter include `GL_FRONT`, `GL_BACK`, and `GL_AUX0`.

<a id="Discussion"></a>

## Discussion

This method corresponds to the Core OpenGL method `CGLTexImagePBuffer`.

## See Also

### Working with Pixel Buffers

- [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md): Deprecated. Attaches the specified pixel buffer to the OpenGL context.
- [pixelBuffer](pixelbuffer.md): Deprecated. Returns the pixel-buffer object attached to the OpenGL context.
- [pixelBufferCubeMapFace](pixelbuffercubemapface.md): Deprecated. Returns the cube map face of the pixel buffer attached to the OpenGL context.
- [pixelBufferMipMapLevel](pixelbuffermipmaplevel.md): Deprecated. Returns the mipmap level of the pixel buffer attached to the OpenGL context.
