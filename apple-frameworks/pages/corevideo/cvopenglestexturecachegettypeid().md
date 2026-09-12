> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturecachegettypeid()](https://developer.apple.com/documentation/corevideo/cvopenglestexturecachegettypeid())

# CVOpenGLESTextureCacheGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns the Core Foundation type identifier for a Core Video texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureCacheGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVOpenGLESTextureCacheRef` type.

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate(\_:\_:\_:\_:\_:)](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTexture](cvopenglestexture.md) object from an existing [CVImageBuffer](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush(\_:\_:)](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.

# CVOpenGLESTextureCacheGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Returns the Core Foundation type identifier for a Core Video texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLESTextureCacheGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVOpenGLESTextureCacheRef` type.

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTextureRef](cvopenglestexture.md) object from an existing [CVImageBufferRef](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
