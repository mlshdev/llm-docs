> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturefilter/mipfilter](https://developer.apple.com/documentation/modelio/mdltexturefilter/mipfilter)

# mipFilter (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The filter mode for rendering textures using mipmapping.

## Declaration

```swift
var mipFilter: MDLMaterialMipMapFilterMode { get set }
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that can increase rendering performance when rendering a texture image at smaller sizes. A texture can contain several mipmap levels for its image contents, each at a fraction of the original image’s size. A renderer samples texels from the mipmap level closest to the size being rendered.

The default value is [MDLMaterialMipMapFilterMode.linear](../mdlmaterialmipmapfiltermode/linear.md), indicating that a renderer should linearly interpolate between mipmap levels.

## See Also

### Managing Texture Filter Modes

- [minFilter](minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [magFilter](magfilter.md): The filter mode for rendering textures at sizes larger than that of the original image.

# mipFilter (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The filter mode for rendering textures using mipmapping.

## Declaration

```objectivec
@property (nonatomic, assign) MDLMaterialMipMapFilterMode mipFilter;
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that can increase rendering performance when rendering a texture image at smaller sizes. A texture can contain several mipmap levels for its image contents, each at a fraction of the original image’s size. A renderer samples texels from the mipmap level closest to the size being rendered.

The default value is [MDLMaterialMipMapFilterModeLinear](../mdlmaterialmipmapfiltermode/linear.md), indicating that a renderer should linearly interpolate between mipmap levels.

## See Also

### Managing Texture Filter Modes

- [minFilter](minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [magFilter](magfilter.md): The filter mode for rendering textures at sizes larger than that of the original image.
