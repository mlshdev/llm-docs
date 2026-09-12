> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/sexualactivity](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/sexualactivity)

# sexualActivity (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that records sexual activity.

## Declaration

```swift
static let sexualActivity: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md) value with these samples. These samples can include [HKMetadataKeySexualActivityProtectionUsed](../hkmetadatakeysexualactivityprotectionused.md) metadata.

## Topics

### Metadata Keys

- [HKMetadataKeySexualActivityProtectionUsed](../hkmetadatakeysexualactivityprotectionused.md): A key that indicates whether protection was used during sexual activity. This metadata key can be used with [sexualActivity](sexualactivity.md) category samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

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
- [contraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

# HKCategoryTypeIdentifierSexualActivity (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that records sexual activity.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierSexualActivity;
```

<a id="Discussion"></a>

## Discussion

Use a [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md) value with these samples. These samples can include [HKMetadataKeySexualActivityProtectionUsed](../hkmetadatakeysexualactivityprotectionused.md) metadata.

## Topics

### Metadata Keys

- [HKMetadataKeySexualActivityProtectionUsed](../hkmetadatakeysexualactivityprotectionused.md): A key that indicates whether protection was used during sexual activity. This metadata key can be used with [HKCategoryTypeIdentifierSexualActivity](sexualactivity.md) category samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

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
- [HKCategoryTypeIdentifierContraceptive](contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
