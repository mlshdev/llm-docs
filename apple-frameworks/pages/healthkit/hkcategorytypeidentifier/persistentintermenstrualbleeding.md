> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/persistentintermenstrualbleeding](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/persistentintermenstrualbleeding)

# persistentIntermenstrualBleeding (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A category sample that indicates persistent intermenstrual bleeding.

## Declaration

```swift
static let persistentIntermenstrualBleeding: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

HealthKit generates Cycle Deviation notifications based on the cycle data a person enters. HealthKit processes this data on their iOS device. If it detects a potential deviation, it sends a notification asking them to verify their logged cycle history. If the person confirms that their cycle history is accurate, HealthKit saves a corresponding sample of the detected Cycle Deviation to the HealthKit store.

Cycle Deviation notifications include:

- **Persistent spotting**: Persistent spotting, also known as irregular intermenstrual bleeding, is defined as spotting that occurs in at least two of your cycles in the last six months. HealthKit records verified instances using [persistentIntermenstrualBleeding](persistentintermenstrualbleeding.md) samples.
- **Prolonged periods**: Prolonged periods are defined as menstrual bleeding that lasts for ten or more days, and this has happened at least two times in the last six months. HealthKit records verified instances using [prolongedMenstrualPeriods](prolongedmenstrualperiods.md) samples.
- **Irregular cycles**: An irregular cycle is defined as at least a seventeen-day difference between a person’s shortest and longest cycles over the last six months. HealthKit records verified instances using [irregularMenstrualCycles](irregularmenstrualcycles.md) samples.
- **Infrequent periods**: An infrequent period is defined as having a period one or two times in the last six months. HealthKit records verified instances using [infrequentMenstrualCycles](infrequentmenstrualcycles.md) samples.

Use a [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md) value with these samples.

> **Important**

>  These samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new infrequent menstrual cycle samples to the HealthKit store.

## See Also

### Reproductive health

- [menstrualFlow](menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [prolongedMenstrualPeriods](prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [basalBodyTemperature](../hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [cervicalMucusQuality](cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

# HKCategoryTypeIdentifierPersistentIntermenstrualBleeding (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A category sample that indicates persistent intermenstrual bleeding.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierPersistentIntermenstrualBleeding;
```

<a id="Discussion"></a>

## Discussion

HealthKit generates Cycle Deviation notifications based on the cycle data a person enters. HealthKit processes this data on their iOS device. If it detects a potential deviation, it sends a notification asking them to verify their logged cycle history. If the person confirms that their cycle history is accurate, HealthKit saves a corresponding sample of the detected Cycle Deviation to the HealthKit store.

Cycle Deviation notifications include:

- **Persistent spotting**: Persistent spotting, also known as irregular intermenstrual bleeding, is defined as spotting that occurs in at least two of your cycles in the last six months. HealthKit records verified instances using [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](persistentintermenstrualbleeding.md) samples.
- **Prolonged periods**: Prolonged periods are defined as menstrual bleeding that lasts for ten or more days, and this has happened at least two times in the last six months. HealthKit records verified instances using [HKCategoryTypeIdentifierProlongedMenstrualPeriods](prolongedmenstrualperiods.md) samples.
- **Irregular cycles**: An irregular cycle is defined as at least a seventeen-day difference between a person’s shortest and longest cycles over the last six months. HealthKit records verified instances using [HKCategoryTypeIdentifierIrregularMenstrualCycles](irregularmenstrualcycles.md) samples.
- **Infrequent periods**: An infrequent period is defined as having a period one or two times in the last six months. HealthKit records verified instances using [HKCategoryTypeIdentifierInfrequentMenstrualCycles](infrequentmenstrualcycles.md) samples.

Use a [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md) value with these samples.

> **Important**

>  These samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new infrequent menstrual cycle samples to the HealthKit store.

## See Also

### Reproductive health

- [HKCategoryTypeIdentifierMenstrualFlow](menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKQuantityTypeIdentifierBasalBodyTemperature](../hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [HKCategoryTypeIdentifierCervicalMucusQuality](cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
