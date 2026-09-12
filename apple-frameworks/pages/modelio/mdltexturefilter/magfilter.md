> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturefilter/magfilter](https://developer.apple.com/documentation/modelio/mdltexturefilter/magfilter)

# magFilter (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The filter mode for rendering textures at sizes larger than that of the original image.

## Declaration

```swift
var magFilter: MDLMaterialTextureFilterMode { get set }
```

<a id="Discussion"></a>

## Discussion

Texture filtering determines the appearance of a rendered surface when portions of the surface appear larger or smaller than the original texture image. For example, the texture coordinates at a point near the camera may correspond to a small fraction of a texel. A renderer uses the magnification filter to determine the color of the sampled texel at that point.

The default value is [MDLMaterialTextureFilterMode.linear](../mdlmaterialtexturefiltermode/linear.md), indicating that a renderer should linearly interpolate between texels.

## See Also

### Managing Texture Filter Modes

- [minFilter](minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [mipFilter](mipfilter.md): The filter mode for rendering textures using mipmapping.

# magFilter (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The filter mode for rendering textures at sizes larger than that of the original image.

## Declaration

```objectivec
@property (nonatomic, assign) MDLMaterialTextureFilterMode magFilter;
```

<a id="Discussion"></a>

## Discussion

Texture filtering determines the appearance of a rendered surface when portions of the surface appear larger or smaller than the original texture image. For example, the texture coordinates at a point near the camera may correspond to a small fraction of a texel. A renderer uses the magnification filter to determine the color of the sampled texel at that point.

The default value is [MDLMaterialTextureFilterModeLinear](../mdlmaterialtexturefiltermode/linear.md), indicating that a renderer should linearly interpolate between texels.

## See Also

### Managing Texture Filter Modes

- [minFilter](minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [mipFilter](mipfilter.md): The filter mode for rendering textures using mipmapping.
