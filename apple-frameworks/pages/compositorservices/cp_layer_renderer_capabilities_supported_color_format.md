> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_format)

# cp_layer_renderer_capabilities_supported_color_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** visionOS 1.0+

Returns the color format at the specified index in the layer capabilities.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_capabilities_supported_color_format(cp_layer_renderer_capabilities_t layer_capabilities, size_t index);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `index`: A zero-based index into the list of supported color formats. This index must be less than the value returned by the [cp_layer_renderer_capabilities_supported_color_formats_count](cp_layer_renderer_capabilities_supported_color_formats_count.md) function.

<a id="return-value"></a>

## Return Value

The color format at the specified index.

<a id="discussion"></a>

## Discussion

This function tells you which pixel arrangements and characteristics the layer supports for its color textures.

## See Also

### Getting the supported color formats

- [cp_layer_renderer_capabilities_supported_color_formats_count](cp_layer_renderer_capabilities_supported_color_formats_count.md): Returns the number of color formats the layer supports.
