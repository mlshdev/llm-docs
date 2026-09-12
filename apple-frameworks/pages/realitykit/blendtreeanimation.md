> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendtreeanimation](https://developer.apple.com/documentation/realitykit/blendtreeanimation)

# BlendTreeAnimation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A collection of animations on the same property that the framework blends to a single animation.

## Declaration

```swift
struct BlendTreeAnimation<Value> where Value : AnimatableData
```

<a id="overview"></a>

## Overview

This structure provides a way to form a single animation by mixing several other animations together. You define a source node for each animation, and a weight, which determines how much each individual animation takes effect in the resulting animation.

To create the blended animation, you define a *blend tree* that sprouts from [root](blendtreeanimation/root.md), which consists of one or more blend-tree nodes ([BlendTreeNode](blendtreenode.md)). Each node may be one of the following conforming types:

- [BlendTreeBlendNode](blendtreeblendnode.md), which branches the tree for every element in [sources](blendtreeblendnode/sources.md)
- [BlendTreeSourceNode](blendtreesourcenode.md), which defines one of the animations to blend via its [source](blendtreesourcenode/source.md) property

Because source nodes reference no other nodes, they represent leaf nodes in the tree.

<a id="Blending-two-skeletal-movements-to-a-single-movement"></a>

### Blending two skeletal movements to a single movement

The following animation plays a sampling of the animations named `anim1` and `anim2`. To fine-tune the interplay between the two animations, the code sets a blend weight for each animation. The weight of `0.25` for `anim1` determines that the first animation’s behavior is 25% prominent in the final result. The `anim2` weight is `0.75`, as the cumulative blend weight across all animations in the tree needs to equal `1`. This determines that the second animation influences 75% of the visual behavior of the blended animation.

```swift
let anim1 = FromToByAnimation<JointTransforms>(
    name: "anim1",
    from: JointTransforms([Transform(scale: SIMD3<Float>(1, 2, 3),
    rotation: simd_quatf(ix: 5, iy: 6, iz: 7, r: 8),
    translation: SIMD3<Float>(10, 20, 30))]),
    to: JointTransforms([Transform(scale: SIMD3<Float>(11, 21, 31),
    rotation: simd_quatf(ix: 50, iy: 60, iz: 70, r: 80),
    translation: SIMD3<Float>(100, 200, 300))]),
    duration: 1.0)

let anim2 = FromToByAnimation<JointTransforms>(
    name: "anim2",
    from: JointTransforms([Transform(scale: SIMD3<Float>(10, 20, 30),
    rotation: simd_quatf(ix: 4, iy: 5, iz: 5, r: 7),
    translation: SIMD3<Float>(100, 200, 300))]),
    to: JointTransforms([Transform(scale: SIMD3<Float>(110, 210, 310),
    rotation: simd_quatf(ix: 500, iy: 60, iz: 70, r: 80),
    translation: SIMD3<Float>(1000, 2000, 3000))]),
    duration: 10.0)

let blendTree = BlendTreeAnimation<JointTransforms>(
    blend(
        BlendTreeSourceNode(
            source: anim1,
            name: "anim1",
            weight: .value(0.25)),
        BlendTreeSourceNode(
            source: anim2,
            name: "anim2",
            weight: .value(0.75)),
        name: "blend"),
    name: "blendTree",
    bindTarget: .parameter("bar")
)
```

> **Tip**

> To modify the weights for each frame, create a source node with a dynamic [BlendWeight](blendweight.md), such as with the [BlendWeight.bindTarget(\_:defaultWeight:)](blendweight/bindtarget%28__defaultweight_%29.md) or [BlendWeight.parameter(\_:defaultWeight:)](blendweight/parameter%28__defaultweight_%29.md) enumeration cases.

## Topics

### Creating an animation

- [init(\_:name:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](blendtreeanimation/init%28__name_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Creates a unique animation from a combination of other animations in the form of a tree.

### Configuring the animation

- [root](blendtreeanimation/root.md): The first node in a tree of animations.
- [name](blendtreeanimation/name.md): A textual name for the animation.
- [bindTarget](blendtreeanimation/bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendtreeanimation/blendlayer.md): The order in which the framework composites the animation.
- [isAdditive](blendtreeanimation/isadditive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.

### Timing the animation

- [speed](blendtreeanimation/speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](blendtreeanimation/delay.md): An amount of time that lapses before the animation plays.
- [duration](blendtreeanimation/duration.md): The total playback time of the animation.
- [offset](blendtreeanimation/offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](blendtreeanimation/trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](blendtreeanimation/trimstart.md): The optional time, in seconds, at which the source animation plays.
- [trimEnd](blendtreeanimation/trimend.md): The optional time, in seconds, at which the source animation stops.

### Repeating animation playback

- [repeatMode](blendtreeanimation/repeatmode.md): An option that determines how the animation repeats.
- [fillMode](blendtreeanimation/fillmode.md): An option that determines which data displays outside of the normal duration.

## Relationships

### Conforms To

- [AnimationDefinition](animationdefinition.md)

## See Also

### Blend trees

- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.
