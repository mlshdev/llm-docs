> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/constantattenuation](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/constantattenuation)

# constantAttenuation (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A constant factor applied to the attenuation of a point light or spotlight.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var constantAttenuation: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

The distance attenuation factor is calculated as `1.0 / (k0 + k1 * d + k2 * d * d)`, where `d` represents the distance from the light to the point being lit. The [constantAttenuation](constantattenuation.md) property is represented in this calculation as `k0`. The default value is `1.0`.

## See Also

### Configuring Lighting Attenuation

- [linearAttenuation](linearattenuation.md): Deprecated. A linear factor applied to the attenuation of a point light or spotlight.
- [quadraticAttenuation](quadraticattenuation.md): Deprecated. A quadratic factor applied to the attenuation of a point light or spotlight.

# constantAttenuation (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A constant factor applied to the attenuation of a point light or spotlight.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat constantAttenuation;
```

<a id="Discussion"></a>

## Discussion

The distance attenuation factor is calculated as `1.0 / (k0 + k1 * d + k2 * d * d)`, where `d` represents the distance from the light to the point being lit. The [constantAttenuation](constantattenuation.md) property is represented in this calculation as `k0`. The default value is `1.0`.

## See Also

### Configuring Lighting Attenuation

- [linearAttenuation](linearattenuation.md): Deprecated. A linear factor applied to the attenuation of a point light or spotlight.
- [quadraticAttenuation](quadraticattenuation.md): Deprecated. A quadratic factor applied to the attenuation of a point light or spotlight.
