> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/type](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/type)

# type (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data type stored in the material property’s value.

## Declaration

```swift
var type: MDLMaterialPropertyType { get set }
```

<a id="Discussion"></a>

## Discussion

Each [semantic](semantic.md) value has one or more data types that are appropriate for its value. For example, the [MDLMaterialSemantic.baseColor](../mdlmaterialsemantic/basecolor.md) semantic provides per-pixel colors for a rendered surface, so appropriate values for that semantic include scalars (interpreted as a grayscale color), colors, texture images, or URLs that refer to texture images. The [MDLMaterialSemantic.ambientOcclusionScale](../mdlmaterialsemantic/ambientocclusionscale.md) semantic provides a scale factor for the effect of ambient occlusion shading, so an appropriate value is a scalar or a grayscale image that varies that scalar value across the surface of the material.

## See Also

### Using a Material Property

- [name](name.md): A descriptive name for the material property.
- [semantic](semantic.md): The semantic meaning for the material property’s value.

# type (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data type stored in the material property’s value.

## Declaration

```objectivec
@property (nonatomic, assign) MDLMaterialPropertyType type;
```

<a id="Discussion"></a>

## Discussion

Each [semantic](semantic.md) value has one or more data types that are appropriate for its value. For example, the [MDLMaterialSemanticBaseColor](../mdlmaterialsemantic/basecolor.md) semantic provides per-pixel colors for a rendered surface, so appropriate values for that semantic include scalars (interpreted as a grayscale color), colors, texture images, or URLs that refer to texture images. The [MDLMaterialSemanticAmbientOcclusionScale](../mdlmaterialsemantic/ambientocclusionscale.md) semantic provides a scale factor for the effect of ambient occlusion shading, so an appropriate value is a scalar or a grayscale image that varies that scalar value across the surface of the material.

## See Also

### Using a Material Property

- [name](name.md): A descriptive name for the material property.
- [semantic](semantic.md): The semantic meaning for the material property’s value.
