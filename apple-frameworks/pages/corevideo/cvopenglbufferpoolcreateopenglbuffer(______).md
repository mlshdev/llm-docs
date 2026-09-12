> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpoolcreateopenglbuffer(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglbufferpoolcreateopenglbuffer(_:_:_:))

# CVOpenGLBufferPoolCreateOpenGLBuffer(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new OpenGL buffer from an OpenGL buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferPoolCreateOpenGLBuffer(_ allocator: CFAllocator?, _ openGLBufferPool: CVOpenGLBufferPool, _ openGLBufferOut: UnsafeMutablePointer<CVOpenGLBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer.  May be `NULL` to specify the default allocator.
- `openGLBufferPool`: The OpenGL buffer pool that should create the new OpenGL buffer.
- `openGLBufferOut`: On output, `OpenGLBufferOut` points to the new OpenGL buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

The function creates a new OpenGL buffer using the OpenGL buffer attributes specified in the [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md) call. This buffer has default attachments as specified in the `openGLBufferAttributes` parameter of [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md) (using either the `kCVBufferPropagatedAttachmentsKey` or `kCVBufferNonPropagatedAttachmentsKey` attributes).

## See Also

### Functions

- [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes(\_:)](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes(\_:)](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID()](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.

# CVOpenGLBufferPoolCreateOpenGLBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new OpenGL buffer from an OpenGL buffer pool.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLBufferPoolCreateOpenGLBuffer(CFAllocatorRef allocator, CVOpenGLBufferPoolRef openGLBufferPool, CVOpenGLBufferRef*openGLBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer.  May be `NULL` to specify the default allocator.
- `openGLBufferPool`: The OpenGL buffer pool that should create the new OpenGL buffer.
- `openGLBufferOut`: On output, `OpenGLBufferOut` points to the new OpenGL buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

The function creates a new OpenGL buffer using the OpenGL buffer attributes specified in the [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md) call. This buffer has default attachments as specified in the `openGLBufferAttributes` parameter of [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md) (using either the `kCVBufferPropagatedAttachmentsKey` or `kCVBufferNonPropagatedAttachmentsKey` attributes).

## See Also

### Functions

- [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
- [CVOpenGLBufferPoolRelease](cvopenglbufferpoolrelease.md): Deprecated. Releases an OpenGL buffer pool.
