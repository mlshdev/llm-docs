> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitypoint/init(frequency:leftearsensitivity:rightearsensitivity:)](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypoint/init(frequency:leftearsensitivity:rightearsensitivity:))

# init(frequency:leftEarSensitivity:rightEarSensitivity:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

Creates a new sensitivity point.

> Use +\[HKAudiogramSensitivityPoint sensitivityPointWithFrequency:tests:error:\]

## Declaration

```swift
convenience init(frequency: HKQuantity, leftEarSensitivity: HKQuantity?, rightEarSensitivity: HKQuantity?) throws
```

## Parameters

- `frequency`: The frequency tested. This object uses [hertz()](../hkunit/hertz%28%29.md) units.
- `leftEarSensitivity`: The sensitivity of the left ear, measured in attenuated dB from a baseline of 0 db. This object uses [decibelHearingLevel()](../hkunit/decibelhearinglevel%28%29.md) units.
- `rightEarSensitivity`: The sensitivity of the right ear, measured in attenuated dB from a baseline of 0 db. This object uses [decibelHearingLevel()](../hkunit/decibelhearinglevel%28%29.md) units.

# sensitivityPointWithFrequency:leftEarSensitivity:rightEarSensitivity:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

Creates a new sensitivity point.

> Use +\[HKAudiogramSensitivityPoint sensitivityPointWithFrequency:tests:error:\]

## Declaration

```objectivec
+ (instancetype) sensitivityPointWithFrequency:(HKQuantity *) frequency leftEarSensitivity:(HKQuantity *) leftEarSensitivity rightEarSensitivity:(HKQuantity *) rightEarSensitivity error:(NSError **) error;
```

## Parameters

- `frequency`: The frequency tested. This object uses [hertzUnit](../hkunit/hertz%28%29.md) units.
- `leftEarSensitivity`: The sensitivity of the left ear, measured in attenuated dB from a baseline of 0 db. This object uses [decibelHearingLevelUnit](../hkunit/decibelhearinglevel%28%29.md) units.
- `rightEarSensitivity`: The sensitivity of the right ear, measured in attenuated dB from a baseline of 0 db. This object uses [decibelHearingLevelUnit](../hkunit/decibelhearinglevel%28%29.md) units.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.
