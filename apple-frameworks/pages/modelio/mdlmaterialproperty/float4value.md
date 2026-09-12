> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/float4value](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/float4value)

# float4Value (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The 4-component floating-point vector value for the material property.

## Declaration

```swift
var float4Value: vector_float4 { get set }
```

<a id="Discussion"></a>

## Discussion

A 4-component vector can also be used to store RGBA color values. In this case, color components should be interpreted using the Rec. 709 color space standard.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [urlValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

# float4Value (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The 4-component floating-point vector value for the material property.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float4 float4Value;
```

<a id="Discussion"></a>

## Discussion

A 4-component vector can also be used to store RGBA color values. In this case, color components should be interpreted using the Rec. 709 color space standard.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [URLValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.
