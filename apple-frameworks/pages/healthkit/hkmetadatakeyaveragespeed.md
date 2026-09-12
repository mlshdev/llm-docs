> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyaveragespeed](https://developer.apple.com/documentation/healthkit/hkmetadatakeyaveragespeed)

# HKMetadataKeyAverageSpeed (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the average speed during a workout.

## Declaration

```swift
let HKMetadataKeyAverageSpeed: String
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

Set this key on a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object with a length/time unit (for example, m/s). For more information on creating complex units, see Performing unit math.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityType.downhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityType.snowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

> **Note**

>  This value represents the average speed while moving. It may not be the same as the value you get when dividing a distance sample’s distance by its duration.

## See Also

### Speed

- [HKMetadataKeyMaximumSpeed](hkmetadatakeymaximumspeed.md): A key that indicates the maximum speed during a workout.

# HKMetadataKeyAverageSpeed (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.2+

A key that indicates the average speed during a workout.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAverageSpeed;
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

Set this key on a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object with a length/time unit (for example, m/s). For more information on creating complex units, see Performing unit math.

HealthKit assigns this metadata key to the segments it automatically creates for [HKWorkoutActivityTypeDownhillSkiing](hkworkoutactivitytype/downhillskiing.md) and [HKWorkoutActivityTypeSnowboarding](hkworkoutactivitytype/snowboarding.md) workout sessions (Apple Watch Series 3 only).

> **Note**

>  This value represents the average speed while moving. It may not be the same as the value you get when dividing a distance sample’s distance by its duration.

## See Also

### Speed

- [HKMetadataKeyMaximumSpeed](hkmetadatakeymaximumspeed.md): A key that indicates the maximum speed during a workout.
