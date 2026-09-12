> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/quadraticattenuation](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/quadraticattenuation)

# quadraticAttenuation (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A quadratic factor applied to the attenuation of a point light or spotlight.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var quadraticAttenuation: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

The distance attenuation factor is calculated as `1.0 / (k0 + k1 * d + k2 * d * d)`, where `d` represents the distance from the light to the point being lit. The [quadraticAttenuation](quadraticattenuation.md) property is represented in this calculation as `k2`. The default value is `0.0`.

## See Also

### Configuring Lighting Attenuation

- [constantAttenuation](constantattenuation.md): Deprecated. A constant factor applied to the attenuation of a point light or spotlight.
- [linearAttenuation](linearattenuation.md): Deprecated. A linear factor applied to the attenuation of a point light or spotlight.

# quadraticAttenuation (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A quadratic factor applied to the attenuation of a point light or spotlight.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat quadraticAttenuation;
```

<a id="Discussion"></a>

## Discussion

The distance attenuation factor is calculated as `1.0 / (k0 + k1 * d + k2 * d * d)`, where `d` represents the distance from the light to the point being lit. The [quadraticAttenuation](quadraticattenuation.md) property is represented in this calculation as `k2`. The default value is `0.0`.

## See Also

### Configuring Lighting Attenuation

- [constantAttenuation](constantattenuation.md): Deprecated. A constant factor applied to the attenuation of a point light or spotlight.
- [linearAttenuation](linearattenuation.md): Deprecated. A linear factor applied to the attenuation of a point light or spotlight.
