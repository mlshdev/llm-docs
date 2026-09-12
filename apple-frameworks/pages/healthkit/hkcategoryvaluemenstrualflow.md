> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluemenstrualflow](https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenstrualflow)

# HKCategoryValueMenstrualFlow (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

Categories that indicate the amount of menstrual flow for a given sample.

## Declaration

```swift
enum HKCategoryValueMenstrualFlow
```

## Topics

### Constants

- [HKCategoryValueMenstrualFlow.unspecified](hkcategoryvaluemenstrualflow/unspecified.md): Deprecated. An unspecified amount of menstrual flow.
- [HKCategoryValueMenstrualFlow.none](hkcategoryvaluemenstrualflow/none.md): Deprecated. No menstrual flow.
- [HKCategoryValueMenstrualFlow.light](hkcategoryvaluemenstrualflow/light.md): Deprecated. Light menstrual flow.
- [HKCategoryValueMenstrualFlow.medium](hkcategoryvaluemenstrualflow/medium.md): Deprecated. Medium menstrual flow.
- [HKCategoryValueMenstrualFlow.heavy](hkcategoryvaluemenstrualflow/heavy.md): Deprecated. Heavy menstrual flow.

### Initializers

- [init(rawValue:)](hkcategoryvaluemenstrualflow/init%28rawvalue_%29.md): Deprecated.

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
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md): Categories that represent the result of an ovulation home test.
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

# HKCategoryValueMenstrualFlow (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

Categories that indicate the amount of menstrual flow for a given sample.

## Declaration

```objectivec
enum HKCategoryValueMenstrualFlow : NSInteger;
```

## Topics

### Constants

- [HKCategoryValueMenstrualFlowUnspecified](hkcategoryvaluemenstrualflow/unspecified.md): Deprecated. An unspecified amount of menstrual flow.
- [HKCategoryValueMenstrualFlowNone](hkcategoryvaluemenstrualflow/none.md): Deprecated. No menstrual flow.
- [HKCategoryValueMenstrualFlowLight](hkcategoryvaluemenstrualflow/light.md): Deprecated. Light menstrual flow.
- [HKCategoryValueMenstrualFlowMedium](hkcategoryvaluemenstrualflow/medium.md): Deprecated. Medium menstrual flow.
- [HKCategoryValueMenstrualFlowHeavy](hkcategoryvaluemenstrualflow/heavy.md): Deprecated. Heavy menstrual flow.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md): Categories that represent the result of an ovulation home test.
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
