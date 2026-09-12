> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/state-swift.enum](https://developer.apple.com/documentation/compositorservices/layerrenderer/state-swift.enum)

# LayerRenderer.State (Swift)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The states of the layer renderer, which tell you how to proceed with drawing operations.

## Declaration

```swift
enum State
```

## Topics

### Getting the states

- [LayerRenderer.State.paused](state-swift.enum/paused.md): A state that indicates the layer is paused and not currently drawing.
- [LayerRenderer.State.running](state-swift.enum/running.md): A state that indicates the layer is visible and ready for you to draw your content.
- [LayerRenderer.State.invalidated](state-swift.enum/invalidated.md): A state that indicates the layer no longer supports drawing operations.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the rendering loop

- [state](state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [waitUntilRunning()](waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [LayerRenderer.Clock](clock.md): A type that supports operations that require a precise time measurement.

# cp_layer_renderer_state (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The states of the layer renderer, which tell you how to proceed with drawing operations.

## Declaration

```objectivec
enum cp_layer_renderer_state : uint32_t;
```

## Topics

### Getting the states

- [cp_layer_renderer_state_paused](state-swift.enum/paused.md): A state that indicates the layer is paused and not currently drawing.
- [cp_layer_renderer_state_running](state-swift.enum/running.md): A state that indicates the layer is visible and ready for you to draw your content.
- [cp_layer_renderer_state_invalidated](state-swift.enum/invalidated.md): A state that indicates the layer no longer supports drawing operations.

## See Also

### Managing the rendering loop

- [cp_layer_renderer_get_state](state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [cp_layer_renderer_wait_until_running](waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
