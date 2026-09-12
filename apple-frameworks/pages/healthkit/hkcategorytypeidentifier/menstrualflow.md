> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/menstrualflow](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/menstrualflow)

# menstrualFlow (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that records menstrual cycles.

## Declaration

```swift
static let menstrualFlow: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use values from the [HKCategoryValueMenstrualFlow](../hkcategoryvaluemenstrualflow.md) enum. Additionally, these samples must include [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md)  metadata.

When recording data about the user’s menstrual cycle, you can either use a single sample for the entire period, or multiple samples to record changes over the cycle. When using single samples, pass the start of the menstrual period to the `startDate` parameter. Pass the end of the period to the `endDate` parameter, and set the [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md) value to [true](https://developer.apple.com/documentation/swift/true).

When using multiple samples to record a single period, the `startDate` and `endDate` parameters should mark the beginning and ending of each individual sample. Set the [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md) value for the first sample in the period to [true](https://developer.apple.com/documentation/swift/true). Use [false](https://developer.apple.com/documentation/swift/false) for any additional samples. Different samples can use different `menstrualFlow` values to record the changes in flow over time.

## Topics

### Metadata Keys

- [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md): A key that indicates whether the sample represents the start of a menstrual cycle. This metadata key is required for [menstrualFlow](menstrualflow.md) category samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Reproductive health

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
- [pregnancy](pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

# HKCategoryTypeIdentifierMenstrualFlow (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that records menstrual cycles.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierMenstrualFlow;
```

<a id="Discussion"></a>

## Discussion

These samples use values from the [HKCategoryValueMenstrualFlow](../hkcategoryvaluemenstrualflow.md) enum. Additionally, these samples must include [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md)  metadata.

When recording data about the user’s menstrual cycle, you can either use a single sample for the entire period, or multiple samples to record changes over the cycle. When using single samples, pass the start of the menstrual period to the `startDate` parameter. Pass the end of the period to the `endDate` parameter, and set the [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md) value to [true](https://developer.apple.com/documentation/swift/true).

When using multiple samples to record a single period, the `startDate` and `endDate` parameters should mark the beginning and ending of each individual sample. Set the [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md) value for the first sample in the period to [true](https://developer.apple.com/documentation/swift/true). Use [false](https://developer.apple.com/documentation/swift/false) for any additional samples. Different samples can use different `menstrualFlow` values to record the changes in flow over time.

## Topics

### Metadata Keys

- [HKMetadataKeyMenstrualCycleStart](../hkmetadatakeymenstrualcyclestart.md): A key that indicates whether the sample represents the start of a menstrual cycle. This metadata key is required for [HKCategoryTypeIdentifierMenstrualFlow](menstrualflow.md) category samples.

## See Also

### Related Documentation

- [HKCategoryValue](../hkcategoryvalue.md): Categories that are undefined.
- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategoryType](../hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCategorySample](../hkcategorysample.md): A sample with values from a short list of possible values.

### Reproductive health

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
- [HKCategoryTypeIdentifierPregnancy](pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
