> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecacheflush(_:_:)](https://developer.apple.com/documentation/corevideo/cvopengltexturecacheflush(_:_:))

# CVOpenGLTextureCacheFlush(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Performs internal housekeeping/recycling operations on the cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureCacheFlush(_ textureCache: CVOpenGLTextureCache, _ options: CVOptionFlags)
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Currently unused, set to 0.

<a id="Discussion"></a>

## Discussion

This call must be made periodically to give the texture cache a chance to make OpenGL calls on the OpenGL context used to create it in order to perform its required housekeeping operations.

## See Also

### Functions

- [CVOpenGLTextureCacheCreate(\_:\_:\_:\_:\_:\_:)](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:)](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheGetTypeID()](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.

# CVOpenGLTextureCacheFlush (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Performs internal housekeeping/recycling operations on the cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void CVOpenGLTextureCacheFlush(CVOpenGLTextureCacheRef textureCache, CVOptionFlags options);
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Currently unused, set to 0.

<a id="Discussion"></a>

## Discussion

This call must be made periodically to give the texture cache a chance to make OpenGL calls on the OpenGL context used to create it in order to perform its required housekeeping operations.

## See Also

### Functions

- [CVOpenGLTextureCacheCreate](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheCreateTextureFromImage](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheRetain](cvopengltexturecacheretain.md): Deprecated. Retains a texture cache object.
- [CVOpenGLTextureCacheRelease](cvopengltexturecacherelease.md): Deprecated. Releases a texture cache object.
- [CVOpenGLTextureCacheGetTypeID](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.
