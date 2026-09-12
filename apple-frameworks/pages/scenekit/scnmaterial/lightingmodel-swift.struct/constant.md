> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.struct/constant](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.struct/constant)

# constant (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Uniform shading that incorporates ambient lighting only.

## Declaration

```swift
static let constant: SCNMaterial.LightingModel
```

<a id="Discussion"></a>

## Discussion

This shading model calculates the color of a point on a surface with the following formula:

```objc
color = ambient * al + diffuse
```

The [ambient](../ambient.md) and [diffuse](../diffuse.md) terms refer to the material’s properties. The `al` term is the sum of all ambient lights in the scene (a color).

## See Also

### Type Properties

- [blinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [lambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [phong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [physicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [shadowOnly](shadowonly.md)

# SCNLightingModelConstant (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Uniform shading that incorporates ambient lighting only.

## Declaration

```objectivec
extern SCNLightingModel const SCNLightingModelConstant;
```

<a id="Discussion"></a>

## Discussion

This shading model calculates the color of a point on a surface with the following formula:

```objc
color = ambient * al + diffuse
```

The [ambient](../ambient.md) and [diffuse](../diffuse.md) terms refer to the material’s properties. The `al` term is the sum of all ambient lights in the scene (a color).

## See Also

### Type Properties

- [SCNLightingModelBlinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [SCNLightingModelLambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [SCNLightingModelPhong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [SCNLightingModelPhysicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [SCNLightingModelShadowOnly](shadowonly.md)
