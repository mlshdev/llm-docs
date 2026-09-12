> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/spotexponent](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/spotexponent)

# spotExponent (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A value indicating how focused the spotlight is.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var spotExponent: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

The higher the value stored in the [spotExponent](spotexponent.md) property, the tighter the focus of the spotlight. The default value is `0.0`.

## See Also

### Configuring Spotlight Properties

- [spotCutoff](spotcutoff.md): Deprecated. The angle in degrees where the spotlight is cut off.
- [spotDirection](spotdirection.md): Deprecated. A vector indicating the direction the spotlight is projecting.

# spotExponent (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A value indicating how focused the spotlight is.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat spotExponent;
```

<a id="Discussion"></a>

## Discussion

The higher the value stored in the [spotExponent](spotexponent.md) property, the tighter the focus of the spotlight. The default value is `0.0`.

## See Also

### Configuring Spotlight Properties

- [spotCutoff](spotcutoff.md): Deprecated. The angle in degrees where the spotlight is cut off.
- [spotDirection](spotdirection.md): Deprecated. A vector indicating the direction the spotlight is projecting.
