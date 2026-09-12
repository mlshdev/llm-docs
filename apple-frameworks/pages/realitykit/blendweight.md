> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendweight](https://developer.apple.com/documentation/realitykit/blendweight)

# BlendWeight

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A numerical representation of the impact an animation has on a scene or entity.

## Declaration

```swift
enum BlendWeight
```

<a id="overview"></a>

## Overview

The [BlendTreeSourceNode](blendtreesourcenode.md) structure accepts this enumeration as an initializer argument.

To specify a custom weight, use the value case:

```swift
let node = BlendTreeSourceNode(
    source: animation1,
    name: "anim2",
    weight: .value(0.75))
```

## Topics

### Choosing the blend weight

- [BlendWeight.bindTarget(\_:defaultWeight:)](blendweight/bindtarget%28__defaultweight_%29.md): The amount of impact an animation has on the bind target of an entity.
- [BlendWeight.parameter(\_:defaultWeight:)](blendweight/parameter%28__defaultweight_%29.md): The amount of impact an animation has on a named parameter of an entity.
- [BlendWeight.value(\_:)](blendweight/value%28__%29.md): The numerical representation of the impact an animation has on an entity.

### Operators

- [==(\_:\_:)](blendweight/==%28____%29.md): Returns a Boolean value that indicates whether two blend weights are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
