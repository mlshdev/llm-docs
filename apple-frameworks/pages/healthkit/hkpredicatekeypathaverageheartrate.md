> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathaverageheartrate](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathaverageheartrate)

# HKPredicateKeyPathAverageHeartRate (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s average heart rate.

## Declaration

```swift
let HKPredicateKeyPathAverageHeartRate: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s average heart rate in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.

# HKPredicateKeyPathAverageHeartRate (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s average heart rate.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathAverageHeartRate;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s average heart rate in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.
