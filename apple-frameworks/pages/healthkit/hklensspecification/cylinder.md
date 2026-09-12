> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hklensspecification/cylinder](https://developer.apple.com/documentation/healthkit/hklensspecification/cylinder)

# cylinder (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the correction for astigmatism that measures the strength of the correction.

## Declaration

```swift
@NSCopying var cylinder: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This quantity measures the strength of the correction in [diopter()](../hkunit/diopter%28%29.md) units. The range is -3.0 to 3.0.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](addpower.md): The correction for nearsightedness.

# cylinder (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the correction for astigmatism that measures the strength of the correction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * cylinder;
```

<a id="Discussion"></a>

## Discussion

This quantity measures the strength of the correction in [diopterUnit](../hkunit/diopter%28%29.md) units. The range is -3.0 to 3.0.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](addpower.md): The correction for nearsightedness.
