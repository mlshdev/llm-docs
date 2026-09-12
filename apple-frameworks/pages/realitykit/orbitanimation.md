> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation](https://developer.apple.com/documentation/realitykit/orbitanimation)

# OrbitAnimation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An animation that revolves an entity around its origin.

## Declaration

```swift
struct OrbitAnimation
```

<a id="overview"></a>

## Overview

This class moves an entity in a circular path by gradually adjusting its local transform. The animation sets the entity’s initial position with [startTransform](orbitanimation/starttransform.md) and rotates it around the point `(0,` `0,` `0)`. The [axis](orbitanimation/axis.md) specifies which cartesian axis around which to rotate. The full orbit completes after [duration](orbitanimation/duration.md) lapses.

If the target entity contains child entities, the target entity orbits the children.

<a id="Revolve-an-entity-around-its-origin"></a>

### Revolve an entity around its origin

The following code creates an animation that orbits an entity around the y-axis 3 times over `6` seconds.

```swift
let yAxis: SIMD3<Float> = [0, 1, 0]
let startingPosition: SIMD3<Float> = [0.25, 0, 0]

let orbit = OrbitAnimation(
    name: "orbit",
    duration: 6,
    axis: yAxis,
    startTransform: Transform(translation: startingPosition),
    spinClockwise: false,
    orientToPath: true,
    rotationCount: 3,
    bindTarget: .transform
)
```

The newly created animation can be trimmed after creation, to last only 4 seconds.

```swift
// Create an animation clip that skips the first two seconds.
let trimmed = orbit.trimmed(start: 2)
```

Use [generate(with:)](animationresource/generate%28with_%29.md) to convert `OrbitAnimation` to an [AnimationResource](animationresource.md) that can be applied to your entity with [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](entity/playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md).

Video: orbitanimation-red-box

## Topics

### Creating an animation

- [init(name:duration:axis:startTransform:spinClockwise:orientToPath:rotationCount:bindTarget:blendLayer:repeatMode:fillMode:isAdditive:trimStart:trimEnd:trimDuration:offset:delay:speed:)](orbitanimation/init%28name_duration_axis_starttransform_spinclockwise_orienttopath_rotationcount_bindtarget_blendlayer_repeatmode_fillmode_isadditive_trimstart_trimend_trimduration_offset_delay_spe~ee7fac5e.md): Creates an animation that revolves an entity around its origin.

### Configuring the animation

- [startTransform](orbitanimation/starttransform.md): The pose of the orbiting object at the start of the animation.
- [axis](orbitanimation/axis.md): A 3D vector that points in the direction of the axis around which to rotate.
- [name](orbitanimation/name.md): A textual name for the animation.
- [bindTarget](orbitanimation/bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](orbitanimation/blendlayer.md): The order in which the framework composites the animation.
- [rotationCount](orbitanimation/rotationcount.md): The number of times to rotate the target entity before stopping.
- [spinClockwise](orbitanimation/spinclockwise.md): A Boolean value that indicates whether the object orbits the center point in the clockwise direction.
- [orientToPath](orbitanimation/orienttopath.md): A Boolean value that indicates whether the orbiting object updates its orientation during the animation to orient itself along the rotation path.
- [additive](orbitanimation/additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.

### Timing the animation

- [speed](orbitanimation/speed.md): A factor that changes the animation’s rate of playback.
- [delay](orbitanimation/delay.md): An amount of time that lapses before the animation plays.
- [duration](orbitanimation/duration.md): The elapsed time for one complete rotation.
- [offset](orbitanimation/offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](orbitanimation/trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](orbitanimation/trimstart.md): The optional time, in seconds, at which the animation plays.
- [trimEnd](orbitanimation/trimend.md): The optional time, in seconds, at which the animation stops.

### Repeating animation playback

- [repeatMode](orbitanimation/repeatmode.md): An option that determines how the animation repeats.
- [fillMode](orbitanimation/fillmode.md): An option that determines which data displays outside of the normal duration.

## Relationships

### Conforms To

- [AnimationDefinition](animationdefinition.md)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
