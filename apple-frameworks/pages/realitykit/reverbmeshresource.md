> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverbmeshresource](https://developer.apple.com/documentation/realitykit/reverbmeshresource)

# ReverbMeshResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A high-level representation of a collection of vertices and edges that define a shape used for simulating reverb.

## Declaration

```swift
final class ReverbMeshResource
```

<a id="overview"></a>

## Overview

Use a `ReverbMeshResource` to describe the acoustic geometry of your scene. Create one from geometric primitives, custom vertex data, or an existing [MeshResource](meshresource.md):

```swift
// From a geometric primitive:
let room = ReverbMeshResource.shoebox(size: [4, 3, 5])

// From custom vertex data:
let mesh = try ReverbMeshResource(
    positions: myPositions,
    triangleIndices: myIndices,
    materials: perFaceMaterialIndices
)

// From an existing mesh resource:
let mesh = try ReverbMeshResource(from: myVisualMesh)
```

Pair a reverb mesh with [Audio.Material](audio/material.md) values and set a [ReverbComponent](reverbcomponent.md) on an entity to activate simulated reverb:

```swift
let reverb: Reverb = .simulated(mesh: room, materials: [.concrete, .carpet])
entity.components.set(ReverbComponent(reverb: reverb))
```

> **Note**

> Reverb meshes perform best with fewer than 1000 polygons.

## Topics

### Creating standard room shapes

- [shoebox(size:)](reverbmeshresource/shoebox%28size_%29.md): Creates a box mesh with the vertices positioned such that the bottom surface is at y=0, with faces oriented inward.
- [box(size:)](reverbmeshresource/box%28size_%29.md): Creates a box mesh with vertices positioned such that the origin is at the center, with faces oriented outward.
- [plane(width:depth:)](reverbmeshresource/plane%28width_depth_%29.md): Creates a new rectangle reverb mesh with the specified dimensions in the entity’s xz-plane.

### Creating a custom mesh

- [init(positions:triangleIndices:materials:)](reverbmeshresource/init%28positions_triangleindices_materials_%29.md): Creates a reverb mesh resource from a list of positions, triangle indices, and material indices.

### Initializers

- [init(from:)](reverbmeshresource/init%28from_%29.md): Creates a reverb mesh resource from a mesh resource.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Acoustics and group playback

- [AudioPlaybackGroupController](audioplaybackgroupcontroller.md): A controller that manages synchronized playback for a group of audio resources.
