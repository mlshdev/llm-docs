> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytransform](https://developer.apple.com/documentation/glkit/glkeffectpropertytransform)

# GLKEffectPropertyTransform (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Coordinate transform information for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKEffectPropertyTransform
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyTransform](glkeffectpropertytransform.md) class defines properties that provide the coordinate transformations to be performed when rendering the effect.

## Topics

### Configuring Modelview Properties

- [modelviewMatrix](glkeffectpropertytransform/modelviewmatrix.md): Deprecated. The matrix used to transform position coordinates from world space to eye space.
- [normalMatrix](glkeffectpropertytransform/normalmatrix.md): Deprecated. The matrix used to transform normal coordinates from world space to eye space.

### Configuring the Projection Matrix

- [projectionMatrix](glkeffectpropertytransform/projectionmatrix.md): Deprecated. The matrix used to transform position coordinates from eye space to projection space.

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
- [GLKEffectPropertyFog](glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)

# GLKEffectPropertyTransform (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Coordinate transform information for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKEffectPropertyTransform : GLKEffectProperty
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyTransform](glkeffectpropertytransform.md) class defines properties that provide the coordinate transformations to be performed when rendering the effect.

## Topics

### Configuring Modelview Properties

- [modelviewMatrix](glkeffectpropertytransform/modelviewmatrix.md): Deprecated. The matrix used to transform position coordinates from world space to eye space.
- [normalMatrix](glkeffectpropertytransform/normalmatrix.md): Deprecated. The matrix used to transform normal coordinates from world space to eye space.

### Configuring the Projection Matrix

- [projectionMatrix](glkeffectpropertytransform/projectionmatrix.md): Deprecated. The matrix used to transform position coordinates from eye space to projection space.

## Relationships

### Inherits From

- [GLKEffectProperty](glkeffectproperty.md)

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)
