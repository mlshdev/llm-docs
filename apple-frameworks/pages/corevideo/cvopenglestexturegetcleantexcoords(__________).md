> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturegetcleantexcoords(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglestexturegetcleantexcoords(_:_:_:_:_:))

# CVOpenGLESTextureGetCleanTexCoords(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns convenient normalized texture coordinates for the part of the image that should be displayed.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureGetCleanTexCoords(_ image: CVOpenGLESTexture, _ lowerLeft: UnsafeMutablePointer<GLfloat>, _ lowerRight: UnsafeMutablePointer<GLfloat>, _ upperRight: UnsafeMutablePointer<GLfloat>, _ upperLeft: UnsafeMutablePointer<GLfloat>)
```

## Parameters

- `image`: The OpenGLES texture-based image buffer whose normalized texture coordinates are desired.
- `lowerLeft`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the lower left corner of the image will be stored.
- `lowerRight`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the lower right corner of the image will be stored.
- `upperRight`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the upper right corner of the image will be stored.
- `upperLeft`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the upper left corner of the image will be stored.

<a id="Discussion"></a>

## Discussion

This function automatically takes into account whether or not the texture is flipped.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget(\_:)](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName(\_:)](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureIsFlipped(\_:)](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.
- [CVOpenGLESTextureGetTypeID()](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

# CVOpenGLESTextureGetCleanTexCoords (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns convenient normalized texture coordinates for the part of the image that should be displayed.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void CVOpenGLESTextureGetCleanTexCoords(CVOpenGLESTextureRef image, GLfloat lowerLeft[2], GLfloat lowerRight[2], GLfloat upperRight[2], GLfloat upperLeft[2]);
```

## Parameters

- `image`: The OpenGLES texture-based image buffer whose normalized texture coordinates are desired.
- `lowerLeft`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the lower left corner of the image will be stored.
- `lowerRight`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the lower right corner of the image will be stored.
- `upperRight`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the upper right corner of the image will be stored.
- `upperLeft`: An array of two `GLfloat`s where the `s` and `t` normalized texture coordinates of the upper left corner of the image will be stored.

<a id="Discussion"></a>

## Discussion

This function automatically takes into account whether or not the texture is flipped.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureIsFlipped](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.
- [CVOpenGLESTextureGetTypeID](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.
