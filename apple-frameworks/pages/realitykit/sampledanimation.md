> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation](https://developer.apple.com/documentation/realitykit/sampledanimation)

# SampledAnimation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An animation that cycles through a series of frames at a constant interval.

## Declaration

```swift
struct SampledAnimation<Value> where Value : AnimatableData
```

<a id="overview"></a>

## Overview

To specify the data that the animation samples, set one of the `frames` properties that matches the animated property’s type. For example, set the [frames](sampledanimation/frames-2j4nj.md) property to interpolate [Float](https://developer.apple.com/documentation/swift/float) values.

The following code designates a [SampledAnimation](sampledanimation.md) to animate a propery of type [Float](https://developer.apple.com/documentation/swift/float) by specifying the generic typed syntax. The code queues an array of values: `1.0`, `2.0`, and `3.0`.

```swift
// Define the animation type.
typealias SampledAnimationType = SampledAnimation<Float>

// Define the animated property values.
let frameArray: [Float] = [1.0, 2.0, 3.0]
```

To determine how fast the animation progresses from frame to frame, define this structure’s [frameInterval](sampledanimation/frameinterval.md) property. The following code specifies a one-second delay between value changes before initializing the animation object.

```swift
// Define a one-second frame interval.
let interval: TimeInterval = 1

// Create the animation.
let sampleAnim = SampledAnimationType(
    frames: frameArray,
    name: "sampledAnim1",
    frameInterval: interval
    isAdditive: true,
    bindTarget: .transform,
    blendLayer: 100,
    repeatMode: .autoReverse,
    fillMode: .backwards,
    trimStart: 1.0,
    trimEnd: 10.0,
    trimDuration: 9.0,
    offset: 2.0,
    delay: 1.0,
    speed: 2.0
)
```

## Topics

### Creating an animation

- [init(frames:name:tweenMode:frameInterval:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](sampledanimation/init%28frames_name_tweenmode_frameinterval_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Creates an animation with a collection of frames that represent incremental steps in the overall timeline.
- [init(jointNames:frames:name:tweenMode:frameInterval:isAdditive:isScaleAnimated:isRotationAnimated:isTranslationAnimated:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](sampledanimation/init%28jointnames_frames_name_tweenmode_frameinterval_isadditive_isscaleanimated_isrotationanimated_istranslationanimated_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_~c2667b85.md): Conforms when `Value` is `JointTransforms`. Creates an animation that interpolates between two configurations of the given joints.

### Configuring the animation

- [name](sampledanimation/name.md): A textual name for the animation.
- [bindTarget](sampledanimation/bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](sampledanimation/blendlayer.md): The order in which the framework composites the animation.
- [jointNames](sampledanimation/jointnames.md): Conforms when `Value` is `JointTransforms`. The names of the joints to animate.
- [isRotationAnimated](sampledanimation/isrotationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes rotational changes in the entity’s transform.
- [isScaleAnimated](sampledanimation/isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes changes in the entity’s size.
- [isTranslationAnimated](sampledanimation/istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes translational changes in the entity’s transform.
- [additive](sampledanimation/additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
- [tweenMode](sampledanimation/tweenmode.md): An option that determines how animation frames transition.

### Defining frames data

- [frames](sampledanimation/frames-4eeex.md): Conforms when `Value` is `JointTransforms`. An array of joint transforms in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-4qotl.md): Conforms when `Value` is `Transform`. An array of transforms in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-2hobp.md): Conforms when `Value` is `Double`. An array of double-precision values in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-2j4nj.md): Conforms when `Value` is `Float`. An array of floating-point values in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-2h6tu.md): Conforms when `Value` is `simd_quatf`. An array of quaternions in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-9luwf.md): Conforms when `Value` is `SIMD2<Float>`. An array of floating-point pairs in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-1zxo.md): Conforms when `Value` is `SIMD3<Float>`. An array of floating-point triplets in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](sampledanimation/frames-2ywfx.md): Conforms when `Value` is `SIMD4<Float>`. An array of floating-point quadruples in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.

### Timing the animation

- [frameInterval](sampledanimation/frameinterval.md): The duration within the animation timeline for each frame in the frames array.
- [start](sampledanimation/start.md): An integer multiple of the frame interval at which the animation plays.
- [end](sampledanimation/end.md): An integer multiple of the frame interval at which the animation stops.
- [speed](sampledanimation/speed.md): A factor that changes the animation’s rate of playback.
- [delay](sampledanimation/delay.md): An amount of time that elapses before the animation plays.
- [duration](sampledanimation/duration.md): The total playback time of the animation.
- [offset](sampledanimation/offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](sampledanimation/trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](sampledanimation/trimstart.md): The optional time, in seconds, at which the animation plays.
- [trimEnd](sampledanimation/trimend.md): The optional time, in seconds, at which the animation stops.

### Repeating animation playback

- [repeatMode](sampledanimation/repeatmode.md): An option that determines how the animation repeats.
- [fillMode](sampledanimation/fillmode.md): An option that determines which data displays outside of the normal duration.

### Processing skeletal animations

- [processAndCreateAnimation(retargeting:operations:name:)](sampledanimation/processandcreateanimation%28retargeting_operations_name_%29.md): Conforms when `Value` is `JointTransforms`. Processes skeletal animation with the specified retargeting and operations.
- [processAndCreateAnimation(for:operations:name:)](sampledanimation/processandcreateanimation%28for_operations_name_%29.md): Conforms when `Value` is `JointTransforms`. Processes skeletal animation with the specified operations.
- [SampledAnimation.SkeletalAnimationOperation](sampledanimation/skeletalanimationoperation.md): Conforms when `Value` is `JointTransforms`. Operations that can be performed on skeletal animations.

### Initializers

- [init(weightNames:frames:name:tweenMode:frameInterval:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](sampledanimation/init%28weightnames_frames_name_tweenmode_frameinterval_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Conforms when `Value` is `BlendShapeWeights`. Creates an animation that blends between a configuration of blend targets.

### Instance Properties

- [frames](sampledanimation/frames-9jtu9.md): Conforms when `Value` is `BlendShapeWeights`. An array of weights in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.
- [weightNames](sampledanimation/weightnames.md): Conforms when `Value` is `BlendShapeWeights`. The names of the weights to animate.

## Relationships

### Conforms To

- [AnimationDefinition](animationdefinition.md)

## See Also

### Animation definitions

- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
