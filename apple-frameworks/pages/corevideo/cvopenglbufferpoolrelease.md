> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpoolrelease](https://developer.apple.com/documentation/corevideo/cvopenglbufferpoolrelease)

# CVOpenGLBufferPoolRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Releases an OpenGL buffer pool.

## Declaration

```objectivec
extern void CVOpenGLBufferPoolRelease(CVOpenGLBufferPoolRef openGLBufferPool);
```

## Parameters

- `openGLBufferPool`: The OpenGL buffer pool that you want to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRelease`, but is `NULL` safe.

## See Also

### Functions

- [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
