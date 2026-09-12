> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/basalbodytemperature](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/basalbodytemperature)

# basalBodyTemperature (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that records the user’s basal body temperature.

## Declaration

```swift
static let basalBodyTemperature: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Basal body temperature measures the body’s temperature when at rest (for example, taking the temperature immediately after waking). These samples use temperature units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Reproductive health

- [menstrualFlow](../hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](../hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](../hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](../hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [persistentIntermenstrualBleeding](../hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [prolongedMenstrualPeriods](../hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [cervicalMucusQuality](../hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](../hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](../hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](../hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](../hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](../hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](../hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](../hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

# HKQuantityTypeIdentifierBasalBodyTemperature (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that records the user’s basal body temperature.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierBasalBodyTemperature;
```

<a id="Discussion"></a>

## Discussion

Basal body temperature measures the body’s temperature when at rest (for example, taking the temperature immediately after waking). These samples use temperature units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Reproductive health

- [HKCategoryTypeIdentifierMenstrualFlow](../hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](../hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](../hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](../hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](../hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](../hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKCategoryTypeIdentifierCervicalMucusQuality](../hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](../hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](../hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](../hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](../hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](../hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](../hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](../hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
