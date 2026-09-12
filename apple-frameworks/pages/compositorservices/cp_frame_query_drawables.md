> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_frame_query_drawables](https://developer.apple.com/documentation/compositorservices/cp_frame_query_drawables)

# cp_frame_query_drawables

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the drawable array type you use to retrieve the drawables for drawing environment for the frame.

## Declaration

```objectivec
cp_drawable_array_tcp_frame_query_drawables(cp_frame_t frame);
```

## Parameters

- `frame`: The frame to query.

<a id="return-value"></a>

## Return Value

The drawable array type, if the layer is in the `cp_layer_renderer/cp_layer_renderer_state_paused` or `cp_layer_renderer/cp_layer_renderer_state_invalidated` states the array will have a count of 0 and frame is invalid.

<a id="discussion"></a>

## Discussion

Call this function when you’re ready to encode the drawing commands for the frame. The [cp_drawable_t](cp_drawable_t.md) type contains the textures and other information you need to set up your render descriptor in Metal. See [cp_drawable_get_target](layerrenderer/drawable/target-swift.property.md) for how each drawable will be used.

If array count is 0, the frame has been cancelled as there are no drawables to draw to and the frame should be discarded and is invalid to access.

Note: This function isn’t safe to be called concurrently. Always ensure a single thread call this function at a time.
