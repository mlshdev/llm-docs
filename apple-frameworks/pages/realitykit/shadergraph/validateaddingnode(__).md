> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/validateaddingnode(_:)](https://developer.apple.com/documentation/realitykit/shadergraph/validateaddingnode(_:))

# validateAddingNode(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Validates that a node can be added to the graph without adding it, throwing a descriptive error if not.

## Declaration

```swift
final func validateAddingNode(_ node: ShaderGraph.Node) throws
```

<a id="discussion"></a>

## Discussion

Use [canAddNode(\_:)](canaddnode%28__%29.md) instead when only a yes/no answer is needed.
