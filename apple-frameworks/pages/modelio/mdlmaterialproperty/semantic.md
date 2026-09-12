> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/semantic](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/semantic)

# semantic (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The semantic meaning for the material property’s value.

## Declaration

```swift
var semantic: MDLMaterialSemantic { get set }
```

<a id="Discussion"></a>

## Discussion

A material semantic determines how the material property’s value should be interpreted to produce a specific surface appearance in rendering. For example, the [MDLMaterialSemantic.baseColor](../mdlmaterialsemantic/basecolor.md) semantic defines the default color of each pixel on a rendered surface before shading effects are applied.

When Model I/O  loads materials from an [MDLAsset](../mdlasset.md) object, it automatically selects the appropriate standard semantics for the surface rendering descriptions in the asset file.

## See Also

### Using a Material Property

- [name](name.md): A descriptive name for the material property.
- [type](type.md): The data type stored in the material property’s value.

# semantic (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The semantic meaning for the material property’s value.

## Declaration

```objectivec
@property (nonatomic, assign) MDLMaterialSemantic semantic;
```

<a id="Discussion"></a>

## Discussion

A material semantic determines how the material property’s value should be interpreted to produce a specific surface appearance in rendering. For example, the [MDLMaterialSemanticBaseColor](../mdlmaterialsemantic/basecolor.md) semantic defines the default color of each pixel on a rendered surface before shading effects are applied.

When Model I/O  loads materials from an [MDLAsset](../mdlasset.md) object, it automatically selects the appropriate standard semantics for the surface rendering descriptions in the asset file.

## See Also

### Using a Material Property

- [name](name.md): A descriptive name for the material property.
- [type](type.md): The data type stored in the material property’s value.
