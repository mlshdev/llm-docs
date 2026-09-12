> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportedlayouts(options:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedlayouts(options:))

# supportedLayouts(options:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns an array of texture layouts that the layer supports.

## Declaration

```swift
func supportedLayouts(options: LayerRenderer.Capabilities.SupportedLayoutsOptions) -> [LayerRenderer.Layout]
```

## Parameters

- `options`: Specific options you want the layouts to support. The function returns only layouts that support the specified options.

<a id="return-value"></a>

## Return Value

An array of supported layouts. If the layer doesn’t support any layouts with the specified options, this function returns an empty array.

<a id="discussion"></a>

## Discussion

Call this function to determine which texture layouts you can use for your content.

## See Also

### Getting the supported layouts

- [LayerRenderer.Capabilities.SupportedLayoutsOptions](supportedlayoutsoptions.md): Options you can use to filter the supported layouts for a layer.
