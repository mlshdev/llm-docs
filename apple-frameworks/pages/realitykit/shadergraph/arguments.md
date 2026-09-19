> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/arguments

# arguments

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The virtual node representing this graph’s inputs.

## Declaration

```swift
final var arguments: ShaderGraph.Node { get }
```

<a id="discussion"></a>

## Discussion

Connect edges from this node to internal nodes to route graph-level input values into the graph. Its output ports correspond to the [inputs](inputs.md) declared on this graph.
