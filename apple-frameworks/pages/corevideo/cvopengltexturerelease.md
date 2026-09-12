> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturerelease](https://developer.apple.com/documentation/corevideo/cvopengltexturerelease)

# CVOpenGLTextureRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Releases a Core Video OpenGL texture.

## Declaration

```objectivec
extern void CVOpenGLTextureRelease(CVOpenGLTextureRef texture);
```

## Parameters

- `texture`: The Core Video OpenGL texture that you want to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRelease`, but is `NULL` safe.

## See Also

### Retaining and Releasing Textures

- [CVOpenGLTextureRetain](cvopengltextureretain.md): Deprecated. Retains a Core Video OpenGL texture.
