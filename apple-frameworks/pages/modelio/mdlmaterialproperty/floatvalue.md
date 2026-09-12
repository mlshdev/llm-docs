> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/floatvalue](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/floatvalue)

# floatValue (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The scalar floating-point value for the material property.

## Declaration

```swift
var floatValue: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Scalar values are appropriate for some semantics, such as the [MDLMaterialSemantic.specularTint](../mdlmaterialsemantic/speculartint.md) semantic (which controls the balance between material and light colors in specular highlighting). Providing a float value for the material property applies that value for all pixels rendered using the material; to provide variation in the semantic’s value across a surface, use a grayscale texture image instead.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [urlValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

# floatValue (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The scalar floating-point value for the material property.

## Declaration

```objectivec
@property (nonatomic, assign) float floatValue;
```

<a id="Discussion"></a>

## Discussion

Scalar values are appropriate for some semantics, such as the [MDLMaterialSemanticSpecularTint](../mdlmaterialsemantic/speculartint.md) semantic (which controls the balance between material and light colors in specular highlighting). Providing a float value for the material property applies that value for all pixels rendered using the material; to provide variation in the semantic’s value across a surface, use a grayscale texture image instead.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [URLValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.
