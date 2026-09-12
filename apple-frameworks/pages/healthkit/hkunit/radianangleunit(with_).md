> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/radianangleunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/radianangleunit(with:))

# radianAngleUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a HealthKit unit for measuring angles, using radian units with the provided prefix.

## Declaration

```swift
class func radianAngleUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Constructing angle units

- [degreeAngle()](degreeangle%28%29.md): Returns a HealthKit unit for measuring angles using degrees.
- [radianAngle()](radianangle%28%29.md): Returns a HealthKit unit for measuring angles using radians.

# radianAngleUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a HealthKit unit for measuring angles, using radian units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) radianAngleUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Constructing angle units

- [degreeAngleUnit](degreeangle%28%29.md): Returns a HealthKit unit for measuring angles using degrees.
- [radianAngleUnit](radianangle%28%29.md): Returns a HealthKit unit for measuring angles using radians.
