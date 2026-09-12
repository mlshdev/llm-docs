> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/playanimation(_:transitionduration:blendlayeroffset:separateanimatedvalue:startspaused:clock:handofftype:)](https://developer.apple.com/documentation/realitykit/entity/playanimation(_:transitionduration:blendlayeroffset:separateanimatedvalue:startspaused:clock:handofftype:))

# playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Plays an animation with the specified options.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func playAnimation(_ animation: AnimationResource, transitionDuration: TimeInterval = 0, blendLayerOffset: Int = 0, separateAnimatedValue: Bool = false, startsPaused: Bool = false, clock: CMClockOrTimebase? = nil, handoffType: AnimationHandoffType = .default) -> AnimationPlaybackController
```

## Parameters

- `animation`: The animation to play.
- `transitionDuration`: The duration in seconds over which the animation fades in or cross-fades.
- `blendLayerOffset`: An integer that specifies the order in which to apply animations when more than one animation is playing.
- `separateAnimatedValue`: When set to false, this value indicates that the animation will write directly to the entity’s base value. When set to true, this value indicates that the animation will write to an interim value for the duration of the animation. If this value is set to true then when the animation completes, the entity’s value will be reset to the base value.
- `startsPaused`: A Boolean that pauses the progress of an animation when set to `true`.
- `clock`: An optional clock to drive the animation with a custom timescale.
- `handoffType`: Type of handoff behavior between a currently-playing animation and the new animation. Defaults to `.snapshotAndReplace(applyToAllLayers: true)`.

<a id="discussion"></a>

## Discussion

Call this method to play an animation and configure playback options. RealityKit supports blending up to two different animations at the same time. When RealityKit applies multiple animations to an entity, the order in which it applies the animations affects the final animation. Use the `blendLayerOffset` parameter to specify the order of animations when playing multiple animations at the same time.

## See Also

### Animating an entity

- [availableAnimations](availableanimations.md): The list of animations associated with the entity.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:startsPaused:)](playanimation%28__transitionduration_startspaused_%29.md): Plays the given animation on the entity.
- [stopAllAnimations(recursive:)](stopallanimations%28recursive_%29.md): Stops all playing of animations on this entity.
- [defaultAnimationClock](defaultanimationclock.md): Returns the default animation clock for this entity.
- [parameters](parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ParameterSet](parameterset.md): Represents a reference to the parameters for a particular entity.
- [playAnimation(named:transitionDuration:startsPaused:recursive:)](playanimation%28named_transitionduration_startspaused_recursive_%29.md): Deprecated. Plays all the animations with the given name on the entity.
- [bindableValues](bindablevalues.md)
- [subscript(\_:)](subscript%28__%29.md): Resolves the entity from the given entity path.
