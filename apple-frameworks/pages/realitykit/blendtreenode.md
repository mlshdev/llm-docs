> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreenode](https://developer.apple.com/documentation/realitykit/blendtreenode)

# BlendTreeNode

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An interface for a node that’s a member of a blend tree.

## Declaration

```swift
protocol BlendTreeNode
```

<a id="overview"></a>

## Overview

This protocol specifies the common functionality for the animations that compose a [BlendTreeAnimation](blendtreeanimation.md). The animation defines a [root](blendtreeanimation/root.md) node of this type. To define the tree, you assign the root node one of the follow structures that adopt this protocol:

- [BlendTreeBlendNode](blendtreeblendnode.md), which branches the tree for every element in [sources](blendtreeblendnode/sources.md).
- [BlendTreeSourceNode](blendtreesourcenode.md), which defines an animation to blend with its [source](blendtreesourcenode/source.md) property.

> **Note**

> A node in the tree may be of type [BlendTreeInvalidNode](blendtreeinvalidnode.md), which neither specifies a list of sources nor an animation.

Each node type supplies a name and weight, which you can set during or after initialization.

```swift
let animation1 = FromToByAnimation(...)

let blendNode = BlendTreeSourceNode(
    source: animation1,
    name: "Anim1",
    weight: .value(0.25))
```

## Topics

### Configuring the blend tree node

- [name](blendtreenode/name.md): A textual name for the blend node.
- [weight](blendtreenode/weight.md): A normalized percentage that designates how much effect this node has relative to peer nodes.

### Blending animations

- [blend(sources:name:isAdditive:)](blend%28sources_name_isadditive_%29.md): Combines the animations that result from the individual blend-tree nodes of the given array to a single blend-tree node.
- [blend(\_:\_:name:isAdditive:)](blend%28____name_isadditive_%29.md): Combines the animations that result from two blend-tree nodes into a single blend-tree node.

## Relationships

### Conforming Types

- [BlendTreeBlendNode](blendtreeblendnode.md)
- [BlendTreeInvalidNode](blendtreeinvalidnode.md)
- [BlendTreeSourceNode](blendtreesourcenode.md)

## See Also

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.
