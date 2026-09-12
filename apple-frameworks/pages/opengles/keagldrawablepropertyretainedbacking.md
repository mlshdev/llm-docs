> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/keagldrawablepropertyretainedbacking](https://developer.apple.com/documentation/opengles/keagldrawablepropertyretainedbacking)

# kEAGLDrawablePropertyRetainedBacking (Swift)

**Framework:** OpenGL ES  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The key specifying whether the drawable surface retains its contents after displaying them.  The value for this key is an `NSNumber` object containing a `BOOL` data type. If `false`, you may not rely on the contents being the same after the contents are displayed.  If `true`, then the contents will not change after being displayed. Setting the value to `true` is recommended only when you need the content to remain unchanged, as using it can result in both reduced performance and additional memory usage. The default value is `false`.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
let kEAGLDrawablePropertyRetainedBacking: String
```

# kEAGLDrawablePropertyRetainedBacking (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The key specifying whether the drawable surface retains its contents after displaying them.  The value for this key is an `NSNumber` object containing a `BOOL` data type. If `false`, you may not rely on the contents being the same after the contents are displayed.  If `true`, then the contents will not change after being displayed. Setting the value to `true` is recommended only when you need the content to remain unchanged, as using it can result in both reduced performance and additional memory usage. The default value is `false`.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern NSString * const kEAGLDrawablePropertyRetainedBacking;
```
