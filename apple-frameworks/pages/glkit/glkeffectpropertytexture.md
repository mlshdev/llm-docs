> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytexture](https://developer.apple.com/documentation/glkit/glkeffectpropertytexture)

# GLKEffectPropertyTexture (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Texture drawing parameters for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKEffectPropertyTexture
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyTexture](glkeffectpropertytexture.md) class defines properties that are used to configure an OpenGL texturing operation. The texturing operation combines an input color and a color sampled from the texture and outputs a new color to the next stage of calculations. The [envMode](glkeffectpropertytexture/envmode.md) property determines the function used to calculate the output color from the two input colors.

If an effect only includes a single texture property, then the input color is the lighting color calculated by the lighting stage of the graphics pipeline. An effect can also include multiple [GLKEffectPropertyTexture](glkeffectpropertytexture.md) objects. When an effect includes multiple properties, the first texture stage uses the lighting color as the first input color. Each texture stage after that uses the output of the previous stage as the input color.

## Topics

### Configuring Texture Properties

- [enabled](glkeffectpropertytexture/enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [envMode](glkeffectpropertytexture/envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](glktextureenvmode.md).
- [name](glkeffectpropertytexture/name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](glkeffectpropertytexture/target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](glktexturetarget.md).

### Constants

- [GLKTextureTarget](glktexturetarget.md): The kind of texture pointed to by the property.
- [GLKTextureEnvMode](glktextureenvmode.md): The mode used to combine the texture with other color components.

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
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)

# GLKEffectPropertyTexture (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Texture drawing parameters for use in GLKit rendering effects.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKEffectPropertyTexture : GLKEffectProperty
```

<a id="overview"></a>

## Overview

The [GLKEffectPropertyTexture](glkeffectpropertytexture.md) class defines properties that are used to configure an OpenGL texturing operation. The texturing operation combines an input color and a color sampled from the texture and outputs a new color to the next stage of calculations. The [envMode](glkeffectpropertytexture/envmode.md) property determines the function used to calculate the output color from the two input colors.

If an effect only includes a single texture property, then the input color is the lighting color calculated by the lighting stage of the graphics pipeline. An effect can also include multiple [GLKEffectPropertyTexture](glkeffectpropertytexture.md) objects. When an effect includes multiple properties, the first texture stage uses the lighting color as the first input color. Each texture stage after that uses the output of the previous stage as the input color.

## Topics

### Configuring Texture Properties

- [enabled](glkeffectpropertytexture/enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [envMode](glkeffectpropertytexture/envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](glktextureenvmode.md).
- [name](glkeffectpropertytexture/name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](glkeffectpropertytexture/target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](glktexturetarget.md).

### Constants

- [GLKTextureTarget](glktexturetarget.md): The kind of texture pointed to by the property.
- [GLKTextureEnvMode](glktextureenvmode.md): The mode used to combine the texture with other color components.

## Relationships

### Inherits From

- [GLKEffectProperty](glkeffectproperty.md)

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit-effects-constants.md)
