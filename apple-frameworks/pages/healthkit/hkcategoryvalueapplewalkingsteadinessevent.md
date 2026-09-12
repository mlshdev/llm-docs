> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent](https://developer.apple.com/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent)

# HKCategoryValueAppleWalkingSteadinessEvent (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The value of an event triggered by a reduced score for the steadiness of the user’s gait.

## Declaration

```swift
enum HKCategoryValueAppleWalkingSteadinessEvent
```

<a id="overview"></a>

## Overview

These values indicate that the user received a Low or Very Low score for their Walking Steadiness. The [HKCategoryValueAppleWalkingSteadinessEvent.repeatLow](hkcategoryvalueapplewalkingsteadinessevent/repeatlow.md) and [HKCategoryValueAppleWalkingSteadinessEvent.repeatVeryLow](hkcategoryvalueapplewalkingsteadinessevent/repeatverylow.md) values indicate that the Low and Very Low scores persisted over a significant period of time.

## Topics

### Steadiness Values

- [HKCategoryValueAppleWalkingSteadinessEvent.initialLow](hkcategoryvalueapplewalkingsteadinessevent/initiallow.md): The user received a below-normal steadiness score for their gait while walking.
- [HKCategoryValueAppleWalkingSteadinessEvent.initialVeryLow](hkcategoryvalueapplewalkingsteadinessevent/initialverylow.md): The user received a steadiness score for their gait while walking that was considerably below normal.
- [HKCategoryValueAppleWalkingSteadinessEvent.repeatLow](hkcategoryvalueapplewalkingsteadinessevent/repeatlow.md): The user’s below-normal score persists over a significant period of time.
- [HKCategoryValueAppleWalkingSteadinessEvent.repeatVeryLow](hkcategoryvalueapplewalkingsteadinessevent/repeatverylow.md): The user’s considerably below-normal score persists over a significant period of time.

### Initializers

- [init(rawValue:)](hkcategoryvalueapplewalkingsteadinessevent/init%28rawvalue_%29.md)

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
- [HKCategoryValuePresence](hkcategoryvaluepresence.md): Categories that indicate whether a symptom is present.
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md): Categories that represent the severity of a symptom.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md): A value that indicates a low-level cardio fitness event.
- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.

# HKCategoryValueAppleWalkingSteadinessEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The value of an event triggered by a reduced score for the steadiness of the user’s gait.

## Declaration

```objectivec
enum HKCategoryValueAppleWalkingSteadinessEvent : NSInteger;
```

<a id="overview"></a>

## Overview

These values indicate that the user received a Low or Very Low score for their Walking Steadiness. The [HKCategoryValueAppleWalkingSteadinessEventRepeatLow](hkcategoryvalueapplewalkingsteadinessevent/repeatlow.md) and [HKCategoryValueAppleWalkingSteadinessEventRepeatVeryLow](hkcategoryvalueapplewalkingsteadinessevent/repeatverylow.md) values indicate that the Low and Very Low scores persisted over a significant period of time.

## Topics

### Steadiness Values

- [HKCategoryValueAppleWalkingSteadinessEventInitialLow](hkcategoryvalueapplewalkingsteadinessevent/initiallow.md): The user received a below-normal steadiness score for their gait while walking.
- [HKCategoryValueAppleWalkingSteadinessEventInitialVeryLow](hkcategoryvalueapplewalkingsteadinessevent/initialverylow.md): The user received a steadiness score for their gait while walking that was considerably below normal.
- [HKCategoryValueAppleWalkingSteadinessEventRepeatLow](hkcategoryvalueapplewalkingsteadinessevent/repeatlow.md): The user’s below-normal score persists over a significant period of time.
- [HKCategoryValueAppleWalkingSteadinessEventRepeatVeryLow](hkcategoryvalueapplewalkingsteadinessevent/repeatverylow.md): The user’s considerably below-normal score persists over a significant period of time.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
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
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.
