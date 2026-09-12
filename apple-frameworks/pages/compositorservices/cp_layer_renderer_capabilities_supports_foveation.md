> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supports_foveation](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supports_foveation)

# cp_layer_renderer_capabilities_supports_foveation

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the layer supports variable rasterization rates.

## Declaration

```objectivec
bool cp_layer_renderer_capabilities_supports_foveation(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

`true` if the layer supports variable rasterization rates or `false` if you must render the entire layer at the same resolution.

<a id="discussion"></a>

## Discussion

Foveation support lets you reduce the amount of high-resolution drawing you do. When foveation support is available, the system provides a variable rasterization rate map that defines the content resolution in different parts of the texture. This map allows you to render content in someone’s peripheral vision at a lower resolution than content in the center of their vision.

## See Also

### Getting the supported features

- [cp_layer_renderer_capabilities_supported_minimum_near_plane_distance](cp_layer_renderer_capabilities_supported_minimum_near_plane_distance.md): Returns the minimum distance in meters to the layer’s near projection plane.
