> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelbuffer/texturetarget](https://developer.apple.com/documentation/appkit/nsopenglpixelbuffer/texturetarget)

# textureTarget

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.2+ (deprecated in 10.7)

The texture target of the OpenGL pixel buffer.

## Declaration

```objectivec
@property (readonly) GLenum textureTarget;
```

<a id="return-value"></a>

## Return Value

The texture target, which can be one of the following values: `GL_TEXTURE_2D`, `GL_TEXTURE_CUBE_MAP`, or `GL_TEXTURE_RECTANGLE_EXT`.

## See Also

### Getting OpenGL Pixel Buffer Information

- [CGLPBufferObj](cglpbufferobj.md): Deprecated. The underlying CGL pixel buffer object associated with the OpenGL pixel buffer object.
- [pixelsHigh](pixelshigh.md): Deprecated. The height of the OpenGL pixel buffer’s texture (in pixels).
- [pixelsWide](pixelswide.md): Deprecated. The width of the OpenGL pixel buffer’s texture, in pixels.
- [textureInternalFormat](textureinternalformat.md): Deprecated. The internal format of the OpenGL pixel buffer’s texture.
- [textureMaxMipMapLevel](texturemaxmipmaplevel.md): Deprecated. The maximum mipmap level of the OpenGL pixel buffer’s texture.
