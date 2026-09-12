> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkreflectionmapeffect](https://developer.apple.com/documentation/glkit/glkreflectionmapeffect)

# GLKReflectionMapEffect (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKReflectionMapEffect
```

<a id="overview"></a>

## Overview

In addition to any of the properties provided by the [GLKBaseEffect](glkbaseeffect.md) class, your application must also configure the properties on the reflection map. The default value of the [textureOrder](glkbaseeffect/textureorder.md) property provided by the base effect is modified to include the reflection map as a final texturing stage; your application can modify the value of that property to change the order in which texturing occurs.

The reflection map effect is calculated in accordance to section 2.11.4 of the OpenGL 2.1 specification `GL_REFLECTION_MAP` glTexGen() mode. It requires a cube map texture to define the enclosing envelope from which to reflection map the scene.

## Topics

### Preparing the Reflection Effect

- [prepareToDraw()](glkreflectionmapeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Effect Properties

- [textureCubeMap](glkreflectionmapeffect/texturecubemap.md): Deprecated. The texture map to apply in the reflection stage.
- [matrix](glkreflectionmapeffect/matrix.md): Deprecated. The reflection matrix to apply to the normals of the submitted vertices.

## Relationships

### Inherits From

- [GLKBaseEffect](glkbaseeffect.md)

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
- [GLKBaseEffect](glkbaseeffect.md): Deprecated. A simple lighting and shading system for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.

# GLKReflectionMapEffect (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKReflectionMapEffect : GLKBaseEffect
```

<a id="overview"></a>

## Overview

In addition to any of the properties provided by the [GLKBaseEffect](glkbaseeffect.md) class, your application must also configure the properties on the reflection map. The default value of the [textureOrder](glkbaseeffect/textureorder.md) property provided by the base effect is modified to include the reflection map as a final texturing stage; your application can modify the value of that property to change the order in which texturing occurs.

The reflection map effect is calculated in accordance to section 2.11.4 of the OpenGL 2.1 specification `GL_REFLECTION_MAP` glTexGen() mode. It requires a cube map texture to define the enclosing envelope from which to reflection map the scene.

## Topics

### Preparing the Reflection Effect

- [prepareToDraw](glkreflectionmapeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Effect Properties

- [textureCubeMap](glkreflectionmapeffect/texturecubemap.md): Deprecated. The texture map to apply in the reflection stage.
- [matrix](glkreflectionmapeffect/matrix.md): Deprecated. The reflection matrix to apply to the normals of the submitted vertices.

## Relationships

### Inherits From

- [GLKBaseEffect](glkbaseeffect.md)

### Conforms To

- [GLKNamedEffect](glknamedeffect.md)

## See Also

### Shader-Based Rendering Effects

- [GLKNamedEffect](glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKBaseEffect](glkbaseeffect.md): Deprecated. A simple lighting and shading system for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.
