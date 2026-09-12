> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/colorusage](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/colorusage)

# colorUsage

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture usage value to apply to the layer’s color textures.

## Declaration

```swift
var colorUsage: MTLTextureUsage { get set }
```

<a id="discussion"></a>

## Discussion

Metal optimizes texture-related operations based on the value in this property. The usage value can be a combination of options. For more information, see [MTLTextureUsage](../../../metal/mtltextureusage.md).

## See Also

### Configuring the color textures

- [colorFormat](colorformat.md): The pixel format to use for color textures.
