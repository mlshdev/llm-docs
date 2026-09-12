> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/playanimationaction](https://developer.apple.com/documentation/realitykit/playanimationaction)

# PlayAnimationAction

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An action that plays an animation on the given target entity with a range of playback options.

## Declaration

```swift
struct PlayAnimationAction
```

<a id="overview"></a>

## Overview

Use this action to initiate the playback of animations in a data-driven way. For example, this action can play an animation group which contains a nested action, which plays another animation with specific playback properties.

This action plays the [AnimationResource](animationresource.md) from the[AnimationLibraryComponent](animationlibrarycomponent.md) on the [targetEntity](playanimationaction/targetentity.md). Add all animations to the animation library component that this action will play, ensuring the name of the animation matches the [animationName](playanimationaction/animationname.md) being supplied.

[useParentedControllers](playanimationaction/useparentedcontrollers.md) is used to determine the playback behavior of the animation this action is playing. Set this to `true` to control the playback of the animation. Calling methods such as [pause()](animationplaybackcontroller/pause%28%29.md) and [resume()](animationplaybackcontroller/resume%28%29.md) on the animation playback controller generated from this action will give you control of the animation being played. When the action ends, the animation playback also ends. Set this to `false` to ensure the animation being played runs independently of the action. This would behave as a one shot animation.

The example below is the animation group that the action will play. This contains a sequence containing a single `FromToByAnimation<Transform>`, and character animation.

```swift
// Create an animation group sequence from a range of animations.
let finalAnimation = try AnimationResource
    .group(with: [walkAnimation, moveToAnimation])
```

The example below creates an animation sequence. The final animation in the sequence is an animation generated from the action. This action plays an animation that exist within the [targetEntity](playanimationaction/targetentity.md) [AnimationLibraryComponent](animationlibrarycomponent.md).

```swift
// An action which plays an animation, with parented controllers.
let playAnimationAction = PlayAnimationAction(animationName: "finalAnimation",
                                              transitionDuration: 0.2,
                                              useParentedControllers: true)

// Creates an animation from the action.
//
// Parented controllers is active. This ensures the action
// plays the entire length of the animation that is being played.
//
// The parameter `finalAnimationDuration` is set to the length
// of the animation group to play.
let finalPlayAnimation = try AnimationResource
    .makeActionAnimation(for: playAnimationAction,
                         duration: finalAnimationDuration)

// Create a sequence of animations that will play. 
//
// The action will play last in the sequence.
let animationSequence = try AnimationResource
    .sequence(with: [idleAnimation, startWalkAnimation, finalPlayAnimation])

// Play the sequence animation that will play the action last.
let animationPlaybackController = entity.playAnimation(animationSequence)
```

> **Note**

> If [useParentedControllers](playanimationaction/useparentedcontrollers.md) is set to `true`, the animation will play for the duration of the action. Set the duration of the action to match the length of the animation being played to ensure the entire animation plays.

> **Important**

> This action does not animate a bound property, such as [BindTarget.transform](bindtarget/transform.md).

## Topics

### Initializers

- [init(animationName:targetEntity:transitionDuration:blendLayer:separateAnimatedValue:useParentedControllers:handoffType:)](playanimationaction/init%28animationname_targetentity_transitionduration_blendlayer_separateanimatedvalue_useparentedcontrollers_handofftype_%29.md): Creates a new play animation action.

### Instance Properties

- [animatedValueType](playanimationaction/animatedvaluetype.md): The type for the value that the action modifies over time.
- [animationName](playanimationaction/animationname.md): The name of the animation resource within the target entity animation library component to start playing.
- [blendLayer](playanimationaction/blendlayer.md): An integer that specifies the order in which to apply animations when more than one animation is playing.
- [handoffType](playanimationaction/handofftype.md): Type of handoff behavior between a currently-playing animation and the new animation.
- [separateAnimatedValue](playanimationaction/separateanimatedvalue.md): When set to false, this value indicates that the animation will write directly to the entity’s base value. When set to true, this value indicates that the animation will write to an interim value for the duration of the animation. If this value is set to true then when the animation completes, the entity’s value will be reset to the base value.
- [targetEntity](playanimationaction/targetentity.md): The entity to play the animation.
- [transitionDuration](playanimationaction/transitionduration.md): The duration in seconds over which the animation fades in or cross-fades.
- [useParentedControllers](playanimationaction/useparentedcontrollers.md): A Boolean that indicates whether to parent the new animation’s controller to the controller managing this action.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EntityAction](entityaction.md)

## See Also

### Built-in actions

- [BillboardAction](billboardaction.md): An action that animates the blend factor of an entity’s billboard component.
- [EmphasizeAction](emphasizeaction.md): An action that performs an animation to call attention to an entity.
- [FromToByAction](fromtobyaction.md): An action that starts, stops, or increments by a specific value.
- [ImpulseAction](impulseaction.md): An action that applies an impulse to the physics body at its center of mass when played as an animation.
- [OrbitEntityAction](orbitentityaction.md): An action which animates the transform of an entity to revolve around a specified pivot entity.
- [PlayAudioAction](playaudioaction.md): An action which plays an audio resource on the given target entity.
- [SetEntityEnabledAction](setentityenabledaction.md): An action that enables or disables the targeted entity and its descendants when played as an animation.
- [SpinAction](spinaction.md): An action which animates the transform of an entity to rotate around a specified local axis.
