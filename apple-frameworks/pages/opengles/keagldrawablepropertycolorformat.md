> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/opengles/keagldrawablepropertycolorformat

# kEAGLDrawablePropertyColorFormat (Swift)

**Framework:** OpenGL ES  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The key specifying the internal color buffer format for the drawable surface. The value for this key is an `NSString` object that specifies a specific color buffer format. This color buffer format is used by the `EAGLContext` object to create the storage for a renderbuffer. The default value is `kEAGLColorFormatRGBA8`.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
let kEAGLDrawablePropertyColorFormat: String
```

# kEAGLDrawablePropertyColorFormat (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The key specifying the internal color buffer format for the drawable surface. The value for this key is an `NSString` object that specifies a specific color buffer format. This color buffer format is used by the `EAGLContext` object to create the storage for a renderbuffer. The default value is `kEAGLColorFormatRGBA8`.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern NSString * const kEAGLDrawablePropertyColorFormat;
```
