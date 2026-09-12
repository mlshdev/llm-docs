> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/stage](https://developer.apple.com/documentation/computegraph/computenodegraph/stage)

# ComputeNodeGraph.Stage

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

An execution context within a compute node graph that groups related nodes into a processing phase.

## Declaration

```swift
struct Stage
```

<a id="overview"></a>

## Overview

Stages define the order and purpose of computation passes. In particle systems, stages correspond to phases like emission, initialization, simulation, and output.

## Topics

### Initializers

- [init(\_:)](stage/init%28__%29.md)

### Instance Properties

- [name](stage/name.md): The identifier for this stage

### Instance Methods

- [canAddNode(with:)](stage/canaddnode%28with_%29.md): Whether a node with the given definition can be used in this stage.

### Type Properties

- [compute](stage/compute.md): A general-purpose computation stage.
- [emission](stage/emission.md): Spawns new particles into the system.
- [eventSource](stage/eventsource.md): A stage that receives events from a simulation (e.g. update or terminate), and initializes new particles for another simulation.
- [initialize](stage/initialize.md): Sets initial values for newly spawned particles.
- [output](stage/output.md): Produces final per-particle results for rendering.
- [simulate](stage/simulate.md): Updates particle state each frame (position, velocity, lifetime, etc.).
- [texture](stage/texture.md): Generates texture data.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
