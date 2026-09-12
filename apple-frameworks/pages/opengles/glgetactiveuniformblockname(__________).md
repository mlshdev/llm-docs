> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glgetactiveuniformblockname(_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/glgetactiveuniformblockname(_:_:_:_:_:))

# glGetActiveUniformBlockName(\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glGetActiveUniformBlockName(_ program: GLuint, _ uniformBlockIndex: GLuint, _ bufSize: GLsizei, _ length: UnsafeMutablePointer<GLsizei>!, _ uniformBlockName: UnsafeMutablePointer<GLchar>!)
```

# glGetActiveUniformBlockName (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glGetActiveUniformBlockName(GLuint program, GLuint uniformBlockIndex, GLsizei bufSize, GLsizei *length, GLchar *uniformBlockName);
```
