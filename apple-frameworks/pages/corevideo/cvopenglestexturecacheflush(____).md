> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturecacheflush(_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglestexturecacheflush(_:_:))

# CVOpenGLESTextureCacheFlush(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Performs internal housekeeping/recycling operations on a texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureCacheFlush(_ textureCache: CVOpenGLESTextureCache, _ options: CVOptionFlags)
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Options for the flush operation. This parameter is currently unused and should be set to `0`.

<a id="Discussion"></a>

## Discussion

The texture cache automatically flushes currently unused resources when you call the [CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md) function, but can you can also flush the cache explicitly by calling this function. The EAGLContext associated with the cache may be used to delete or unbind textures.

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate(\_:\_:\_:\_:\_:)](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTexture](cvopenglestexture.md) object from an existing [CVImageBuffer](cvimagebuffer.md).
- [CVOpenGLESTextureCacheGetTypeID()](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.

# CVOpenGLESTextureCacheFlush (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Performs internal housekeeping/recycling operations on a texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void CVOpenGLESTextureCacheFlush(CVOpenGLESTextureCacheRef textureCache, CVOptionFlags options);
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Options for the flush operation. This parameter is currently unused and should be set to `0`.

<a id="Discussion"></a>

## Discussion

The texture cache automatically flushes currently unused resources when you call the [CVOpenGLESTextureCacheCreateTextureFromImage](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md) function, but can you can also flush the cache explicitly by calling this function. The EAGLContext associated with the cache may be used to delete or unbind textures.

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTextureRef](cvopenglestexture.md) object from an existing [CVImageBufferRef](cvimagebuffer.md).
- [CVOpenGLESTextureCacheGetTypeID](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.
