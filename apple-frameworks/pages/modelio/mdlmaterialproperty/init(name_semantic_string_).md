> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/init(name:semantic:string:)](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/init(name:semantic:string:))

# init(name:semantic:string:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a string value.

## Declaration

```swift
convenience init(name: String, semantic: MDLMaterialSemantic, string: String?)
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `string`: The string value for the material.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyType.string](../mdlmaterialpropertytype/string.md).

<a id="Discussion"></a>

## Discussion

The meaning of a string value depends on the renderer (or other software component) processing the material. For example, a string value might be treated as the name of a texture image to be loaded from a default path.

## See Also

### Creating a Material Property

- [init(name:semantic:)](init%28name_semantic_%29.md): Initializes a material property without a value.
- [init(name:semantic:url:)](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [init(name:semantic:textureSampler:)](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [init(name:semantic:color:)](init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [init(name:semantic:float:)](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [init(name:semantic:float2:)](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [init(name:semantic:float3:)](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [init(name:semantic:float4:)](init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [init(name:semantic:matrix4x4:)](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.

# initWithName:semantic:string: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a string value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name semantic:(MDLMaterialSemantic) semantic string:(NSString *) string;
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `string`: The string value for the material.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyTypeString](../mdlmaterialpropertytype/string.md).

<a id="Discussion"></a>

## Discussion

The meaning of a string value depends on the renderer (or other software component) processing the material. For example, a string value might be treated as the name of a texture image to be loaded from a default path.

## See Also

### Creating a Material Property

- [initWithName:semantic:](init%28name_semantic_%29.md): Initializes a material property without a value.
- [initWithName:semantic:URL:](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [initWithName:semantic:textureSampler:](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [initWithName:semantic:color:](init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [initWithName:semantic:float:](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [initWithName:semantic:float2:](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [initWithName:semantic:float3:](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [initWithName:semantic:float4:](init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [initWithName:semantic:matrix4x4:](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.
