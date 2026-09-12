> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/adaptiveresolutioncomponent](https://developer.apple.com/documentation/realitykit/adaptiveresolutioncomponent)

# AdaptiveResolutionComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that provides the suggested pixels per meter necessary to render an object.

## Declaration

```swift
struct AdaptiveResolutionComponent
```

<a id="Overview"></a>

## Overview

Use the [pixelsPerMeter](adaptiveresolutioncomponent/pixelspermeter.md) property to proactively update your scene to disable expensive systems and high-resolution content that is far away.

> **Note**

> `pixelsPerMeter` is binned to protect user privacy.

## Topics

### Initializers

- [init()](adaptiveresolutioncomponent/init%28%29.md): Creates a new instance of the adaptive resolution component.

### Instance Properties

- [pixelsPerMeter](adaptiveresolutioncomponent/pixelspermeter.md): A read-only value representing the suggested pixels per meter necessary to render an object.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Render configuration

- [ModelSortGroupComponent](modelsortgroupcomponent.md): A component that configures the rendering order for an entity’s model.
- [ModelSortGroup](modelsortgroup.md): A group that you assign to multiple entities to tell the renderer what order and how to render the entities in the group.
- [OpacityComponent](opacitycomponent.md): A component that controls the opacity of an entity and its descendants.
- [ModelDebugOptionsComponent](modeldebugoptionscomponent.md): A component that changes how RealityKit renders its entity to help with debugging.
- [MeshInstancesComponent](meshinstancescomponent.md): A component that performs GPU instancing on the model of the same entity.
