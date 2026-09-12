> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecachegettypeid()](https://developer.apple.com/documentation/corevideo/cvopengltexturecachegettypeid())

# CVOpenGLTextureCacheGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the Core Foundation type identifier for a the texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureCacheGetTypeID() -> CFTypeID
```

## See Also

### Functions

- [CVOpenGLTextureCacheCreate(\_:\_:\_:\_:\_:\_:)](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:)](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheFlush(\_:\_:)](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.

# CVOpenGLTextureCacheGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the Core Foundation type identifier for a the texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLTextureCacheGetTypeID();
```

## See Also

### Functions

- [CVOpenGLTextureCacheCreate](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheCreateTextureFromImage](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheFlush](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheRetain](cvopengltexturecacheretain.md): Deprecated. Retains a texture cache object.
- [CVOpenGLTextureCacheRelease](cvopengltexturecacherelease.md): Deprecated. Releases a texture cache object.
