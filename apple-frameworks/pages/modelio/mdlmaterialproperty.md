> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty](https://developer.apple.com/documentation/modelio/mdlmaterialproperty)

# MDLMaterialProperty (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A definition for one specific aspect of the rendering parameters for a material.

## Declaration

```swift
class MDLMaterialProperty
```

<a id="overview"></a>

## Overview

The collection of material properties in a [MDLMaterial](mdlmaterial.md) instance defines the intended surface appearance for rendering a 3D object. A material property object’s [semantic](mdlmaterialproperty/semantic.md) property identifies which aspect of material rendering it affects, and its value (which can be any of several types) determines how the material property contributes to that aspect of rendering.

When you initialize a material property with a specific value (using one of the initializers listed in [Creating a Material Property](mdlmaterialproperty.md#Creating-a-Material-Property)) or set the value of an existing material property (using one of the property setters listed in [Working with a Material Property’s Value](mdlmaterialproperty.md#Working-with-a-Material-Propertys-Value)), the [type](mdlmaterialproperty/type.md) property changes to reflect the data type of the stored value. To retrieve the material property’s value, you must use the property accessor appropriate to its type. If you read a material property’s value using an accessor for a different type, the result is undefined.

## Topics

### Creating a Material Property

- [init(name:semantic:)](mdlmaterialproperty/init%28name_semantic_%29.md): Initializes a material property without a value.
- [init(name:semantic:string:)](mdlmaterialproperty/init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [init(name:semantic:url:)](mdlmaterialproperty/init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [init(name:semantic:textureSampler:)](mdlmaterialproperty/init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [init(name:semantic:color:)](mdlmaterialproperty/init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [init(name:semantic:float:)](mdlmaterialproperty/init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [init(name:semantic:float2:)](mdlmaterialproperty/init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [init(name:semantic:float3:)](mdlmaterialproperty/init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [init(name:semantic:float4:)](mdlmaterialproperty/init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [init(name:semantic:matrix4x4:)](mdlmaterialproperty/init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.

### Using a Material Property

- [name](mdlmaterialproperty/name.md): A descriptive name for the material property.
- [semantic](mdlmaterialproperty/semantic.md): The semantic meaning for the material property’s value.
- [type](mdlmaterialproperty/type.md): The data type stored in the material property’s value.

### Working with a Material Property’s Value

- [stringValue](mdlmaterialproperty/stringvalue.md): The string value for the material.
- [urlValue](mdlmaterialproperty/urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](mdlmaterialproperty/texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](mdlmaterialproperty/color.md): The color value for the material property.
- [floatValue](mdlmaterialproperty/floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](mdlmaterialproperty/float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](mdlmaterialproperty/float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](mdlmaterialproperty/float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](mdlmaterialproperty/matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

### Copying a Material Property

- [setProperties(\_:)](mdlmaterialproperty/setproperties%28__%29.md): Sets the material property’s attributes to those of the specified material property.

### Constants

- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.
- [MDLMaterialPropertyType](mdlmaterialpropertytype.md): Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.

### Initializers

- [init(name:semantic:URL:)](mdlmaterialproperty/init%28name_semantic_url_%29-6lf96.md)

### Instance Properties

- [luminance](mdlmaterialproperty/luminance.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.

# MDLMaterialProperty (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A definition for one specific aspect of the rendering parameters for a material.

## Declaration

```objectivec
@interface MDLMaterialProperty : NSObject
```

<a id="overview"></a>

## Overview

The collection of material properties in a [MDLMaterial](mdlmaterial.md) instance defines the intended surface appearance for rendering a 3D object. A material property object’s [semantic](mdlmaterialproperty/semantic.md) property identifies which aspect of material rendering it affects, and its value (which can be any of several types) determines how the material property contributes to that aspect of rendering.

When you initialize a material property with a specific value (using one of the initializers listed in [Creating a Material Property](mdlmaterialproperty.md#Creating-a-Material-Property)) or set the value of an existing material property (using one of the property setters listed in [Working with a Material Property’s Value](mdlmaterialproperty.md#Working-with-a-Material-Propertys-Value)), the [type](mdlmaterialproperty/type.md) property changes to reflect the data type of the stored value. To retrieve the material property’s value, you must use the property accessor appropriate to its type. If you read a material property’s value using an accessor for a different type, the result is undefined.

## Topics

### Creating a Material Property

- [initWithName:semantic:](mdlmaterialproperty/init%28name_semantic_%29.md): Initializes a material property without a value.
- [initWithName:semantic:string:](mdlmaterialproperty/init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [initWithName:semantic:URL:](mdlmaterialproperty/init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [initWithName:semantic:textureSampler:](mdlmaterialproperty/init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [initWithName:semantic:color:](mdlmaterialproperty/init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [initWithName:semantic:float:](mdlmaterialproperty/init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [initWithName:semantic:float2:](mdlmaterialproperty/init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [initWithName:semantic:float3:](mdlmaterialproperty/init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [initWithName:semantic:float4:](mdlmaterialproperty/init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [initWithName:semantic:matrix4x4:](mdlmaterialproperty/init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.

### Using a Material Property

- [name](mdlmaterialproperty/name.md): A descriptive name for the material property.
- [semantic](mdlmaterialproperty/semantic.md): The semantic meaning for the material property’s value.
- [type](mdlmaterialproperty/type.md): The data type stored in the material property’s value.

### Working with a Material Property’s Value

- [stringValue](mdlmaterialproperty/stringvalue.md): The string value for the material.
- [URLValue](mdlmaterialproperty/urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](mdlmaterialproperty/texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](mdlmaterialproperty/color.md): The color value for the material property.
- [floatValue](mdlmaterialproperty/floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](mdlmaterialproperty/float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](mdlmaterialproperty/float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](mdlmaterialproperty/float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](mdlmaterialproperty/matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

### Copying a Material Property

- [setProperties:](mdlmaterialproperty/setproperties%28__%29.md): Sets the material property’s attributes to those of the specified material property.

### Constants

- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.
- [MDLMaterialPropertyType](mdlmaterialpropertytype.md): Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.

### Instance Properties

- [luminance](mdlmaterialproperty/luminance.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLNamed](mdlnamed.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.
