> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkpredicatekeypathecgclassification

# HKPredicateKeyPathECGClassification (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s classification.

## Declaration

```swift
let HKPredicateKeyPathECGClassification: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s classification in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Related Documentation

- [HKElectrocardiogram.Classification](hkelectrocardiogram/classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.

# HKPredicateKeyPathECGClassification (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key path for the sample’s classification.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathECGClassification;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include the ECG’s classification in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Related Documentation

- [HKElectrocardiogramClassification](hkelectrocardiogram/classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
