> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/transform](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/transform)

# transform (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A transform applied to the light’s position and direction before calculating the contribution of the light.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var transform: GLKEffectPropertyTransform { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is the identity matrix.

## See Also

### Configuring Common Lighting Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether calculations should be performed on this light.
- [position](position.md): Deprecated. The position of the light in world coordinates.

# transform (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A transform applied to the light’s position and direction before calculating the contribution of the light.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, retain) GLKEffectPropertyTransform * transform;
```

<a id="Discussion"></a>

## Discussion

The default value is the identity matrix.

## See Also

### Configuring Common Lighting Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether calculations should be performed on this light.
- [position](position.md): Deprecated. The position of the light in world coordinates.
