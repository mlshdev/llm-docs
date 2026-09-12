> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegeometricspreadingdistancemodelparameters/rollofffactor](https://developer.apple.com/documentation/phase/phasegeometricspreadingdistancemodelparameters/rollofffactor)

# rolloffFactor (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A value that fades specific frequencies over a distance.

## Declaration

```swift
var rolloffFactor: Double { get set }
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The framework clamps a value to the range `[0.0,` [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/double/greatestfinitemagnitude)\].

A roll-off effect changes the frequencies of a sound as it dissipates with distance. A value of `0.0` disables the roll-off effect. A value of `0.5` halves the roll-off. The default value is `1.0`, which produces a realistic roll-off effect. A value of `2.0` amplifies the roll-off effect.

# rolloffFactor (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A value that fades specific frequencies over a distance.

## Declaration

```objectivec
@property (nonatomic) double rolloffFactor;
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The framework clamps a value to the range `[0.0,` [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/double/greatestfinitemagnitude)\].

A roll-off effect changes the frequencies of a sound as it dissipates with distance. A value of `0.0` disables the roll-off effect. A value of `0.5` halves the roll-off. The default value is `1.0`, which produces a realistic roll-off effect. A value of `2.0` amplifies the roll-off effect.
