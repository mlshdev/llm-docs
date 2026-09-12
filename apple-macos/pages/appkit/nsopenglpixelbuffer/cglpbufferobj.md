> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelbuffer/cglpbufferobj](https://developer.apple.com/documentation/appkit/nsopenglpixelbuffer/cglpbufferobj)

# CGLPBufferObj

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.7)

The underlying CGL pixel buffer object associated with the OpenGL pixel buffer object.

## Declaration

```objectivec
@property (readonly, nullable) CGLPBufferObj CGLPBufferObj;
```

<a id="return-value"></a>

## Return Value

The CGL pixel buffer object that encapsulates the actual pixel buffer.

## See Also

### Getting OpenGL Pixel Buffer Information

- [pixelsHigh](pixelshigh.md): Deprecated. The height of the OpenGL pixel buffer’s texture (in pixels).
- [pixelsWide](pixelswide.md): Deprecated. The width of the OpenGL pixel buffer’s texture, in pixels.
- [textureInternalFormat](textureinternalformat.md): Deprecated. The internal format of the OpenGL pixel buffer’s texture.
- [textureMaxMipMapLevel](texturemaxmipmaplevel.md): Deprecated. The maximum mipmap level of the OpenGL pixel buffer’s texture.
- [textureTarget](texturetarget.md): Deprecated. The texture target of the OpenGL pixel buffer.
