> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphshareduniforms](https://developer.apple.com/documentation/realitykit/computegraphshareduniforms)

# ComputeGraphSharedUniforms

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A transient component that stores typed uniform values shared across all ComputeGraph simulations.

## Declaration

```swift
class ComputeGraphSharedUniforms
```

<a id="overview"></a>

## Overview

You add scene-wide uniforms via a `ComputeGraphSharedUniforms` — such as gravity, wind, attractor locations, or a global time offset.

> **Note**

> Only one instance of this component should exist in a scene at a time.

## Topics

### Initializers

- [init()](computegraphshareduniforms/init%28%29.md): Creates an empty `ComputeGraphSharedUniforms` component.

### Instance Methods

- [setUniform(\_:)](computegraphshareduniforms/setuniform%28__%29.md): Stores a uniform value, replacing any previously stored value of the same type.
- [setUniformTransform(\_:)](computegraphshareduniforms/setuniformtransform%28__%29.md): Registers a closure that transforms a uniform value of type `V` on a per-entity basis.
- [setUniformTransform(type:transform:)](computegraphshareduniforms/setuniformtransform%28type_transform_%29.md): Registers a raw-data transformer closure for a uniform of type `V`.
- [uniform(\_:)](computegraphshareduniforms/uniform%28__%29.md): Returns the stored uniform value for the given type, or `nil` if none has been set.

## Relationships

### Conforms To

- [Component](component.md)
- [TransientComponent](transientcomponent.md)
