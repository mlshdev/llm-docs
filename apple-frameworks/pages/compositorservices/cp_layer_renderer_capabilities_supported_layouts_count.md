> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_layouts_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_layouts_count)

# cp_layer_renderer_capabilities_supported_layouts_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the number of layouts the layer supports.

## Declaration

```objectivec
size_t cp_layer_renderer_capabilities_supported_layouts_count(cp_layer_renderer_capabilities_t layer_capabilities, cp_supported_layouts_options options);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `options`: A bitmask of options that correspond to layout capabilities.

<a id="return-value"></a>

## Return Value

The number of supported layout options for the layer’s textures.

<a id="discussion"></a>

## Discussion

This function returns only the number of layouts that support the specified `options`. To iterate over the available layouts, use the [cp_layer_renderer_capabilities_supported_layout](cp_layer_renderer_capabilities_supported_layout.md) function.

## See Also

### Getting the supported layouts

- [cp_layer_renderer_capabilities_supported_layout](cp_layer_renderer_capabilities_supported_layout.md): Returns the layout at the specified index in the layer capabilities.
- [cp_supported_layouts_options](cp_supported_layouts_options.md): The options you can pass to functions that relate to rendering capabilities and layout support.
