> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/state-swift.enum/invalidated](https://developer.apple.com/documentation/compositorservices/layerrenderer/state-swift.enum/invalidated)

# LayerRenderer.State.invalidated (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer no longer supports drawing operations.

## Declaration

```swift
case invalidated
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

A layer enters this state shortly before the system releases its resources. When the layer enters this state, exit your rendering loop and release any drawing-related structures.

## See Also

### Getting the states

- [LayerRenderer.State.paused](paused.md): A state that indicates the layer is paused and not currently drawing.
- [LayerRenderer.State.running](running.md): A state that indicates the layer is visible and ready for you to draw your content.

# cp_layer_renderer_state_invalidated (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A state that indicates the layer no longer supports drawing operations.

## Declaration

```objectivec
cp_layer_renderer_state_invalidated
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

A layer enters this state shortly before the system releases its resources. When the layer enters this state, exit your rendering loop and release any drawing-related structures.

## See Also

### Getting the states

- [cp_layer_renderer_state_paused](paused.md): A state that indicates the layer is paused and not currently drawing.
- [cp_layer_renderer_state_running](running.md): A state that indicates the layer is visible and ready for you to draw your content.
