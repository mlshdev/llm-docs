> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/init(name:semantic:color:)](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/init(name:semantic:color:))

# init(name:semantic:color:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a color value.

## Declaration

```swift
convenience init(name: String, semantic: MDLMaterialSemantic, color: CGColor)
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `color`: The color value for the material property.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyType.color](../mdlmaterialpropertytype/color.md).

<a id="Discussion"></a>

## Discussion

A material property with a color value uses a uniform color for all pixels rendered using the material. This option is useful for base colors of solid-color objects, and also for material semantics where variation across the surface of the material is unnecessary. To vary colors across a surface, use a texture image instead.

## See Also

### Creating a Material Property

- [init(name:semantic:)](init%28name_semantic_%29.md): Initializes a material property without a value.
- [init(name:semantic:string:)](init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [init(name:semantic:url:)](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [init(name:semantic:textureSampler:)](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [init(name:semantic:float:)](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [init(name:semantic:float2:)](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [init(name:semantic:float3:)](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [init(name:semantic:float4:)](init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [init(name:semantic:matrix4x4:)](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.

# initWithName:semantic:color: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material property with a color value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name semantic:(MDLMaterialSemantic) semantic color:(CGColorRef) color;
```

## Parameters

- `name`: A descriptive name for the material property. For details, see the [name](name.md) property.
- `semantic`: The semantic meaning for the material property’s value. For details, see the [semantic](semantic.md) property.
- `color`: The color value for the material property.

<a id="return-value"></a>

## Return Value

A new material property object whose [type](type.md) property is [MDLMaterialPropertyTypeColor](../mdlmaterialpropertytype/color.md).

<a id="Discussion"></a>

## Discussion

A material property with a color value uses a uniform color for all pixels rendered using the material. This option is useful for base colors of solid-color objects, and also for material semantics where variation across the surface of the material is unnecessary. To vary colors across a surface, use a texture image instead.

## See Also

### Creating a Material Property

- [initWithName:semantic:](init%28name_semantic_%29.md): Initializes a material property without a value.
- [initWithName:semantic:string:](init%28name_semantic_string_%29.md): Initializes a material property with a string value.
- [initWithName:semantic:URL:](init%28name_semantic_url_%29-2ldk4.md): Initializes a material property with a URL value.
- [initWithName:semantic:textureSampler:](init%28name_semantic_texturesampler_%29.md): Initializes a material property with a texture sampler object.
- [initWithName:semantic:float:](init%28name_semantic_float_%29.md): Initializes a material property with a scalar value.
- [initWithName:semantic:float2:](init%28name_semantic_float2_%29.md): Initializes a material property with a 2-component vector value.
- [initWithName:semantic:float3:](init%28name_semantic_float3_%29.md): Initializes a material property with a 3-component vector value.
- [initWithName:semantic:float4:](init%28name_semantic_float4_%29.md): Initializes a material property with a 4-component vector value.
- [initWithName:semantic:matrix4x4:](init%28name_semantic_matrix4x4_%29.md): Initializes a material property with a 4 x 4 matrix value.
