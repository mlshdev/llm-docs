> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hklensspecification/addpower](https://developer.apple.com/documentation/healthkit/hklensspecification/addpower)

# addPower (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The correction for nearsightedness.

## Declaration

```swift
@NSCopying var addPower: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This quantity uses [diopter()](../hkunit/diopter%28%29.md) units. The range is from 0.25 to 2.5. The right and left eyes should have the same value.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.

# addPower (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The correction for nearsightedness.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * addPower;
```

<a id="Discussion"></a>

## Discussion

This quantity uses [diopterUnit](../hkunit/diopter%28%29.md) units. The range is from 0.25 to 2.5. The right and left eyes should have the same value.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
