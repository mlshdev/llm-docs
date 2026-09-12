> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphviewpointcomponent](https://developer.apple.com/documentation/realitykit/computegraphviewpointcomponent)

# ComputeGraphViewpointComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A transient component that provides camera viewpoint information to the particle simulation.

## Declaration

```swift
struct ComputeGraphViewpointComponent
```

<a id="overview"></a>

## Overview

Attach this component to an entity to supply the simulation with an observer’s position and direction. The simulation uses these values for view-dependent effects such as billboard orientation or camera-facing particles.

Both properties are optional. When `nil`, the simulation falls back to its default viewpoint behavior.

## Topics

### Initializers

- [init()](computegraphviewpointcomponent/init%28%29.md)

### Instance Properties

- [viewDirection](computegraphviewpointcomponent/viewdirection.md): The direction the observer is facing, in world space.
- [viewPosition](computegraphviewpointcomponent/viewposition.md): The position of the observer, in world space.

## Relationships

### Conforms To

- [Component](component.md)
- [TransientComponent](transientcomponent.md)
