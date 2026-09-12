> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodes](https://developer.apple.com/documentation/realitykit/shadergraph/nodes)

# nodes

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

All nodes in the graph, keyed by node name.

## Declaration

```swift
final var nodes: [String : ShaderGraph.Node] { get }
```

<a id="discussion"></a>

## Discussion

Includes the virtual [arguments](arguments.md) and [results](results.md) nodes.
