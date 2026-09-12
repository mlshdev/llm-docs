> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glgetactiveuniform(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/glgetactiveuniform(_:_:_:_:_:_:_:))

# glGetActiveUniform(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 3.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glGetActiveUniform(_ program: GLuint, _ index: GLuint, _ bufsize: GLsizei, _ length: UnsafeMutablePointer<GLsizei>!, _ size: UnsafeMutablePointer<GLint>!, _ type: UnsafeMutablePointer<GLenum>!, _ name: UnsafeMutablePointer<GLchar>!)
```

# glGetActiveUniform (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 3.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glGetActiveUniform(GLuint program, GLuint index, GLsizei bufsize, GLsizei *length, GLint *size, GLenum *type, GLchar *name);
```
