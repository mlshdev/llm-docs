> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/enabled](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/enabled)

# enabled (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether calculations should be performed on this light.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var enabled: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of [enabled](enabled.md) is `GL_TRUE`, then lighting calculations are performed for this light. If the value is `GL_FALSE`, this light is skipped when computing the fragment color.

## See Also

### Configuring Common Lighting Properties

- [position](position.md): Deprecated. The position of the light in world coordinates.
- [transform](transform.md): Deprecated. A transform applied to the light’s position and direction before calculating the contribution of the light.

# enabled (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether calculations should be performed on this light.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean enabled;
```

<a id="Discussion"></a>

## Discussion

If the value of [enabled](enabled.md) is `GL_TRUE`, then lighting calculations are performed for this light. If the value is `GL_FALSE`, this light is skipped when computing the fragment color.

## See Also

### Configuring Common Lighting Properties

- [position](position.md): Deprecated. The position of the light in world coordinates.
- [transform](transform.md): Deprecated. A transform applied to the light’s position and direction before calculating the contribution of the light.
