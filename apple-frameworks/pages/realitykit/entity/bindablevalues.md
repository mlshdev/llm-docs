> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/bindablevalues](https://developer.apple.com/documentation/realitykit/entity/bindablevalues)

# bindableValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency var bindableValues: BindableValuesReference { get set }
```

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
- [playAnimation(named:transitionDuration:startsPaused:recursive:)](playanimation%28named_transitionduration_startspaused_recursive_%29.md): Deprecated. Plays all the animations with the given name on the entity.
- [subscript(\_:)](subscript%28__%29.md): Resolves the entity from the given entity path.
