> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_tracking_areas_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_tracking_areas_format)

# cp_layer_renderer_capabilities_supported_tracking_areas_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the tracking areas format at the specified index in the layer capabilities.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_capabilities_supported_tracking_areas_format(cp_layer_renderer_capabilities_t layer_capabilities, size_t index);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.
- `index`: A zero-based index into the list of index formats.

<a id="return-value"></a>

## Return Value

The pixel format at the specified index.

<a id="discussion"></a>

## Discussion

Use this function to determine what tracking areas texture formats the layer supports.
