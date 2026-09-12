> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/waituntilrunning()](https://developer.apple.com/documentation/compositorservices/layerrenderer/waituntilrunning())

# waitUntilRunning() (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Stops further execution of your code until the layer renderer leaves the paused state.

## Declaration

```swift
func waitUntilRunning()
```

<a id="discussion"></a>

## Discussion

Call this function to let the system handle events while you wait for the layer to become ready. The function services incoming layer-related events until the layer exits the paused state.

## See Also

### Managing the rendering loop

- [state](state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [LayerRenderer.State](state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
- [LayerRenderer.Clock](clock.md): A type that supports operations that require a precise time measurement.

# cp_layer_renderer_wait_until_running (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Stops further execution of your code until the layer renderer leaves the paused state.

## Declaration

```objectivec
void cp_layer_renderer_wait_until_running(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer to monitor. If the layer isn’t in the [cp_layer_renderer_state_paused](state-swift.enum/paused.md) state, this function returns immediately.

<a id="discussion"></a>

## Discussion

Call this function to let the system handle events while you wait for the layer to become ready. The function services incoming layer-related events until the layer exits the paused state.

## See Also

### Managing the rendering loop

- [cp_layer_renderer_get_state](state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [cp_layer_renderer_state](state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
