> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_set_depth_range](https://developer.apple.com/documentation/compositorservices/cp_drawable_set_depth_range)

# cp_drawable_set_depth_range

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Sets the distances to the near and far clipping planes for the current drawable.

## Declaration

```objectivec
void cp_drawable_set_depth_range(cp_drawable_t drawable, simd_float2 depth_range);
```

## Parameters

- `drawable`: The drawable for a frame.
- `depth_range`: The distances to the far and near planes in meters. Specify the values in reverse-z order, with the value for the far plane in the vector’s `x` property and the value for the near plane in the vector’s `y` property.

<a id="discussion"></a>

## Discussion

Use this function to change the depth range for this frame of content. The near and far planes correspond to distances from the person viewing the content. The compositor uses these values to compute the perspective projection matrix and to clip content not between the near and far planes.

Configure the default depth range for all frames in your layer using the [cp_layer_renderer_configuration_set_default_depth_range](cp_layer_renderer_configuration_set_default_depth_range.md) function.

## See Also

### Accessing pixel depth information

- [cp_drawable_get_depth_range](layerrenderer/drawable/depthrange.md): The distances to the far and near clipping planes from the person viewing the content, in meters.
