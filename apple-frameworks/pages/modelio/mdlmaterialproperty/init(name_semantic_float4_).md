> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/init(name:semantic:float4:)](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/init(name:semantic:float4:))

# init(name:semantic:float4:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a 4-component vector value.

## Declaration

```swift
convenience init(name: String, semantic: MDLMaterialSemantic, float4 value: vector_float4)
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `value`: The 4-component floating-point vector value for the material property.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyType.float4](../mdlmaterialpropertytype/float4.md).

<a id="Discussion"></a>

## Discussion

A 4-component vector can also be used to store RGBA color values. In this case, color components should be interpreted using the Rec. 709 color space standard.

## See Also

### Creating a Material Property

- [init(name:semantic:)](init%28name_semantic_%29.md): Initializes a material property without a value.
- [init(name:semantic:string:)](init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [init(name:semantic:url:)](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [init(name:semantic:textureSampler:)](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [init(name:semantic:color:)](init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [init(name:semantic:float:)](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [init(name:semantic:float2:)](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [init(name:semantic:float3:)](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [init(name:semantic:matrix4x4:)](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.

# initWithName:semantic:float4: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a 4-component vector value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name semantic:(MDLMaterialSemantic) semantic float4:(vector_float4) value;
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `value`: The 4-component floating-point vector value for the material property.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyTypeFloat4](../mdlmaterialpropertytype/float4.md).

<a id="Discussion"></a>

## Discussion

A 4-component vector can also be used to store RGBA color values. In this case, color components should be interpreted using the Rec. 709 color space standard.

## See Also

### Creating a Material Property

- [initWithName:semantic:](init%28name_semantic_%29.md): Initializes a material property without a value.
- [initWithName:semantic:string:](init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [initWithName:semantic:URL:](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [initWithName:semantic:textureSampler:](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [initWithName:semantic:color:](init%28name_semantic_color_%29.md): Initializes a material property with a color value.
- [initWithName:semantic:float:](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [initWithName:semantic:float2:](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [initWithName:semantic:float3:](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [initWithName:semantic:matrix4x4:](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.
