> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation](https://developer.apple.com/documentation/realitykit/fromtobyanimation)

# FromToByAnimation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An animation that starts, stops, or increments by a specific value.

## Declaration

```swift
struct FromToByAnimation<Value> where Value : AnimatableData
```

<a id="overview"></a>

## Overview

To animate an entity or scene, this structure gradually changes a parameter’s value over time. You can specify a *from* value, which represents the animated property’s initial value at the beginning of the animation. You can also specify a *to* value, which determines the value of the property at the end of the animation. Alternatively, you can set a *by* value. The framework adds the *by* value to the property’s initial state to calculate the value at the end of the animation.

To specify the property that this struct animates, define `bindTarget` in the intializer,

[init(name:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](fromtobyanimation/init%28name_from_to_by_duration_timing_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md).

<a id="Configure-the-animation-inputs"></a>

### Configure the animation inputs

This animation supports varying input combinations, which exhibit the following behavior. When you specify:

- **A *from* and *to* value**: The animation interpolates between *from* and *to*, and ignores the *by* value.
- **A *from* and *by* value**: The animation interpolates between *from* and the sum of *from* and *by*.
- **Only a *from* value**: The animation interpolates between *from* and the default source value.
- **Only a *to* value**: The animation interpolates between the default source value and *to*.
- **A *to* and *by* value**: The animation starts at *by* subtracted from \_to \_and completes at *to*.
- **Only a *by* value**: The animation interpolates between the default source value and the sum of default source value and *by*.
- **No *from*, *to*, or *by* value**: The animation interpolates between the default source value and the default target value.

The default source value is the base value of the of animated property. If multiple animations target the property, then the framework observes the output of the previous animation as the subsequent animation’s default source value. The default target value is the base value of the animated property.

## Topics

### Creating an animation

- [init(name:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](fromtobyanimation/init%28name_from_to_by_duration_timing_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Creates an animation that interpolates between two values for a property of the target entity.
- [init(jointNames:name:isScaleAnimated:isRotationAnimated:isTranslationAnimated:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](fromtobyanimation/init%28jointnames_name_isscaleanimated_isrotationanimated_istranslationanimated_from_to_by_duration_timing_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trim~3aa48dcd.md): Conforms when `Value` is `JointTransforms`. Creates an animation that interpolates between two configurations of the given joints.

### Configuring the animation

- [name](fromtobyanimation/name.md): A textual name for the animation.
- [bindTarget](fromtobyanimation/bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](fromtobyanimation/blendlayer.md): The order in which the framework composites the animation.
- [jointNames](fromtobyanimation/jointnames.md): Conforms when `Value` is `JointTransforms`. Joint names that define the joints in the skeletal pose.
- [isScaleAnimated](fromtobyanimation/isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether that animation interpolates changes to the target’s size.
- [isRotationAnimated](fromtobyanimation/isrotationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates rotational changes.
- [isTranslationAnimated](fromtobyanimation/istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates changes to the target object’s position.
- [isAdditive](fromtobyanimation/isadditive.md): A Boolean value that indicates whether the animation blends additively with concurrent animations.

### Defining a start value

- [fromValue](fromtobyanimation/fromvalue-2h2wq.md): Conforms when `Value` is `JointTransforms`.
- [fromValue](fromtobyanimation/fromvalue-8dr21.md): Conforms when `Value` is `Transform`.
- [fromValue](fromtobyanimation/fromvalue-4tv25.md): Conforms when `Value` is `Double`.
- [fromValue](fromtobyanimation/fromvalue-umpp.md): Conforms when `Value` is `Float`.
- [fromValue](fromtobyanimation/fromvalue-12wzs.md): Conforms when `Value` is `simd_quatf`.
- [fromValue](fromtobyanimation/fromvalue-5kx2b.md): Conforms when `Value` is `SIMD2<Float>`.
- [fromValue](fromtobyanimation/fromvalue-6msd.md): Conforms when `Value` is `SIMD3<Float>`.
- [fromValue](fromtobyanimation/fromvalue-5ckq7.md): Conforms when `Value` is `SIMD4<Float>`.

### Defining an incremental value

- [byValue](fromtobyanimation/byvalue-9zcwv.md): Conforms when `Value` is `JointTransforms`.
- [byValue](fromtobyanimation/byvalue-5fewc.md): Conforms when `Value` is `Transform`.
- [byValue](fromtobyanimation/byvalue-3soon.md): Conforms when `Value` is `Double`.
- [byValue](fromtobyanimation/byvalue-8na9o.md): Conforms when `Value` is `Float`.
- [byValue](fromtobyanimation/byvalue-460jf.md): Conforms when `Value` is `simd_quatf`.
- [byValue](fromtobyanimation/byvalue-1pq4.md): Conforms when `Value` is `SIMD2<Float>`.
- [byValue](fromtobyanimation/byvalue-3bp3q.md): Conforms when `Value` is `SIMD3<Float>`.
- [byValue](fromtobyanimation/byvalue-7zwq3.md): Conforms when `Value` is `SIMD4<Float>`.

### Defining an end value

- [toValue](fromtobyanimation/tovalue-50qb4.md): Conforms when `Value` is `JointTransforms`.
- [toValue](fromtobyanimation/tovalue-8jzdy.md): Conforms when `Value` is `Transform`.
- [toValue](fromtobyanimation/tovalue-4nrhr.md): Conforms when `Value` is `Double`.
- [toValue](fromtobyanimation/tovalue-4m4pm.md): Conforms when `Value` is `Float`.
- [toValue](fromtobyanimation/tovalue-4wi6r.md): Conforms when `Value` is `simd_quatf`.
- [toValue](fromtobyanimation/tovalue-6a1uy.md): Conforms when `Value` is `SIMD2<Float>`.
- [toValue](fromtobyanimation/tovalue-813jk.md): Conforms when `Value` is `SIMD3<Float>`.
- [toValue](fromtobyanimation/tovalue-5ki8u.md): Conforms when `Value` is `SIMD4<Float>`.

### Timing the animation

- [speed](fromtobyanimation/speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](fromtobyanimation/delay.md): An amount of time that elapses before the animation plays.
- [duration](fromtobyanimation/duration.md): The total playback time of the animation.
- [offset](fromtobyanimation/offset.md): The time, in seconds, at which the animation begins within the duration.
- [timing](fromtobyanimation/timing.md): An option that determines the animation’s pace over time.
- [trimDuration](fromtobyanimation/trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](fromtobyanimation/trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](fromtobyanimation/trimend.md): The time, in seconds, at which the animation stops.

### Repeating animation playback

- [repeatMode](fromtobyanimation/repeatmode.md): An option that determines how the animation repeats.
- [fillMode](fromtobyanimation/fillmode.md): An option that determines which data displays outside of the normal duration.

### Initializers

- [init(weightNames:name:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](fromtobyanimation/init%28weightnames_name_from_to_by_duration_timing_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Conforms when `Value` is `BlendShapeWeights`. Creates an animation that blends between a configuration of blend targets.

### Instance Properties

- [byValue](fromtobyanimation/byvalue-2m18u.md): Conforms when `Value` is `BlendShapeWeights`.
- [fromValue](fromtobyanimation/fromvalue-66cs6.md): Conforms when `Value` is `BlendShapeWeights`.
- [toValue](fromtobyanimation/tovalue-5zgql.md): Conforms when `Value` is `BlendShapeWeights`.
- [weightNames](fromtobyanimation/weightnames.md): Conforms when `Value` is `BlendShapeWeights`. Weight names that define the weights for the blend shape.

## Relationships

### Conforms To

- [AnimationDefinition](animationdefinition.md)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
