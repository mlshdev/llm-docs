> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestextureisflipped(_:)](https://developer.apple.com/documentation/corevideo/cvopenglestextureisflipped(_:))

# CVOpenGLESTextureIsFlipped(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns whether the image is flipped vertically or not.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureIsFlipped(_ image: CVOpenGLESTexture) -> Bool
```

## Parameters

- `image`: The OpenGLES texture-based image buffer whose orientation is desired.

<a id="return-value"></a>

## Return Value

`True` if `{0,0}` represents the upper left of the texture; otherwise `False` if `{0,0}` represents the lower left of the texture.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget(\_:)](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName(\_:)](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureGetTypeID()](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

# CVOpenGLESTextureIsFlipped (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns whether the image is flipped vertically or not.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern Boolean CVOpenGLESTextureIsFlipped(CVOpenGLESTextureRef image);
```

## Parameters

- `image`: The OpenGLES texture-based image buffer whose orientation is desired.

<a id="return-value"></a>

## Return Value

`True` if `{0,0}` represents the upper left of the texture; otherwise `False` if `{0,0}` represents the lower left of the texture.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureGetTypeID](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.
