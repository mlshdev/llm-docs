> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer](https://developer.apple.com/documentation/realitykit/realityrenderer)

# RealityRenderer

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A renderer that displays a RealityKit scene in an existing Metal workflow.

## Declaration

```swift
class RealityRenderer
```

<a id="overview"></a>

## Overview

All RealityKit APIs for loading resources, creating entities and adding components are compatible and work with `RealityRenderer`.

## Topics

### Structures

- [RealityRenderer.CameraOutput](realityrenderer/cameraoutput.md): Output produced by rendering with a camera.
- [RealityRenderer.CameraSettings](realityrenderer/camerasettings-swift.struct.md): Settings for rendering with a camera.
- [RealityRenderer.EntityCollection](realityrenderer/entitycollection.md): A collection of entities in a [RealityRenderer](realityrenderer.md).
- [RealityRenderer.ImageBasedLight](realityrenderer/imagebasedlight.md): Describe the lighting properties for the scene.
- [RealityRenderer.MetalEventAction](realityrenderer/metaleventaction.md): The structure describing an event and value to be signaled or waited for.

### Initializers

- [init()](realityrenderer/init%28%29.md)

### Instance Properties

- [activeCamera](realityrenderer/activecamera.md): The camera to be used for rendering.
- [audioListener](realityrenderer/audiolistener.md): The entity which defines the listener position and orientation for spatial audio.
- [cameraSettings](realityrenderer/camerasettings-swift.property.md): The settings to be used for rendering with `activeCamera`.
- [entities](realityrenderer/entities.md): A collection of RealityKit entities that this renderer renders within the scene.
- [extendedDynamicRangeHeadroom](realityrenderer/extendeddynamicrangeheadroom.md): The amount of headroom available for extended dynamic range content.
- [extendedDynamicRangeOutput](realityrenderer/extendeddynamicrangeoutput.md): Specify whether the target Metal layer has been configured for EDR output.
- [lighting](realityrenderer/lighting.md): The lighting used in the environment of a particular scene.

### Instance Methods

- [subscribe(to:on:componentType:\_:)](realityrenderer/subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.
- [update(\_:)](realityrenderer/update%28__%29.md): Tick the simulation
- [updateAndRender(deltaTime:cameraOutput:whenScheduled:onComplete:actionsBeforeRender:actionsAfterRender:)](realityrenderer/updateandrender%28deltatime_cameraoutput_whenscheduled_oncomplete_actionsbeforerender_actionsafterrender_%29.md): Tick the simulation and render using activeCamera and the camera rendering output.

## See Also

### Metal workflow rendering

- [RealityRenderer.CameraSettings](realityrenderer/camerasettings-swift.struct.md): Settings for rendering with a camera.
- [RealityRenderer.CameraOutput](realityrenderer/cameraoutput.md): Output produced by rendering with a camera.
- [RealityRenderer.ImageBasedLight](realityrenderer/imagebasedlight.md): Describe the lighting properties for the scene.
- [RealityRenderer.MetalEventAction](realityrenderer/metaleventaction.md): The structure describing an event and value to be signaled or waited for.
- [RealityRenderer.EntityCollection](realityrenderer/entitycollection.md): A collection of entities in a [RealityRenderer](realityrenderer.md).
