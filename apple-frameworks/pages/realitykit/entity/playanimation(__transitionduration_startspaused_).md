> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/playanimation(_:transitionduration:startspaused:)](https://developer.apple.com/documentation/realitykit/entity/playanimation(_:transitionduration:startspaused:))

# playAnimation(\_:transitionDuration:startsPaused:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Plays the given animation on the entity.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func playAnimation(_ animation: AnimationResource, transitionDuration: TimeInterval, startsPaused: Bool) -> AnimationPlaybackController
```

## Parameters

- `animation`: The animation to play.
- `transitionDuration`: The duration in seconds over which the animation fades in or cross-fades.
- `startsPaused`: A Boolean that you set to `true` to return from the call with the animation paused. Set to `false` to start the animation right away.

<a id="return-value"></a>

## Return Value

An animation playback controller that you can use to start and stop the animation.

## See Also

### Animating an entity

- [availableAnimations](availableanimations.md): The list of animations associated with the entity.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_handofftype_%29.md): Plays an animation with the specified options.
- [stopAllAnimations(recursive:)](stopallanimations%28recursive_%29.md): Stops all playing of animations on this entity.
- [defaultAnimationClock](defaultanimationclock.md): Returns the default animation clock for this entity.
- [parameters](parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ParameterSet](parameterset.md): Represents a reference to the parameters for a particular entity.
- [playAnimation(named:transitionDuration:startsPaused:recursive:)](playanimation%28named_transitionduration_startspaused_recursive_%29.md): Deprecated. Plays all the animations with the given name on the entity.
- [bindableValues](bindablevalues.md)
- [subscript(\_:)](subscript%28__%29.md): Resolves the entity from the given entity path.
