> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/loops](https://developer.apple.com/documentation/scenekit/scnparticlesystem/loops)

# loops (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the system repeats its emission and idle periods.

## Declaration

```swift
var loops: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), you can make the system emit particles periodically or sporadically. For example, in a looping system where the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [idleDuration](idleduration.md) value is `1.0` seconds, the system alternates alternates between equal one-second periods of spawning and not spawning particles. Use the [emissionDurationVariation](emissiondurationvariation.md) and [idleDurationVariation](idledurationvariation.md) properties to randomize the duration of each emission and idle period, making the emission behavior more sporadic.

Specify [false](https://developer.apple.com/documentation/swift/false) for particle systems that create one-shot effects, such as an explosion that appears when a game character is defeated.

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.

# loops (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether the system repeats its emission and idle periods.

## Declaration

```objectivec
@property (nonatomic) BOOL loops;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), you can make the system emit particles periodically or sporadically. For example, in a looping system where the [emissionDuration](emissionduration.md) value is `1.0` seconds and the [idleDuration](idleduration.md) value is `1.0` seconds, the system alternates alternates between equal one-second periods of spawning and not spawning particles. Use the [emissionDurationVariation](emissiondurationvariation.md) and [idleDurationVariation](idledurationvariation.md) properties to randomize the duration of each emission and idle period, making the emission behavior more sporadic.

Specify [false](https://developer.apple.com/documentation/swift/false) for particle systems that create one-shot effects, such as an explosion that appears when a game character is defeated.

## See Also

### Managing Particle Emission Timing

- [emissionDuration](emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [warmupDuration](warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](birthratevariation.md): The range of randomized particle birth rate values. Animatable.
