> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/spotdirection](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/spotdirection)

# spotDirection (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A vector indicating the direction the spotlight is projecting.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var spotDirection: GLKVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

The default direction is `[0.0, 0.0, -1.0]`.

## See Also

### Configuring Spotlight Properties

- [spotCutoff](spotcutoff.md): Deprecated. The angle in degrees where the spotlight is cut off.
- [spotExponent](spotexponent.md): Deprecated. A value indicating how focused the spotlight is.

# spotDirection (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A vector indicating the direction the spotlight is projecting.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLKVector3 spotDirection;
```

<a id="Discussion"></a>

## Discussion

The default direction is `[0.0, 0.0, -1.0]`.

## See Also

### Configuring Spotlight Properties

- [spotCutoff](spotcutoff.md): Deprecated. The angle in degrees where the spotlight is cut off.
- [spotExponent](spotexponent.md): Deprecated. A value indicating how focused the spotlight is.
