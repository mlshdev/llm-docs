> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyheartratemotioncontext](https://developer.apple.com/documentation/healthkit/hkmetadatakeyheartratemotioncontext)

# HKMetadataKeyHeartRateMotionContext (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The user’s activity level when the heart rate sample was measured.

## Declaration

```swift
let HKMetadataKeyHeartRateMotionContext: String
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) containing an [HKHeartRateMotionContext](hkheartratemotioncontext.md) as its value.

## Topics

### Valid Motion Contexts

- [HKHeartRateMotionContext](hkheartratemotioncontext.md): Values that indicate the user’s level of activity when the heart rate sample was measured.

## See Also

### Related Documentation

- [heartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.

### Metadata Keys

- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.

# HKMetadataKeyHeartRateMotionContext (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The user’s activity level when the heart rate sample was measured.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyHeartRateMotionContext;
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) containing an [HKHeartRateMotionContext](hkheartratemotioncontext.md) as its value.

## Topics

### Valid Motion Contexts

- [HKHeartRateMotionContext](hkheartratemotioncontext.md): Values that indicate the user’s level of activity when the heart rate sample was measured.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifierHeartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.

### Metadata Keys

- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
