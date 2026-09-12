> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertyfog](https://developer.apple.com/documentation/glkit/glkeffectpropertyfog)

# GLKEffectPropertyFog (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Fog drawing information for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKEffectPropertyFog
```

<a id="overview"></a>

## Overview

These properties are specifically designed to mimic the fog calculations provided by OpenGL ES 1.1.

When fog is enabled, the fog component is calculated and clamped to a range from `0.0` to `1.0`. Then, the fog value is used as a blending factor between the computed fragment color and the fog color.

## Topics

### Enabling Fog

- [enabled](glkeffectpropertyfog/enabled.md): Deprecated. A Boolean value that indicates whether fog is applied to the fragment color.

### Choosing the Fog Mode

- [mode](glkeffectpropertyfog/mode.md): Deprecated. The algorithm used to compute the density of the fog applied to the fragment color.

### Fog Properties

- [color](glkeffectpropertyfog/color.md): Deprecated. The color of the fog at maximum density.
- [density](glkeffectpropertyfog/density.md): Deprecated. The rate at which the fog exponent increases.
- [start](glkeffectpropertyfog/start.md): Deprecated. The minimum distance in eye coordinates before fog is applied to the fragment color.
- [end](glkeffectpropertyfog/end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.

### Constants

- [GLKFogMode](glkfogmode.md): A mode that describes how the fog component is calculated for the fragment.

## Relationships

### Inherits From

- [GLKEffectProperty](glkeffectproperty.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)

# GLKEffectPropertyFog (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Fog drawing information for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKEffectPropertyFog : GLKEffectProperty
```

<a id="overview"></a>

## Overview

These properties are specifically designed to mimic the fog calculations provided by OpenGL ES 1.1.

When fog is enabled, the fog component is calculated and clamped to a range from `0.0` to `1.0`. Then, the fog value is used as a blending factor between the computed fragment color and the fog color.

## Topics

### Enabling Fog

- [enabled](glkeffectpropertyfog/enabled.md): Deprecated. A Boolean value that indicates whether fog is applied to the fragment color.

### Choosing the Fog Mode

- [mode](glkeffectpropertyfog/mode.md): Deprecated. The algorithm used to compute the density of the fog applied to the fragment color.

### Fog Properties

- [color](glkeffectpropertyfog/color.md): Deprecated. The color of the fog at maximum density.
- [density](glkeffectpropertyfog/density.md): Deprecated. The rate at which the fog exponent increases.
- [start](glkeffectpropertyfog/start.md): Deprecated. The minimum distance in eye coordinates before fog is applied to the fragment color.
- [end](glkeffectpropertyfog/end.md): Deprecated. The distance in eye coordinates where fog completely covers the color fragment.

### Constants

- [GLKFogMode](glkfogmode.md): A mode that describes how the fog component is calculated for the fragment.

## Relationships

### Inherits From

- [GLKEffectProperty](glkeffectproperty.md)

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)
