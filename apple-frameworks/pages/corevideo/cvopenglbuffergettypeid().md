> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbuffergettypeid()](https://developer.apple.com/documentation/corevideo/cvopenglbuffergettypeid())

# CVOpenGLBufferGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation type ID for the OpenGL buffer type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this data type.

## See Also

### Functions

- [CVOpenGLBufferCreate(\_:\_:\_:\_:\_:)](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferAttach(\_:\_:\_:\_:\_:)](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetAttributes(\_:)](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.

# CVOpenGLBufferGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the Core Foundation type ID for the OpenGL buffer type.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFTypeID CVOpenGLBufferGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this data type.

## See Also

### Functions

- [CVOpenGLBufferCreate](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferAttach](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetAttributes](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferRetain](cvopenglbufferretain.md): Deprecated. Retains a Core Video OpenGL buffer.
- [CVOpenGLBufferRelease](cvopenglbufferrelease.md): Deprecated. Releases a Core Video OpenGL buffer.
