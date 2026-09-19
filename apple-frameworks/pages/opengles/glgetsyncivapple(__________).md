> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/opengles/glgetsyncivapple(_:_:_:_:_:)

# glGetSyncivAPPLE(\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glGetSyncivAPPLE(_ sync: GLsync!, _ pname: GLenum, _ bufSize: GLsizei, _ length: UnsafeMutablePointer<GLsizei>!, _ values: UnsafeMutablePointer<GLint>!)
```

# glGetSyncivAPPLE (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glGetSyncivAPPLE(GLsync sync, GLenum pname, GLsizei bufSize, GLsizei *length, GLint *values);
```
