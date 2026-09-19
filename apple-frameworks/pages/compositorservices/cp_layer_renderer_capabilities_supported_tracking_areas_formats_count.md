> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_tracking_areas_formats_count

# cp_layer_renderer_capabilities_supported_tracking_areas_formats_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of tracking areas formats the specified layer supports.

## Declaration

```objectivec
size_t cp_layer_renderer_capabilities_supported_tracking_areas_formats_count(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

The number of tracking areas formats the layer supports.

<a id="discussion"></a>

## Discussion

To iterate over the index formats, use the [cp_layer_renderer_capabilities_supported_tracking_areas_format](cp_layer_renderer_capabilities_supported_tracking_areas_format.md) function.
