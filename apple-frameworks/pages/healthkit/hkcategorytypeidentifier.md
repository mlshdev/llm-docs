> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier)

# HKCategoryTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Identifiers for creating category types.

## Declaration

```swift
struct HKCategoryTypeIdentifier
```

<a id="overview"></a>

## Overview

To create an [HKCategoryType](hkcategorytype.md) instance, pass an [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md) value to the [categoryType(forIdentifier:)](hkobjecttype/categorytype%28foridentifier_%29.md) method.

For the complete list of quantity type identifiers, see Activity.

## Topics

### Activity

- [appleStandHour](hkcategorytypeidentifier/applestandhour.md): A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.
- [lowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md): An event that indicates the user’s VO2 max values consistently fall below a particular aerobic fitness threshold.

### Reproductive Health

- [menstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [persistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [prolongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [cervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [menopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [bleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.

### Hearing

- [environmentalAudioExposureEvent](hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [headphoneAudioExposureEvent](hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [audioExposureEvent](hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

### Vital Signs

- [lowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.

### Mobility

- [appleWalkingSteadinessEvent](hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.

### Symptoms

- [Symptom Type Identifiers](symptom-type-identifiers.md): Identifiers for medical symptoms.

### Mindfulness and Sleep

- [mindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [sleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.

### Self Care

- [toothbrushingEvent](hkcategorytypeidentifier/toothbrushingevent.md): A category sample type for toothbrushing events.
- [handwashingEvent](hkcategorytypeidentifier/handwashingevent.md): A category sample type for handwashing events.

### Initializers

- [init(rawValue:)](hkcategorytypeidentifier/init%28rawvalue_%29.md): Returns a newly initialized category type identifier using the provided string.

### Type Properties - generated

- [bleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [hypertensionEvent](hkcategorytypeidentifier/hypertensionevent.md)
- [menopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [categoryType(forIdentifier:)](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.

### Creating category types

- [categoryType(forIdentifier:)](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.

# HKCategoryTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Identifiers for creating category types.

## Declaration

```objectivec
typedef NSString * HKCategoryTypeIdentifier;
```

<a id="overview"></a>

## Overview

To create an [HKCategoryType](hkcategorytype.md) instance, pass an [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md) value to the [categoryTypeForIdentifier:](hkobjecttype/categorytype%28foridentifier_%29.md) method.

For the complete list of quantity type identifiers, see Activity.

## Topics

### Activity

- [HKCategoryTypeIdentifierAppleStandHour](hkcategorytypeidentifier/applestandhour.md): A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.
- [HKCategoryTypeIdentifierLowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md): An event that indicates the user’s VO2 max values consistently fall below a particular aerobic fitness threshold.

### Reproductive Health

- [HKCategoryTypeIdentifierMenstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKCategoryTypeIdentifierCervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [HKCategoryTypeIdentifierMenopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [HKCategoryTypeIdentifierBleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.

### Hearing

- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md): Exposure events for environmental audio.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md): Exposure events for headphone audio.
- [HKCategoryTypeIdentifierAudioExposureEvent](hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

### Vital Signs

- [HKCategoryTypeIdentifierLowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.

### Mobility

- [HKCategoryTypeIdentifierAppleWalkingSteadinessEvent](hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.

### Symptoms

- [Symptom Type Identifiers](symptom-type-identifiers.md): Identifiers for medical symptoms.

### Mindfulness and Sleep

- [HKCategoryTypeIdentifierMindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [HKCategoryTypeIdentifierSleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.

### Self Care

- [HKCategoryTypeIdentifierToothbrushingEvent](hkcategorytypeidentifier/toothbrushingevent.md): A category sample type for toothbrushing events.
- [HKCategoryTypeIdentifierHandwashingEvent](hkcategorytypeidentifier/handwashingevent.md): A category sample type for handwashing events.

### Type Properties - generated

- [HKCategoryTypeIdentifierBleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [HKCategoryTypeIdentifierHypertensionEvent](hkcategorytypeidentifier/hypertensionevent.md)
- [HKCategoryTypeIdentifierMenopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.

## See Also

### Related Documentation

- [categoryTypeForIdentifier:](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.

### Creating category types

- [categoryTypeForIdentifier:](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.
