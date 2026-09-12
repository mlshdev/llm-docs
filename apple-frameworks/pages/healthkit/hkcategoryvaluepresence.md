> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluepresence](https://developer.apple.com/documentation/healthkit/hkcategoryvaluepresence)

# HKCategoryValuePresence (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 13.6+ · iPadOS 13.6+ · Mac Catalyst 13.6+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Categories that indicate whether a symptom is present.

## Declaration

```swift
enum HKCategoryValuePresence
```

## Topics

### Presence of Symptoms

- [HKCategoryValuePresence.notPresent](hkcategoryvaluepresence/notpresent.md): The symptom isn’t present.
- [HKCategoryValuePresence.present](hkcategoryvaluepresence/present.md): The symptom is present.

### Initializers

- [init(rawValue:)](hkcategoryvaluepresence/init%28rawvalue_%29.md)

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
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md): Categories that represent the result of an ovulation home test.
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md): The type of contraceptive.
- [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md): Categories that represent the result of a sleep analysis.
- [HKCategoryValueAppetiteChanges](hkcategoryvalueappetitechanges.md): Categories that represent change in appetite.
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md): Categories that represent the severity of a symptom.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md): A value that indicates a low-level cardio fitness event.
- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.

# HKCategoryValuePresence (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 13.6+ · iPadOS 13.6+ · Mac Catalyst 13.6+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Categories that indicate whether a symptom is present.

## Declaration

```objectivec
enum HKCategoryValuePresence : NSInteger;
```

## Topics

### Presence of Symptoms

- [HKCategoryValuePresenceNotPresent](hkcategoryvaluepresence/notpresent.md): The symptom isn’t present.
- [HKCategoryValuePresencePresent](hkcategoryvaluepresence/present.md): The symptom is present.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md): Categories that represent the result of an ovulation home test.
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md): The type of contraceptive.
- [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md): Categories that represent the result of a sleep analysis.
- [HKCategoryValueAppetiteChanges](hkcategoryvalueappetitechanges.md): Categories that represent change in appetite.
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md): Categories that represent the severity of a symptom.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md): A value that indicates a low-level cardio fitness event.
- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.
