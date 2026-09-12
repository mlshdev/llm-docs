> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpoolcreate(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglbufferpoolcreate(_:_:_:_:))

# CVOpenGLBufferPoolCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new OpenGL buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferPoolCreate(_ allocator: CFAllocator?, _ poolAttributes: CFDictionary?, _ openGLBufferAttributes: CFDictionary?, _ poolOut: UnsafeMutablePointer<CVOpenGLBufferPool?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for allocating this buffer pool. Pass `NULL` to specify the default allocator.
- `poolAttributes`: A Core Foundation dictionary containing the attributes to be used for the pool itself.
- `openGLBufferAttributes`: A Core Foundation dictionary containing the attributes to be used for creating new OpenGL buffers within the pool.
- `poolOut`: On output, `poolOut` points to the new OpenGL buffer pool.

<a id="return-value"></a>

## Return Value

A Core Video result code. See[Core Video Constants](core-video-constants.md) for possible values.

## See Also

### Functions

- [CVOpenGLBufferPoolCreateOpenGLBuffer(\_:\_:\_:)](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes(\_:)](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes(\_:)](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID()](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.

# CVOpenGLBufferPoolCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new OpenGL buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLBufferPoolCreate(CFAllocatorRef allocator, CFDictionaryRef poolAttributes, CFDictionaryRef openGLBufferAttributes, CVOpenGLBufferPoolRef*poolOut);
```

## Parameters

- `allocator`: The allocator to use for allocating this buffer pool. Pass `NULL` to specify the default allocator.
- `poolAttributes`: A Core Foundation dictionary containing the attributes to be used for the pool itself.
- `openGLBufferAttributes`: A Core Foundation dictionary containing the attributes to be used for creating new OpenGL buffers within the pool.
- `poolOut`: On output, `poolOut` points to the new OpenGL buffer pool.

<a id="return-value"></a>

## Return Value

A Core Video result code. See[Core Video Constants](core-video-constants.md) for possible values.

## See Also

### Functions

- [CVOpenGLBufferPoolCreateOpenGLBuffer](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
- [CVOpenGLBufferPoolRelease](cvopenglbufferpoolrelease.md): Deprecated. Releases an OpenGL buffer pool.
