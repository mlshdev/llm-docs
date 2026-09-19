> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvopengltexturerelease

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
