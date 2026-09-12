> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvopenglestexturecachemaximumtextureagekey](https://developer.apple.com/documentation/corevideo/kcvopenglestexturecachemaximumtextureagekey)

# kCVOpenGLESTextureCacheMaximumTextureAgeKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

By default, textures will age out after one second. Setting a maximum texture age of zero will disable the age-out mechanism completely. The [CVOpenGLESTextureCacheFlush(\_:\_:)](cvopenglestexturecacheflush%28____%29.md) function can be used to force eviction in either case.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
let kCVOpenGLESTextureCacheMaximumTextureAgeKey: CFString
```

# kCVOpenGLESTextureCacheMaximumTextureAgeKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

By default, textures will age out after one second. Setting a maximum texture age of zero will disable the age-out mechanism completely. The [CVOpenGLESTextureCacheFlush](cvopenglestexturecacheflush%28____%29.md) function can be used to force eviction in either case.

> OpenGL/OpenGLES is no longer supported. Use Metal APIs instead. (Define COREVIDEO_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CFStringRef const kCVOpenGLESTextureCacheMaximumTextureAgeKey;
```
