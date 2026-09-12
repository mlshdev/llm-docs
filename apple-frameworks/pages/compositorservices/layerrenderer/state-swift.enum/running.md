> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/state-swift.enum/running](https://developer.apple.com/documentation/compositorservices/layerrenderer/state-swift.enum/running)

# LayerRenderer.State.running (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer is visible and ready for you to draw your content.

## Declaration

```swift
case running
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

When the layer enters this state, start your rendering loop and begin drawing frames of content. Keep drawing frames of content until the layer transitions to another state.

## See Also

### Getting the states

- [LayerRenderer.State.paused](paused.md): A state that indicates the layer is paused and not currently drawing.
- [LayerRenderer.State.invalidated](invalidated.md): A state that indicates the layer no longer supports drawing operations.

# cp_layer_renderer_state_running (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer is visible and ready for you to draw your content.

## Declaration

```objectivec
cp_layer_renderer_state_running
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

When the layer enters this state, start your rendering loop and begin drawing frames of content. Keep drawing frames of content until the layer transitions to another state.

## See Also

### Getting the states

- [cp_layer_renderer_state_paused](paused.md): A state that indicates the layer is paused and not currently drawing.
- [cp_layer_renderer_state_invalidated](invalidated.md): A state that indicates the layer no longer supports drawing operations.
