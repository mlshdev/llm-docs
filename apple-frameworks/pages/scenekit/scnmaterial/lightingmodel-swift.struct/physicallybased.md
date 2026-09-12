> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.struct/physicallybased](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.struct/physicallybased)

# physicallyBased (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Shading based on a realistic abstraction of physical lights and materials.

## Declaration

```swift
static let physicallyBased: SCNMaterial.LightingModel
```

<a id="Discussion"></a>

## Discussion

Physically-based shading incorporates a refined model of the interactions between real-world lights and materials. Using modern GPU hardware and algorithms, this model can produce more realistic results than the loose abstractions of traditional shading, while also offering a set of material properties that is easier for artists to work with. Especially when combined with environmental lighting (see the [SCNScene](../../scnscene.md) [lightingEnvironment](../../scnscene/lightingenvironment.md) property) and high dynamic range cameras (see the [SCNCamera](../../scncamera.md) [wantsHDR](../../scncamera/wantshdr.md) property), physically-based shading can produce realistic results similar to those seen in recent animated feature films.

Physically based shading relies primarily on three material properties:

- The [diffuse](../diffuse.md) property (called albedo in some authoring tools) provides the “base” color of a material.
- The [roughness](../roughness.md) property (inverted and called smoothness in some authoring tools) is an approximation of the microscopic detail in a real-world surface. By approximating these “microfacets” as a single term, this property helps produce lighting calculations that resemble the energy-conserving laws of real-world physics, resulting in more realistic variation between matte and shiny surfaces.
- The [metalness](../metalness.md) property approximates other aspects of a physical surface, such as index of refraction, tendency to produce sharp reflections, and tendency to produce Fresnel reflections at grazing angles, which together produce an overall metallic or nonmetallic (also called dielectric) appearance.

In addition, you can add surface detail to a physically based material with the [normal](../normal.md) and [ambientOcclusion](../ambientocclusion.md) properties, and modulate the contribution of environmental lighting with the [selfIllumination](../selfillumination.md) property.

Physically based materials ignore the [ambient](../ambient.md), [specular](../specular.md), and [reflective](../reflective.md) material properties and the [shininess](../shininess.md), [fresnelExponent](../fresnelexponent.md), and [locksAmbientWithDiffuse](../locksambientwithdiffuse.md) parameters.

> **Note**

>  Physically based rendering requires a Metal renderer. When displaying a material in a view whose [renderingAPI](../../scnscenerenderer/renderingapi.md) value is not [SCNRenderingAPI.metal](../../scnrenderingapi/metal.md), SceneKit falls back to rendering that material with the [blinn](blinn.md) lighting model. (Metal rendering is not supported in Simulator or Xcode Playgrounds when targeting iOS or tvOS, and is not available at all in watchOS, so this fallback always occurs in those environments.)

## See Also

### Type Properties

- [blinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [constant](constant.md): Uniform shading that incorporates ambient lighting only.
- [lambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [phong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [shadowOnly](shadowonly.md)

# SCNLightingModelPhysicallyBased (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Shading based on a realistic abstraction of physical lights and materials.

## Declaration

```objectivec
extern SCNLightingModel const SCNLightingModelPhysicallyBased;
```

<a id="Discussion"></a>

## Discussion

Physically-based shading incorporates a refined model of the interactions between real-world lights and materials. Using modern GPU hardware and algorithms, this model can produce more realistic results than the loose abstractions of traditional shading, while also offering a set of material properties that is easier for artists to work with. Especially when combined with environmental lighting (see the [SCNScene](../../scnscene.md) [lightingEnvironment](../../scnscene/lightingenvironment.md) property) and high dynamic range cameras (see the [SCNCamera](../../scncamera.md) [wantsHDR](../../scncamera/wantshdr.md) property), physically-based shading can produce realistic results similar to those seen in recent animated feature films.

Physically based shading relies primarily on three material properties:

- The [diffuse](../diffuse.md) property (called albedo in some authoring tools) provides the “base” color of a material.
- The [roughness](../roughness.md) property (inverted and called smoothness in some authoring tools) is an approximation of the microscopic detail in a real-world surface. By approximating these “microfacets” as a single term, this property helps produce lighting calculations that resemble the energy-conserving laws of real-world physics, resulting in more realistic variation between matte and shiny surfaces.
- The [metalness](../metalness.md) property approximates other aspects of a physical surface, such as index of refraction, tendency to produce sharp reflections, and tendency to produce Fresnel reflections at grazing angles, which together produce an overall metallic or nonmetallic (also called dielectric) appearance.

In addition, you can add surface detail to a physically based material with the [normal](../normal.md) and [ambientOcclusion](../ambientocclusion.md) properties, and modulate the contribution of environmental lighting with the [selfIllumination](../selfillumination.md) property.

Physically based materials ignore the [ambient](../ambient.md), [specular](../specular.md), and [reflective](../reflective.md) material properties and the [shininess](../shininess.md), [fresnelExponent](../fresnelexponent.md), and [locksAmbientWithDiffuse](../locksambientwithdiffuse.md) parameters.

> **Note**

>  Physically based rendering requires a Metal renderer. When displaying a material in a view whose [renderingAPI](../../scnscenerenderer/renderingapi.md) value is not [SCNRenderingAPIMetal](../../scnrenderingapi/metal.md), SceneKit falls back to rendering that material with the [SCNLightingModelBlinn](blinn.md) lighting model. (Metal rendering is not supported in Simulator or Xcode Playgrounds when targeting iOS or tvOS, and is not available at all in watchOS, so this fallback always occurs in those environments.)

## See Also

### Type Properties

- [SCNLightingModelBlinn](blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [SCNLightingModelConstant](constant.md): Uniform shading that incorporates ambient lighting only.
- [SCNLightingModelLambert](lambert.md): Shading that incorporates ambient and diffuse properties only.
- [SCNLightingModelPhong](phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [SCNLightingModelShadowOnly](shadowonly.md)
