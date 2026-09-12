> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeinvalidnode](https://developer.apple.com/documentation/realitykit/blendtreeinvalidnode)

# BlendTreeInvalidNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A blend tree node that’s internal only or sources from an invalid definition.

## Declaration

```swift
struct BlendTreeInvalidNode
```

<a id="overview"></a>

## Overview

This structure adopts [BlendTreeNode](blendtreenode.md) and adds the ability to detect a node that contains neither an animation nor any branches in the blend tree.

You don’t create instances of this structure. Instead, detect whether your blend-tree node matches the framework’s criteria for invalid nodes by checking the node type, as the following code demonstrates.

```swift
// Get the blend tree's root node.
guard let blendNode = blendTree.root as? BlendTreeBlendNode else { return }
for node in blendNode.sources {
    if let invalidNode = node as? BlendTreeInvalidNode {
        // Respond to invalid-node criteria.
```

## Topics

### Configuring the blend tree invalid node

- [name](blendtreeinvalidnode/name.md): A textual name for the blend node.
- [weight](blendtreeinvalidnode/weight.md): The amount that an animation impacts the entity it applies to.

## Relationships

### Conforms To

- [BlendTreeNode](blendtreenode.md)

## See Also

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.
