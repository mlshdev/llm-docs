> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glgettransformfeedbackvarying(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/glgettransformfeedbackvarying(_:_:_:_:_:_:_:))

# glGetTransformFeedbackVarying(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glGetTransformFeedbackVarying(_ program: GLuint, _ index: GLuint, _ bufSize: GLsizei, _ length: UnsafeMutablePointer<GLsizei>!, _ size: UnsafeMutablePointer<GLsizei>!, _ type: UnsafeMutablePointer<GLenum>!, _ name: UnsafeMutablePointer<GLchar>!)
```

# glGetTransformFeedbackVarying (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glGetTransformFeedbackVarying(GLuint program, GLuint index, GLsizei bufSize, GLsizei *length, GLsizei *size, GLenum *type, GLchar *name);
```
