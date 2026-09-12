> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction](https://developer.apple.com/documentation/modelio/mdlscatteringfunction)

# MDLScatteringFunction (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.

## Declaration

```swift
class MDLScatteringFunction
```

<a id="overview"></a>

## Overview

The set of material properties that define a material’s response to lighting is also called the *Bidirectional Reflectance Distribution Function*, or BRDF, for surfaces shaded using that [MDLMaterial](mdlmaterial.md) object. The set of properties defined by the [MDLScatteringFunction](mdlscatteringfunction.md) class itself describes a Lambertian shading model with Blinn-Phong specular response; subclasses can define a set of properties for other shading models.

Creating a new scattering function object with the inherited [init()](../objectivec/nsobject-swift.class/init%28%29.md) method creates a set of material properties with useful default values for this shading model.

## Topics

### Naming a Scattering Function

- [name](mdlscatteringfunction/name.md): A descriptive name for the scattering function.

### Working with Shading Properties

- [baseColor](mdlscatteringfunction/basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](mdlscatteringfunction/emission.md): The color emitted as radiance from a material’s surface.
- [specular](mdlscatteringfunction/specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](mdlscatteringfunction/materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](mdlscatteringfunction/interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](mdlscatteringfunction/normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](mdlscatteringfunction/ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](mdlscatteringfunction/ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md)

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
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.

# MDLScatteringFunction (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.

## Declaration

```objectivec
@interface MDLScatteringFunction : NSObject
```

<a id="overview"></a>

## Overview

The set of material properties that define a material’s response to lighting is also called the *Bidirectional Reflectance Distribution Function*, or BRDF, for surfaces shaded using that [MDLMaterial](mdlmaterial.md) object. The set of properties defined by the [MDLScatteringFunction](mdlscatteringfunction.md) class itself describes a Lambertian shading model with Blinn-Phong specular response; subclasses can define a set of properties for other shading models.

Creating a new scattering function object with the inherited [init](../objectivec/nsobject-swift.class/init%28%29.md) method creates a set of material properties with useful default values for this shading model.

## Topics

### Naming a Scattering Function

- [name](mdlscatteringfunction/name.md): A descriptive name for the scattering function.

### Working with Shading Properties

- [baseColor](mdlscatteringfunction/basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](mdlscatteringfunction/emission.md): The color emitted as radiance from a material’s surface.
- [specular](mdlscatteringfunction/specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](mdlscatteringfunction/materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](mdlscatteringfunction/interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](mdlscatteringfunction/normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](mdlscatteringfunction/ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](mdlscatteringfunction/ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md)

### Conforms To

- [MDLNamed](mdlnamed.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.
