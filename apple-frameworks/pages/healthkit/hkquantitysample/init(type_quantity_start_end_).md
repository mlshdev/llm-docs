> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitysample/init(type:quantity:start:end:)](https://developer.apple.com/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:))

# init(type:quantity:start:end:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a sample containing a numeric measurement.

## Declaration

```swift
convenience init(type quantityType: HKQuantityType, quantity: HKQuantity, start startDate: Date, end endDate: Date)
```

## Parameters

- `quantityType`: The type of sample to be created. HealthKit defines a number of different quantity types, representing different types of health and fitness data. For the complete list of quantity type identifiers, see [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).
- `quantity`: The value to be stored in the sample. The quantity object must use units that are compatible with the provided quantity type. If the units are not compatible, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A valid quantity sample.

<a id="Discussion"></a>

## Discussion

HealthKit uses quantity samples to represent sample data using a numeric value. To create a quantity sample, first create the corresponding quantity type and quantity, and then set its start and end dates. You produce a new quantity sample.

**Swift**

```swift
guard let quantityType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierHeartRate) else {
    fatalError("*** Unable to create a heart rate quantity type ***")
}
 
let bpm = HKUnit(fromString: "count/min")
let quantity = HKQuantity(unit: bpm, doubleValue: 72.0)
 
let quantitySample = HKQuantitySample(type: quantityType,
                                      quantity: quantity,
                                      startDate: start,
                                      endDate: end)
```

**Objective-C**

```objc
HKQuantityType *quantityType =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierHeartRate];
 
HKUnit *bpm = [HKUnit unitFromString:@"count/min"];
 
HKQuantity *quantity = [HKQuantity quantityWithUnit:bpm
                                        doubleValue:72.0];
 
HKQuantitySample *sample =
[HKQuantitySample quantitySampleWithType:quantityType
                                quantity:quantity
                               startDate:start
                                 endDate:end];
```

## See Also

### Related Documentation

- [quantityType](quantitytype.md): The quantity type for this sample.
- [quantity](quantity.md): The quantity for this sample.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [quantityType(forIdentifier:)](../hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Quantity Samples

- [init(type:quantity:start:end:metadata:)](init%28type_quantity_start_end_metadata_%29.md): Returns a sample containing a numeric measurement with the provided metadata.
- [init(type:quantity:start:end:device:metadata:)](init%28type_quantity_start_end_device_metadata_%29.md): Returns a sample containing a numeric measurement with the provided device and metadata.

# quantitySampleWithType:quantity:startDate:endDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a sample containing a numeric measurement.

## Declaration

```objectivec
+ (instancetype) quantitySampleWithType:(HKQuantityType *) quantityType quantity:(HKQuantity *) quantity startDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `quantityType`: The type of sample to be created. HealthKit defines a number of different quantity types, representing different types of health and fitness data. For the complete list of quantity type identifiers, see [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).
- `quantity`: The value to be stored in the sample. The quantity object must use units that are compatible with the provided quantity type. If the units are not compatible, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A valid quantity sample.

<a id="Discussion"></a>

## Discussion

HealthKit uses quantity samples to represent sample data using a numeric value. To create a quantity sample, first create the corresponding quantity type and quantity, and then set its start and end dates. You produce a new quantity sample.

**Swift**

```swift
guard let quantityType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierHeartRate) else {
    fatalError("*** Unable to create a heart rate quantity type ***")
}
 
let bpm = HKUnit(fromString: "count/min")
let quantity = HKQuantity(unit: bpm, doubleValue: 72.0)
 
let quantitySample = HKQuantitySample(type: quantityType,
                                      quantity: quantity,
                                      startDate: start,
                                      endDate: end)
```

**Objective-C**

```objc
HKQuantityType *quantityType =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierHeartRate];
 
HKUnit *bpm = [HKUnit unitFromString:@"count/min"];
 
HKQuantity *quantity = [HKQuantity quantityWithUnit:bpm
                                        doubleValue:72.0];
 
HKQuantitySample *sample =
[HKQuantitySample quantitySampleWithType:quantityType
                                quantity:quantity
                               startDate:start
                                 endDate:end];
```

## See Also

### Related Documentation

- [quantityType](quantitytype.md): The quantity type for this sample.
- [quantity](quantity.md): The quantity for this sample.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [quantityTypeForIdentifier:](../hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Quantity Samples

- [quantitySampleWithType:quantity:startDate:endDate:metadata:](init%28type_quantity_start_end_metadata_%29.md): Returns a sample containing a numeric measurement with the provided metadata.
- [quantitySampleWithType:quantity:startDate:endDate:device:metadata:](init%28type_quantity_start_end_device_metadata_%29.md): Returns a sample containing a numeric measurement with the provided device and metadata.
