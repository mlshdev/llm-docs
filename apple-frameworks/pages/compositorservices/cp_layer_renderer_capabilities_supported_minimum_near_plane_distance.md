> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_supported_minimum_near_plane_distance](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_supported_minimum_near_plane_distance)

# cp_layer_renderer_capabilities_supported_minimum_near_plane_distance

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the minimum distance in meters to the layer’s near projection plane.

## Declaration

```objectivec
float cp_layer_renderer_capabilities_supported_minimum_near_plane_distance(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

The minimum allowed distance in meters from the camera origin to the near projection plane.

<a id="discussion"></a>

## Discussion

Compositor Services uses the near and far projection planes to compute the perspective projection matrix and to clip content that’s too close to the camera, or too far from it. Use this method to retrieve the minimum distance to the near plane that the layer allows. When you configure your layer, you can specify a different near-plane distance, but that value must be greater than or equal to the minimum distance.

## See Also

### Getting the supported features

- [cp_layer_renderer_capabilities_supports_foveation](cp_layer_renderer_capabilities_supports_foveation.md): Returns a Boolean value that indicates whether the layer supports variable rasterization rates.
