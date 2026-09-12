> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontroller/pauseonwillresignactive](https://developer.apple.com/documentation/glkit/glkviewcontroller/pauseonwillresignactive)

# pauseOnWillResignActive (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var pauseOnWillResignActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your application sets this to [false](https://developer.apple.com/documentation/swift/false), it must explicitly set the [isPaused](ispaused.md) property to [true](https://developer.apple.com/documentation/swift/true) when the application resigns the active state.

## See Also

### Controlling Frame Updates

- [isPaused](ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [resumeOnDidBecomeActive](resumeondidbecomeactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.

# pauseOnWillResignActive (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) BOOL pauseOnWillResignActive;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your application sets this to [false](https://developer.apple.com/documentation/swift/false), it must explicitly set the [paused](ispaused.md) property to [true](https://developer.apple.com/documentation/swift/true) when the application resigns the active state.

## See Also

### Controlling Frame Updates

- [paused](ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [resumeOnDidBecomeActive](resumeondidbecomeactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.
