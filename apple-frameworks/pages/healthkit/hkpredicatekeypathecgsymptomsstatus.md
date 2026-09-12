> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathecgsymptomsstatus](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathecgsymptomsstatus)

# HKPredicateKeyPathECGSymptomsStatus (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s symptom status.

## Declaration

```swift
let HKPredicateKeyPathECGSymptomsStatus: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s symptoms status in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Related Documentation

- [HKElectrocardiogram.SymptomsStatus](hkelectrocardiogram/symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.

# HKPredicateKeyPathECGSymptomsStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s symptom status.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathECGSymptomsStatus;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s symptoms status in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Related Documentation

- [HKElectrocardiogramSymptomsStatus](hkelectrocardiogram/symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
