> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksample/sampletype](https://developer.apple.com/documentation/healthkit/hksample/sampletype)

# sampleType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample type.

## Declaration

```swift
@NSCopying var sampleType: HKSampleType { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a concrete sample type that corresponds with this sample’s concrete class. For example, if the sample is an [HKQuantitySample](../hkquantitysample.md) instance, it returns an [HKQuantityType](../hkquantitytype.md) object.

## See Also

### Related Documentation

- [quantityType](../hkquantitysample/quantitytype.md): The quantity type for this sample.
- [correlationType](../hkcorrelation/correlationtype.md): The type for this correlation.
- [categoryType](../hkcategorysample/categorytype.md): The category type for this sample.

### Accessing the Sample’s Data

- [startDate](startdate.md): The sample’s start date.
- [endDate](enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hasundeterminedduration.md): Indicates whether the sample has an unknown duration.

# sampleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample type.

## Declaration

```objectivec
@property (copy, readonly) HKSampleType * sampleType;
```

<a id="Discussion"></a>

## Discussion

This property contains a concrete sample type that corresponds with this sample’s concrete class. For example, if the sample is an [HKQuantitySample](../hkquantitysample.md) instance, it returns an [HKQuantityType](../hkquantitytype.md) object.

## See Also

### Related Documentation

- [quantityType](../hkquantitysample/quantitytype.md): The quantity type for this sample.
- [correlationType](../hkcorrelation/correlationtype.md): The type for this correlation.
- [categoryType](../hkcategorysample/categorytype.md): The category type for this sample.

### Accessing the Sample’s Data

- [startDate](startdate.md): The sample’s start date.
- [endDate](enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hasundeterminedduration.md): Indicates whether the sample has an unknown duration.
