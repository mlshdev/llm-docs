> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluesleepanalysis](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis)

# HKCategoryValueSleepAnalysis (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the result of a sleep analysis.

## Declaration

```swift
enum HKCategoryValueSleepAnalysis
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

These values provide the set of valid categories for sleep tracking in HealthKit. To record a sleep sample, create an [HKCategorySample](hkcategorysample.md) using a [sleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md) identifier and a [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md) value.

```swift
let sleepSampleType = HKCategoryType(.sleepAnalysis)
let sleepCategory = HKCategoryValueSleepAnalysis.asleepDeep.rawValue
let deepSleepSample  = HKCategorySample(type: sleepSampleType,
                                        value:sleepCategory,
                                        start: startDate,
                                        end: endDate)
```

Each sleep analysis sample can have only one value. To track both the amount of time a person spends in bed and the quality and quantity of their sleep, use samples with overlapping times.

![An illustration showing the in-bed sample and the overlapping awake, REM, core and deep sleep samples.](https://developer.apple.com/images/com.apple.healthkit/media-4110084@2x.png)

One set of samples tracks the amount of time the user spent in bed. Then, you can partition the in-bed time into a more-detailed set of samples. These detailed samples show when the user was awake, in core sleep, in deep sleep, or in rapid eye movement (REM) sleep. The detailed samples overlap the in-bed sample, but they don’t overlap each other.

> **Note**

>  Samples recorded by Apple Watch only include awake samples that occur between two sleep samples. When reading sleep samples from HealthKit, there might not be any detailed samples that correspond to the beginning or ending of an in-bed sample.

By comparing the start and end times of these samples, apps can calculate secondary statistics. For example: the amount of time it took for the user to fall asleep, the percentage of sleep time spent in deep sleep, the number of times the user woke while in bed, and the total amount of time spent both in bed and asleep.

## Topics

### Values for Tracking Time In-Bed

- [HKCategoryValueSleepAnalysis.inBed](hkcategoryvaluesleepanalysis/inbed.md): The user is in bed.

### Values for Tracking Sleep States

- [HKCategoryValueSleepAnalysis.awake](hkcategoryvaluesleepanalysis/awake.md): The user is awake.
- [HKCategoryValueSleepAnalysis.asleepCore](hkcategoryvaluesleepanalysis/asleepcore.md): The user is in light or intermediate sleep.
- [HKCategoryValueSleepAnalysis.asleepDeep](hkcategoryvaluesleepanalysis/asleepdeep.md): The user is in deep sleep.
- [HKCategoryValueSleepAnalysis.asleepREM](hkcategoryvaluesleepanalysis/asleeprem.md): The user is in REM sleep.
- [HKCategoryValueSleepAnalysis.asleepUnspecified](hkcategoryvaluesleepanalysis/asleepunspecified.md): The user is asleep, but the specific stage isn’t known.

### Deprecated values

- [asleep](hkcategoryvaluesleepanalysis/asleep.md): Deprecated. The user is sleeping.

### Initializers

- [init(rawValue:)](hkcategoryvaluesleepanalysis/init%28rawvalue_%29.md)

### Type Properties

- [allAsleepValues](hkcategoryvaluesleepanalysis/allasleepvalues.md): A set of values that represents the possible stages of sleep.

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

# HKCategoryValueSleepAnalysis (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that represent the result of a sleep analysis.

## Declaration

```objectivec
enum HKCategoryValueSleepAnalysis : NSInteger;
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

These values provide the set of valid categories for sleep tracking in HealthKit. To record a sleep sample, create an [HKCategorySample](hkcategorysample.md) using a [HKCategoryTypeIdentifierSleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md) identifier and a [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md) value.

```swift
let sleepSampleType = HKCategoryType(.sleepAnalysis)
let sleepCategory = HKCategoryValueSleepAnalysis.asleepDeep.rawValue
let deepSleepSample  = HKCategorySample(type: sleepSampleType,
                                        value:sleepCategory,
                                        start: startDate,
                                        end: endDate)
```

Each sleep analysis sample can have only one value. To track both the amount of time a person spends in bed and the quality and quantity of their sleep, use samples with overlapping times.

![An illustration showing the in-bed sample and the overlapping awake, REM, core and deep sleep samples.](https://developer.apple.com/images/com.apple.healthkit/media-4110084@2x.png)

One set of samples tracks the amount of time the user spent in bed. Then, you can partition the in-bed time into a more-detailed set of samples. These detailed samples show when the user was awake, in core sleep, in deep sleep, or in rapid eye movement (REM) sleep. The detailed samples overlap the in-bed sample, but they don’t overlap each other.

> **Note**

>  Samples recorded by Apple Watch only include awake samples that occur between two sleep samples. When reading sleep samples from HealthKit, there might not be any detailed samples that correspond to the beginning or ending of an in-bed sample.

By comparing the start and end times of these samples, apps can calculate secondary statistics. For example: the amount of time it took for the user to fall asleep, the percentage of sleep time spent in deep sleep, the number of times the user woke while in bed, and the total amount of time spent both in bed and asleep.

## Topics

### Values for Tracking Time In-Bed

- [HKCategoryValueSleepAnalysisInBed](hkcategoryvaluesleepanalysis/inbed.md): The user is in bed.

### Values for Tracking Sleep States

- [HKCategoryValueSleepAnalysisAwake](hkcategoryvaluesleepanalysis/awake.md): The user is awake.
- [HKCategoryValueSleepAnalysisAsleepCore](hkcategoryvaluesleepanalysis/asleepcore.md): The user is in light or intermediate sleep.
- [HKCategoryValueSleepAnalysisAsleepDeep](hkcategoryvaluesleepanalysis/asleepdeep.md): The user is in deep sleep.
- [HKCategoryValueSleepAnalysisAsleepREM](hkcategoryvaluesleepanalysis/asleeprem.md): The user is in REM sleep.
- [HKCategoryValueSleepAnalysisAsleepUnspecified](hkcategoryvaluesleepanalysis/asleepunspecified.md): The user is asleep, but the specific stage isn’t known.

### Deprecated values

- [HKCategoryValueSleepAnalysisAsleep](hkcategoryvaluesleepanalysis/asleep.md): Deprecated. The user is sleeping.

## See Also

### Assigning Values

- [HKCategoryValue](hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md): Categories that represent the user’s cervical mucus quality.
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md): Deprecated. Categories that indicate the amount of menstrual flow for a given sample.
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md): Categories that represent the result of an ovulation home test.
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md): The type of contraceptive.
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
