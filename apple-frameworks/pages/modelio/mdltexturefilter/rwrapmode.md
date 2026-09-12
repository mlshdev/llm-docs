> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturefilter/rwrapmode](https://developer.apple.com/documentation/modelio/mdltexturefilter/rwrapmode)

# rWrapMode (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The coordinate wrapping mode for texture r-coordinates.

## Declaration

```swift
var rWrapMode: MDLMaterialTextureWrapMode { get set }
```

<a id="Discussion"></a>

## Discussion

Texture coordinates canonically range from `0.0` to `1.0`; wrap mode determines the behavior for samples from outside that range. For details, see [MDLMaterialTextureWrapMode](../mdlmaterialtexturewrapmode.md).

The r-coordinate is the third value in a set of texture coordinates, used only with three-dimensional textures.

## See Also

### Managing Texture Coordinate Wrap Modes

- [sWrapMode](swrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [tWrapMode](twrapmode.md): The coordinate wrapping mode for texture t-coordinates.

# rWrapMode (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The coordinate wrapping mode for texture r-coordinates.

## Declaration

```objectivec
@property (nonatomic, assign) MDLMaterialTextureWrapMode rWrapMode;
```

<a id="Discussion"></a>

## Discussion

Texture coordinates canonically range from `0.0` to `1.0`; wrap mode determines the behavior for samples from outside that range. For details, see [MDLMaterialTextureWrapMode](../mdlmaterialtexturewrapmode.md).

The r-coordinate is the third value in a set of texture coordinates, used only with three-dimensional textures.

## See Also

### Managing Texture Coordinate Wrap Modes

- [sWrapMode](swrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [tWrapMode](twrapmode.md): The coordinate wrapping mode for texture t-coordinates.
