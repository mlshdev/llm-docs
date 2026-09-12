> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreesourcenode](https://developer.apple.com/documentation/realitykit/blendtreesourcenode)

# BlendTreeSourceNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A blend node that contains an animation.

## Declaration

```swift
struct BlendTreeSourceNode
```

<a id="overview"></a>

## Overview

This structure adopts [BlendTreeNode](blendtreenode.md) and adds the ability to store a single animation. A complete [BlendTreeAnimation](blendtreeanimation.md) represents a mix of all the animations that its source nodes contain. Each source node defines a [weight](blendtreesourcenode/weight.md) that determines how much effect the source’s animation has in the blend tree’s resulting, mixed animation. To define the source’s animation, set this structure’s [source](blendtreesourcenode/source.md) property.

<a id="Access-a-source-node-of-a-blend-tree"></a>

### Access a source node of a blend tree

A source may exist in any leaf-node position in the blend animation’s tree. The following code checks the root node for a source. If instead the root node is a branch, the code begins checking the branches sources.

```swift
// Check if the root node is a source.
if let blendNode = blendTree.root as? BlendTreeSourceNode {
    // Found a source.

// Check if the root node is a branch.
} else if let source = blendTree.root as? BlendTreeBlendNode {

        // Check for a source in the branch's sources.
        if let source = blendNode.sources[0] as? BlendTreeSourceNode {
            // Found a source.
        }
    }
}
```

## Topics

### Creating a blend tree animation node

- [init(source:name:weight:)](blendtreesourcenode/init%28source_name_weight_%29.md): Creates a node that defines an animation within a tree of other blend nodes.

### Configuring a blend tree animation node

- [name](blendtreesourcenode/name.md): A textual name for the blend node.
- [source](blendtreesourcenode/source.md): The blend node’s animation.
- [weight](blendtreesourcenode/weight.md): A normalized percentage that designates how much effect this node has compared to peer nodes.

## Relationships

### Conforms To

- [BlendTreeNode](blendtreenode.md)

## See Also

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.
