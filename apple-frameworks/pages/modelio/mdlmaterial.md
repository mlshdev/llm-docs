> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial](https://developer.apple.com/documentation/modelio/mdlmaterial)

# MDLMaterial (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of material properties that together describe the intended surface appearance for rendering a 3D object.

## Declaration

```swift
class MDLMaterial
```

<a id="overview"></a>

## Overview

Each material property (a [MDLMaterialProperty](mdlmaterialproperty.md) object) provides one specific aspect of appearance, such as opacity, shininess, or surface detail. Use the [material](mdlsubmesh/material.md) property of a [MDLSubmesh](mdlsubmesh.md) object to associate a material with a 3D object for rendering or to find the material assigned to an object loaded from an asset file.

Sets of certain material properties called *scattering functions* determine the material’s response to lighting. You can manage these properties together using a material’s [scatteringFunction](mdlmaterial/scatteringfunction.md) property. Creating a material with the inherited [init()](../objectivec/nsobject-swift.class/init%28%29.md) initializer is equivalent to using the [init(name:scatteringFunction:)](mdlmaterial/init%28name_scatteringfunction_%29.md) with a [MDLScatteringFunction](mdlscatteringfunction.md) object whose properties all have default values.

## Topics

### Creating a material

- [init(name:scatteringFunction:)](mdlmaterial/init%28name_scatteringfunction_%29.md): Initializes a material

### Using a material

- [materialFace](mdlmaterial/materialface.md): The surface of an object.
- [name](mdlmaterial/name.md): A descriptive name for the material.

### Determining a material’s response to lighting

- [scatteringFunction](mdlmaterial/scatteringfunction.md): The collection of material properties that define the material’s response to light.

### Working with individual material properties

- [propertyNamed(\_:)](mdlmaterial/propertynamed%28__%29.md): Returns the material property with the specified name.
- [property(with:)](mdlmaterial/property%28with_%29.md): Returns the material property for the specified material semantic.
- [properties(with:)](mdlmaterial/properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty(\_:)](mdlmaterial/setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [remove(\_:)](mdlmaterial/remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties()](mdlmaterial/removeallproperties%28%29.md): Removes all material properties from the material.

### Sharing material properties

- [base](mdlmaterial/base.md): Another material object from which this material’s properties are derived.

### Accessing material properties with subscript syntax

- [subscript(\_:)](mdlmaterial/subscript%28__%29-323j3.md): Returns the material property with the specified name, for use with subscript syntax.
- [subscript(\_:)](mdlmaterial/subscript%28__%29-19j2.md): Returns the material property at the specified index in the material, for use with subscript syntax.
- [count](mdlmaterial/count.md): The number of material properties in the material.

### Working with textures using resolvers

- [loadTextures(using:)](mdlmaterial/loadtextures%28using_%29.md): Loads textures using resolver for string paths and NSURLs.
- [resolveTextures(with:)](mdlmaterial/resolvetextures%28with_%29.md): Resolves all texture string paths as NSURLs with resolver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Materials

- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.

# MDLMaterial (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of material properties that together describe the intended surface appearance for rendering a 3D object.

## Declaration

```objectivec
@interface MDLMaterial : NSObject
```

<a id="overview"></a>

## Overview

Each material property (a [MDLMaterialProperty](mdlmaterialproperty.md) object) provides one specific aspect of appearance, such as opacity, shininess, or surface detail. Use the [material](mdlsubmesh/material.md) property of a [MDLSubmesh](mdlsubmesh.md) object to associate a material with a 3D object for rendering or to find the material assigned to an object loaded from an asset file.

Sets of certain material properties called *scattering functions* determine the material’s response to lighting. You can manage these properties together using a material’s [scatteringFunction](mdlmaterial/scatteringfunction.md) property. Creating a material with the inherited [init](../objectivec/nsobject-swift.class/init%28%29.md) initializer is equivalent to using the [initWithName:scatteringFunction:](mdlmaterial/init%28name_scatteringfunction_%29.md) with a [MDLScatteringFunction](mdlscatteringfunction.md) object whose properties all have default values.

## Topics

### Creating a material

- [initWithName:scatteringFunction:](mdlmaterial/init%28name_scatteringfunction_%29.md): Initializes a material

### Using a material

- [materialFace](mdlmaterial/materialface.md): The surface of an object.
- [name](mdlmaterial/name.md): A descriptive name for the material.

### Determining a material’s response to lighting

- [scatteringFunction](mdlmaterial/scatteringfunction.md): The collection of material properties that define the material’s response to light.

### Working with individual material properties

- [propertyNamed:](mdlmaterial/propertynamed%28__%29.md): Returns the material property with the specified name.
- [propertyWithSemantic:](mdlmaterial/property%28with_%29.md): Returns the material property for the specified material semantic.
- [propertiesWithSemantic:](mdlmaterial/properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty:](mdlmaterial/setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [removeProperty:](mdlmaterial/remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties](mdlmaterial/removeallproperties%28%29.md): Removes all material properties from the material.

### Sharing material properties

- [baseMaterial](mdlmaterial/base.md): Another material object from which this material’s properties are derived.

### Accessing material properties with subscript syntax

- [objectForKeyedSubscript:](mdlmaterial/subscript%28__%29-323j3.md): Returns the material property with the specified name, for use with subscript syntax.
- [objectAtIndexedSubscript:](mdlmaterial/subscript%28__%29-19j2.md): Returns the material property at the specified index in the material, for use with subscript syntax.
- [count](mdlmaterial/count.md): The number of material properties in the material.

### Working with textures using resolvers

- [loadTexturesUsingResolver:](mdlmaterial/loadtextures%28using_%29.md): Loads textures using resolver for string paths and NSURLs.
- [resolveTexturesWithResolver:](mdlmaterial/resolvetextures%28with_%29.md): Resolves all texture string paths as NSURLs with resolver.

### Type Methods

- [materialWithSCNMaterial:](mdlmaterial/materialwithscnmaterial_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLNamed](mdlnamed.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Materials

- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.
