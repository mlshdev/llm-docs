> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyalpineslopegrade](https://developer.apple.com/documentation/healthkit/hkmetadatakeyalpineslopegrade)

# HKMetadataKeyAlpineSlopeGrade (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the percent slope of a ski run.

## Declaration

```swift
let HKMetadataKeyAlpineSlopeGrade: String
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

Set this key on quantity samples that represent distance, or on workout segments. Set its value to an [HKQuantity](hkquantity.md) object with a percent unit, where 100% indicates a 45 degree slope.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityType.downhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityType.snowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

## See Also

### Skiing and Snowboarding

- [HKMetadataKeyElevationAscended](hkmetadatakeyelevationascended.md): A key that indicates the cumulative elevation ascended during a workout.
- [HKMetadataKeyElevationDescended](hkmetadatakeyelevationdescended.md): A key that indicates the cumulative elevation descended during a workout.

# HKMetadataKeyAlpineSlopeGrade (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the percent slope of a ski run.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAlpineSlopeGrade;
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

Set this key on quantity samples that represent distance, or on workout segments. Set its value to an [HKQuantity](hkquantity.md) object with a percent unit, where 100% indicates a 45 degree slope.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityTypeDownhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityTypeSnowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

## See Also

### Skiing and Snowboarding

- [HKMetadataKeyElevationAscended](hkmetadatakeyelevationascended.md): A key that indicates the cumulative elevation ascended during a workout.
- [HKMetadataKeyElevationDescended](hkmetadatakeyelevationdescended.md): A key that indicates the cumulative elevation descended during a workout.
