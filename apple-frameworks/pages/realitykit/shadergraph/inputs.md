> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/inputs](https://developer.apple.com/documentation/realitykit/shadergraph/inputs)

# inputs

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The declared input ports of this graph.

## Declaration

```swift
final var inputs: [ShaderGraph.NodeDefinition.Input] { get }
```

<a id="discussion"></a>

## Discussion

These ports are exposed as outputs on the [arguments](arguments.md) node. Initial values for each input must be supplied when creating a [ShaderGraphMaterial.Program](../shadergraphmaterial/program-swift.struct.md), and can be updated at runtime via `ShaderGraphMaterial/setParameter(_:value:)`.
