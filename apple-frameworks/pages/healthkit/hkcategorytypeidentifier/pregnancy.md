> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/pregnancy](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/pregnancy)

# pregnancy (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

A category type that records pregnancy.

## Declaration

```swift
static let pregnancy: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md) value with samples of this type.

## See Also

### Reproductive health

- [menstrualFlow](menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [persistentIntermenstrualBleeding](persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [prolongedMenstrualPeriods](prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [basalBodyTemperature](../hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [cervicalMucusQuality](cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

# HKCategoryTypeIdentifierPregnancy (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

A category type that records pregnancy.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierPregnancy;
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md) value with samples of this type.

## See Also

### Reproductive health

- [HKCategoryTypeIdentifierMenstrualFlow](menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKQuantityTypeIdentifierBasalBodyTemperature](../hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [HKCategoryTypeIdentifierCervicalMucusQuality](cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
