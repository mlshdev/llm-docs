> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/setpixelbuffer:cubemapface:mipmaplevel:currentvirtualscreen:](https://developer.apple.com/documentation/appkit/nsopenglcontext/setpixelbuffer:cubemapface:mipmaplevel:currentvirtualscreen:)

# setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.7)

Attaches the specified pixel buffer to the OpenGL context.

> Use framebuffer objects instead.

## Declaration

```objectivec
- (void) setPixelBuffer:(NSOpenGLPixelBuffer *) pixelBuffer cubeMapFace:(GLenum) face mipMapLevel:(GLint) level currentVirtualScreen:(GLint) screen;
```

## Parameters

- `pixelBuffer`: The pixel buffer to attach.
- `face`: For pixel buffers with a texture target of `GL_CUBE_MAP`, this parameter should be zero or one of the following values:

  - `GL_TEXTURE_CUBE_MAP_POSITIVE_X`
  - `GL_TEXTURE_CUBE_MAP_POSITIVE_Y`
  - `GL_TEXTURE_CUBE_MAP_POSITIVE_Z`
  - `GL_TEXTURE_CUBE_MAP_NEGATIVE_X`
  - `GL_TEXTURE_CUBE_MAP_NEGATIVE_Y`
  - `GL_TEXTURE_CUBE_MAP_NEGATIVE_Z`
- `level`: The desired mipmap level for rendering. This value must be less than or equal to the maximum texture mipmap level of `pixelBuffer` (accessible through an `NSOpenGLPixelBuffer` object’s [textureMaxMipMapLevel](../nsopenglpixelbuffer/texturemaxmipmaplevel.md) method).
- `screen`: The virtual screen of the receiver (if applicable) should be set to the same value as the current virtual screen you are using for rendering onscreen

<a id="Discussion"></a>

## Discussion

The `NSOpenGLPixelBuffer` object gives the receiver access to accelerated offscreen rendering in the pixel buffer, which is primarily used for textures.

## See Also

### Related Documentation

- [initWithTextureTarget:textureInternalFormat:textureMaxMipMapLevel:pixelsWide:pixelsHigh:](../nsopenglpixelbuffer/initwithtexturetarget_textureinternalformat_texturemaxmipmaplevel_pixelswide_pixelshigh_.md): Deprecated. Returns an `NSOpenGLPixelBuffer` object initialized with the specified parameters.
- [currentVirtualScreen](currentvirtualscreen.md): Deprecated. Returns the current virtual screen for the OpenGL context.

### Working with Pixel Buffers

- [pixelBuffer](pixelbuffer.md): Deprecated. Returns the pixel-buffer object attached to the OpenGL context.
- [pixelBufferCubeMapFace](pixelbuffercubemapface.md): Deprecated. Returns the cube map face of the pixel buffer attached to the OpenGL context.
- [pixelBufferMipMapLevel](pixelbuffermipmaplevel.md): Deprecated. Returns the mipmap level of the pixel buffer attached to the OpenGL context.
- [setTextureImageToPixelBuffer:colorBuffer:](settextureimagetopixelbuffer_colorbuffer_.md): Deprecated. Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.
