> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluepredicateproviding](https://developer.apple.com/documentation/healthkit/hkcategoryvaluepredicateproviding)

# HKCategoryValuePredicateProviding

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

A protocol for objects that produce predicates that match category value samples.

## Declaration

```swift
protocol HKCategoryValuePredicateProviding : Hashable, RawRepresentable
```

## Topics

### Creating predicates

- [predicateForSamples(\_:value:)](hkcategoryvaluepredicateproviding/predicateforsamples%28__value_%29.md): Conforms when `RawValue` is `Int`. Returns a predicate that checks a category sample’s value.
- [predicateForSamples(equalTo:)](hkcategoryvaluepredicateproviding/predicateforsamples%28equalto_%29.md): Conforms when `RawValue` is `Int`. Returns a predicate that checks whether a category sample is equal to the provided set of values.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

### Conforming Types

- [HKCategoryValue](hkcategoryvalue.md)
- [HKCategoryValueAppetiteChanges](hkcategoryvalueappetitechanges.md)
- [HKCategoryValueAppleStandHour](hkcategoryvalueapplestandhour.md)
- [HKCategoryValueAppleWalkingSteadinessEvent](hkcategoryvalueapplewalkingsteadinessevent.md)
- [HKCategoryValueCervicalMucusQuality](hkcategoryvaluecervicalmucusquality.md)
- [HKCategoryValueContraceptive](hkcategoryvaluecontraceptive.md)
- [HKCategoryValueEnvironmentalAudioExposureEvent](hkcategoryvalueenvironmentalaudioexposureevent.md)
- [HKCategoryValueHeadphoneAudioExposureEvent](hkcategoryvalueheadphoneaudioexposureevent.md)
- [HKCategoryValueLowCardioFitnessEvent](hkcategoryvaluelowcardiofitnessevent.md)
- [HKCategoryValueMenopausalState](hkcategoryvaluemenopausalstate.md)
- [HKCategoryValueMenstrualFlow](hkcategoryvaluemenstrualflow.md)
- [HKCategoryValueOvulationTestResult](hkcategoryvalueovulationtestresult.md)
- [HKCategoryValuePregnancyTestResult](hkcategoryvaluepregnancytestresult.md)
- [HKCategoryValuePresence](hkcategoryvaluepresence.md)
- [HKCategoryValueProgesteroneTestResult](hkcategoryvalueprogesteronetestresult.md)
- [HKCategoryValueSeverity](hkcategoryvalueseverity.md)
- [HKCategoryValueSleepAnalysis](hkcategoryvaluesleepanalysis.md)
- [HKCategoryValueVaginalBleeding](hkcategoryvaluevaginalbleeding.md)

## See Also

### Creating category sample predicates

- [predicateForCategorySamples(with:value:)](hkquery/predicateforcategorysamples%28with_value_%29.md): Deprecated. Returns a predicate that checks a category sample’s value.
