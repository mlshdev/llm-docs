> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/spotcutoff](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/spotcutoff)

# spotCutoff (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The angle in degrees where the spotlight is cut off.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var spotCutoff: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the `w` component of the position is not equal to `0.0`, the value of the [spotCutoff](spotcutoff.md) property determines whether the light is a point light or a spotlight. A cutoff value of `180.0` indicates that the light is a point light; for a point light, the [spotDirection](spotdirection.md) and [spotExponent](spotexponent.md) properties are ignored. Otherwise, the [spotCutoff](spotcutoff.md) property represents the maximum angle at which the light contributes lighting to the scene. The angle is measured between the vector provided by the [spotDirection](spotdirection.md) property and a vector drawn from the light’s position to the point being lit. If the angle exceeds this amount, then the light contributes no light to the scene.

The default value is `180.0`.

## See Also

### Configuring Spotlight Properties

- [spotDirection](spotdirection.md): Deprecated. A vector indicating the direction the spotlight is projecting.
- [spotExponent](spotexponent.md): Deprecated. A value indicating how focused the spotlight is.

# spotCutoff (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The angle in degrees where the spotlight is cut off.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat spotCutoff;
```

<a id="Discussion"></a>

## Discussion

If the `w` component of the position is not equal to `0.0`, the value of the [spotCutoff](spotcutoff.md) property determines whether the light is a point light or a spotlight. A cutoff value of `180.0` indicates that the light is a point light; for a point light, the [spotDirection](spotdirection.md) and [spotExponent](spotexponent.md) properties are ignored. Otherwise, the [spotCutoff](spotcutoff.md) property represents the maximum angle at which the light contributes lighting to the scene. The angle is measured between the vector provided by the [spotDirection](spotdirection.md) property and a vector drawn from the light’s position to the point being lit. If the angle exceeds this amount, then the light contributes no light to the scene.

The default value is `180.0`.

## See Also

### Configuring Spotlight Properties

- [spotDirection](spotdirection.md): Deprecated. A vector indicating the direction the spotlight is projecting.
- [spotExponent](spotexponent.md): Deprecated. A value indicating how focused the spotlight is.
