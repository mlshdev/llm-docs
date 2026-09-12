> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/locktexturerepresentation(with:forbounds:)](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/locktexturerepresentation(with:forbounds:))

# lockTextureRepresentation(with:forBounds:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates an OpenGL texture representation from a subregion of the image source using the provided color space.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func lockTextureRepresentation(with colorSpace: CGColorSpace!, forBounds bounds: NSRect) -> Bool
```

## Parameters

- `colorSpace`: A Quartz color space.
- `bounds`: The bounds of the subregion, expressed in pixels. They must be aligned to integer boundaries.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) is successful; [false](https://developer.apple.com/documentation/swift/false) if texture can’t be created.

<a id="Discussion"></a>

## Discussion

Neither the content of the texture nor its states (for example, the wrap mode) must be modified; you can only draw with it. The texture is valid only in the plug-in context.

## See Also

### Converting an Image to a Representation

- [unlockTextureRepresentation()](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:)](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:)](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentation(fromCGLContext:textureUnit:)](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation()](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

# lockTextureRepresentationWithColorSpace:forBounds: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates an OpenGL texture representation from a subregion of the image source using the provided color space.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) lockTextureRepresentationWithColorSpace:(CGColorSpaceRef) colorSpace forBounds:(NSRect) bounds;
```

## Parameters

- `colorSpace`: A Quartz color space.
- `bounds`: The bounds of the subregion, expressed in pixels. They must be aligned to integer boundaries.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) is successful; [false](https://developer.apple.com/documentation/swift/false) if texture can’t be created.

<a id="Discussion"></a>

## Discussion

Neither the content of the texture nor its states (for example, the wrap mode) must be modified; you can only draw with it. The texture is valid only in the plug-in context.

## See Also

### Converting an Image to a Representation

- [unlockTextureRepresentation](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [lockBufferRepresentationWithPixelFormat:colorSpace:forBounds:](lockbufferrepresentation%28withpixelformat_colorspace_forbounds_%29.md): Deprecated. Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.
- [bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates:](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentationFromCGLContext:textureUnit:](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.
