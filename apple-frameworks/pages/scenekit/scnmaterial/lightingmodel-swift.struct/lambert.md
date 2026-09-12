> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.struct/lambert](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.struct/lambert)

# lambert (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Shading that incorporates ambient and diffuse properties only.

## Declaration

```swift
static let lambert: SCNMaterial.LightingModel
```

<a id="Discussion"></a>

## Discussion

This shading model is based on Lambert’s Law of diffuse reflectance, calculating the color of a point on a surface with the following formula:

```objc
color = ambient * al + diffuse * max(0, dot(N, L))
```

The [ambient](../ambient.md) and [diffuse](../diffuse.md) terms refer to the material’s properties. The other terms are as follows:

- **`al`**: The sum of all ambient lights in the scene (a color).
- **`N`**: The surface normal vector at the point being shaded, as supplied by the geometry’s vertex data, interpolated between vertices, and possibly modified by the material’s [normal](../normal.md) property.
- **`L`**: The (normalized) vector from the point being shaded to the light source.

## See Also

### Type Properties

- [blinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [constant](constant.md): Uniform shading that incorporates ambient lighting only.
- [phong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [physicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [shadowOnly](shadowonly.md)

# SCNLightingModelLambert (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Shading that incorporates ambient and diffuse properties only.

## Declaration

```objectivec
extern SCNLightingModel const SCNLightingModelLambert;
```

<a id="Discussion"></a>

## Discussion

This shading model is based on Lambert’s Law of diffuse reflectance, calculating the color of a point on a surface with the following formula:

```objc
color = ambient * al + diffuse * max(0, dot(N, L))
```

The [ambient](../ambient.md) and [diffuse](../diffuse.md) terms refer to the material’s properties. The other terms are as follows:

- **`al`**: The sum of all ambient lights in the scene (a color).
- **`N`**: The surface normal vector at the point being shaded, as supplied by the geometry’s vertex data, interpolated between vertices, and possibly modified by the material’s [normal](../normal.md) property.
- **`L`**: The (normalized) vector from the point being shaded to the light source.

## See Also

### Type Properties

- [SCNLightingModelBlinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [SCNLightingModelConstant](constant.md): Uniform shading that incorporates ambient lighting only.
- [SCNLightingModelPhong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [SCNLightingModelPhysicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [SCNLightingModelShadowOnly](shadowonly.md)
