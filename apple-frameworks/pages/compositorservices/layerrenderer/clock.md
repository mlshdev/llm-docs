> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/clock](https://developer.apple.com/documentation/compositorservices/layerrenderer/clock)

# LayerRenderer.Clock

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that supports operations that require a precise time measurement.

## Declaration

```swift
struct Clock
```

<a id="overview"></a>

## Overview

Use this type to perform time-related operations during the rendering of a frame. For example, call [wait(until:tolerance:)](clock/wait%28until_tolerance_%29.md) to pause your render loop until the optimal rendering time arrives.

## Topics

### Putting the current thread to sleep

- [wait(until:tolerance:)](clock/wait%28until_tolerance_%29.md): Blocks the current thread until the specified time.

### Creating a clock

- [init()](clock/init%28%29.md): Creates a new clock type.

## Relationships

### Conforms To

- [Clock](https://developer.apple.com/documentation/swift/clock)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the rendering loop

- [state](state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [waitUntilRunning()](waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [LayerRenderer.State](state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
