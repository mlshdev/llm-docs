> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/topology](https://developer.apple.com/documentation/computegraph/computenodegraph/topology)

# ComputeNodeGraph.Topology

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The primitive topology used to assemble output geometry for an output stage.

## Declaration

```swift
enum Topology
```

<a id="overview"></a>

## Overview

Set on an output stage via the `topology` property. The output’s topology determines how the compute graph emits vertex data for each element and how that data is consumed by the render pipeline.

## Topics

### Enumeration Cases

- [ComputeNodeGraph.Topology.instances](topology/instances.md): Elements are rendered as instanced meshes.
- [ComputeNodeGraph.Topology.octagon](topology/octagon.md): Each element emits eight vertices, rendered as an octagon.
- [ComputeNodeGraph.Topology.point](topology/point.md): Each element emits a single vertex.
- [ComputeNodeGraph.Topology.quad](topology/quad.md): Each element emits four vertices, rendered as a quad (two triangles).
- [ComputeNodeGraph.Topology.strip](topology/strip.md): Elements share vertices in a triangle-strip winding order. Requires a simulation with a grouping of `strips`.
- [ComputeNodeGraph.Topology.triangle](topology/triangle.md): Each element emits three vertices, rendered as an independent triangle.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
