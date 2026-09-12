> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturecachecreatetexturefromimage(_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglestexturecachecreatetexturefromimage(_:_:_:_:_:_:_:_:_:_:_:_:))

# CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Creates a [CVOpenGLESTexture](cvopenglestexture.md) object from an existing [CVImageBuffer](cvimagebuffer.md).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLESTextureCacheCreateTextureFromImage(_ allocator: CFAllocator?, _ textureCache: CVOpenGLESTextureCache, _ sourceImage: CVImageBuffer, _ textureAttributes: CFDictionary?, _ target: GLenum, _ internalFormat: GLint, _ width: GLsizei, _ height: GLsizei, _ format: GLenum, _ type: GLenum, _ planeIndex: Int, _ textureOut: UnsafeMutablePointer<CVOpenGLESTexture?>) -> CVReturn
```

## Parameters

- `allocator`: The [CFAllocator](../corefoundation/cfallocator.md) to use for allocating the texture object. This parameter can be `NULL`.
- `textureCache`: The texture cache object that will manage the texture.
- `sourceImage`: The [CVImageBuffer](cvimagebuffer.md) that you want to create a texture from.
- `textureAttributes`: A [CFDictionary](../corefoundation/cfdictionary.md) containing the attributes to be used for creating the [CVOpenGLESTexture](cvopenglestexture.md) objects. This parameter can be `NULL`.
- `target`: The target texture. `GL_TEXTURE_2D` and `GL_RENDERBUFFER` are the only targets currently supported.
- `internalFormat`: The number of color components in the texture. Examples are `GL_RGBA`, `GL_LUMINANCE`, `GL_RGBA8_OES`, `GL_RED`, and `GL_RG`.
- `width`: The width of the texture image.
- `height`: The height of the texture image.
- `format`: The format of the pixel data. Examples are `GL_RGBA` and `GL_LUMINANCE`.
- `type`: The data type of the pixel data. One example is `GL_UNSIGNED_BYTE`.
- `planeIndex`: The plane of the [CVImageBuffer](cvimagebuffer.md) to map bind.  Ignored for non-planar [CVImageBuffer](cvimagebuffer.md)s.
- `textureOut`: A pointer to a [CVOpenGLESTexture](cvopenglestexture.md) where the newly created texture object will be placed.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

<a id="Discussion"></a>

## Discussion

This function either creates a new or returns a cached [CVOpenGLESTexture](cvopenglestexture.md) texture object mapped to the [CVImageBuffer](cvimagebuffer.md) and associated parameters. This operation creates a live binding between the image buffer and the underlying texture object. The EAGLContext associated with the cache may be modified to create, delete, or bind textures. When used as a source texture or `GL_COLOR_ATTACHMENT`, the image buffer must be unlocked before rendering. The source or render buffer texture should not be re-used until the rendering has completed. This can be guaranteed by calling `glFlush()`.

Some example mappings can be seen in the following code snippet.

```objc
//Mapping a BGRA buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_RGBA, width, height, GL_RGBA, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping a BGRA buffer as a renderbuffer:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_RENDERBUFFER, GL_RGBA8_OES, width, height, GL_RGBA, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping the luma plane of a 420v buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_LUMINANCE, width, height, GL_LUMINANCE, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping the chroma plane of a 420v buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_LUMINANCE_ALPHA, width/2, height/2, GL_LUMINANCE_ALPHA, GL_UNSIGNED_BYTE, 1, &outTexture);
//Mapping a yuvs buffer as a source texture (note: yuvs/f and 2vuy are unpacked and resampled -- not colorspace converted)
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_RGB_422_APPLE, width, height, GL_RGB_422_APPLE, GL_UNSIGNED_SHORT_8_8_APPLE, 1, &outTexture);
```

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate(\_:\_:\_:\_:\_:)](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheFlush(\_:\_:)](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID()](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.

# CVOpenGLESTextureCacheCreateTextureFromImage (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Creates a [CVOpenGLESTextureRef](cvopenglestexture.md) object from an existing [CVImageBufferRef](cvimagebuffer.md).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLESTextureCacheCreateTextureFromImage(CFAllocatorRef allocator, CVOpenGLESTextureCacheRef textureCache, CVImageBufferRef sourceImage, CFDictionaryRef textureAttributes, GLenum target, GLint internalFormat, GLsizei width, GLsizei height, GLenum format, GLenum type, size_t planeIndex, CVOpenGLESTextureRef*textureOut);
```

## Parameters

- `allocator`: The [CFAllocatorRef](../corefoundation/cfallocator.md) to use for allocating the texture object. This parameter can be `NULL`.
- `textureCache`: The texture cache object that will manage the texture.
- `sourceImage`: The [CVImageBufferRef](cvimagebuffer.md) that you want to create a texture from.
- `textureAttributes`: A [CFDictionaryRef](../corefoundation/cfdictionary.md) containing the attributes to be used for creating the [CVOpenGLESTextureRef](cvopenglestexture.md) objects. This parameter can be `NULL`.
- `target`: The target texture. `GL_TEXTURE_2D` and `GL_RENDERBUFFER` are the only targets currently supported.
- `internalFormat`: The number of color components in the texture. Examples are `GL_RGBA`, `GL_LUMINANCE`, `GL_RGBA8_OES`, `GL_RED`, and `GL_RG`.
- `width`: The width of the texture image.
- `height`: The height of the texture image.
- `format`: The format of the pixel data. Examples are `GL_RGBA` and `GL_LUMINANCE`.
- `type`: The data type of the pixel data. One example is `GL_UNSIGNED_BYTE`.
- `planeIndex`: The plane of the [CVImageBufferRef](cvimagebuffer.md) to map bind.  Ignored for non-planar [CVImageBufferRef](cvimagebuffer.md)s.
- `textureOut`: A pointer to a [CVOpenGLESTextureRef](cvopenglestexture.md) where the newly created texture object will be placed.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

<a id="Discussion"></a>

## Discussion

This function either creates a new or returns a cached [CVOpenGLESTextureRef](cvopenglestexture.md) texture object mapped to the [CVImageBufferRef](cvimagebuffer.md) and associated parameters. This operation creates a live binding between the image buffer and the underlying texture object. The EAGLContext associated with the cache may be modified to create, delete, or bind textures. When used as a source texture or `GL_COLOR_ATTACHMENT`, the image buffer must be unlocked before rendering. The source or render buffer texture should not be re-used until the rendering has completed. This can be guaranteed by calling `glFlush()`.

Some example mappings can be seen in the following code snippet.

```objc
//Mapping a BGRA buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_RGBA, width, height, GL_RGBA, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping a BGRA buffer as a renderbuffer:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_RENDERBUFFER, GL_RGBA8_OES, width, height, GL_RGBA, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping the luma plane of a 420v buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_LUMINANCE, width, height, GL_LUMINANCE, GL_UNSIGNED_BYTE, 0, &outTexture);
//Mapping the chroma plane of a 420v buffer as a source texture:
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_LUMINANCE_ALPHA, width/2, height/2, GL_LUMINANCE_ALPHA, GL_UNSIGNED_BYTE, 1, &outTexture);
//Mapping a yuvs buffer as a source texture (note: yuvs/f and 2vuy are unpacked and resampled -- not colorspace converted)
CVOpenGLESTextureCacheCreateTextureFromImage(kCFAllocatorDefault, textureCache, pixelBuffer, NULL, GL_TEXTURE_2D, GL_RGB_422_APPLE, width, height, GL_RGB_422_APPLE, GL_UNSIGNED_SHORT_8_8_APPLE, 1, &outTexture);
```

## See Also

### Functions

- [CVOpenGLESTextureCacheCreate](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheFlush](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.
