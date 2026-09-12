> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbuffergetattributes(_:)](https://developer.apple.com/documentation/corevideo/cvopenglbuffergetattributes(_:))

# CVOpenGLBufferGetAttributes(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the attributes of a Core Video OpenGL buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferGetAttributes(_ openGLBuffer: CVOpenGLBuffer) -> Unmanaged<CFDictionary>?
```

## Parameters

- `openGLBuffer`: The OpenGL buffer whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the OpenGL buffer attributes, or `NULL` if no attributes exist.

## See Also

### Functions

- [CVOpenGLBufferCreate(\_:\_:\_:\_:\_:)](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferAttach(\_:\_:\_:\_:\_:)](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID()](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.

# CVOpenGLBufferGetAttributes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Obtains the attributes of a Core Video OpenGL buffer.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFDictionaryRefCVOpenGLBufferGetAttributes(CVOpenGLBufferRef openGLBuffer);
```

## Parameters

- `openGLBuffer`: The OpenGL buffer whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the OpenGL buffer attributes, or `NULL` if no attributes exist.

## See Also

### Functions

- [CVOpenGLBufferCreate](cvopenglbuffercreate%28__________%29.md): Deprecated. Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes
- [CVOpenGLBufferAttach](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.
- [CVOpenGLBufferRetain](cvopenglbufferretain.md): Deprecated. Retains a Core Video OpenGL buffer.
- [CVOpenGLBufferRelease](cvopenglbufferrelease.md): Deprecated. Releases a Core Video OpenGL buffer.
