> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltextureretain](https://developer.apple.com/documentation/corevideo/cvopengltextureretain)

# CVOpenGLTextureRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Retains a Core Video OpenGL texture.

## Declaration

```objectivec
extern CVOpenGLTextureRefCVOpenGLTextureRetain(CVOpenGLTextureRef texture);
```

## Parameters

- `texture`: The Core Video OpenGL texture that you want to retain.

<a id="return-value"></a>

## Return Value

For convenience, the Core Video OpenGL texture you want to retain.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRetain`, but is `NULL` safe.

## See Also

### Retaining and Releasing Textures

- [CVOpenGLTextureRelease](cvopengltexturerelease.md): Deprecated. Releases a Core Video OpenGL texture.
