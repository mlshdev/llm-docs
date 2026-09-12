> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvopenglbufferpoolmaximumbufferagekey](https://developer.apple.com/documentation/corevideo/kcvopenglbufferpoolmaximumbufferagekey)

# kCVOpenGLBufferPoolMaximumBufferAgeKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
let kCVOpenGLBufferPoolMaximumBufferAgeKey: CFString
```

## See Also

### Constants

- [kCVOpenGLBufferPoolMinimumBufferCountKey](kcvopenglbufferpoolminimumbuffercountkey.md): Deprecated. The minimum number of buffers to be kept in the pool (type `CFNumber`).

# kCVOpenGLBufferPoolMaximumBufferAgeKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFStringRef const kCVOpenGLBufferPoolMaximumBufferAgeKey;
```

## See Also

### Constants

- [kCVOpenGLBufferPoolMinimumBufferCountKey](kcvopenglbufferpoolminimumbuffercountkey.md): Deprecated. The minimum number of buffers to be kept in the pool (type `CFNumber`).
