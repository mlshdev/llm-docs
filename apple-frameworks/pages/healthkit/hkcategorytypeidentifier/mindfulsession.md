> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/mindfulsession](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/mindfulsession)

# mindfulSession (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A category sample type for recording a mindful session.

## Declaration

```swift
static let mindfulSession: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md) value with these samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Mindfulness and sleep

- [sleepAnalysis](sleepanalysis.md): A category sample type for sleep analysis information.
- [appleSleepingWristTemperature](../hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassification](../hkapplesleepingbreathingdisturbancesclassification.md)

# HKCategoryTypeIdentifierMindfulSession (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A category sample type for recording a mindful session.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierMindfulSession;
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md) value with these samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Mindfulness and sleep

- [HKCategoryTypeIdentifierSleepAnalysis](sleepanalysis.md): A category sample type for sleep analysis information.
- [HKCategoryValueSleepAnalysisAsleepValues](../hkcategoryvaluesleepanalysisasleepvalues.md)
- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](../hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassificationForQuantity](../hkapplesleepingbreathingdisturbancesclassificationforquantity.md)
- [HKAppleSleepingBreathingDisturbancesClassification](../hkapplesleepingbreathingdisturbancesclassification.md)
