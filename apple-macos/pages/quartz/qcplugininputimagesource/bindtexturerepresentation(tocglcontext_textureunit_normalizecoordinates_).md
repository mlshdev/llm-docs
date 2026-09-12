> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/bindtexturerepresentation(tocglcontext:textureunit:normalizecoordinates:)](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/bindtexturerepresentation(tocglcontext:textureunit:normalizecoordinates:))

# bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Binds the texture to a given texture unit and optionally scales or flips the texture.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func bindTextureRepresentation(toCGLContext cgl_ctx: CGLContextObj!, textureUnit unit: GLenum, normalizeCoordinates flag: Bool)
```

## Parameters

- `cgl_ctx`: The CGL context to render to.)
- `unit`: The texture unit to bind to (such as, `GL_TEXTURE0`)
- `flag`: To apply a texture matrix to scale coordinates (from `[0, pixels]` to `[0,1]`) and flip them vertically (if necessary), pass [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When you no longer need the texture, call [unbindTextureRepresentation(fromCGLContext:textureUnit:)](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md).

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentation(with:forBounds:)](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation()](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:)](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [unbindTextureRepresentation(fromCGLContext:textureUnit:)](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation()](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

# bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Binds the texture to a given texture unit and optionally scales or flips the texture.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) bindTextureRepresentationToCGLContext:(CGLContextObj) cgl_ctx textureUnit:(GLenum) unit normalizeCoordinates:(BOOL) flag;
```

## Parameters

- `cgl_ctx`: The CGL context to render to.)
- `unit`: The texture unit to bind to (such as, `GL_TEXTURE0`)
- `flag`: To apply a texture matrix to scale coordinates (from `[0, pixels]` to `[0,1]`) and flip them vertically (if necessary), pass [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When you no longer need the texture, call [unbindTextureRepresentationFromCGLContext:textureUnit:](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md).

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentationWithColorSpace:forBounds:](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentationWithPixelFormat:colorSpace:forBounds:](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [unbindTextureRepresentationFromCGLContext:textureUnit:](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.
