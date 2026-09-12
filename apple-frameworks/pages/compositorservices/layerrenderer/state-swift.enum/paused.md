> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/state-swift.enum/paused](https://developer.apple.com/documentation/compositorservices/layerrenderer/state-swift.enum/paused)

# LayerRenderer.State.paused (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer is paused and not currently drawing.

## Declaration

```swift
case paused
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

A layer starts in this state and later transitions to other states over time. Don’t run your render loop or do any drawing while in this state. Wait until the layer changes to one of the other states to take further action.

## See Also

### Getting the states

- [LayerRenderer.State.running](running.md): A state that indicates the layer is visible and ready for you to draw your content.
- [LayerRenderer.State.invalidated](invalidated.md): A state that indicates the layer no longer supports drawing operations.

# cp_layer_renderer_state_paused (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer is paused and not currently drawing.

## Declaration

```objectivec
cp_layer_renderer_state_paused
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

A layer starts in this state and later transitions to other states over time. Don’t run your render loop or do any drawing while in this state. Wait until the layer changes to one of the other states to take further action.

## See Also

### Getting the states

- [cp_layer_renderer_state_running](running.md): A state that indicates the layer is visible and ready for you to draw your content.
- [cp_layer_renderer_state_invalidated](invalidated.md): A state that indicates the layer no longer supports drawing operations.
