> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturegettarget(_:)](https://developer.apple.com/documentation/corevideo/cvopengltexturegettarget(_:))

# CVOpenGLTextureGetTarget(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureGetTarget(_ image: CVOpenGLTexture) -> GLenum
```

## Parameters

- `image`: The Core Video OpenGL texture whose target you want to obtain.

<a id="return-value"></a>

## Return Value

The OpenGL texture target.

<a id="Discussion"></a>

## Discussion

See the [OpenGL specification](http://www.opengl.org/documentation/) for more information about texture targets.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName(\_:)](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped(\_:)](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID()](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.

# CVOpenGLTextureGetTarget (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern GLenum CVOpenGLTextureGetTarget(CVOpenGLTextureRef image);
```

## Parameters

- `image`: The Core Video OpenGL texture whose target you want to obtain.

<a id="return-value"></a>

## Return Value

The OpenGL texture target.

<a id="Discussion"></a>

## Discussion

See the [OpenGL specification](http://www.opengl.org/documentation/) for more information about texture targets.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.
