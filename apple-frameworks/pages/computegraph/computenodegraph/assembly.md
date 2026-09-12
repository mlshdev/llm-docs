> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly)

# ComputeNodeGraph.Assembly

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Fully assembled configuration of compute graph nodes.

## Declaration

```swift
struct Assembly
```

<a id="overview"></a>

## Overview

You can create an assembly from a ComputeNodeGraph to obtain the layout of all buffers and uniforms needed by the graph.

Unless you need the layout before or without compiling the shaders, you can compile [ComputeNodeGraph.Pipelines](pipelines.md) directly from a [ComputeNodeGraph](../computenodegraph.md).

## Topics

### Structures

- [ComputeNodeGraph.Assembly.BufferBinding](assembly/bufferbinding.md): Describes how a Metal buffer is bound to a compute pipeline stage.
- [ComputeNodeGraph.Assembly.TextureBinding](assembly/texturebinding.md): Describes how a Metal texture is bound to a compute pipeline stage.
- [ComputeNodeGraph.Assembly.UniformBinding](assembly/uniformbinding.md): Describes how a uniform value is located within the graph’s uniform buffer.

### Initializers

- [init(\_:)](assembly/init%28__%29.md)

### Instance Properties

- [constantBuffers](assembly/constantbuffers.md)
- [deviceBuffers](assembly/devicebuffers.md)
- [namedUniforms](assembly/nameduniforms.md): Uniforms that are named and exposed as parameters of this graph, keyed by name.
- [sharedUniforms](assembly/shareduniforms.md): Uniforms that are shared across multiple graphs, keyed by typeName.
- [textures](assembly/textures.md)
- [uniformBufferSize](assembly/uniformbuffersize.md)
- [uniforms](assembly/uniforms.md)

### Enumerations

- [ComputeNodeGraph.Assembly.Attachment](assembly/attachment.md): Identifies where a resource is attached in the compute graph.
- [ComputeNodeGraph.Assembly.Location](assembly/location.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
