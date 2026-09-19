> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/kcvopenglbufferpoolminimumbuffercountkey

# kCVOpenGLBufferPoolMinimumBufferCountKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The minimum number of buffers to be kept in the pool (type `CFNumber`).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
let kCVOpenGLBufferPoolMinimumBufferCountKey: CFString
```

## See Also

### Constants

- [kCVOpenGLBufferPoolMaximumBufferAgeKey](kcvopenglbufferpoolmaximumbufferagekey.md): Deprecated. The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).

# kCVOpenGLBufferPoolMinimumBufferCountKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The minimum number of buffers to be kept in the pool (type `CFNumber`).

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFStringRef const kCVOpenGLBufferPoolMinimumBufferCountKey;
```

## See Also

### Constants

- [kCVOpenGLBufferPoolMaximumBufferAgeKey](kcvopenglbufferpoolmaximumbufferagekey.md): Deprecated. The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).
