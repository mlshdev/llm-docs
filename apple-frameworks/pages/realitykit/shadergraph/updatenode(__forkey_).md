> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/updatenode(_:forkey:)](https://developer.apple.com/documentation/realitykit/shadergraph/updatenode(_:forkey:))

# updateNode(\_:forKey:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces the node stored under the given name.

## Declaration

```swift
final func updateNode(_ node: ShaderGraph.Node, forKey name: String) throws
```

<a id="discussion"></a>

## Discussion

Any existing edges referencing `name` are preserved and will refer to the updated node.
