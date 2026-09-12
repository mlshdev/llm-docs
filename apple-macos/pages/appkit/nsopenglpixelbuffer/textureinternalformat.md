> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelbuffer/textureinternalformat](https://developer.apple.com/documentation/appkit/nsopenglpixelbuffer/textureinternalformat)

# textureInternalFormat

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.2+ (deprecated in 10.7)

The internal format of the OpenGL pixel buffer’s texture.

## Declaration

```objectivec
@property (readonly) GLenum textureInternalFormat;
```

<a id="return-value"></a>

## Return Value

The texture format, which can be one of the following values: `GL_RGB`, `GL_RGBA`, or `GL_DEPTH_COMPONENT`.

## See Also

### Getting OpenGL Pixel Buffer Information

- [CGLPBufferObj](cglpbufferobj.md): Deprecated. The underlying CGL pixel buffer object associated with the OpenGL pixel buffer object.
- [pixelsHigh](pixelshigh.md): Deprecated. The height of the OpenGL pixel buffer’s texture (in pixels).
- [pixelsWide](pixelswide.md): Deprecated. The width of the OpenGL pixel buffer’s texture, in pixels.
- [textureMaxMipMapLevel](texturemaxmipmaplevel.md): Deprecated. The maximum mipmap level of the OpenGL pixel buffer’s texture.
- [textureTarget](texturetarget.md): Deprecated. The texture target of the OpenGL pixel buffer.
