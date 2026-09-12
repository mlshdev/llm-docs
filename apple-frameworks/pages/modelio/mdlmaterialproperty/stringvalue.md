> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/stringvalue](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/stringvalue)

# stringValue (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The string value for the material.

## Declaration

```swift
var stringValue: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The meaning of a string value depends on the renderer (or other software component) processing the material. For example, a string value might be treated as the name of a texture image to be loaded from a default path.

## See Also

### Working with a Material Property’s Value

- [urlValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.

# stringValue (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The string value for the material.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * stringValue;
```

<a id="Discussion"></a>

## Discussion

The meaning of a string value depends on the renderer (or other software component) processing the material. For example, a string value might be treated as the name of a texture image to be loaded from a default path.

## See Also

### Working with a Material Property’s Value

- [URLValue](urlvalue.md): The URL value for the material property—typically, the URL to a texture image.
- [textureSamplerValue](texturesamplervalue.md): A texture sampler object that provides the texture image value for the material property.
- [color](color.md): The color value for the material property.
- [floatValue](floatvalue.md): The scalar floating-point value for the material property.
- [float2Value](float2value.md): The 2-component floating-point vector value for the material property.
- [float3Value](float3value.md): The 3-component floating-point vector value for the material property.
- [float4Value](float4value.md): The 4-component floating-point vector value for the material property.
- [matrix4x4](matrix4x4.md): The 4 x 4 floating-point matrix value for the material property.
