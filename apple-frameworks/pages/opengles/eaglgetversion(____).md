> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglgetversion(_:_:)](https://developer.apple.com/documentation/opengles/eaglgetversion(_:_:))

# EAGLGetVersion(\_:\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Retrieves the version information for the EAGL implementation.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func EAGLGetVersion(_ major: UnsafeMutablePointer<UInt32>, _ minor: UnsafeMutablePointer<UInt32>)
```

## Parameters

- `major`: On output, the major version of the EAGL implementation.
- `minor`: On output, the minor version of the EAGL implementation.

<a id="Discussion"></a>

## Discussion

If `major` and `minor` parameters are not `nil`, they return the major and minor version number of the EAGL implementation, respectively.

# EAGLGetVersion (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Retrieves the version information for the EAGL implementation.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern void EAGLGetVersion(unsigned int *major, unsigned int *minor);
```

## Parameters

- `major`: On output, the major version of the EAGL implementation.
- `minor`: On output, the minor version of the EAGL implementation.

<a id="Discussion"></a>

## Discussion

If `major` and `minor` parameters are not `nil`, they return the major and minor version number of the EAGL implementation, respectively.
