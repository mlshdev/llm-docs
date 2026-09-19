> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/colorformat

# colorFormat

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The pixel format to use for color textures.

## Declaration

```swift
var colorFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to determine the pixel format for color textures in a frame. At configuration time, set the value to specify which pixel format you want.

> **Note**

>  Apple Vision Pro uses the P3 color space for pixel color values.

## See Also

### Configuring the color textures

- [colorUsage](colorusage.md): The texture usage value to apply to the layer’s color textures.
