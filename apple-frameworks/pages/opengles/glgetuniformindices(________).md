> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glgetuniformindices(_:_:_:_:)](https://developer.apple.com/documentation/opengles/glgetuniformindices(_:_:_:_:))

# glGetUniformIndices(\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glGetUniformIndices(_ program: GLuint, _ uniformCount: GLsizei, _ uniformNames: UnsafePointer<UnsafePointer<GLchar>?>!, _ uniformIndices: UnsafeMutablePointer<GLuint>!)
```

# glGetUniformIndices (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glGetUniformIndices(GLuint program, GLsizei uniformCount, const GLchar * const*uniformNames, GLuint *uniformIndices);
```
