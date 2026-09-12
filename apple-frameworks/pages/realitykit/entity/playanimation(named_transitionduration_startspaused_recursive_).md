> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/playanimation(named:transitionduration:startspaused:recursive:)](https://developer.apple.com/documentation/realitykit/entity/playanimation(named:transitionduration:startspaused:recursive:))

# playAnimation(named:transitionDuration:startsPaused:recursive:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Plays all the animations with the given name on the entity.

> Use playAnimation functions that take an AnimationResource instead of a name.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func playAnimation(named animationName: String, transitionDuration: TimeInterval = 0, startsPaused: Bool = false, recursive: Bool = true) -> AnimationPlaybackController
```

## Parameters

- `animationName`: The name of the animation.
- `transitionDuration`: The duration in seconds over which the animation fades in or cross-fades.
- `startsPaused`: A Boolean that you set to `true` to return from the call with the animations paused. Set to `false` to start the animations right away.
- `recursive`: Indicates whether to also play animations on all descendants of the entity.

<a id="return-value"></a>

## Return Value

An animation playback controller that you can use to start and stop the animations.

<a id="discussion"></a>

## Discussion

The method plays all the animations in the [availableAnimations](availableanimations.md) property with a matching name. If there are none, the method returns a controller showing a stopped animation.

## See Also

### Animating an entity

- [availableAnimations](availableanimations.md): The list of animations associated with the entity.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_handofftype_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:startsPaused:)](playanimation%28__transitionduration_startspaused_%29.md): Plays the given animation on the entity.
- [stopAllAnimations(recursive:)](stopallanimations%28recursive_%29.md): Stops all playing of animations on this entity.
- [defaultAnimationClock](defaultanimationclock.md): Returns the default animation clock for this entity.
- [parameters](parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ParameterSet](parameterset.md): Represents a reference to the parameters for a particular entity.
- [bindableValues](bindablevalues.md)
- [subscript(\_:)](subscript%28__%29.md): Resolves the entity from the given entity path.
