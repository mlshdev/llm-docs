> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitypoint/frequency](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypoint/frequency)

# frequency (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The frequency tested in the hearing test.

## Declaration

```swift
@NSCopying var frequency: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

This object uses [hertz()](../hkunit/hertz%28%29.md) units.

## See Also

### Accessing Data

- [leftEarSensitivity](leftearsensitivity.md): Deprecated. The sensitivity of the left ear.
- [rightEarSensitivity](rightearsensitivity.md): Deprecated. The sensitivity of the right ear.

# frequency (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The frequency tested in the hearing test.

## Declaration

```objectivec
@property (copy, readonly) HKQuantity * frequency;
```

<a id="Discussion"></a>

## Discussion

This object uses [hertzUnit](../hkunit/hertz%28%29.md) units.

## See Also

### Accessing Data

- [leftEarSensitivity](leftearsensitivity.md): Deprecated. The sensitivity of the left ear.
- [rightEarSensitivity](rightearsensitivity.md): Deprecated. The sensitivity of the right ear.
