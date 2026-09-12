> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/emissiondurationvariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/emissiondurationvariation)

# emissionDurationVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in seconds, of randomized emission duration values. Animatable.

## Declaration

```swift
var emissionDurationVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [emissionDuration](emissionduration.md) property. For each emission period, SceneKit randomly adjusts the duration by up to half the [emissionDurationVariation](emissiondurationvariation.md) value. For example, if the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [emissionDurationVariation](emissiondurationvariation.md) value is `0.5` seconds, the system emits particles over a period of `0.75` to `1.25` seconds before stopping.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.

# emissionDurationVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in seconds, of randomized emission duration values. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat emissionDurationVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [emissionDuration](emissionduration.md) property. For each emission period, SceneKit randomly adjusts the duration by up to half the [emissionDurationVariation](emissiondurationvariation.md) value. For example, if the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [emissionDurationVariation](emissiondurationvariation.md) value is `0.5` seconds, the system emits particles over a period of `0.75` to `1.25` seconds before stopping.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.
