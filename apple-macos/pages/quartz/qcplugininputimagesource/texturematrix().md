> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/texturematrix()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/texturematrix())

# textureMatrix() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns a texture matrix.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func textureMatrix() -> UnsafePointer<GLfloat>!
```

<a id="return-value"></a>

## Return Value

A 4x4 texture matrix created by scaling (from \[`0`, pixels\] to \[`0`,`1`\]) and vertically flipping the texture coordinates;  `NULL` if coordinate  transformation is not required.

<a id="Discussion"></a>

## Discussion

This method is provided as a convenience for 2D textures to take care of two issues:

- Coordinates for rectangular textures are expressed in pixels rather than the normalized units used for power-of-two textures. The coordinates need to be normalized before you can process the texture.
- Texture coordinates are typically flipped by OpenGL for processing on the GPU and need to be flipped to the original coordinates.

You can take care of these two issues simply by loading a the matrix returned by this method onto the OpenGL stack. If you are not sure that your texture needs either of these operations, you can load the matrix on the OpenGL stack anyway, as it acts as an identity matrix if it’s not needed.

## See Also

### Getting Texture Information

- [texturePixelsWide()](texturepixelswide%28%29.md): Deprecated. Returns the width of the texture representation.
- [texturePixelsHigh()](texturepixelshigh%28%29.md): Deprecated. Returns the height of the texture representation.
- [textureTarget()](texturetarget%28%29.md): Deprecated. Returns the texture target.
- [textureName()](texturename%28%29.md): Deprecated. Returns the texture name.
- [textureColorSpace()](texturecolorspace%28%29.md): Deprecated. Returns the color space of the texture representation.
- [textureFlipped()](textureflipped%28%29.md): Deprecated. Returns whether or not the contents of the texture are flipped vertically.

# textureMatrix (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns a texture matrix.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (const GLfloat *) textureMatrix;
```

<a id="return-value"></a>

## Return Value

A 4x4 texture matrix created by scaling (from \[`0`, pixels\] to \[`0`,`1`\]) and vertically flipping the texture coordinates;  `NULL` if coordinate  transformation is not required.

<a id="Discussion"></a>

## Discussion

This method is provided as a convenience for 2D textures to take care of two issues:

- Coordinates for rectangular textures are expressed in pixels rather than the normalized units used for power-of-two textures. The coordinates need to be normalized before you can process the texture.
- Texture coordinates are typically flipped by OpenGL for processing on the GPU and need to be flipped to the original coordinates.

You can take care of these two issues simply by loading a the matrix returned by this method onto the OpenGL stack. If you are not sure that your texture needs either of these operations, you can load the matrix on the OpenGL stack anyway, as it acts as an identity matrix if it’s not needed.

## See Also

### Getting Texture Information

- [texturePixelsWide](texturepixelswide%28%29.md): Deprecated. Returns the width of the texture representation.
- [texturePixelsHigh](texturepixelshigh%28%29.md): Deprecated. Returns the height of the texture representation.
- [textureTarget](texturetarget%28%29.md): Deprecated. Returns the texture target.
- [textureName](texturename%28%29.md): Deprecated. Returns the texture name.
- [textureColorSpace](texturecolorspace%28%29.md): Deprecated. Returns the color space of the texture representation.
- [textureFlipped](textureflipped%28%29.md): Deprecated. Returns whether or not the contents of the texture are flipped vertically.
