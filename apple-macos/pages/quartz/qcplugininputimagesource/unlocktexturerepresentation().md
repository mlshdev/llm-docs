> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/unlocktexturerepresentation()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/unlocktexturerepresentation())

# unlockTextureRepresentation() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases the OpenGL texture representation of the image source.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func unlockTextureRepresentation()
```

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentation(with:forBounds:)](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:)](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:)](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentation(fromCGLContext:textureUnit:)](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation()](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

# unlockTextureRepresentation (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases the OpenGL texture representation of the image source.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) unlockTextureRepresentation;
```

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentationWithColorSpace:forBounds:](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [lockBufferRepresentationWithPixelFormat:colorSpace:forBounds:](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates:](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentationFromCGLContext:textureUnit:](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.
