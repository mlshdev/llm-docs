> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorysample/init(type:value:start:end:)](https://developer.apple.com/documentation/healthkit/hkcategorysample/init(type:value:start:end:))

# init(type:value:start:end:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a newly instantiated category sample.

## Declaration

```swift
convenience init(type: HKCategoryType, value: Int, start startDate: Date, end endDate: Date)
```

## Parameters

- `type`: The category type for this sample. For a complete list, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).
- `value`: The value for this sample. This value must come from the appropriate category value enumeration. Each category type uses its own enumeration. For more information, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).
- `startDate`: The start date for the sample. This must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A valid category sample.

<a id="Discussion"></a>

## Discussion

HealthKit uses category samples to represent data that can be classified into a finite set of categories. To create a category sample, you must first create the corresponding category type, and then set its start and end dates, as shown below.

**Swift**

```swift
guard let categoryType =
    HKObjectType.categoryTypeForIdentifier(HKCategoryTypeIdentifierSleepAnalysis) else {
        fatalError("*** Unable to create a sleep analysis category type ***")
}
 
let categorySample = HKCategorySample(type: categoryType,
                                      value: HKCategoryValueSleepAnalysis.Asleep.rawValue,
                                      startDate: start,
                                      endDate: end)
```

**Objective-C**

```objc
HKCategoryType *categoryType =
[HKObjectType categoryTypeForIdentifier:HKCategoryTypeIdentifierSleepAnalysis];
 
HKCategorySample *categorySample =
[HKCategorySample categorySampleWithType:categoryType
                                   value:HKCategoryValueSleepAnalysisAsleep
                               startDate:start
                                 endDate:end];
```

## See Also

### Related Documentation

- [value](value.md): The category value for this sample.
- [categoryType(forIdentifier:)](../hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [categoryType](categorytype.md): The category type for this sample.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Category Samples

- [init(type:value:start:end:metadata:)](init%28type_value_start_end_metadata_%29.md): Creates a newly instantiated category sample with the provided metadata.
- [init(type:value:start:end:device:metadata:)](init%28type_value_start_end_device_metadata_%29.md): Creates a newly instantiated category sample including the provided device and metadata.

# categorySampleWithType:value:startDate:endDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a newly instantiated category sample.

## Declaration

```objectivec
+ (instancetype) categorySampleWithType:(HKCategoryType *) type value:(NSInteger) value startDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `type`: The category type for this sample. For a complete list, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).
- `value`: The value for this sample. This value must come from the appropriate category value enumeration. Each category type uses its own enumeration. For more information, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).
- `startDate`: The start date for the sample. This must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A valid category sample.

<a id="Discussion"></a>

## Discussion

HealthKit uses category samples to represent data that can be classified into a finite set of categories. To create a category sample, you must first create the corresponding category type, and then set its start and end dates, as shown below.

**Swift**

```swift
guard let categoryType =
    HKObjectType.categoryTypeForIdentifier(HKCategoryTypeIdentifierSleepAnalysis) else {
        fatalError("*** Unable to create a sleep analysis category type ***")
}
 
let categorySample = HKCategorySample(type: categoryType,
                                      value: HKCategoryValueSleepAnalysis.Asleep.rawValue,
                                      startDate: start,
                                      endDate: end)
```

**Objective-C**

```objc
HKCategoryType *categoryType =
[HKObjectType categoryTypeForIdentifier:HKCategoryTypeIdentifierSleepAnalysis];
 
HKCategorySample *categorySample =
[HKCategorySample categorySampleWithType:categoryType
                                   value:HKCategoryValueSleepAnalysisAsleep
                               startDate:start
                                 endDate:end];
```

## See Also

### Related Documentation

- [value](value.md): The category value for this sample.
- [categoryTypeForIdentifier:](../hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [categoryType](categorytype.md): The category type for this sample.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Category Samples

- [categorySampleWithType:value:startDate:endDate:metadata:](init%28type_value_start_end_metadata_%29.md): Creates a newly instantiated category sample with the provided metadata.
- [categorySampleWithType:value:startDate:endDate:device:metadata:](init%28type_value_start_end_device_metadata_%29.md): Creates a newly instantiated category sample including the provided device and metadata.
