> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_depth_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_depth_format)

# cp_layer_renderer_capabilities_supported_depth_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the depth format at the specified index in the layer capabilities.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_capabilities_supported_depth_format(cp_layer_renderer_capabilities_t layer_capabilities, size_t index);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `index`: A zero-based index into the list of supported depth formats. This index must be less than the value the [cp_layer_renderer_capabilities_supported_depth_formats_count](cp_layer_renderer_capabilities_supported_depth_formats_count.md) function returns.

<a id="return-value"></a>

## Return Value

The depth format at the specified index.

<a id="discussion"></a>

## Discussion

This function tells you which pixel arrangements and characteristics the layer supports for its depth textures.

## See Also

### Getting the supported depth formats

- [cp_layer_renderer_capabilities_supported_depth_formats_count](cp_layer_renderer_capabilities_supported_depth_formats_count.md): Returns the number of depth formats the layer supports.
