> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.struct/blinn](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.struct/blinn)

# blinn (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong  formula.

## Declaration

```swift
static let blinn: SCNMaterial.LightingModel
```

<a id="Discussion"></a>

## Discussion

The Blinn-Phong approximation of real-world reflectance calculates the color of a point on a surface using the following formula:

```objc
color = ambient * al + diffuse * max(0, dot(N, L)) + specular * pow(max(0, dot(H, N)), shininess)
```

Some terms refer to the material’s properties: [ambient](../ambient.md), [diffuse](../diffuse.md), [specular](../specular.md), and [shininess](../shininess.md). The other terms are as follows:

- **`al`**: The sum of all ambient lights in the scene (a color).
- **`N`**: The surface normal vector at the point being shaded, as supplied by the geometry’s vertex data, interpolated between vertices, and possibly modified by the material’s [normal](../normal.md) property.
- **`L`**: The (normalized) vector from the point being shaded to the light source.
- **`H`**: A vector halfway between the light vector `L` and the (normalized) eye vector `E` (the vector from the point being shaded to the viewer), calculated using the formula `H = normalize(L + E)`.

## See Also

### Type Properties

- [constant](constant.md): Uniform shading that incorporates ambient lighting only.
- [lambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [phong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [physicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [shadowOnly](shadowonly.md)

# SCNLightingModelBlinn (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong  formula.

## Declaration

```objectivec
extern SCNLightingModel const SCNLightingModelBlinn;
```

<a id="Discussion"></a>

## Discussion

The Blinn-Phong approximation of real-world reflectance calculates the color of a point on a surface using the following formula:

```objc
color = ambient * al + diffuse * max(0, dot(N, L)) + specular * pow(max(0, dot(H, N)), shininess)
```

Some terms refer to the material’s properties: [ambient](../ambient.md), [diffuse](../diffuse.md), [specular](../specular.md), and [shininess](../shininess.md). The other terms are as follows:

- **`al`**: The sum of all ambient lights in the scene (a color).
- **`N`**: The surface normal vector at the point being shaded, as supplied by the geometry’s vertex data, interpolated between vertices, and possibly modified by the material’s [normal](../normal.md) property.
- **`L`**: The (normalized) vector from the point being shaded to the light source.
- **`H`**: A vector halfway between the light vector `L` and the (normalized) eye vector `E` (the vector from the point being shaded to the viewer), calculated using the formula `H = normalize(L + E)`.

## See Also

### Type Properties

- [SCNLightingModelConstant](constant.md): Uniform shading that incorporates ambient lighting only.
- [SCNLightingModelLambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [SCNLightingModelPhong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [SCNLightingModelPhysicallyBased](physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [SCNLightingModelShadowOnly](shadowonly.md)
