> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecachecreate(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopengltexturecachecreate(_:_:_:_:_:_:))

# CVOpenGLTextureCacheCreate(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLTextureCacheCreate(_ allocator: CFAllocator?, _ cacheAttributes: CFDictionary?, _ cglContext: CGLContextObj, _ cglPixelFormat: CGLPixelFormatObj, _ textureAttributes: CFDictionary?, _ cacheOut: UnsafeMutablePointer<CVOpenGLTextureCache?>) -> CVReturn
```

## Parameters

- `allocator`: The `CFAllocatorRef` to use for allocating the cache.  May be NULL.
- `cacheAttributes`: A dictionary specifying options for the cache’s behavior, or `NULL` to use default options. For applicable keys and values, see [Cache Attributes](cvopengltexturecache-cache-attributes.md).
- `cglContext`: The OpenGL context into which the texture objects will be created.
- `cglPixelFormat`: The OpenGL pixel format object used to create the passed in OpenGL context.
- `textureAttributes`: A `CFDictionaryRef` containing the attributes to be used for creating the `CVOpenGLTexture` objects.  May be `NULL`.
- `cacheOut`: Upon return, contains the newly created texture cache.

<a id="return-value"></a>

## Return Value

Returns [kCVReturnSuccess](kcvreturnsuccess.md) on success.

## See Also

### Functions

- [CVOpenGLTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:)](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheFlush(\_:\_:)](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheGetTypeID()](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.

# CVOpenGLTextureCacheCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLTextureCacheCreate(CFAllocatorRef allocator, CFDictionaryRef cacheAttributes, CGLContextObj cglContext, CGLPixelFormatObj cglPixelFormat, CFDictionaryRef textureAttributes, CVOpenGLTextureCacheRef*cacheOut);
```

## Parameters

- `allocator`: The `CFAllocatorRef` to use for allocating the cache.  May be NULL.
- `cacheAttributes`: A dictionary specifying options for the cache’s behavior, or `NULL` to use default options. For applicable keys and values, see [Cache Attributes](cvopengltexturecache-cache-attributes.md).
- `cglContext`: The OpenGL context into which the texture objects will be created.
- `cglPixelFormat`: The OpenGL pixel format object used to create the passed in OpenGL context.
- `textureAttributes`: A `CFDictionaryRef` containing the attributes to be used for creating the `CVOpenGLTexture` objects.  May be `NULL`.
- `cacheOut`: Upon return, contains the newly created texture cache.

<a id="return-value"></a>

## Return Value

Returns [kCVReturnSuccess](kcvreturnsuccess.md) on success.

## See Also

### Functions

- [CVOpenGLTextureCacheCreateTextureFromImage](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheFlush](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheRetain](cvopengltexturecacheretain.md): Deprecated. Retains a texture cache object.
- [CVOpenGLTextureCacheRelease](cvopengltexturecacherelease.md): Deprecated. Releases a texture cache object.
- [CVOpenGLTextureCacheGetTypeID](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.
