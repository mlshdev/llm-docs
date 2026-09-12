> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/pixelbuffer](https://developer.apple.com/documentation/appkit/nsopenglcontext/pixelbuffer)

# pixelBuffer

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.7)

Returns the pixel-buffer object attached to the OpenGL context.

> Use framebuffer objects instead.

## Declaration

```objectivec
- (NSOpenGLPixelBuffer *) pixelBuffer;
```

<a id="return-value"></a>

## Return Value

The pixel buffer object.

## See Also

### Working with Pixel Buffers

- [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md): Deprecated. Attaches the specified pixel buffer to the OpenGL context.
- [pixelBufferCubeMapFace](pixelbuffercubemapface.md): Deprecated. Returns the cube map face of the pixel buffer attached to the OpenGL context.
- [pixelBufferMipMapLevel](pixelbuffermipmaplevel.md): Deprecated. Returns the mipmap level of the pixel buffer attached to the OpenGL context.
- [setTextureImageToPixelBuffer:colorBuffer:](settextureimagetopixelbuffer_colorbuffer_.md): Deprecated. Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.
