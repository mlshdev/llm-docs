> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/lockbufferrepresentation(withpixelformat:colorspace:forbounds:)](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/lockbufferrepresentation(withpixelformat:colorspace:forbounds:))

# lockBufferRepresentation(withPixelFormat:colorSpace:forBounds:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func lockBufferRepresentation(withPixelFormat format: String!, colorSpace: CGColorSpace!, forBounds bounds: NSRect) -> Bool
```

## Parameters

- `format`: A pixel format that is compatible with the color space.
- `colorSpace`: A Quartz color space that is compatible with the pixel format.
- `bounds`: The bounds of the subregion, expressed as pixels, and aligned to integer boundaries.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The content of the buffer is read-only. You should not attempt to modify it.

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentation(with:forBounds:)](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation()](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [bindTextureRepresentation(toCGLContext:textureUnit:normalizeCoordinates:)](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentation(fromCGLContext:textureUnit:)](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation()](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.

# lockBufferRepresentationWithPixelFormat:colorSpace:forBounds: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a memory buffer representation from a subregion of the image source using the provided pixel format and color space.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) lockBufferRepresentationWithPixelFormat:(NSString *) format colorSpace:(CGColorSpaceRef) colorSpace forBounds:(NSRect) bounds;
```

## Parameters

- `format`: A pixel format that is compatible with the color space.
- `colorSpace`: A Quartz color space that is compatible with the pixel format.
- `bounds`: The bounds of the subregion, expressed as pixels, and aligned to integer boundaries.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The content of the buffer is read-only. You should not attempt to modify it.

## See Also

### Converting an Image to a Representation

- [lockTextureRepresentationWithColorSpace:forBounds:](locktexturerepresentation%28with_forbounds_%29.md): Deprecated. Creates an OpenGL texture representation from a subregion of the image source using the provided color space.
- [unlockTextureRepresentation](unlocktexturerepresentation%28%29.md): Deprecated. Releases the OpenGL texture representation of the image source.
- [bindTextureRepresentationToCGLContext:textureUnit:normalizeCoordinates:](bindtexturerepresentation%28tocglcontext_textureunit_normalizecoordinates_%29.md): Deprecated. Binds the texture to a given texture unit and optionally scales or flips the texture.
- [unbindTextureRepresentationFromCGLContext:textureUnit:](unbindtexturerepresentation%28fromcglcontext_textureunit_%29.md): Deprecated. Unbinds the texture from a texture unit.
- [unlockBufferRepresentation](unlockbufferrepresentation%28%29.md): Deprecated. Releases the memory buffer representation of the image source.
