> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/availableanimations](https://developer.apple.com/documentation/realitykit/entity/availableanimations)

# availableAnimations

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The list of animations associated with the entity.

## Declaration

```swift
@MainActor @preconcurrency var availableAnimations: [AnimationResource] { get }
```

<a id="discussion"></a>

## Discussion

When you import an entity from a file, for example by using the [load(named:in:)](load%28named_in_%29.md) method, the entity might contain associated animations. Any that RealityKit supports appear in the [availableAnimations](availableanimations.md) array.

To play a particular animation resource from the list, call the [playAnimation(\_:transitionDuration:startsPaused:)](playanimation%28__transitionduration_startspaused_%29.md) method. Alternatively, to play all animations with a given name, call the `playAnimation(named:transitionDuration:startsPaused:)` method instead.

## See Also

### Animating an entity

- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)](playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_handofftype_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:startsPaused:)](playanimation%28__transitionduration_startspaused_%29.md): Plays the given animation on the entity.
- [stopAllAnimations(recursive:)](stopallanimations%28recursive_%29.md): Stops all playing of animations on this entity.
- [defaultAnimationClock](defaultanimationclock.md): Returns the default animation clock for this entity.
- [parameters](parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ParameterSet](parameterset.md): Represents a reference to the parameters for a particular entity.
- [playAnimation(named:transitionDuration:startsPaused:recursive:)](playanimation%28named_transitionduration_startspaused_recursive_%29.md): Deprecated. Plays all the animations with the given name on the entity.
- [bindableValues](bindablevalues.md)
- [subscript(\_:)](subscript%28__%29.md): Resolves the entity from the given entity path.
