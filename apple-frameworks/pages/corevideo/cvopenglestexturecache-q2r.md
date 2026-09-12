> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexturecache-q2r](https://developer.apple.com/documentation/corevideo/cvopenglestexturecache-q2r)

# CVOpenGLESTextureCache (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A cache used to create and manage OpenGL ES texture objects.

<a id="overview"></a>

## Overview

Core Video uses OpenGL ES texture caches to cache and manage [CVOpenGLESTexture](cvopenglestexture.md) textures. These texture caches provide you with a way to directly read and write buffers with various pixel formats, such as 420v or BGRA, from GL ES.

## Topics

### Functions

The functions in this section operate on Core Video texture caches derived from the `CVOpenGLESTextureCacheRef` type.

- [CVOpenGLESTextureCacheCreate(\_:\_:\_:\_:\_:)](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTexture](cvopenglestexture.md) object from an existing [CVImageBuffer](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush(\_:\_:)](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID()](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.

### Data Types

- [CVOpenGLESTextureCache](cvopenglestexturecache.md)
- [CVEAGLContext](cveaglcontext.md): A type that resolves to an [EAGLContext](../opengles/eaglcontext.md) pointer when appropriate.

### Constants

- [Cache Attributes](cvopenglestexturecache-cache-attributes.md): Attributes for the texture cache.

## See Also

### OpenGL ES

- [CVOpenGLESTexture](cvopenglestexture-q2s.md): A texture-based image buffer that supplies source image data to OpenGL ES.

# CVOpenGLESTextureCache (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A cache used to create and manage OpenGL ES texture objects.

<a id="overview"></a>

## Overview

Core Video uses OpenGL ES texture caches to cache and manage [CVOpenGLESTextureRef](cvopenglestexture.md) textures. These texture caches provide you with a way to directly read and write buffers with various pixel formats, such as 420v or BGRA, from GL ES.

## Topics

### Functions

The functions in this section operate on Core Video texture caches derived from the `CVOpenGLESTextureCacheRef` type.

- [CVOpenGLESTextureCacheCreate](cvopenglestexturecachecreate%28__________%29.md): Deprecated. Creates a new Core Video texture cache.
- [CVOpenGLESTextureCacheCreateTextureFromImage](cvopenglestexturecachecreatetexturefromimage%28________________________%29.md): Deprecated. Creates a [CVOpenGLESTextureRef](cvopenglestexture.md) object from an existing [CVImageBufferRef](cvimagebuffer.md).
- [CVOpenGLESTextureCacheFlush](cvopenglestexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on a texture cache.
- [CVOpenGLESTextureCacheGetTypeID](cvopenglestexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture cache.

### Data Types

- [CVOpenGLESTextureCacheRef](cvopenglestexturecache.md)
- [CVEAGLContext](cveaglcontext.md): A type that resolves to an [EAGLContext](../opengles/eaglcontext.md) pointer when appropriate.

### Constants

- [Cache Attributes](cvopenglestexturecache-cache-attributes.md): Attributes for the texture cache.

## See Also

### OpenGL ES

- [CVOpenGLESTexture](cvopenglestexture-q2s.md): A texture-based image buffer that supplies source image data to OpenGL ES.
