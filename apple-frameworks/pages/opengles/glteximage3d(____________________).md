> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glteximage3d(_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/glteximage3d(_:_:_:_:_:_:_:_:_:_:))

# glTexImage3D(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glTexImage3D(_ target: GLenum, _ level: GLint, _ internalformat: GLint, _ width: GLsizei, _ height: GLsizei, _ depth: GLsizei, _ border: GLint, _ format: GLenum, _ type: GLenum, _ pixels: UnsafeRawPointer!)
```

# glTexImage3D (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glTexImage3D(GLenum target, GLint level, GLint internalformat, GLsizei width, GLsizei height, GLsizei depth, GLint border, GLenum format, GLenum type, const GLvoid *pixels);
```
