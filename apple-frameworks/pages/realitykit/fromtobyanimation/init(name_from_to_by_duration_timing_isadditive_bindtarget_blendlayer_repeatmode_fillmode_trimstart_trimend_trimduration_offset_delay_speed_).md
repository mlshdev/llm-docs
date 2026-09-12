> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/init(name:from:to:by:duration:timing:isadditive:bindtarget:blendlayer:repeatmode:fillmode:trimstart:trimend:trimduration:offset:delay:speed:)](https://developer.apple.com/documentation/realitykit/fromtobyanimation/init(name:from:to:by:duration:timing:isadditive:bindtarget:blendlayer:repeatmode:fillmode:trimstart:trimend:trimduration:offset:delay:speed:))

# init(name:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an animation that interpolates between two values for a property of the target entity.

## Declaration

```swift
init(name: String = "", from: Value? = nil, to: Value? = nil, by: Value? = nil, duration: TimeInterval = 1.0, timing: AnimationTimingFunction = .linear, isAdditive: Bool = false, bindTarget: BindTarget? = nil, blendLayer: Int32 = 0, repeatMode: AnimationRepeatMode = .none, fillMode: AnimationFillMode = [], trimStart: TimeInterval? = nil, trimEnd: TimeInterval? = nil, trimDuration: TimeInterval? = nil, offset: TimeInterval = 0, delay: TimeInterval = 0, speed: Float = 1.0)
```

## Parameters

- `name`: A unique name for the animation.
- `from`: The state of the animated property before the animation starts.
- `to`: The state of the animated property after the animation ends.
- `by`: An amount that increments the animated property during the animation.
- `duration`: The total playback time.
- `timing`: An option that determines the animation’s pace over time.
- `isAdditive`: A Boolean value that indicates whether the animation blends additively with concurrent animations.
- `bindTarget`: A textual name that identifies the particular property that animates.
- `blendLayer`: The order in which the framework composites the animation into the view.
- `repeatMode`: An option that determines how the animation repeats.
- `fillMode`: The playback behavior outside of the normal duration.
- `trimStart`: The time, in seconds, at which the animation plays.
- `trimEnd`: The time, in seconds, at which the animation stops.
- `trimDuration`: An optional duration that overrides the calculated duration.
- `offset`: The time, in seconds, at which the animation begins within the duration.
- `delay`: An amount of time that elapses before the animation plays.
- `speed`: A factor that increases or decreases the animation’s rate of playback.

## See Also

### Creating an animation

- [init(jointNames:name:isScaleAnimated:isRotationAnimated:isTranslationAnimated:from:to:by:duration:timing:isAdditive:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](init%28jointnames_name_isscaleanimated_isrotationanimated_istranslationanimated_from_to_by_duration_timing_isadditive_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trim~3aa48dcd.md): Conforms when `Value` is `JointTransforms`. Creates an animation that interpolates between two configurations of the given joints.
