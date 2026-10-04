> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computenodegraph/pipelines

# ComputeNodeGraph.Pipelines

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Fully-compiled shaders for a compute graph.

## Declaration

```swift
struct Pipelines
```

<a id="overview"></a>

## Overview

You use pipelines to construct [ComputeGraphSimulation](../computegraphsimulation.md) objects. A pipeline can be used by many simulations at the same time.

## Topics

### Structures

- [ComputeNodeGraph.Pipelines.Options](pipelines/options-swift.struct.md)

### Initializers

- [init(\_:)](pipelines/init%28__%29-2h68e.md): Assembles and compiles pipelines from the provided graph.
- [init(\_:)](pipelines/init%28__%29-5cutl.md): Assembles and compiles pipelines from the provided graph.
- [init(descriptor:)](pipelines/init%28descriptor_%29-1jzxc.md)
- [init(descriptor:)](pipelines/init%28descriptor_%29-2t8g4.md)

### Instance Properties

- [assembly](pipelines/assembly.md)
- [options](pipelines/options-swift.property.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Graph definition and assembly

- [ComputeNodeGraph](../computenodegraph.md)
- [ComputeNodeGraph.Assembly](assembly.md): Fully assembled configuration of compute graph nodes.
- [ComputeNodeGraph.PipelinesDescriptor](pipelinesdescriptor.md): Specifies the configuration used to compile a set of compute pipelines for a compute graph effect.
- [ComputeNodeGraph.NodeDefinition](nodedefinition.md)
- [ComputeNodeGraph.Library](library.md): A class defining a library of node definitions that can be added to a ComputeNodeGraph
- [ComputeNodeGraph.LibraryReference](libraryreference.md): A Metal library and an optional bundle identifier that locates shader functions.
