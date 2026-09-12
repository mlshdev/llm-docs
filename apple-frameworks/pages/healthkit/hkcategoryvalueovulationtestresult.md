> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvalueovulationtestresult](https://developer.apple.com/documentation/healthkit/hkcategoryvalueovulationtestresult)

# HKCategoryValueOvulationTestResult (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the result of an ovulation home test.

## Declaration

```swift
enum HKCategoryValueOvulationTestResult
```

## Topics

### Ovulation Test Results

- [HKCategoryValueOvulationTestResult.negative](hkcategoryvalueovulationtestresult/negative.md): The ovulation test is negative.
- [HKCategoryValueOvulationTestResult.luteinizingHormoneSurge](hkcategoryvalueovulationtestresult/luteinizinghormonesurge.md): The ovulation test detected a surge in the luteinizing hormone. This value often refers to a `Positive` or `Peak` result.
- [HKCategoryValueOvulationTestResult.indeterminate](hkcategoryvalueovulationtestresult/indeterminate.md): The ovulation test is inconclusive.
- [HKCategoryValueOvulationTestResult.estrogenSurge](hkcategoryvalueovulationtestresult/estrogensurge.md): The ovulation test detected a surge in estrogen. This value often refers to a `High` result.
- [positive](hkcategoryvalueovulationtestresult/positive.md): Deprecated. The ovulation test is positive.

### Initializers

- [init(rawValue:)](hkcategoryvalueovulationtestresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKCategoryValuePredicateProviding](hkcategoryvaluepredicateproviding.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md): The type of contraceptive.
- [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md): Categories that represent the result of a sleep analysis.
- [HKCategoryValueAppetiteChanges](hkcategoryvalueappetitechanges.md): Categories that represent change in appetite.
- [HKCategoryValuePresence](hkcategoryvaluepresence.md): Categories that indicate whether a symptom is present.
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md): Categories that represent the severity of a symptom.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md): A value that indicates a low-level cardio fitness event.
- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.

# HKCategoryValueOvulationTestResult (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the result of an ovulation home test.

## Declaration

```objectivec
enum HKCategoryValueOvulationTestResult : NSInteger;
```

## Topics

### Ovulation Test Results

- [HKCategoryValueOvulationTestResultNegative](hkcategoryvalueovulationtestresult/negative.md): The ovulation test is negative.
- [HKCategoryValueOvulationTestResultLuteinizingHormoneSurge](hkcategoryvalueovulationtestresult/luteinizinghormonesurge.md): The ovulation test detected a surge in the luteinizing hormone. This value often refers to a `Positive` or `Peak` result.
- [HKCategoryValueOvulationTestResultIndeterminate](hkcategoryvalueovulationtestresult/indeterminate.md): The ovulation test is inconclusive.
- [HKCategoryValueOvulationTestResultEstrogenSurge](hkcategoryvalueovulationtestresult/estrogensurge.md): The ovulation test detected a surge in estrogen. This value often refers to a `High` result.
- [HKCategoryValueOvulationTestResultPositive](hkcategoryvalueovulationtestresult/positive.md): Deprecated. The ovulation test is positive.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md): The type of contraceptive.
- [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md): Categories that represent the result of a sleep analysis.
- [HKCategoryValueAppetiteChanges](hkcategoryvalueappetitechanges.md): Categories that represent change in appetite.
- [HKCategoryValuePresence](hkcategoryvaluepresence.md): Categories that indicate whether a symptom is present.
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md): Categories that represent the severity of a symptom.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md): A value that indicates a low-level cardio fitness event.
- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.
