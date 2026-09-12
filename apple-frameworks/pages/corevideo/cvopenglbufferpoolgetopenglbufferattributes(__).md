> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpoolgetopenglbufferattributes(_:)](https://developer.apple.com/documentation/corevideo/cvopenglbufferpoolgetopenglbufferattributes(_:))

# CVOpenGLBufferPoolGetOpenGLBufferAttributes(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the attributes of OpenGL buffers that will be created from a buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferPoolGetOpenGLBufferAttributes(_ pool: CVOpenGLBufferPool) -> Unmanaged<CFDictionary>?
```

## Parameters

- `pool`: The OpenGL buffer pool containing the attributes to be retrieved.

<a id="return-value"></a>

## Return Value

The OpenGL buffer attributes Core Foundation dictionary, or `NULL` on failure.

<a id="Discussion"></a>

## Discussion

You can use this function to obtain information about the OpenGL buffers that will be created from the buffer pool.

## See Also

### Functions

- [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer(\_:\_:\_:)](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes(\_:)](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetTypeID()](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.

# CVOpenGLBufferPoolGetOpenGLBufferAttributes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the attributes of OpenGL buffers that will be created from a buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFDictionaryRefCVOpenGLBufferPoolGetOpenGLBufferAttributes(CVOpenGLBufferPoolRef pool);
```

## Parameters

- `pool`: The OpenGL buffer pool containing the attributes to be retrieved.

<a id="return-value"></a>

## Return Value

The OpenGL buffer attributes Core Foundation dictionary, or `NULL` on failure.

<a id="Discussion"></a>

## Discussion

You can use this function to obtain information about the OpenGL buffers that will be created from the buffer pool.

## See Also

### Functions

- [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetTypeID](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
- [CVOpenGLBufferPoolRelease](cvopenglbufferpoolrelease.md): Deprecated. Releases an OpenGL buffer pool.
