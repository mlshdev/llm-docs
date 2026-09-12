> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/metaleventaction](https://developer.apple.com/documentation/realitykit/realityrenderer/metaleventaction)

# RealityRenderer.MetalEventAction

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The structure describing an event and value to be signaled or waited for.

## Declaration

```swift
struct MetalEventAction
```

## Topics

### Instance Properties

- [event](metaleventaction/event.md): The metal event object to be signaled or waited for.
- [value](metaleventaction/value.md): The value to be signaled or waited for.

### Type Methods

- [signal(\_:value:)](metaleventaction/signal%28__value_%29.md): Returns an action that represents signaling event with the value.
- [wait(for:value:)](metaleventaction/wait%28for_value_%29.md): Returns an action that represents waiting for an event to reach the value.

## See Also

### Metal workflow rendering

- [RealityRenderer](../realityrenderer.md): A renderer that displays a RealityKit scene in an existing Metal workflow.
- [RealityRenderer.CameraSettings](camerasettings-swift.struct.md): Settings for rendering with a camera.
- [RealityRenderer.CameraOutput](cameraoutput.md): Output produced by rendering with a camera.
- [RealityRenderer.ImageBasedLight](imagebasedlight.md): Describe the lighting properties for the scene.
- [RealityRenderer.EntityCollection](entitycollection.md): A collection of entities in a [RealityRenderer](../realityrenderer.md).
