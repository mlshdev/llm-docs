> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/addnode(_:)](https://developer.apple.com/documentation/realitykit/shadergraph/addnode(_:))

# addNode(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a node to the graph and returns its name.

## Declaration

```swift
@discardableResult final func addNode(_ node: ShaderGraph.Node) throws -> String
```

<a id="return-value"></a>

## Return Value

The name used to reference this node in subsequent calls.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the node is invalid for this graph.
