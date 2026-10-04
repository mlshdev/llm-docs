> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computenodegraph/nodedefinition

# ComputeNodeGraph.NodeDefinition

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

## Declaration

```swift
struct NodeDefinition
```

## Topics

### Initializers

- [init(name:bundle:inputs:outputs:kind:)](nodedefinition/init%28name_bundle_inputs_outputs_kind_%29.md): Deprecated.
- [init(name:inputs:outputs:kind:)](nodedefinition/init%28name_inputs_outputs_kind_%29.md)

### Instance Properties

- [bundle](nodedefinition/bundle.md): Deprecated.
- [inputs](nodedefinition/inputs.md)
- [kind](nodedefinition/kind-swift.property.md)
- [name](nodedefinition/name.md): Name of the NodeDefinition.
- [outputs](nodedefinition/outputs.md)

### Type Methods

- [stage(\_:)](nodedefinition/stage%28__%29.md)

### Enumerations

- [ComputeNodeGraph.NodeDefinition.Kind](nodedefinition/kind-swift.enum.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Graph definition and assembly

- [ComputeNodeGraph](../computenodegraph.md)
- [ComputeNodeGraph.Assembly](assembly.md): Fully assembled configuration of compute graph nodes.
- [ComputeNodeGraph.Pipelines](pipelines.md): Fully-compiled shaders for a compute graph.
- [ComputeNodeGraph.PipelinesDescriptor](pipelinesdescriptor.md): Specifies the configuration used to compile a set of compute pipelines for a compute graph effect.
- [ComputeNodeGraph.Library](library.md): A class defining a library of node definitions that can be added to a ComputeNodeGraph
- [ComputeNodeGraph.LibraryReference](libraryreference.md): A Metal library and an optional bundle identifier that locates shader functions.
