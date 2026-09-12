> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_formats_count_with_options](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_formats_count_with_options)

# cp_layer_renderer_capabilities_supported_color_formats_count_with_options

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of color formats the specified layer supports.

## Declaration

```objectivec
size_t cp_layer_renderer_capabilities_supported_color_formats_count_with_options(cp_layer_renderer_capabilities_t layer_capabilities, cp_supported_color_formats_options options);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `options`: The options to consider when creating the list of supported color formats.

<a id="return-value"></a>

## Return Value

The number of color formats the layer supports.

<a id="discussion"></a>

## Discussion

To iterate over the color formats, use the [cp_layer_renderer_capabilities_supported_color_format](cp_layer_renderer_capabilities_supported_color_format.md) function.
