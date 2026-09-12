> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertylight/position](https://developer.apple.com/documentation/glkit/glkeffectpropertylight/position)

# position (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The position of the light in world coordinates.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var position: GLKVector4 { get set }
```

<a id="Discussion"></a>

## Discussion

If the `w` component of the position is `0.0`, the light is calculated using the directional light formula. The `x`, `y`, and `z` components of the vector specify the direction the light shines. The light is assumed to be infinitely far away; attenuation and spotlight properties are ignored.

If the `w` component of the position is a non-zero value, the coordinates specify the position of the light in homogenous coordinates, and the light is either calculated as a point light or a spotlight, depending on the value of the [spotCutoff](spotcutoff.md) property.

The default value is `[0.0, 0.0, 1.0, 0.0]`.

## See Also

### Configuring Common Lighting Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether calculations should be performed on this light.
- [transform](transform.md): Deprecated. A transform applied to the light’s position and direction before calculating the contribution of the light.

# position (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The position of the light in world coordinates.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLKVector4 position;
```

<a id="Discussion"></a>

## Discussion

If the `w` component of the position is `0.0`, the light is calculated using the directional light formula. The `x`, `y`, and `z` components of the vector specify the direction the light shines. The light is assumed to be infinitely far away; attenuation and spotlight properties are ignored.

If the `w` component of the position is a non-zero value, the coordinates specify the position of the light in homogenous coordinates, and the light is either calculated as a point light or a spotlight, depending on the value of the [spotCutoff](spotcutoff.md) property.

The default value is `[0.0, 0.0, 1.0, 0.0]`.

## See Also

### Configuring Common Lighting Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether calculations should be performed on this light.
- [transform](transform.md): Deprecated. A transform applied to the light’s position and direction before calculating the contribution of the light.
