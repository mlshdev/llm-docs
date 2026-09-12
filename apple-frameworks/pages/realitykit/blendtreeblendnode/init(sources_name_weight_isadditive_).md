> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeblendnode/init(sources:name:weight:isadditive:)](https://developer.apple.com/documentation/realitykit/blendtreeblendnode/init(sources:name:weight:isadditive:))

# init(sources:name:weight:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a tree node made up of multiple branches.

## Declaration

```swift
init(sources: [any BlendTreeNode], name: String = "", weight: BlendWeight = .value(1.0), isAdditive: Bool = false)
```

## Parameters

- `sources`: The nodes that branch from this node to form part of a blend tree.
- `name`: A textual name for the node.
- `weight`: A normalized percentage that designates how much this node’s animation influences the tree’s blended animation.
- `isAdditive`: A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
