> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/outputs](https://developer.apple.com/documentation/realitykit/shadergraph/outputs)

# outputs

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The declared output ports of this graph.

## Declaration

```swift
final var outputs: [ShaderGraph.NodeDefinition.Output] { get }
```

<a id="discussion"></a>

## Discussion

These ports are exposed as inputs on the [results](results.md) node, and define what values the graph produces for the renderer.
