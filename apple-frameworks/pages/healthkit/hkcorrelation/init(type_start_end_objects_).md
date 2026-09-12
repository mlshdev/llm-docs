> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation/init(type:start:end:objects:)](https://developer.apple.com/documentation/healthkit/hkcorrelation/init(type:start:end:objects:))

# init(type:start:end:objects:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new correlation instance.

## Declaration

```swift
convenience init(type correlationType: HKCorrelationType, start startDate: Date, end endDate: Date, objects: Set<HKSample>)
```

## Parameters

- `correlationType`: The type for this correlation. For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `objects`: A set of [HKSample](../hksample.md) objects. Specifically, this set contains the quantity and category samples to be grouped into this correlation.

<a id="return-value"></a>

## Return Value

A new correlation instance.

<a id="Discussion"></a>

## Discussion

Use a correlation object to represent composite data—that is, a sample that requires more than a single value. To create a correlation sample, first create the quantity and category samples you intend to combine into the correlation. Next, create the correlation’s type. Finally, instantiate the correlation, passing in the type, start date, end date, and samples, as shown below.

Use this method when you do not need to include additional metadata and the data was not recorded using external hardware.

**Swift**

```swift
let date = NSDate()
 
// Create systolic sample
 
guard let systolicType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureSystolic) else {
    fatalError("*** Unable to create the systolic type ****")
}
 
let systolicQuantity =
    HKQuantity(unit: HKUnit.millimeterOfMercuryUnit(), doubleValue: 120.0)
 
let systolicSample = HKQuantitySample(type: systolicType,
                                      quantity: systolicQuantity, startDate: date, endDate: date)
 
// Create diastolic sample
 
guard let diastolicType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureDiastolic) else {
    fatalError("*** Unable to create the diastolic type ***")
}
 
let diastolicQuantity =
    HKQuantity(unit: HKUnit.millimeterOfMercuryUnit(), doubleValue: 75.0)
 
let diastolicSample = HKQuantitySample(type: diastolicType,
                                       quantity: diastolicQuantity, startDate: date, endDate: date)
 
// Create blood pressure sample
 
guard let bloodPressureType = HKObjectType.correlationTypeForIdentifier(HKCorrelationTypeIdentifierBloodPressure) else {
    fatalError("*** Unable to create the blood pressure type ***")
}
 
let objects: Set = [systolicSample, diastolicSample]
 
let bloodpressure = HKCorrelation(type: bloodPressureType,
                                  startDate: date, endDate: date, objects:objects)
```

**Objective-C**

```objc
NSDate *date = [NSDate date];
 
// Create systolic sample
 
HKQuantityType *systolicType =
[HKObjectType quantityTypeForIdentifier:
     HKQuantityTypeIdentifierBloodPressureSystolic];
 
HKQuantity *systolicQuantity =
[HKQuantity quantityWithUnit:[HKUnit millimeterOfMercuryUnit]
                 doubleValue:120.0];
 
HKQuantitySample *systolicSample =
[HKQuantitySample quantitySampleWithType:systolicType
                                quantity:systolicQuantity
                               startDate:date
                                 endDate:date];
 
// Create diastolic sample
 
HKQuantityType *diastolicType =
[HKObjectType quantityTypeForIdentifier:
    HKQuantityTypeIdentifierBloodPressureDiastolic];
 
HKQuantity *diastolicQuantity =
[HKQuantity quantityWithUnit:[HKUnit millimeterOfMercuryUnit]
                 doubleValue:75.0];
 
HKQuantitySample *diastolicSample =
[HKQuantitySample quantitySampleWithType:diastolicType
                                quantity:diastolicQuantity
                               startDate:date
                                 endDate:date];
 
// Create blood pressure sample
 
HKCorrelationType *bloodPressureType =
[HKObjectType correlationTypeForIdentifier:
    HKCorrelationTypeIdentifierBloodPressure];
 
NSSet *objects = [NSSet setWithObjects:systolicSample, diastolicSample, nil];
 
HKCorrelation *bloodPressure =
[HKCorrelation correlationWithType:bloodPressureType
                         startDate:date
                           endDate:date
                           objects:objects];
```

## See Also

### Related Documentation

- [objects](objects.md): The set of sample objects that make up the correlation.
- [correlationType(forIdentifier:)](../hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [correlationType](correlationtype.md): The type for this correlation.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Correlations

- [init(type:start:end:objects:metadata:)](init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.
- [init(type:start:end:objects:device:metadata:)](init%28type_start_end_objects_device_metadata_%29.md): Instantiates and returns a new correlation instance with the provided device and metadata.

# correlationWithType:startDate:endDate:objects: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new correlation instance.

## Declaration

```objectivec
+ (instancetype) correlationWithType:(HKCorrelationType *) correlationType startDate:(NSDate *) startDate endDate:(NSDate *) endDate objects:(NSSet<HKSample *> *) objects;
```

## Parameters

- `correlationType`: The type for this correlation. For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `objects`: A set of [HKSample](../hksample.md) objects. Specifically, this set contains the quantity and category samples to be grouped into this correlation.

<a id="return-value"></a>

## Return Value

A new correlation instance.

<a id="Discussion"></a>

## Discussion

Use a correlation object to represent composite data—that is, a sample that requires more than a single value. To create a correlation sample, first create the quantity and category samples you intend to combine into the correlation. Next, create the correlation’s type. Finally, instantiate the correlation, passing in the type, start date, end date, and samples, as shown below.

Use this method when you do not need to include additional metadata and the data was not recorded using external hardware.

**Swift**

```swift
let date = NSDate()
 
// Create systolic sample
 
guard let systolicType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureSystolic) else {
    fatalError("*** Unable to create the systolic type ****")
}
 
let systolicQuantity =
    HKQuantity(unit: HKUnit.millimeterOfMercuryUnit(), doubleValue: 120.0)
 
let systolicSample = HKQuantitySample(type: systolicType,
                                      quantity: systolicQuantity, startDate: date, endDate: date)
 
// Create diastolic sample
 
guard let diastolicType = HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureDiastolic) else {
    fatalError("*** Unable to create the diastolic type ***")
}
 
let diastolicQuantity =
    HKQuantity(unit: HKUnit.millimeterOfMercuryUnit(), doubleValue: 75.0)
 
let diastolicSample = HKQuantitySample(type: diastolicType,
                                       quantity: diastolicQuantity, startDate: date, endDate: date)
 
// Create blood pressure sample
 
guard let bloodPressureType = HKObjectType.correlationTypeForIdentifier(HKCorrelationTypeIdentifierBloodPressure) else {
    fatalError("*** Unable to create the blood pressure type ***")
}
 
let objects: Set = [systolicSample, diastolicSample]
 
let bloodpressure = HKCorrelation(type: bloodPressureType,
                                  startDate: date, endDate: date, objects:objects)
```

**Objective-C**

```objc
NSDate *date = [NSDate date];
 
// Create systolic sample
 
HKQuantityType *systolicType =
[HKObjectType quantityTypeForIdentifier:
     HKQuantityTypeIdentifierBloodPressureSystolic];
 
HKQuantity *systolicQuantity =
[HKQuantity quantityWithUnit:[HKUnit millimeterOfMercuryUnit]
                 doubleValue:120.0];
 
HKQuantitySample *systolicSample =
[HKQuantitySample quantitySampleWithType:systolicType
                                quantity:systolicQuantity
                               startDate:date
                                 endDate:date];
 
// Create diastolic sample
 
HKQuantityType *diastolicType =
[HKObjectType quantityTypeForIdentifier:
    HKQuantityTypeIdentifierBloodPressureDiastolic];
 
HKQuantity *diastolicQuantity =
[HKQuantity quantityWithUnit:[HKUnit millimeterOfMercuryUnit]
                 doubleValue:75.0];
 
HKQuantitySample *diastolicSample =
[HKQuantitySample quantitySampleWithType:diastolicType
                                quantity:diastolicQuantity
                               startDate:date
                                 endDate:date];
 
// Create blood pressure sample
 
HKCorrelationType *bloodPressureType =
[HKObjectType correlationTypeForIdentifier:
    HKCorrelationTypeIdentifierBloodPressure];
 
NSSet *objects = [NSSet setWithObjects:systolicSample, diastolicSample, nil];
 
HKCorrelation *bloodPressure =
[HKCorrelation correlationWithType:bloodPressureType
                         startDate:date
                           endDate:date
                           objects:objects];
```

## See Also

### Related Documentation

- [objects](objects.md): The set of sample objects that make up the correlation.
- [correlationTypeForIdentifier:](../hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [correlationType](correlationtype.md): The type for this correlation.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating Correlations

- [correlationWithType:startDate:endDate:objects:metadata:](init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.
- [correlationWithType:startDate:endDate:objects:device:metadata:](init%28type_start_end_objects_device_metadata_%29.md): Instantiates and returns a new correlation instance with the provided device and metadata.
