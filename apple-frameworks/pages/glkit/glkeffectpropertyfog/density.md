> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertyfog/density](https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/density)

# density (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The rate at which the fog exponent increases.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var density: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [mode](mode.md) property is set to [GLKFogMode.linear](../glkfogmode/linear.md).

## See Also

### Fog Properties

- [color](color.md): Deprecated. The color of the fog at maximum density.
- [start](start.md): Deprecated. The minimum distance in eye coordinates before fog is applied to the fragment color.
- [end](end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.

# density (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The rate at which the fog exponent increases.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat density;
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [mode](mode.md) property is set to [GLKFogModeLinear](../glkfogmode/linear.md).

## See Also

### Fog Properties

- [color](color.md): Deprecated. The color of the fog at maximum density.
- [start](start.md): Deprecated. The minimum distance in eye coordinates before fog is applied to the fragment color.
- [end](end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.
