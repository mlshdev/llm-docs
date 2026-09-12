> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/name](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/name)

# name (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the material property.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

A material property’s name is not used for rendering, but it can be useful in debugging. Model Model I/O  may set a material property’s name to a format-specific value when loading materials from an [MDLAsset](../mdlasset.md) object.

## See Also

### Using a Material Property

- [semantic](semantic.md): The semantic meaning for the material property’s value.
- [type](type.md): The data type stored in the material property’s value.

# name (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the material property.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

A material property’s name is not used for rendering, but it can be useful in debugging. Model Model I/O  may set a material property’s name to a format-specific value when loading materials from an [MDLAsset](../mdlasset.md) object.

## See Also

### Using a Material Property

- [semantic](semantic.md): The semantic meaning for the material property’s value.
- [type](type.md): The data type stored in the material property’s value.
