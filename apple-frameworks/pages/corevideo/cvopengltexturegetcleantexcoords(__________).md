> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturegetcleantexcoords(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopengltexturegetcleantexcoords(_:_:_:_:_:))

# CVOpenGLTextureGetCleanTexCoords(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the texture coordinates for the part of the image that should be displayed.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureGetCleanTexCoords(_ image: CVOpenGLTexture, _ lowerLeft: UnsafeMutablePointer<GLfloat>, _ lowerRight: UnsafeMutablePointer<GLfloat>, _ upperRight: UnsafeMutablePointer<GLfloat>, _ upperLeft: UnsafeMutablePointer<GLfloat>)
```

## Parameters

- `image`: The Core Video OpenGL texture whose clean tex coordinates you want to obtain.
- `lowerLeft`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the lower-left corner of the image.
- `lowerRight`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the lower-right corner of the image.
- `upperRight`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the upper-right corner of the image.
- `upperLeft`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the upper-left corner of the image.

<a id="Discussion"></a>

## Discussion

This function automatically takes into account whether or not the texture is flipped.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Inspecting Textures

- [CVOpenGLTextureGetName(\_:)](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget(\_:)](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureIsFlipped(\_:)](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID()](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.

# CVOpenGLTextureGetCleanTexCoords (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the texture coordinates for the part of the image that should be displayed.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void CVOpenGLTextureGetCleanTexCoords(CVOpenGLTextureRef image, GLfloat lowerLeft[2], GLfloat lowerRight[2], GLfloat upperRight[2], GLfloat upperLeft[2]);
```

## Parameters

- `image`: The Core Video OpenGL texture whose clean tex coordinates you want to obtain.
- `lowerLeft`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the lower-left corner of the image.
- `lowerRight`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the lower-right corner of the image.
- `upperRight`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the upper-right corner of the image.
- `upperLeft`: On output, the `GLFloat` array holds the *s* and *t* texture coordinates of the upper-left corner of the image.

<a id="Discussion"></a>

## Discussion

This function automatically takes into account whether or not the texture is flipped.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Inspecting Textures

- [CVOpenGLTextureGetName](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureIsFlipped](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.
