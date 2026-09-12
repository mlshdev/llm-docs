> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturegettypeid()](https://developer.apple.com/documentation/corevideo/cvopenglestexturegettypeid())

# CVOpenGLESTextureGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVOpenGLESTextureRef` type.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget(\_:)](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName(\_:)](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureIsFlipped(\_:)](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.

# CVOpenGLESTextureGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLESTextureGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVOpenGLESTextureRef` type.

## See Also

### Inspecting Textures

- [CVOpenGLESTextureGetTarget](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureIsFlipped](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.
