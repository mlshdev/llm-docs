> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportedcolorformats](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedcolorformats)

# supportedColorFormats

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

An array of color formats that the layer supports for its textures.

> Use supportedColorFormats(options: SupportedColorFormatsOptions) instead.

## Declaration

```swift
var supportedColorFormats: [MTLPixelFormat] { get }
```

<a id="discussion"></a>

## Discussion

The pixel formats in this property tell you which pixel arrangements and characteristics the layer supports for its color textures.

## See Also

### Getting the supported formats

- [supportedDepthFormats](supporteddepthformats.md): The list of depth formats that the layer supports
