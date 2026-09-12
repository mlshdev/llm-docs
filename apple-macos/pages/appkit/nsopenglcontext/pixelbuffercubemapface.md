> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/pixelbuffercubemapface](https://developer.apple.com/documentation/appkit/nsopenglcontext/pixelbuffercubemapface)

# pixelBufferCubeMapFace

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.7)

Returns the cube map face of the pixel buffer attached to the OpenGL context.

> Use framebuffer objects instead.

## Declaration

```objectivec
- (GLenum) pixelBufferCubeMapFace;
```

<a id="return-value"></a>

## Return Value

For pixel buffers with a texture target of `GL_CUBE_MAP`, this value is zero or one of the following values:

<a id="discussion"></a>

## Discussion

- `GL_TEXTURE_CUBE_MAP_POSITIVE_X`
- `GL_TEXTURE_CUBE_MAP_POSITIVE_Y`
- `GL_TEXTURE_CUBE_MAP_POSITIVE_Z`
- `GL_TEXTURE_CUBE_MAP_NEGATIVE_X`
- `GL_TEXTURE_CUBE_MAP_NEGATIVE_Y`
- `GL_TEXTURE_CUBE_MAP_NEGATIVE_Z`

## See Also

### Working with Pixel Buffers

- [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md): Deprecated. Attaches the specified pixel buffer to the OpenGL context.
- [pixelBuffer](pixelbuffer.md): Deprecated. Returns the pixel-buffer object attached to the OpenGL context.
- [pixelBufferMipMapLevel](pixelbuffermipmaplevel.md): Deprecated. Returns the mipmap level of the pixel buffer attached to the OpenGL context.
- [setTextureImageToPixelBuffer:colorBuffer:](settextureimagetopixelbuffer_colorbuffer_.md): Deprecated. Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.
