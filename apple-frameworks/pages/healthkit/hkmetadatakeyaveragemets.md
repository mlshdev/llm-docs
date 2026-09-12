> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyaveragemets](https://developer.apple.com/documentation/healthkit/hkmetadatakeyaveragemets)

# HKMetadataKeyAverageMETs (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key that indicates the average Metabolic Equivalent of Task (METs) during a workout.

## Declaration

```swift
let HKMetadataKeyAverageMETs: String
```

<a id="Discussion"></a>

## Discussion

Set this key on a workout. Set its value to an [HKQuantity](hkquantity.md) object with a METs unit (for example, kcal/(kg\*hr)). For more information on creating complex units, see [HKUnit](hkunit.md).

The value represents the average intensity over the entire workout’s duration.

## See Also

### Intensity

- [HKMetadataKeyPhysicalEffortEstimationType](hkmetadatakeyphysicaleffortestimationtype.md)

# HKMetadataKeyAverageMETs (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key that indicates the average Metabolic Equivalent of Task (METs) during a workout.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAverageMETs;
```

<a id="Discussion"></a>

## Discussion

Set this key on a workout. Set its value to an [HKQuantity](hkquantity.md) object with a METs unit (for example, kcal/(kg\*hr)). For more information on creating complex units, see [HKUnit](hkunit.md).

The value represents the average intensity over the entire workout’s duration.

## See Also

### Intensity

- [HKMetadataKeyPhysicalEffortEstimationType](hkmetadatakeyphysicaleffortestimationtype.md)
