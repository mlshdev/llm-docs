> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supporteddepthformats

# supportedDepthFormats

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The list of depth formats that the layer supports

## Declaration

```swift
var supportedDepthFormats: [MTLPixelFormat] { get }
```

<a id="discussion"></a>

## Discussion

The pixel formats in this property tell you which pixel arrangements and characteristics the layer supports for its depth textures.

## See Also

### Getting the supported formats

- [supportedColorFormats](supportedcolorformats.md): Deprecated. An array of color formats that the layer supports for its textures.
