> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferretain](https://developer.apple.com/documentation/corevideo/cvopenglbufferretain)

# CVOpenGLBufferRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Retains a Core Video OpenGL buffer.

## Declaration

```objectivec
extern CVOpenGLBufferRefCVOpenGLBufferRetain(CVOpenGLBufferRef buffer);
```

## Parameters

- `buffer`: The OpenGL Buffer that you want to retain.

<a id="return-value"></a>

## Return Value

For convenience, the OpenGL buffer that was retained.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRetain`, but is `NULL` safe.

## See Also

### Functions

- [CVOpenGLBufferCreate](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferAttach](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetAttributes](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.
- [CVOpenGLBufferRelease](cvopenglbufferrelease.md): Deprecated. Releases a Core Video OpenGL buffer.
