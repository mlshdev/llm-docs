> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_formats_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_formats_count)

# cp_layer_renderer_capabilities_supported_color_formats_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** visionOS 1.0+

Returns the number of color formats the layer supports.

## Declaration

```objectivec
size_t cp_layer_renderer_capabilities_supported_color_formats_count(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

The number of color formats the layer supports.

<a id="discussion"></a>

## Discussion

To iterate over the color formats, use the [cp_layer_renderer_capabilities_supported_color_format](cp_layer_renderer_capabilities_supported_color_format.md) function.

## See Also

### Getting the supported color formats

- [cp_layer_renderer_capabilities_supported_color_format](cp_layer_renderer_capabilities_supported_color_format.md): Returns the color format at the specified index in the layer capabilities.
