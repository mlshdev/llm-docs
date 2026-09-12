> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertymaterial](https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial)

# GLKEffectPropertyMaterial (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Surface appearance properties for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKEffectPropertyMaterial
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md) class defines properties used to configure the characteristics of the surface being lit. The material properties for an effect interact with light properties on the same effect to determine how that surface is lit within the scene. The behavior of this class matches the material properties and lighting calculations defined in the OpenGL ES 1.1 specification.

## Topics

### Material Properties

- [ambientColor](glkeffectpropertymaterial/ambientcolor.md): Deprecated. The ambient color of the material.
- [diffuseColor](glkeffectpropertymaterial/diffusecolor.md): Deprecated. The diffuse color of the material.
- [emissiveColor](glkeffectpropertymaterial/emissivecolor.md): Deprecated. The emissive color of the material.
- [shininess](glkeffectpropertymaterial/shininess.md): Deprecated. The shininess of the material, used when calculating specular lighting effects.
- [specularColor](glkeffectpropertymaterial/specularcolor.md): Deprecated. The specular color of the material.

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
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)

# GLKEffectPropertyMaterial (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Surface appearance properties for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKEffectPropertyMaterial : GLKEffectProperty
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md) class defines properties used to configure the characteristics of the surface being lit. The material properties for an effect interact with light properties on the same effect to determine how that surface is lit within the scene. The behavior of this class matches the material properties and lighting calculations defined in the OpenGL ES 1.1 specification.

## Topics

### Material Properties

- [ambientColor](glkeffectpropertymaterial/ambientcolor.md): Deprecated. The ambient color of the material.
- [diffuseColor](glkeffectpropertymaterial/diffusecolor.md): Deprecated. The diffuse color of the material.
- [emissiveColor](glkeffectpropertymaterial/emissivecolor.md): Deprecated. The emissive color of the material.
- [shininess](glkeffectpropertymaterial/shininess.md): Deprecated. The shininess of the material, used when calculating specular lighting effects.
- [specularColor](glkeffectpropertymaterial/specularcolor.md): Deprecated. The specular color of the material.

## Relationships

### Inherits From

- [GLKEffectProperty](glkeffectproperty.md)

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)
