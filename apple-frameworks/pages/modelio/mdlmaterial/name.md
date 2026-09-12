> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/name](https://developer.apple.com/documentation/modelio/mdlmaterial/name)

# name (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the material.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

This name isn’t used in rendering, but it can be useful for debugging and organizing the materials used in a project. When you load materials from an asset file with the [MDLAsset](../mdlasset.md) class, Model I/O uses names assigned in the asset file where supported by the file format.

## See Also

### Using a material

- [materialFace](materialface.md): The surface of an object.

# name (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the material.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This name isn’t used in rendering, but it can be useful for debugging and organizing the materials used in a project. When you load materials from an asset file with the [MDLAsset](../mdlasset.md) class, Model I/O uses names assigned in the asset file where supported by the file format.

## See Also

### Using a material

- [materialFace](materialface.md): The surface of an object.
