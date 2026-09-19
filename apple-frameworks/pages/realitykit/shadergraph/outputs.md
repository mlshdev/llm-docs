> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/outputs

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
