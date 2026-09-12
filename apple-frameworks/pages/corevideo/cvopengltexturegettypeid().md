> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturegettypeid()](https://developer.apple.com/documentation/corevideo/cvopengltexturegettypeid())

# CVOpenGLTextureGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation ID for the Core Video OpenGL texture type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this type.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName(\_:)](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget(\_:)](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped(\_:)](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.

# CVOpenGLTextureGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation ID for the Core Video OpenGL texture type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLTextureGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this type.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
