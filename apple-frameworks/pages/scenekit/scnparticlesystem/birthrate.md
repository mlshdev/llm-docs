> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/birthrate](https://developer.apple.com/documentation/scenekit/scnparticlesystem/birthrate)

# birthRate (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of particles spawned during each emission period. Animatable.

## Declaration

```swift
var birthRate: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The system emits this number of particles at a constant rate through the duration of the period specified by the [emissionDuration](emissionduration.md) property. A value of zero prevents the system from emitting particles, unless you randomize the birth rate with the [birthRateVariation](birthratevariation.md) property.

The default value is `1`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.

# birthRate (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The number of particles spawned during each emission period. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat birthRate;
```

<a id="Discussion"></a>

## Discussion

The system emits this number of particles at a constant rate through the duration of the period specified by the [emissionDuration](emissionduration.md) property. A value of zero prevents the system from emitting particles, unless you randomize the birth rate with the [birthRateVariation](birthratevariation.md) property.

The default value is `1`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.
