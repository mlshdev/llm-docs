> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitypoint/leftearsensitivity](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypoint/leftearsensitivity)

# leftEarSensitivity (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

The sensitivity of the left ear.

> Use tests object which will contain a value for left ear

## Declaration

```swift
@NSCopying var leftEarSensitivity: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This object uses [decibelHearingLevel()](../hkunit/decibelhearinglevel%28%29.md) units to measure sensitivity in attenuated dB from a baseline of 0 dB.

## See Also

### Accessing Data

- [frequency](frequency.md): The frequency tested in the hearing test.
- [rightEarSensitivity](rightearsensitivity.md): Deprecated. The sensitivity of the right ear.

# leftEarSensitivity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

The sensitivity of the left ear.

> Use tests object which will contain a value for left ear

## Declaration

```objectivec
@property (copy, readonly, nullable) HKQuantity * leftEarSensitivity;
```

<a id="Discussion"></a>

## Discussion

This object uses [decibelHearingLevelUnit](../hkunit/decibelhearinglevel%28%29.md) units to measure sensitivity in attenuated dB from a baseline of 0 dB.

## See Also

### Accessing Data

- [frequency](frequency.md): The frequency tested in the hearing test.
- [rightEarSensitivity](rightearsensitivity.md): Deprecated. The sensitivity of the right ear.
