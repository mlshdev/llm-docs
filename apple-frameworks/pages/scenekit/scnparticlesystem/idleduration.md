> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/idleduration](https://developer.apple.com/documentation/scenekit/scnparticlesystem/idleduration)

# idleDuration (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The duration, in seconds, of periods when the system emits no particles. Animatable.

## Declaration

```swift
var idleDuration: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the system’s [loops](loops.md) property value is [true](https://developer.apple.com/documentation/swift/true), you can make the system emit particles periodically or sporadically. For example, in a looping system where the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [idleDuration](idleduration.md) value is `1.0` seconds, the system alternates between equal one-second periods of spawning and not spawning particles. You can randomize the duration with the [idleDurationVariation](idledurationvariation.md) property. Idle duration has no effect if the [loops](loops.md) property value is [false](https://developer.apple.com/documentation/swift/false).

The default value is `0.0` seconds, specifying no idle time between emissions. (That is, if the [loops](loops.md) property value is [true](https://developer.apple.com/documentation/swift/true), the system emits particles continuously.)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.

# idleDuration (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The duration, in seconds, of periods when the system emits no particles. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat idleDuration;
```

<a id="Discussion"></a>

## Discussion

If the system’s [loops](loops.md) property value is [true](https://developer.apple.com/documentation/swift/true), you can make the system emit particles periodically or sporadically. For example, in a looping system where the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [idleDuration](idleduration.md) value is `1.0` seconds, the system alternates between equal one-second periods of spawning and not spawning particles. You can randomize the duration with the [idleDurationVariation](idledurationvariation.md) property. Idle duration has no effect if the [loops](loops.md) property value is [false](https://developer.apple.com/documentation/swift/false).

The default value is `0.0` seconds, specifying no idle time between emissions. (That is, if the [loops](loops.md) property value is [true](https://developer.apple.com/documentation/swift/true), the system emits particles continuously.)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.
