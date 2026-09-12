> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_format_with_options](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_color_format_with_options)

# cp_layer_renderer_capabilities_supported_color_format_with_options

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the color format at the specified index in the layer capabilities.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_capabilities_supported_color_format_with_options(cp_layer_renderer_capabilities_t layer_capabilities, cp_supported_color_formats_options options, size_t index);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `options`: The options to consider when creating the list of supported color formats.
- `index`: A zero-based index into the list of color formats.

<a id="return-value"></a>

## Return Value

The color format at the specified index.

<a id="discussion"></a>

## Discussion

Use this function to determine the pixel arrangements and characteristics you can apply to the layer.
