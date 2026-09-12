> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/unbindtexturerepresentation(fromcglcontext:textureunit:)](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/unbindtexturerepresentation(fromcglcontext:textureunit:))

# unbindTextureRepresentation(fromCGLContext:textureUnit:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Unbinds the texture from a texture unit.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func unbindTextureRepresentation(fromCGLContext cgl_ctx: CGLContextObj!, textureUnit unit: GLenum)
```

## Parameters

- `cgl_ctx`: A CGL context.)
- `unit`: The texture unit to unbind from (such as, `GL_TEXTURE0`)

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentation(with:forBounds:)](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation()](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:)](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:)](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unlockBufferRepresentation()](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

# unbindTextureRepresentationFromCGLContext:textureUnit: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Unbinds the texture from a texture unit.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) unbindTextureRepresentationFromCGLContext:(CGLContextObj) cgl_ctx textureUnit:(GLenum) unit;
```

## Parameters

- `cgl_ctx`: A CGL context.)
- `unit`: The texture unit to unbind from (such as, `GL_TEXTURE0`)

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentationWithColorSpace:forBounds:](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentationWithPixelFormat:colorSpace:forBounds:](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates:](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unlockBufferRepresentation](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.
