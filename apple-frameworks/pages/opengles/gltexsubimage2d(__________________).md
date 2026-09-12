> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/gltexsubimage2d(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/gltexsubimage2d(_:_:_:_:_:_:_:_:_:))

# glTexSubImage2D(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 3.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glTexSubImage2D(_ target: GLenum, _ level: GLint, _ xoffset: GLint, _ yoffset: GLint, _ width: GLsizei, _ height: GLsizei, _ format: GLenum, _ type: GLenum, _ pixels: UnsafeRawPointer!)
```

# glTexSubImage2D (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 3.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glTexSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLsizei width, GLsizei height, GLenum format, GLenum type, const GLvoid *pixels);
```
