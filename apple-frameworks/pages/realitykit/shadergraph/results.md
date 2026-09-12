> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/results](https://developer.apple.com/documentation/realitykit/shadergraph/results)

# results

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The virtual node representing this graph’s outputs.

## Declaration

```swift
final var results: ShaderGraph.Node { get }
```

<a id="discussion"></a>

## Discussion

Connect edges from internal nodes to this node to route values out of the graph. Its input ports correspond to the [outputs](outputs.md) declared on this graph.
