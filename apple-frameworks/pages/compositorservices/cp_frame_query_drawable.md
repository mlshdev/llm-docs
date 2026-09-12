> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_frame_query_drawable](https://developer.apple.com/documentation/compositorservices/cp_frame_query_drawable)

# cp_frame_query_drawable

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

Returns the drawable type you use to retrieve the textures and drawing environment for the frame.

## Declaration

```objectivec
cp_drawable_tcp_frame_query_drawable(cp_frame_t frame);
```

## Parameters

- `frame`: The frame to query.

<a id="return-value"></a>

## Return Value

The drawable type, or `nil` if the layer is in the [cp_layer_renderer_state_paused](layerrenderer/state-swift.enum/paused.md) or [cp_layer_renderer_state_invalidated](layerrenderer/state-swift.enum/invalidated.md) state.

<a id="discussion"></a>

## Discussion

Fetch the drawable when you’re ready to encode the drawing commands for the frame. The [cp_drawable_t](cp_drawable_t.md) type contains the textures and other information you need to set up your render descriptor in Metal.
