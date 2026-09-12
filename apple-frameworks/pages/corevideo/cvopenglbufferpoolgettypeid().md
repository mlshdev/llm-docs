> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpoolgettypeid()](https://developer.apple.com/documentation/corevideo/cvopenglbufferpoolgettypeid())

# CVOpenGLBufferPoolGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation ID for the OpenGL buffer pool type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferPoolGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this data type.

## See Also

### Functions

- [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer(\_:\_:\_:)](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes(\_:)](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes(\_:)](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.

# CVOpenGLBufferPoolGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation ID for the OpenGL buffer pool type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLBufferPoolGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this data type.

## See Also

### Functions

- [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
- [CVOpenGLBufferPoolRelease](cvopenglbufferpoolrelease.md): Deprecated. Releases an OpenGL buffer pool.
