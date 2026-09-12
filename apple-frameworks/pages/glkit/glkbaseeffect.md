> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect](https://developer.apple.com/documentation/glkit/glkbaseeffect)

# GLKBaseEffect (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A simple lighting and shading system for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKBaseEffect
```

<a id="overview"></a>

## Overview

The [GLKBaseEffect](glkbaseeffect.md) class provides shaders that mimic many of the behaviors provided by the OpenGL ES 1.1 lighting and shading model, including materials, lighting and texturing. The base effect allows up to three lights and two textures to be applied to a scene.

At initialization time, your application first creates a compatible OpenGL or OpenGL ES context and makes it current. Then, it allocates and initializes a new effect object, configures its properties, and calls its [prepareToDraw()](glkbaseeffect/preparetodraw%28%29.md) method. Binding an effect causes a shader to be compiled and bound to the current context. The base effect also requires vertex data to be supplied by your application. To supply vertex data, create one or more vertex array objects. For each attribute required by the shader, the vertex array object should enable the attribute and point to data stored in a vertex buffer object.

At rendering time, your application calls the effect’s [prepareToDraw()](glkbaseeffect/preparetodraw%28%29.md) method to prepare the effect. Then, it binds a vertex array object and submits one or more drawing commands.

Lighting calculations for the base effect are done in eye-space coordinates.  The [light0](glkbaseeffect/light0.md), [light1](glkbaseeffect/light1.md) and [light2](glkbaseeffect/light2.md) properties hold the position and spot direction of the base effect’s lights. The [transform](glkbaseeffect/transform.md) property contains the model view matrix assigned to the scene. When a light is assigned a new position or spot direction, those values are immediately modified by the current model view matrix. Thus, it is important to sequence changes to the model view matrix and changes to the lights to achieve the desired light positioning.  Light positions that need to be transformed in a manner similar to scene geometry should be set after the model view matrix is updated.

<a id="Subclassing"></a>

### Subclassing

Although this class can be subclassed, there are no methods your subclass can use to directly override the underlying shader generation. Instead, your subclass should implement its functionality by changing the values of existing properties declared by the base class.

## Topics

### Naming the Effect

- [label](glkbaseeffect/label.md): Deprecated. A string used to name your effect.

### Configuring the Modelview Transform

- [transform](glkbaseeffect/transform.md): Deprecated. The modelview, projection and texture transformations applied to the vertex data when the effect is bound.

### Configuring Lights

- [lightingType](glkbaseeffect/lightingtype.md): Deprecated. The strategy the effect uses to calculate light values at each fragment. See [GLKLightingType](glklightingtype.md).
- [lightModelTwoSided](glkbaseeffect/lightmodeltwosided.md): Deprecated. A Boolean value that indicates whether lighting is calculated for both sides of a primitive.
- [material](glkbaseeffect/material.md): Deprecated. The material properties used when calculating the light values for a rendered primitive.
- [lightModelAmbientColor](glkbaseeffect/lightmodelambientcolor.md): Deprecated. The ambient color applied to all primitives rendered by the effect.
- [light0](glkbaseeffect/light0.md): Deprecated. The lighting properties for the first light in the scene.
- [light1](glkbaseeffect/light1.md): Deprecated. The lighting properties for the second light in the scene.
- [light2](glkbaseeffect/light2.md): Deprecated. The lighting properties for the third light in the scene.

### Configuring Textures

- [texture2d0](glkbaseeffect/texture2d0.md): Deprecated. The properties for the first texture.
- [texture2d1](glkbaseeffect/texture2d1.md): Deprecated. The properties for the second texture.
- [textureOrder](glkbaseeffect/textureorder.md): Deprecated. The order in which textures are applied to rendered primitives.

### Configuring Fog

- [fog](glkbaseeffect/fog.md): Deprecated. The fog properties to apply to the scene.

### Configuring Color Information

- [colorMaterialEnabled](glkbaseeffect/colormaterialenabled.md): Deprecated. A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.
- [useConstantColor](glkbaseeffect/useconstantcolor.md): Deprecated. A Boolean value that indicates whether or not to use the constant color.
- [constantColor](glkbaseeffect/constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.

### Preparing the Effect for Drawing

- [prepareToDraw()](glkbaseeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Type Aliases

- [GLKEffectPropertyPrvPtr](glkeffectpropertyprvptr.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GLKReflectionMapEffect](glkreflectionmapeffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GLKNamedEffect](glknamedeffect.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader-Based Rendering Effects

- [GLKNamedEffect](glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKReflectionMapEffect](glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.

# GLKBaseEffect (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A simple lighting and shading system for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKBaseEffect : NSObject
```

<a id="overview"></a>

## Overview

The [GLKBaseEffect](glkbaseeffect.md) class provides shaders that mimic many of the behaviors provided by the OpenGL ES 1.1 lighting and shading model, including materials, lighting and texturing. The base effect allows up to three lights and two textures to be applied to a scene.

At initialization time, your application first creates a compatible OpenGL or OpenGL ES context and makes it current. Then, it allocates and initializes a new effect object, configures its properties, and calls its [prepareToDraw](glkbaseeffect/preparetodraw%28%29.md) method. Binding an effect causes a shader to be compiled and bound to the current context. The base effect also requires vertex data to be supplied by your application. To supply vertex data, create one or more vertex array objects. For each attribute required by the shader, the vertex array object should enable the attribute and point to data stored in a vertex buffer object.

At rendering time, your application calls the effect’s [prepareToDraw](glkbaseeffect/preparetodraw%28%29.md) method to prepare the effect. Then, it binds a vertex array object and submits one or more drawing commands.

Lighting calculations for the base effect are done in eye-space coordinates.  The [light0](glkbaseeffect/light0.md), [light1](glkbaseeffect/light1.md) and [light2](glkbaseeffect/light2.md) properties hold the position and spot direction of the base effect’s lights. The [transform](glkbaseeffect/transform.md) property contains the model view matrix assigned to the scene. When a light is assigned a new position or spot direction, those values are immediately modified by the current model view matrix. Thus, it is important to sequence changes to the model view matrix and changes to the lights to achieve the desired light positioning.  Light positions that need to be transformed in a manner similar to scene geometry should be set after the model view matrix is updated.

<a id="Subclassing"></a>

### Subclassing

Although this class can be subclassed, there are no methods your subclass can use to directly override the underlying shader generation. Instead, your subclass should implement its functionality by changing the values of existing properties declared by the base class.

## Topics

### Naming the Effect

- [label](glkbaseeffect/label.md): Deprecated. A string used to name your effect.

### Configuring the Modelview Transform

- [transform](glkbaseeffect/transform.md): Deprecated. The modelview, projection and texture transformations applied to the vertex data when the effect is bound.

### Configuring Lights

- [lightingType](glkbaseeffect/lightingtype.md): Deprecated. The strategy the effect uses to calculate light values at each fragment. See [GLKLightingType](glklightingtype.md).
- [lightModelTwoSided](glkbaseeffect/lightmodeltwosided.md): Deprecated. A Boolean value that indicates whether lighting is calculated for both sides of a primitive.
- [material](glkbaseeffect/material.md): Deprecated. The material properties used when calculating the light values for a rendered primitive.
- [lightModelAmbientColor](glkbaseeffect/lightmodelambientcolor.md): Deprecated. The ambient color applied to all primitives rendered by the effect.
- [light0](glkbaseeffect/light0.md): Deprecated. The lighting properties for the first light in the scene.
- [light1](glkbaseeffect/light1.md): Deprecated. The lighting properties for the second light in the scene.
- [light2](glkbaseeffect/light2.md): Deprecated. The lighting properties for the third light in the scene.

### Configuring Textures

- [texture2d0](glkbaseeffect/texture2d0.md): Deprecated. The properties for the first texture.
- [texture2d1](glkbaseeffect/texture2d1.md): Deprecated. The properties for the second texture.
- [textureOrder](glkbaseeffect/textureorder.md): Deprecated. The order in which textures are applied to rendered primitives.

### Configuring Fog

- [fog](glkbaseeffect/fog.md): Deprecated. The fog properties to apply to the scene.

### Configuring Color Information

- [colorMaterialEnabled](glkbaseeffect/colormaterialenabled.md): Deprecated. A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.
- [useConstantColor](glkbaseeffect/useconstantcolor.md): Deprecated. A Boolean value that indicates whether or not to use the constant color.
- [constantColor](glkbaseeffect/constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.

### Preparing the Effect for Drawing

- [prepareToDraw](glkbaseeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Type Aliases

- [GLKEffectPropertyPrvPtr](glkeffectpropertyprvptr.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GLKReflectionMapEffect](glkreflectionmapeffect.md)

### Conforms To

- [GLKNamedEffect](glknamedeffect.md)

## See Also

### Shader-Based Rendering Effects

- [GLKNamedEffect](glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKReflectionMapEffect](glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.
