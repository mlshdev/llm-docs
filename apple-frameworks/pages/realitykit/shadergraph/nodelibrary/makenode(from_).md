> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodelibrary/makenode(from:)](https://developer.apple.com/documentation/realitykit/shadergraph/nodelibrary/makenode(from:))

# makeNode(from:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a node instance of the given definition.

## Declaration

```swift
final func makeNode(from definition: ShaderGraph.NodeDefinition) throws -> ShaderGraph.Node
```

<a id="return-value"></a>

## Return Value

A [ShaderGraph.Node](../node.md) that can be added to a [ShaderGraph](../../shadergraph.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> If the definition does not belong to this library.
