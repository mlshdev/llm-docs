> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format)

# cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the stencil format at the specified index in the layer capabilities.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format(cp_layer_renderer_capabilities_t layer_capabilities, size_t index);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `index`: A zero-based index into the list of stencil formats.

<a id="return-value"></a>

## Return Value

The stencil format at the specified index.

<a id="discussion"></a>

## Discussion

Use this function to determine the pixel arrangements and characteristics you can apply to the layer.
