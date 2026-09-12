> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyheartraterecoverytesttype](https://developer.apple.com/documentation/healthkit/hkmetadatakeyheartraterecoverytesttype)

# HKMetadataKeyHeartRateRecoveryTestType (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of test that the source used to calculate a person’s heart-rate recovery.

## Declaration

```swift
let HKMetadataKeyHeartRateRecoveryTestType: String
```

<a id="Discussion"></a>

## Discussion

Use this metadata key to identify the type of test that the [HKSource](hksource.md) used to calculate the value for a [heartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md) sample.

## Topics

### Heart rate recovery tests

- [HKHeartRateRecoveryTestType](hkheartraterecoverytesttype.md): The test that measured a person’s heart-rate recovery.

## See Also

### Vitals Sensors Keys

- [HKMetadataKeyBodyTemperatureSensorLocation](hkmetadatakeybodytemperaturesensorlocation.md): The location where a specific body temperature reading was taken.
- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
- [HKMetadataKeyHeartRateRecoveryActivityDuration](hkmetadatakeyheartraterecoveryactivityduration.md)
- [HKMetadataKeyHeartRateRecoveryActivityType](hkmetadatakeyheartraterecoveryactivitytype.md)
- [HKMetadataKeyHeartRateRecoveryMaxObservedRecoveryHeartRate](hkmetadatakeyheartraterecoverymaxobservedrecoveryheartrate.md)
- [HKMetadataKeyVO2MaxTestType](hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.

# HKMetadataKeyHeartRateRecoveryTestType (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of test that the source used to calculate a person’s heart-rate recovery.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyHeartRateRecoveryTestType;
```

<a id="Discussion"></a>

## Discussion

Use this metadata key to identify the type of test that the [HKSource](hksource.md) used to calculate the value for a [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md) sample.

## Topics

### Heart rate recovery tests

- [HKHeartRateRecoveryTestType](hkheartraterecoverytesttype.md): The test that measured a person’s heart-rate recovery.

## See Also

### Vitals Sensors Keys

- [HKMetadataKeyBodyTemperatureSensorLocation](hkmetadatakeybodytemperaturesensorlocation.md): The location where a specific body temperature reading was taken.
- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
- [HKMetadataKeyHeartRateRecoveryActivityDuration](hkmetadatakeyheartraterecoveryactivityduration.md)
- [HKMetadataKeyHeartRateRecoveryActivityType](hkmetadatakeyheartraterecoveryactivitytype.md)
- [HKMetadataKeyHeartRateRecoveryMaxObservedRecoveryHeartRate](hkmetadatakeyheartraterecoverymaxobservedrecoveryheartrate.md)
- [HKMetadataKeyVO2MaxTestType](hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.
