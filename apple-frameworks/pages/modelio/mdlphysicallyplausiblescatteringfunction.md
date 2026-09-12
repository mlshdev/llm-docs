> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblescatteringfunction](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblescatteringfunction)

# MDLPhysicallyPlausibleScatteringFunction (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of material properties that describes a physically realistic shading model for materials.

## Declaration

```swift
class MDLPhysicallyPlausibleScatteringFunction
```

<a id="overview"></a>

## Overview

The set of material properties that define a material’s response to lighting is also called the *Bidirectional Reflectance Distribution Function*, or BRDF, for surfaces shaded using that MDLMaterial object. The properties defined by this class, along with some properties inherited from the superclass [MDLScatteringFunction](mdlscatteringfunction.md), describe a shading model that more closely simulates real-world lighting physics than traditional shading models. (This shading model is similar to those used in recent game engines and feature films.)

The valid range for each material property in this shading function is `0.0` to `1.0`, inclusive. Creating a new scattering function object with the inherited [init()](../objectivec/nsobject-swift.class/init%28%29.md) method creates a set of material properties with useful default values for this shading model.

## Topics

### Working with Shading Properties

- [subsurface](mdlphysicallyplausiblescatteringfunction/subsurface.md): The degree to which light scatters under the surface of the material.
- [metallic](mdlphysicallyplausiblescatteringfunction/metallic.md): The degree to which the material appears as a dielectric surface (lower values) or as a metal (higher values).
- [specularAmount](mdlphysicallyplausiblescatteringfunction/specularamount.md): The tendency of the material to generate specular highlights.
- [specularTint](mdlphysicallyplausiblescatteringfunction/speculartint.md): The balance of color for specular highlights, between the light color (lower values) and the material’s base color (at higher values).
- [roughness](mdlphysicallyplausiblescatteringfunction/roughness.md): The degree to which a material appears smooth, affecting both diffuse and specular response.
- [anisotropic](mdlphysicallyplausiblescatteringfunction/anisotropic.md): The degree to which specular highlights elongate in the direction of the local tangent basis.
- [anisotropicRotation](mdlphysicallyplausiblescatteringfunction/anisotropicrotation.md): The angle at which anisotropic effects are rotated relative to the local tangent basis.
- [sheen](mdlphysicallyplausiblescatteringfunction/sheen.md): The intensity of highlights that appear only at glancing angles on a material’s surface.
- [sheenTint](mdlphysicallyplausiblescatteringfunction/sheentint.md): The balance of color for highlights that appear only at glancing angles, between the light color (lower values) and the material’s base color (at higher values).
- [clearcoat](mdlphysicallyplausiblescatteringfunction/clearcoat.md): The intensity of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.
- [clearcoatGloss](mdlphysicallyplausiblescatteringfunction/clearcoatgloss.md): The sharpness of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.

### Instance Properties

- [version](mdlphysicallyplausiblescatteringfunction/version.md)

## Relationships

### Inherits From

- [MDLScatteringFunction](mdlscatteringfunction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.

# MDLPhysicallyPlausibleScatteringFunction (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of material properties that describes a physically realistic shading model for materials.

## Declaration

```objectivec
@interface MDLPhysicallyPlausibleScatteringFunction : MDLScatteringFunction
```

<a id="overview"></a>

## Overview

The set of material properties that define a material’s response to lighting is also called the *Bidirectional Reflectance Distribution Function*, or BRDF, for surfaces shaded using that MDLMaterial object. The properties defined by this class, along with some properties inherited from the superclass [MDLScatteringFunction](mdlscatteringfunction.md), describe a shading model that more closely simulates real-world lighting physics than traditional shading models. (This shading model is similar to those used in recent game engines and feature films.)

The valid range for each material property in this shading function is `0.0` to `1.0`, inclusive. Creating a new scattering function object with the inherited [init](../objectivec/nsobject-swift.class/init%28%29.md) method creates a set of material properties with useful default values for this shading model.

## Topics

### Working with Shading Properties

- [subsurface](mdlphysicallyplausiblescatteringfunction/subsurface.md): The degree to which light scatters under the surface of the material.
- [metallic](mdlphysicallyplausiblescatteringfunction/metallic.md): The degree to which the material appears as a dielectric surface (lower values) or as a metal (higher values).
- [specularAmount](mdlphysicallyplausiblescatteringfunction/specularamount.md): The tendency of the material to generate specular highlights.
- [specularTint](mdlphysicallyplausiblescatteringfunction/speculartint.md): The balance of color for specular highlights, between the light color (lower values) and the material’s base color (at higher values).
- [roughness](mdlphysicallyplausiblescatteringfunction/roughness.md): The degree to which a material appears smooth, affecting both diffuse and specular response.
- [anisotropic](mdlphysicallyplausiblescatteringfunction/anisotropic.md): The degree to which specular highlights elongate in the direction of the local tangent basis.
- [anisotropicRotation](mdlphysicallyplausiblescatteringfunction/anisotropicrotation.md): The angle at which anisotropic effects are rotated relative to the local tangent basis.
- [sheen](mdlphysicallyplausiblescatteringfunction/sheen.md): The intensity of highlights that appear only at glancing angles on a material’s surface.
- [sheenTint](mdlphysicallyplausiblescatteringfunction/sheentint.md): The balance of color for highlights that appear only at glancing angles, between the light color (lower values) and the material’s base color (at higher values).
- [clearcoat](mdlphysicallyplausiblescatteringfunction/clearcoat.md): The intensity of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.
- [clearcoatGloss](mdlphysicallyplausiblescatteringfunction/clearcoatgloss.md): The sharpness of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.

### Instance Properties

- [version](mdlphysicallyplausiblescatteringfunction/version.md)

## Relationships

### Inherits From

- [MDLScatteringFunction](mdlscatteringfunction.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
