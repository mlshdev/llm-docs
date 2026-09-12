> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluecervicalmucusquality](https://developer.apple.com/documentation/healthkit/hkcategoryvaluecervicalmucusquality)

# HKCategoryValueCervicalMucusQuality (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the user’s cervical mucus quality.

## Declaration

```swift
enum HKCategoryValueCervicalMucusQuality
```

<a id="overview"></a>

## Overview

These values are ordered from least-fertile (Dry) to most-fertile (EggWhite).

## Topics

### Constants

- [HKCategoryValueCervicalMucusQuality.dry](hkcategoryvaluecervicalmucusquality/dry.md): Little or no mucus.
- [HKCategoryValueCervicalMucusQuality.sticky](hkcategoryvaluecervicalmucusquality/sticky.md): Sticky mucus.
- [HKCategoryValueCervicalMucusQuality.creamy](hkcategoryvaluecervicalmucusquality/creamy.md): Creamy mucus.
- [HKCategoryValueCervicalMucusQuality.watery](hkcategoryvaluecervicalmucusquality/watery.md): Watery mucus.
- [HKCategoryValueCervicalMucusQuality.eggWhite](hkcategoryvaluecervicalmucusquality/eggwhite.md): Mucus the color and consistency of egg whites.

### Initializers

- [init(rawValue:)](hkcategoryvaluecervicalmucusquality/init%28rawvalue_%29.md)

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
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
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

# HKCategoryValueCervicalMucusQuality (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the user’s cervical mucus quality.

## Declaration

```objectivec
enum HKCategoryValueCervicalMucusQuality : NSInteger;
```

<a id="overview"></a>

## Overview

These values are ordered from least-fertile (Dry) to most-fertile (EggWhite).

## Topics

### Constants

- [HKCategoryValueCervicalMucusQualityDry](hkcategoryvaluecervicalmucusquality/dry.md): Little or no mucus.
- [HKCategoryValueCervicalMucusQualitySticky](hkcategoryvaluecervicalmucusquality/sticky.md): Sticky mucus.
- [HKCategoryValueCervicalMucusQualityCreamy](hkcategoryvaluecervicalmucusquality/creamy.md): Creamy mucus.
- [HKCategoryValueCervicalMucusQualityWatery](hkcategoryvaluecervicalmucusquality/watery.md): Watery mucus.
- [HKCategoryValueCervicalMucusQualityEggWhite](hkcategoryvaluecervicalmucusquality/eggwhite.md): Mucus the color and consistency of egg whites.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
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
