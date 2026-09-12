> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialpropertytype](https://developer.apple.com/documentation/modelio/mdlmaterialpropertytype)

# MDLMaterialPropertyType (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.

## Declaration

```swift
enum MDLMaterialPropertyType
```

<a id="overview"></a>

## Overview

Reading a material property’s value using an accessor for a type other than that corresponding to the [type](mdlmaterialproperty/type.md) property produces undefined results.

## Topics

### Constants

- [MDLMaterialPropertyType.none](mdlmaterialpropertytype/none.md): The material property’s value has not been initialized.
- [MDLMaterialPropertyType.string](mdlmaterialpropertytype/string.md): The material’s value is a string.
- [MDLMaterialPropertyType.URL](mdlmaterialpropertytype/url.md): The material property’s value is a URL—typically, a URL referencing a texture image.
- [MDLMaterialPropertyType.texture](mdlmaterialpropertytype/texture.md): The material property’s value is a [MDLTextureSampler](mdltexturesampler.md) object that provides both a texture image and texture rendering parameters.
- [MDLMaterialPropertyType.color](mdlmaterialpropertytype/color.md): The material property’s value is a uniform color.
- [MDLMaterialPropertyType.float](mdlmaterialpropertytype/float.md): The material property’s value is a floating-point scalar.
- [MDLMaterialPropertyType.float2](mdlmaterialpropertytype/float2.md): The material property’s value is a 2-component floating-point vector.
- [MDLMaterialPropertyType.float3](mdlmaterialpropertytype/float3.md): The material property’s value is a 3-component floating-point vector.
- [MDLMaterialPropertyType.float4](mdlmaterialpropertytype/float4.md): The material property’s value is a 4-component floating-point vector.
- [MDLMaterialPropertyType.matrix44](mdlmaterialpropertytype/matrix44.md): The material property’s value is a 4 x 4 floating-point matrix.

### Enumeration Cases

- [MDLMaterialPropertyType.buffer](mdlmaterialpropertytype/buffer.md)

### Initializers

- [init(rawValue:)](mdlmaterialpropertytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.

# MDLMaterialPropertyType (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.

## Declaration

```objectivec
enum MDLMaterialPropertyType : NSUInteger;
```

<a id="overview"></a>

## Overview

Reading a material property’s value using an accessor for a type other than that corresponding to the [type](mdlmaterialproperty/type.md) property produces undefined results.

## Topics

### Constants

- [MDLMaterialPropertyTypeNone](mdlmaterialpropertytype/none.md): The material property’s value has not been initialized.
- [MDLMaterialPropertyTypeString](mdlmaterialpropertytype/string.md): The material’s value is a string.
- [MDLMaterialPropertyTypeURL](mdlmaterialpropertytype/url.md): The material property’s value is a URL—typically, a URL referencing a texture image.
- [MDLMaterialPropertyTypeTexture](mdlmaterialpropertytype/texture.md): The material property’s value is a [MDLTextureSampler](mdltexturesampler.md) object that provides both a texture image and texture rendering parameters.
- [MDLMaterialPropertyTypeColor](mdlmaterialpropertytype/color.md): The material property’s value is a uniform color.
- [MDLMaterialPropertyTypeFloat](mdlmaterialpropertytype/float.md): The material property’s value is a floating-point scalar.
- [MDLMaterialPropertyTypeFloat2](mdlmaterialpropertytype/float2.md): The material property’s value is a 2-component floating-point vector.
- [MDLMaterialPropertyTypeFloat3](mdlmaterialpropertytype/float3.md): The material property’s value is a 3-component floating-point vector.
- [MDLMaterialPropertyTypeFloat4](mdlmaterialpropertytype/float4.md): The material property’s value is a 4-component floating-point vector.
- [MDLMaterialPropertyTypeMatrix44](mdlmaterialpropertytype/matrix44.md): The material property’s value is a 4 x 4 floating-point matrix.

### Enumeration Cases

- [MDLMaterialPropertyTypeBuffer](mdlmaterialpropertytype/buffer.md)

## See Also

### Constants

- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.
