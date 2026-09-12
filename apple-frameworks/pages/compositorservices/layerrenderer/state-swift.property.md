> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/state-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/state-swift.property)

# state (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

A value that indicates whether the layer renderer is currently visible and ready for you to draw content.

## Declaration

```swift
var state: LayerRenderer.State { get }
```

<a id="discussion"></a>

## Discussion

Use the state of the layer to determine when to start and stop your rendering loop. When the layer is in the [LayerRenderer.State.running](state-swift.enum/running.md) state, draw frames of content using your rendering loop. Stop your rendering loop when the layer enters other states. When the layer reaches the [LayerRenderer.State.invalidated](state-swift.enum/invalidated.md) state, clean up and deallocate your render loop structures.

## See Also

### Managing the rendering loop

- [waitUntilRunning()](waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [LayerRenderer.State](state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
- [LayerRenderer.Clock](clock.md): A type that supports operations that require a precise time measurement.

# cp_layer_renderer_get_state (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

A value that indicates whether the layer renderer is currently visible and ready for you to draw content.

## Declaration

```objectivec
enum cp_layer_renderer_state cp_layer_renderer_get_state(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer to query.

<a id="return-value"></a>

## Return Value

The current state of the layer, which you use to determine when to draw.

<a id="discussion"></a>

## Discussion

Use the state of the layer to determine when to start and stop your rendering loop. When the layer is in the [cp_layer_renderer_state_running](state-swift.enum/running.md) state, draw frames of content using your rendering loop. Stop your rendering loop when the layer enters other states. When the layer reaches the [cp_layer_renderer_state_invalidated](state-swift.enum/invalidated.md) state, clean up and deallocate your render loop structures.

## See Also

### Managing the rendering loop

- [cp_layer_renderer_wait_until_running](waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [cp_layer_renderer_state](state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
