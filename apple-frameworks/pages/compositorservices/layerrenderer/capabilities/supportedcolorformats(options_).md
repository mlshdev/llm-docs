> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedcolorformats(options:)

# supportedColorFormats(options:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns an array of formats that the layer supports for its color textures

## Declaration

```swift
func supportedColorFormats(options: LayerRenderer.Capabilities.SupportedColorFormatsOptions) -> [MTLPixelFormat]
```

## Parameters

- `options`: Specific options you want the formats of the color textures to be supported with. The function returns only color formats that are supported with the specified options.

<a id="discussion"></a>

## Discussion

Call this function to determine which pixel arrangements and characteristics the layer supports for its color textures.
