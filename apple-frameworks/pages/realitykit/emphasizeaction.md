> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/emphasizeaction](https://developer.apple.com/documentation/realitykit/emphasizeaction)

# EmphasizeAction

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An action that performs an animation to call attention to an entity.

## Declaration

```swift
struct EmphasizeAction
```

<a id="overview"></a>

## Overview

This action plays a preexisting animation, dependent on the [style](emphasizeaction/style.md) and [motionType](emphasizeaction/motiontype.md) options.

The example below creates an animation that causes the entity to bounce in a playful style.

```swift
// An action that performs a bounce motion in a playful style.
let emphasizeAction = EmphasizeAction(motionType: .bounce,
                                      style: .playful,
                                      isAdditive: false)

// A five second animation that plays the preexisting animation.
//
// This animation causes the entity to raise up, and then drop,
// appearing to bounce on the ground in a playful style,
// before returning to its original position.
let playfulBounceAnimation = try AnimationResource
    .makeActionAnimation(for: emphasizeAction,
                         duration: 5.0,
                         bindTarget: .transform)

// Play the five second emphasize animation that causes the entity to
// bounce in a playful style.
entity.playAnimation(playfulBounceAnimation)
```

Video: emphasizeaction-bounce

> **Important**

> This action directly animates the [BindTarget.transform](bindtarget/transform.md) on the bound entity. Ensure a correct bind target is supplied when creating the animation.

## Topics

### Initializers

- [init(motionType:style:isAdditive:)](emphasizeaction/init%28motiontype_style_isadditive_%29.md): Creates a new emphasize action.

### Instance Properties

- [animatedValueType](emphasizeaction/animatedvaluetype.md): The type for the value that the action modifies over time.
- [isAdditive](emphasizeaction/isadditive.md): A Boolean value that indicates whether the animation system additively blends the action’s output with the base value.
- [motionType](emphasizeaction/motiontype.md): An option that implements animation effects.
- [style](emphasizeaction/style.md): An option that implements different kinds of animation timing.

### Enumerations

- [EmphasizeAction.EmphasisAnimationStyle](emphasizeaction/emphasisanimationstyle.md): Options available to determine the kinds of animation timing.
- [EmphasizeAction.EmphasisMotionType](emphasizeaction/emphasismotiontype.md): Options available to determine the kinds of animation effects.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EntityAction](entityaction.md)

## See Also

### Built-in actions

- [BillboardAction](billboardaction.md): An action that animates the blend factor of an entity’s billboard component.
- [FromToByAction](fromtobyaction.md): An action that starts, stops, or increments by a specific value.
- [ImpulseAction](impulseaction.md): An action that applies an impulse to the physics body at its center of mass when played as an animation.
- [OrbitEntityAction](orbitentityaction.md): An action which animates the transform of an entity to revolve around a specified pivot entity.
- [PlayAnimationAction](playanimationaction.md): An action that plays an animation on the given target entity with a range of playback options.
- [PlayAudioAction](playaudioaction.md): An action which plays an audio resource on the given target entity.
- [SetEntityEnabledAction](setentityenabledaction.md): An action that enables or disables the targeted entity and its descendants when played as an animation.
- [SpinAction](spinaction.md): An action which animates the transform of an entity to rotate around a specified local axis.
