> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontroller/resumeondidbecomeactive](https://developer.apple.com/documentation/glkit/glkviewcontroller/resumeondidbecomeactive)

# resumeOnDidBecomeActive (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var resumeOnDidBecomeActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your application sets this to [false](https://developer.apple.com/documentation/swift/false), it must explicitly set the [isPaused](ispaused.md) property to [false](https://developer.apple.com/documentation/swift/false) when the application becomes active.

## See Also

### Controlling Frame Updates

- [isPaused](ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [pauseOnWillResignActive](pauseonwillresignactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.

# resumeOnDidBecomeActive (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) BOOL resumeOnDidBecomeActive;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your application sets this to [false](https://developer.apple.com/documentation/swift/false), it must explicitly set the [paused](ispaused.md) property to [false](https://developer.apple.com/documentation/swift/false) when the application becomes active.

## See Also

### Controlling Frame Updates

- [paused](ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [pauseOnWillResignActive](pauseonwillresignactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.
