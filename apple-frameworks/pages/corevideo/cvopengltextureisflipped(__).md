> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltextureisflipped(_:)](https://developer.apple.com/documentation/corevideo/cvopengltextureisflipped(_:))

# CVOpenGLTextureIsFlipped(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Determines whether an OpenGL texture is flipped vertically.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureIsFlipped(_ image: CVOpenGLTexture) -> Bool
```

## Parameters

- `image`: The Core Video OpenGL texture whose vertical orientation you want to determine.

<a id="return-value"></a>

## Return Value

Returns `true` if (0,0) in the texture is in the upper-left corner, and `false` if (0,0) is in the lower-left corner.

<a id="Discussion"></a>

## Discussion

Quartz assumes a lower-left origin.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName(\_:)](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget(\_:)](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureGetTypeID()](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.

# CVOpenGLTextureIsFlipped (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Determines whether an OpenGL texture is flipped vertically.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern Boolean CVOpenGLTextureIsFlipped(CVOpenGLTextureRef image);
```

## Parameters

- `image`: The Core Video OpenGL texture whose vertical orientation you want to determine.

<a id="return-value"></a>

## Return Value

Returns `true` if (0,0) in the texture is in the upper-left corner, and `false` if (0,0) is in the lower-left corner.

<a id="Discussion"></a>

## Discussion

Quartz assumes a lower-left origin.

## See Also

### Inspecting Textures

- [CVOpenGLTextureGetName](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureGetTypeID](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.
