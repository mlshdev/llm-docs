> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeblendnode/sources](https://developer.apple.com/documentation/realitykit/blendtreeblendnode/sources)

# sources

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The nodes that branch from a node to form part of a blend tree.

## Declaration

```swift
var sources: [any BlendTreeNode]
```

<a id="discussion"></a>

## Discussion

This node combines the animations of each member of this array to a single animation that represents a *blend* of the sources. If a source is a [BlendTreeSourceNode](../blendtreesourcenode.md), this structure blends its animation into the output. If a source is a [BlendTreeBlendNode](../blendtreeblendnode.md), this structure blends the output of its sources into this structure’s output.
