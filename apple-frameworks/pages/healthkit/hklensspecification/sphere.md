> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hklensspecification/sphere](https://developer.apple.com/documentation/healthkit/hklensspecification/sphere)

# sphere (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The correction for farsightedness.

## Declaration

```swift
@NSCopying var sphere: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

This quantity uses [diopter()](../hkunit/diopter%28%29.md) units. The range is -10.5 to +6.5.

## See Also

### Accessing lens specification data

- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](addpower.md): The correction for nearsightedness.

# sphere (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The correction for farsightedness.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKQuantity * sphere;
```

<a id="Discussion"></a>

## Discussion

This quantity uses [diopterUnit](../hkunit/diopter%28%29.md) units. The range is -10.5 to +6.5.

## See Also

### Accessing lens specification data

- [cylinder](cylinder.md): Part of the correction for astigmatism that measures the strength of the correction.
- [axis](axis.md): Part of the correction for astigmatism that measures the orientation fo the correction.
- [addPower](addpower.md): The correction for nearsightedness.
