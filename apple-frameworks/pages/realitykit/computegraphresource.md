> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphresource](https://developer.apple.com/documentation/realitykit/computegraphresource)

# ComputeGraphResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A loaded compute graph resource containing the graph definition, compiled pipelines, and all associated rendering assets.

## Declaration

```swift
final class ComputeGraphResource
```

<a id="overview"></a>

## Overview

Load a `ComputeGraphResource` from a file URL using [init(contentsOf:bundle:)](computegraphresource/init%28contentsof_bundle_%29.md), then assign it to a [resource](computegraphcomponent/resource.md) to drive a simulation.

```swift
let resource = try await ComputeGraphResource(contentsOf: url)
var component = ComputeGraphComponent(resource: resource)
entity.components.set(component)
```

## Topics

### Structures

- [ComputeGraphResource.BufferInfo](computegraphresource/bufferinfo.md)
- [ComputeGraphResource.Dependencies](computegraphresource/dependencies.md)

### Initializers

- [init(contentsOf:)](computegraphresource/init%28contentsof_%29.md): Deprecated.
- [init(contentsOf:bundle:)](computegraphresource/init%28contentsof_bundle_%29.md)
- [init(graph:pipelines:dependencies:)](computegraphresource/init%28graph_pipelines_dependencies_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
