> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturecachecreate(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglestexturecachecreate(_:_:_:_:_:))

# CVOpenGLESTextureCacheCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Creates a new Core Video texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureCacheCreate(_ allocator: CFAllocator?, _ cacheAttributes: CFDictionary?, _ eaglContext: CVEAGLContext, _ textureAttributes: CFDictionary?, _ cacheOut: UnsafeMutablePointer<CVOpenGLESTextureCache?>) -> CVReturn
```

## Parameters

- `allocator`: The [CFAllocator](../corefoundation/cfallocator.md) to use for allocating the texture cache. This parameter can be `NULL`.
- `cacheAttributes`: A [CFDictionary](../corefoundation/cfdictionary.md) containing the attributes of the texture cache itself. This parameter can be `NULL`.
- `eaglContext`: The OpenGLES 2.0 context into which the texture objects will be created. OpenGLES 1.x contexts are not supported.
- `textureAttributes`: A [CFDictionary](../corefoundation/cfdictionary.md) containing the attributes to be used for creating the [CVOpenGLESTexture](cvopenglestexture.md) objects. This parameter can be `NULL`.
- `cacheOut`: A pointer to a `CVOpenGLESTextureCacheRef` where the newly created texture cache will be placed.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture cache, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

## See Also

### Functions

- [CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTexture](cvopenglestexture.md) object from an existing [CVImageBuffer](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush(\_:\_:)](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID()](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.

# CVOpenGLESTextureCacheCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Creates a new Core Video texture cache.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLESTextureCacheCreate(CFAllocatorRef allocator, CFDictionaryRef cacheAttributes, CVEAGLContext eaglContext, CFDictionaryRef textureAttributes, CVOpenGLESTextureCacheRef*cacheOut);
```

## Parameters

- `allocator`: The [CFAllocatorRef](../corefoundation/cfallocator.md) to use for allocating the texture cache. This parameter can be `NULL`.
- `cacheAttributes`: A [CFDictionaryRef](../corefoundation/cfdictionary.md) containing the attributes of the texture cache itself. This parameter can be `NULL`.
- `eaglContext`: The OpenGLES 2.0 context into which the texture objects will be created. OpenGLES 1.x contexts are not supported.
- `textureAttributes`: A [CFDictionaryRef](../corefoundation/cfdictionary.md) containing the attributes to be used for creating the [CVOpenGLESTextureRef](cvopenglestexture.md) objects. This parameter can be `NULL`.
- `cacheOut`: A pointer to a `CVOpenGLESTextureCacheRef` where the newly created texture cache will be placed.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture cache, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

## See Also

### Functions

- [CVOpenGLESTextureCacheCreateTextureFromImage](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTextureRef](cvopenglestexture.md) object from an existing [CVImageBufferRef](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.
