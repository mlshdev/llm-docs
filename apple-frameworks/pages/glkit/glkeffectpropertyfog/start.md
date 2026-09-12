> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertyfog/start](https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/start)

# start (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The minimum distance in eye coordinates before fog is applied to the fragment color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var start: GLfloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [mode](mode.md) property is set to [GLKFogMode.exp](../glkfogmode/exp.md) or [GLKFogMode.exp2](../glkfogmode/exp2.md).

## See Also

### Fog Properties

- [color](color.md): Deprecated. The color of the fog at maximum density.
- [density](density.md): Deprecated. The rate at which the fog exponent increases.
- [end](end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.

# start (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The minimum distance in eye coordinates before fog is applied to the fragment color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLfloat start;
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [mode](mode.md) property is set to [GLKFogModeExp](../glkfogmode/exp.md) or [GLKFogModeExp2](../glkfogmode/exp2.md).

## See Also

### Fog Properties

- [color](color.md): Deprecated. The color of the fog at maximum density.
- [density](density.md): Deprecated. The rate at which the fog exponent increases.
- [end](end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.
