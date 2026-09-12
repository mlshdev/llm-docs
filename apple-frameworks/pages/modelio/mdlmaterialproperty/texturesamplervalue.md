> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/texturesamplervalue](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/texturesamplervalue)

# textureSamplerValue (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A texture sampler object that provides the texture image value for the material property.

## Declaration

```swift
var textureSamplerValue: MDLTextureSampler? { get set }
```

<a id="Discussion"></a>

## Discussion

Unlike the URL to a texture image, a texture sampler object specifies both a texture image and parameters for rendering that image.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [urlValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

# textureSamplerValue (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A texture sampler object that provides the texture image value for the material property.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLTextureSampler * textureSamplerValue;
```

<a id="Discussion"></a>

## Discussion

Unlike the URL to a texture image, a texture sampler object specifies both a texture image and parameters for rendering that image.

## See Also

### Working with a Material Property’s Value

- [stringValue](stringvalue.md): The string value for the material.
- [URLValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.
