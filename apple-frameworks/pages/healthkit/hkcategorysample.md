> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorysample](https://developer.apple.com/documentation/healthkit/hkcategorysample)

# HKCategorySample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample with values from a short list of possible values.

## Declaration

```swift
class HKCategorySample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

You can use category samples to record data associated with a [HKCategoryType](hkcategorytype.md). The value for the sample must come from the appropriate category value enumeration. Each category type uses its own enumeration. Individual samples represent a value and time period. Samples with different values may have overlapping time intervals.

The [HKCategorySample](hkcategorysample.md) class is a concrete subclass of the [HKSample](hksample.md) class. Category samples are immutable: You set the sample’s properties when you create it, and they can’t change.

<a id="Extend-Category-Samples"></a>

### Extend Category Samples

Like many HealthKit classes, don’t subclass the `HKCategorySample` class. You may extend the `HKCategorySample` class by adding metadata with custom keys as appropriate for your app.

For more information, see [init(type:value:start:end:metadata:)](hkcategorysample/init%28type_value_start_end_metadata_%29.md).

## Topics

### Creating Category Samples

- [init(type:value:start:end:)](hkcategorysample/init%28type_value_start_end_%29.md): Creates a newly instantiated category sample.
- [init(type:value:start:end:metadata:)](hkcategorysample/init%28type_value_start_end_metadata_%29.md): Creates a newly instantiated category sample with the provided metadata.
- [init(type:value:start:end:device:metadata:)](hkcategorysample/init%28type_value_start_end_device_metadata_%29.md): Creates a newly instantiated category sample including the provided device and metadata.

### Getting Property Data

- [categoryType](hkcategorysample/categorytype.md): The category type for this sample.
- [value](hkcategorysample/value.md): The category value for this sample.

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
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.
- [HKCategoryValueAudioExposureEvent](hkcategoryvalueaudioexposureevent.md): Deprecated. Categories that indicate audio exposure events.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCategoryValue](hkpredicatekeypathcategoryvalue.md): The key path for accessing the category sample’s value.

### Initializers

- [init(type:value:startDate:endDate:)](hkcategorysample/init%28type_value_startdate_enddate_%29.md)
- [init(type:value:startDate:endDate:device:metadata:)](hkcategorysample/init%28type_value_startdate_enddate_device_metadata_%29.md)
- [init(type:value:startDate:endDate:metadata:)](hkcategorysample/init%28type_value_startdate_enddate_metadata_%29.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.

# HKCategorySample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample with values from a short list of possible values.

## Declaration

```objectivec
@interface HKCategorySample : HKSample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

You can use category samples to record data associated with a [HKCategoryType](hkcategorytype.md). The value for the sample must come from the appropriate category value enumeration. Each category type uses its own enumeration. Individual samples represent a value and time period. Samples with different values may have overlapping time intervals.

The [HKCategorySample](hkcategorysample.md) class is a concrete subclass of the [HKSample](hksample.md) class. Category samples are immutable: You set the sample’s properties when you create it, and they can’t change.

<a id="Extend-Category-Samples"></a>

### Extend Category Samples

Like many HealthKit classes, don’t subclass the `HKCategorySample` class. You may extend the `HKCategorySample` class by adding metadata with custom keys as appropriate for your app.

For more information, see [categorySampleWithType:value:startDate:endDate:metadata:](hkcategorysample/init%28type_value_start_end_metadata_%29.md).

## Topics

### Creating Category Samples

- [categorySampleWithType:value:startDate:endDate:](hkcategorysample/init%28type_value_start_end_%29.md): Creates a newly instantiated category sample.
- [categorySampleWithType:value:startDate:endDate:metadata:](hkcategorysample/init%28type_value_start_end_metadata_%29.md): Creates a newly instantiated category sample with the provided metadata.
- [categorySampleWithType:value:startDate:endDate:device:metadata:](hkcategorysample/init%28type_value_start_end_device_metadata_%29.md): Creates a newly instantiated category sample including the provided device and metadata.

### Getting Property Data

- [categoryType](hkcategorysample/categorytype.md): The category type for this sample.
- [value](hkcategorysample/value.md): The category value for this sample.

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
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md): The value of an event triggered by a reduced score for the steadiness of the user’s gait.
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md): Category values that indicate the results of a home pregnancy test.
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md): A category value that indicates the result from a home progesterone test.
- [HKCategoryValueAudioExposureEvent](hkcategoryvalueaudioexposureevent.md): Deprecated. Categories that indicate audio exposure events.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCategoryValue](hkpredicatekeypathcategoryvalue.md): The key path for accessing the category sample’s value.

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.
