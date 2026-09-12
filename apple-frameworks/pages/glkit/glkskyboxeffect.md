> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkskyboxeffect](https://developer.apple.com/documentation/glkit/glkskyboxeffect)

# GLKSkyboxEffect (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A simple skybox visual effect for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKSkyboxEffect
```

<a id="overview"></a>

## Overview

The [GLKSkyboxEffect](glkskyboxeffect.md) provides a standard skybox effect for your application. Unlike the [GLKBaseEffect](glkbaseeffect.md) class, the skybox does not require your application to configure and submit vertex data. Instead, it creates its own vertex data based on the configuration data you supply.

At initialization time, your application first creates a compatible context and makes it current. Then, it creates new skybox effect, configures its properties, and calls its [prepareToDraw()](glkskyboxeffect/preparetodraw%28%29.md) method. Binding the effect causes a shader to be compiled and bound to the current context.

At rendering time, your application calls the effect’s [prepareToDraw()](glkskyboxeffect/preparetodraw%28%29.md) method to prepare the effect and then calls its [draw()](glkskyboxeffect/draw%28%29.md) method to draw the sky box.

## Topics

### Naming the Effect

- [label](glkskyboxeffect/label.md): Deprecated. A string used to name your effect.

### Preparing the Effect for Rendering

- [prepareToDraw()](glkskyboxeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Drawing the Skybox

- [draw()](glkskyboxeffect/draw%28%29.md): Deprecated. Draws the skybox.

### Configuring the Skybox

- [textureCubeMap](glkskyboxeffect/texturecubemap.md): Deprecated. The texture to apply to the skybox.
- [center](glkskyboxeffect/center.md): Deprecated. The center of the skybox.
- [xSize](glkskyboxeffect/xsize.md): Deprecated. The width of the skybox.
- [ySize](glkskyboxeffect/ysize.md): Deprecated. The height of the skybox.
- [zSize](glkskyboxeffect/zsize.md): Deprecated. The depth of the skybox.

### Setting the Skybox Transform

- [transform](glkskyboxeffect/transform.md): Deprecated. The transform applied before drawing the skybox.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [GLKReflectionMapEffect](glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.

# GLKSkyboxEffect (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A simple skybox visual effect for use in shader-based OpenGL rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKSkyboxEffect : NSObject
```

<a id="overview"></a>

## Overview

The [GLKSkyboxEffect](glkskyboxeffect.md) provides a standard skybox effect for your application. Unlike the [GLKBaseEffect](glkbaseeffect.md) class, the skybox does not require your application to configure and submit vertex data. Instead, it creates its own vertex data based on the configuration data you supply.

At initialization time, your application first creates a compatible context and makes it current. Then, it creates new skybox effect, configures its properties, and calls its [prepareToDraw](glkskyboxeffect/preparetodraw%28%29.md) method. Binding the effect causes a shader to be compiled and bound to the current context.

At rendering time, your application calls the effect’s [prepareToDraw](glkskyboxeffect/preparetodraw%28%29.md) method to prepare the effect and then calls its [draw](glkskyboxeffect/draw%28%29.md) method to draw the sky box.

## Topics

### Naming the Effect

- [label](glkskyboxeffect/label.md): Deprecated. A string used to name your effect.

### Preparing the Effect for Rendering

- [prepareToDraw](glkskyboxeffect/preparetodraw%28%29.md): Deprecated. Prepares an effect for rendering.

### Drawing the Skybox

- [draw](glkskyboxeffect/draw%28%29.md): Deprecated. Draws the skybox.

### Configuring the Skybox

- [textureCubeMap](glkskyboxeffect/texturecubemap.md): Deprecated. The texture to apply to the skybox.
- [center](glkskyboxeffect/center.md): Deprecated. The center of the skybox.
- [xSize](glkskyboxeffect/xsize.md): Deprecated. The width of the skybox.
- [ySize](glkskyboxeffect/ysize.md): Deprecated. The height of the skybox.
- [zSize](glkskyboxeffect/zsize.md): Deprecated. The depth of the skybox.

### Setting the Skybox Transform

- [transform](glkskyboxeffect/transform.md): Deprecated. The transform applied before drawing the skybox.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GLKNamedEffect](glknamedeffect.md)

## See Also

### Shader-Based Rendering Effects

- [GLKNamedEffect](glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKBaseEffect](glkbaseeffect.md): Deprecated. A simple lighting and shading system for use in shader-based OpenGL rendering.
- [GLKReflectionMapEffect](glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
