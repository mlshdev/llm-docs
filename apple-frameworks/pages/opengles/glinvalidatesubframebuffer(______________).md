> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/glinvalidatesubframebuffer(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opengles/glinvalidatesubframebuffer(_:_:_:_:_:_:_:))

# glInvalidateSubFramebuffer(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func glInvalidateSubFramebuffer(_ target: GLenum, _ numAttachments: GLsizei, _ attachments: UnsafePointer<GLenum>!, _ x: GLint, _ y: GLint, _ width: GLsizei, _ height: GLsizei)
```

# glInvalidateSubFramebuffer (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void glInvalidateSubFramebuffer(GLenum target, GLsizei numAttachments, const GLenum *attachments, GLint x, GLint y, GLsizei width, GLsizei height);
```
