> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecachecreatetexturefromimage(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopengltexturecachecreatetexturefromimage(_:_:_:_:_:))

# CVOpenGLTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureCacheCreateTextureFromImage(_ allocator: CFAllocator?, _ textureCache: CVOpenGLTextureCache, _ sourceImage: CVImageBuffer, _ attributes: CFDictionary?, _ textureOut: UnsafeMutablePointer<CVOpenGLTexture?>) -> CVReturn
```

## Parameters

- `allocator`: The `CFAllocatorRef` to use for allocating the `CVOpenGLTexture` object.  May be `NULL`.
- `textureCache`: The texture cache object that will manage the texture.
- `sourceImage`: The source `CVImageBuffer` for which to create an `CVOpenGLTexture`.
- `attributes`: *This parameter is not currently supported and is for future use only.*

  The desired buffer attributes for the `CVOpenGLTexture`.
- `textureOut`: Upon return, contains the newly created texture.

<a id="return-value"></a>

## Return Value

Returns [kCVReturnSuccess](kcvreturnsuccess.md) on success.

## See Also

### Functions

- [CVOpenGLTextureCacheCreate(\_:\_:\_:\_:\_:\_:)](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheFlush(\_:\_:)](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheGetTypeID()](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.

# CVOpenGLTextureCacheCreateTextureFromImage (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLTextureCacheCreateTextureFromImage(CFAllocatorRef allocator, CVOpenGLTextureCacheRef textureCache, CVImageBufferRef sourceImage, CFDictionaryRef attributes, CVOpenGLTextureRef*textureOut);
```

## Parameters

- `allocator`: The `CFAllocatorRef` to use for allocating the `CVOpenGLTexture` object.  May be `NULL`.
- `textureCache`: The texture cache object that will manage the texture.
- `sourceImage`: The source `CVImageBuffer` for which to create an `CVOpenGLTexture`.
- `attributes`: *This parameter is not currently supported and is for future use only.*

  The desired buffer attributes for the `CVOpenGLTexture`.
- `textureOut`: Upon return, contains the newly created texture.

<a id="return-value"></a>

## Return Value

Returns [kCVReturnSuccess](kcvreturnsuccess.md) on success.

## See Also

### Functions

- [CVOpenGLTextureCacheCreate](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheFlush](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheRetain](cvopengltexturecacheretain.md): Deprecated. Retains a texture cache object.
- [CVOpenGLTextureCacheRelease](cvopengltexturecacherelease.md): Deprecated. Releases a texture cache object.
- [CVOpenGLTextureCacheGetTypeID](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.
