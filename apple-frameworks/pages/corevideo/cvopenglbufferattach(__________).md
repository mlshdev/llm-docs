> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferattach(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglbufferattach(_:_:_:_:_:))

# CVOpenGLBufferAttach(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Attaches an OpenGL context to a Core Video OpenGL buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferAttach(_ openGLBuffer: CVOpenGLBuffer, _ cglContext: CGLContextObj, _ face: GLenum, _ level: GLint, _ screen: GLint) -> CVReturn
```

## Parameters

- `openGLBuffer`: The buffer you want to attach an OpenGL context to.
- `cglContext`: The OpenGL context you want to attach.
- `face`: The OpenGL face enumeration (`0` for non-cube maps.)
- `level`: The mipmap level for drawing in the OpenGL context. This value cannot exceed the maximum mipmap level for this buffer.
- `screen`: The virtual screen number you want to use for this context.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Functions

- [CVOpenGLBufferCreate(\_:\_:\_:\_:\_:)](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferGetAttributes(\_:)](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID()](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.

# CVOpenGLBufferAttach (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Attaches an OpenGL context to a Core Video OpenGL buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLBufferAttach(CVOpenGLBufferRef openGLBuffer, CGLContextObj cglContext, GLenum face, GLint level, GLint screen);
```

## Parameters

- `openGLBuffer`: The buffer you want to attach an OpenGL context to.
- `cglContext`: The OpenGL context you want to attach.
- `face`: The OpenGL face enumeration (`0` for non-cube maps.)
- `level`: The mipmap level for drawing in the OpenGL context. This value cannot exceed the maximum mipmap level for this buffer.
- `screen`: The virtual screen number you want to use for this context.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Functions

- [CVOpenGLBufferCreate](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferGetAttributes](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.
- [CVOpenGLBufferRetain](cvopenglbufferretain.md): Deprecated. Retains a Core Video OpenGL buffer.
- [CVOpenGLBufferRelease](cvopenglbufferrelease.md): Deprecated. Releases a Core Video OpenGL buffer.
