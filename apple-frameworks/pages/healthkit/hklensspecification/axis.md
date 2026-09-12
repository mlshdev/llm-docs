> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hklensspecification/axis](https://developer.apple.com/documentation/healthkit/hklensspecification/axis)

# axis (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the correction for astigmatism that measures the orientation fo the correction.

## Declaration

```swift
@NSCopying var axis: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This quantity measures the orientation of the correction in [degreeAngle()](../hkunit/degreeangle%28%29.md) units.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [addPower](addpower.md): The correction for nearsightedness.

# axis (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the correction for astigmatism that measures the orientation fo the correction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * axis;
```

<a id="Discussion"></a>

## Discussion

This quantity measures the orientation of the correction in [degreeAngleUnit](../hkunit/degreeangle%28%29.md) units.

## See Also

### Accessing lens specification data

- [sphere](sphere.md): The correction for farsightedness.
- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [addPower](addpower.md): The correction for nearsightedness.
