> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/pixelbuffermipmaplevel](https://developer.apple.com/documentation/appkit/nsopenglcontext/pixelbuffermipmaplevel)

# pixelBufferMipMapLevel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.7)

Returns the mipmap level of the pixel buffer attached to the OpenGL context.

> Use framebuffer objects instead.

## Declaration

```objectivec
- (GLint) pixelBufferMipMapLevel;
```

<a id="return-value"></a>

## Return Value

The desired mipmap level for rendering. This value should be less than or equal to the maximum texture mipmap level of `pixelBuffer` (accessible through an `NSOpenGLPixelBuffer` object’s [textureMaxMipMapLevel](../nsopenglpixelbuffer/texturemaxmipmaplevel.md) method).

## See Also

### Working with Pixel Buffers

- [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md): Deprecated. Attaches the specified pixel buffer to the OpenGL context.
- [pixelBuffer](pixelbuffer.md): Deprecated. Returns the pixel-buffer object attached to the OpenGL context.
- [pixelBufferCubeMapFace](pixelbuffercubemapface.md): Deprecated. Returns the cube map face of the pixel buffer attached to the OpenGL context.
- [setTextureImageToPixelBuffer:colorBuffer:](settextureimagetopixelbuffer_colorbuffer_.md): Deprecated. Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.
