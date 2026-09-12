> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluevaginalbleeding](https://developer.apple.com/documentation/healthkit/hkcategoryvaluevaginalbleeding)

# HKCategoryValueVaginalBleeding (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A value that indicates the intensity of vaginal bleeding.

## Declaration

```swift
enum HKCategoryValueVaginalBleeding
```

<a id="overview"></a>

## Overview

Use these values when creating [HKCategorySample](hkcategorysample.md) instances for bleeding-related category types, including [bleedingDuringPregnancy](hkcategorytypeidentifier/bleedingduringpregnancy.md), [bleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md), and other vaginal bleeding types. Each value represents a different intensity level or confirmation of no bleeding.

## Topics

### Specifiying bleeding intensity values

- [HKCategoryValueVaginalBleeding.unspecified](hkcategoryvaluevaginalbleeding/unspecified.md): A value that indicates an unspecified amount of vaginal bleeding.
- [HKCategoryValueVaginalBleeding.light](hkcategoryvaluevaginalbleeding/light.md): A value that indicates light vaginal bleeding.
- [HKCategoryValueVaginalBleeding.medium](hkcategoryvaluevaginalbleeding/medium.md): A value that indicates a medium amount of vaginal bleeding.
- [HKCategoryValueVaginalBleeding.heavy](hkcategoryvaluevaginalbleeding/heavy.md): A value that indicates a heavy amount of vaginal bleeding.
- [HKCategoryValueVaginalBleeding.none](hkcategoryvaluevaginalbleeding/none.md): A value that indicates no vaginal bleeding.

### Creating a value

- [init(rawValue:)](hkcategoryvaluevaginalbleeding/init%28rawvalue_%29.md): Initializes a vaginal bleeding value.

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

### Reproductive health

- [menstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [persistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [prolongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [basalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [cervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.

# HKCategoryValueVaginalBleeding (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A value that indicates the intensity of vaginal bleeding.

## Declaration

```objectivec
enum HKCategoryValueVaginalBleeding : NSInteger;
```

<a id="overview"></a>

## Overview

Use these values when creating [HKCategorySample](hkcategorysample.md) instances for bleeding-related category types, including [HKCategoryTypeIdentifierBleedingDuringPregnancy](hkcategorytypeidentifier/bleedingduringpregnancy.md), [HKCategoryTypeIdentifierBleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md), and other vaginal bleeding types. Each value represents a different intensity level or confirmation of no bleeding.

## Topics

### Specifiying bleeding intensity values

- [HKCategoryValueVaginalBleedingUnspecified](hkcategoryvaluevaginalbleeding/unspecified.md): A value that indicates an unspecified amount of vaginal bleeding.
- [HKCategoryValueVaginalBleedingLight](hkcategoryvaluevaginalbleeding/light.md): A value that indicates light vaginal bleeding.
- [HKCategoryValueVaginalBleedingMedium](hkcategoryvaluevaginalbleeding/medium.md): A value that indicates a medium amount of vaginal bleeding.
- [HKCategoryValueVaginalBleedingHeavy](hkcategoryvaluevaginalbleeding/heavy.md): A value that indicates a heavy amount of vaginal bleeding.
- [HKCategoryValueVaginalBleedingNone](hkcategoryvaluevaginalbleeding/none.md): A value that indicates no vaginal bleeding.

## See Also

### Reproductive health

- [HKCategoryTypeIdentifierMenstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKQuantityTypeIdentifierBasalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [HKCategoryTypeIdentifierCervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.
