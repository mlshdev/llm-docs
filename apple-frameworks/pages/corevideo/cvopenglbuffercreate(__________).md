> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbuffercreate(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvopenglbuffercreate(_:_:_:_:_:))

# CVOpenGLBufferCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func CVOpenGLBufferCreate(_ allocator: CFAllocator?, _ width: Int, _ height: Int, _ attributes: CFDictionary?, _ bufferOut: UnsafeMutablePointer<CVOpenGLBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use to create the Core Video OpenGL buffer. Pass `NULL` to specify the default allocator.
- `width`: The width of the buffer in pixels.
- `height`: The height of the buffer in pixels.
- `attributes`: A Core Foundation dictionary containing other desired attributes of the buffer (texture target, internal format, max mipmap level, etc.). May be `NULL`. The following attribute values are assumed if you do not explicitly define them:

  - `kCVOpenGLBufferTarget` = `GL_TEXTURE_RECTANGLE_EXT`
  - `kCVOpenGLBufferInternalFormat` = `GL_RGBA`
  - `kCVOpenGLBufferMaximumMipmapLevel` = 0
- `bufferOut`: On output, `bufferOut` points to the newly created OpenGL buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

## See Also

### Functions

- [CVOpenGLBufferAttach(\_:\_:\_:\_:\_:)](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetAttributes(\_:)](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID()](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.

# CVOpenGLBufferCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Creates a new Core Video OpenGL buffer that can be used for OpenGL rendering purposes

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CVReturn CVOpenGLBufferCreate(CFAllocatorRef allocator, size_t width, size_t height, CFDictionaryRef attributes, CVOpenGLBufferRef*bufferOut);
```

## Parameters

- `allocator`: The allocator to use to create the Core Video OpenGL buffer. Pass `NULL` to specify the default allocator.
- `width`: The width of the buffer in pixels.
- `height`: The height of the buffer in pixels.
- `attributes`: A Core Foundation dictionary containing other desired attributes of the buffer (texture target, internal format, max mipmap level, etc.). May be `NULL`. The following attribute values are assumed if you do not explicitly define them:

  - `kCVOpenGLBufferTarget` = `GL_TEXTURE_RECTANGLE_EXT`
  - `kCVOpenGLBufferInternalFormat` = `GL_RGBA`
  - `kCVOpenGLBufferMaximumMipmapLevel` = 0
- `bufferOut`: On output, `bufferOut` points to the newly created OpenGL buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

## See Also

### Functions

- [CVOpenGLBufferAttach](cvopenglbufferattach%28__________%29.md): Deprecated. Attaches an OpenGL context to a Core Video OpenGL buffer.
- [CVOpenGLBufferGetAttributes](cvopenglbuffergetattributes%28__%29.md): Deprecated. Obtains the attributes of a Core Video OpenGL buffer.
- [CVOpenGLBufferGetTypeID](cvopenglbuffergettypeid%28%29.md): Deprecated. Obtains the Core Foundation type ID for the OpenGL buffer type.
- [CVOpenGLBufferRetain](cvopenglbufferretain.md): Deprecated. Retains a Core Video OpenGL buffer.
- [CVOpenGLBufferRelease](cvopenglbufferrelease.md): Deprecated. Releases a Core Video OpenGL buffer.
