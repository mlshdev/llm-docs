> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyelevationascended](https://developer.apple.com/documentation/healthkit/hkmetadatakeyelevationascended)

# HKMetadataKeyElevationAscended (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the cumulative elevation ascended during a workout.

## Declaration

```swift
let HKMetadataKeyElevationAscended: String
```

<a id="Discussion"></a>

## Discussion

Set this key on  a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object with a length unit.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityType.downhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityType.snowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

## See Also

### Skiing and Snowboarding

- [HKMetadataKeyAlpineSlopeGrade](hkmetadatakeyalpineslopegrade.md): A key that indicates the percent slope of a ski run.
- [HKMetadataKeyElevationDescended](hkmetadatakeyelevationdescended.md): A key that indicates the cumulative elevation descended during a workout.

# HKMetadataKeyElevationAscended (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the cumulative elevation ascended during a workout.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyElevationAscended;
```

<a id="Discussion"></a>

## Discussion

Set this key on  a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object with a length unit.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityTypeDownhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityTypeSnowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

## See Also

### Skiing and Snowboarding

- [HKMetadataKeyAlpineSlopeGrade](hkmetadatakeyalpineslopegrade.md): A key that indicates the percent slope of a ski run.
- [HKMetadataKeyElevationDescended](hkmetadatakeyelevationdescended.md): A key that indicates the cumulative elevation descended during a workout.
