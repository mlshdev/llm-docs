> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_formats_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_formats_count)

# cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_formats_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of stencil formats the specified layer supports.

## Declaration

```objectivec
size_t cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_formats_count(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

The number of stencil formats the layer supports.

<a id="discussion"></a>

## Discussion

To iterate over the stencil formats, use the [cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format](cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format.md) function.
