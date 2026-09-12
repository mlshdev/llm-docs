> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecacherelease](https://developer.apple.com/documentation/corevideo/cvopengltexturecacherelease)

# CVOpenGLTextureCacheRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Releases a texture cache object.

## Declaration

```objectivec
extern void CVOpenGLTextureCacheRelease(CVOpenGLTextureCacheRef textureCache);
```

## Parameters

- `textureCache`: The texture cache object that you want to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), but is `NULL` safe.

## See Also

### Functions

- [CVOpenGLTextureCacheCreate](cvopengltexturecachecreate%28____________%29.md): Deprecated. Creates a new texture cache.
- [CVOpenGLTextureCacheCreateTextureFromImage](cvopengltexturecachecreatetexturefromimage%28__________%29.md): Deprecated. Creates a CVOpenGLTexture object from an existing [CVImageBuffer](cvimagebuffer-q40.md).
- [CVOpenGLTextureCacheFlush](cvopengltexturecacheflush%28____%29.md): Deprecated. Performs internal housekeeping/recycling operations on the cache.
- [CVOpenGLTextureCacheRetain](cvopengltexturecacheretain.md): Deprecated. Retains a texture cache object.
- [CVOpenGLTextureCacheGetTypeID](cvopengltexturecachegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a the texture cache.
