> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeblendnode](https://developer.apple.com/documentation/realitykit/blendtreeblendnode)

# BlendTreeBlendNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A source node for an animation that mixes several animations to form a single animation.

## Declaration

```swift
struct BlendTreeBlendNode
```

<a id="overview"></a>

## Overview

A *blend tree animation* mixes multiple animations to form a single animation. The [BlendTreeBlendNode](blendtreeblendnode.md) structure adopts the [BlendTreeNode](blendtreenode.md) protocol, which specifies the behavior of animations that make up a blend tree animation. This structure adds the ability to branch a blend tree at any point. Each member of this property’s [sources](blendtreeblendnode/sources.md) array represents a branch in the tree. For more information about blend trees, see [BlendTreeAnimation](blendtreeanimation.md).

## Topics

### Creating a blend-tree blend node

- [init(sources:name:weight:isAdditive:)](blendtreeblendnode/init%28sources_name_weight_isadditive_%29.md): Creates a tree node made up of multiple branches.

### Configuring the node

- [name](blendtreeblendnode/name.md): A textual name for the blend node.
- [weight](blendtreeblendnode/weight.md): A normalized percentage that designates how much effect this node has compared to peer nodes.
- [isAdditive](blendtreeblendnode/isadditive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.

### Configuring child nodes

- [sources](blendtreeblendnode/sources.md): The nodes that branch from a node to form part of a blend tree.

## Relationships

### Conforms To

- [BlendTreeNode](blendtreenode.md)

## See Also

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.
