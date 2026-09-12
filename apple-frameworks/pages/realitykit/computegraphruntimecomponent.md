> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphruntimecomponent](https://developer.apple.com/documentation/realitykit/computegraphruntimecomponent)

# ComputeGraphRuntimeComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages the live GPU simulation for an entity’s `ComputeGraphComponent_v1`.

## Declaration

```swift
struct ComputeGraphRuntimeComponent
```

<a id="overview"></a>

## Overview

RealityKit creates the ComputeGraphRuntimeComponent automatically on the first frame that a ComputeGraphComponent becomes active. You do not need to add it manually.

## Topics

### Instance Properties

- [simulation](computegraphruntimecomponent/simulation.md): The underlying compute graph simulation driving this entity.

### Instance Methods

- [readOutput(\_:)](computegraphruntimecomponent/readoutput%28__%29.md): Returns the output buffer for the port at the given address.
- [readOutputs(\_:)](computegraphruntimecomponent/readoutputs%28__%29.md): Returns all output buffers for the given output node.

## Relationships

### Conforms To

- [Component](component.md)
- [TransientComponent](transientcomponent.md)
