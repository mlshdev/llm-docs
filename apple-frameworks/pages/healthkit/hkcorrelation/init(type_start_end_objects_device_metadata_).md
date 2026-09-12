> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation/init(type:start:end:objects:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkcorrelation/init(type:start:end:objects:device:metadata:))

# init(type:start:end:objects:device:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new correlation instance with the provided device and metadata.

## Declaration

```swift
convenience init(type correlationType: HKCorrelationType, start startDate: Date, end endDate: Date, objects: Set<HKSample>, device: HKDevice?, metadata: [String : Any]?)
```

## Parameters

- `correlationType`: The type for this correlation. For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `objects`: A set of [HKSample](../hksample.md) objects. Specifically, this set contains the quantity and category samples to be grouped into this correlation.
- `device`: The device that generated the data for this sample.
- `metadata`: The metadata dictionary containing extra information that describes this correlation. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects . The values may be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys.

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create custom keys as needed to extend the HealthKit sample’s capabilities.

  When creating correlations representing food, always use the [HKMetadataKeyFoodType](../hkmetadatakeyfoodtype.md) key to provide the food’s name.

<a id="return-value"></a>

## Return Value

A new correlation instance.

<a id="Discussion"></a>

## Discussion

Use a correlation object to represent composite data—that is, a sample that requires more than a single value. To create a correlation sample, first create the quantity and category samples you intend to combine into the correlation. Next, create the correlation’s type. Finally, instantiate the correlation, passing in the type, start date, end date, samples, device, and metadata as shown below.

Use this method when recording data using external hardware. If you do not need to include additional metadata, pass `nil` for the `metadata` parameter.

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
 
let device = HKDevice(name: deviceName,
                      manufacturer: manufacturerName,
                      model: modelName,
                      hardwareVersion: hardwareVersionNumber,
                      firmwareVersion: firmwareVersionNumber,
                      softwareVersion: softwareVersionNumber,
                      localIdentifier: localIdentifier,
                      UDIDeviceIdentifier: deviceIdentifier)
 
let metadata : [String : AnyObject] =
    [HKMetadataKeyDigitalSignature:digitalSignature,
     HKMetadataKeyTimeZone:timeZone]
 
let bloodpressure = HKCorrelation(type: bloodPressureType, startDate: date, endDate: date, objects:objects, device: device, metadata: metadata)
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
 
HKDevice *device = [[HKDevice alloc] initWithName:deviceName
                                     manufacturer:manufacturerName
                                            model:modelName
                                  hardwareVersion:hardwareVersionNumber
                                  firmwareVersion:firmwareVersionNumber
                                  softwareVersion:softwareVersionNumber
                                  localIdentifier:localIdentifier
                              UDIDeviceIdentifier:deviceIdentifier];
 
NSDictionary *metadata = @{HKMetadataKeyDigitalSignature:digitalSignature,
                           HKMetadataKeyTimeZone:timeZone};
 
 
HKCorrelation *bloodPressure =
[HKCorrelation correlationWithType:bloodPressureType
                         startDate:date
                           endDate:date
                           objects:objects
                            device:device
                          metadata:metadata];
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

- [init(type:start:end:objects:)](init%28type_start_end_objects_%29.md): Instantiates and returns a new correlation instance.
- [init(type:start:end:objects:metadata:)](init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.

# correlationWithType:startDate:endDate:objects:device:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new correlation instance with the provided device and metadata.

## Declaration

```objectivec
+ (instancetype) correlationWithType:(HKCorrelationType *) correlationType startDate:(NSDate *) startDate endDate:(NSDate *) endDate objects:(NSSet<HKSample *> *) objects device:(HKDevice *) device metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `correlationType`: The type for this correlation. For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `objects`: A set of [HKSample](../hksample.md) objects. Specifically, this set contains the quantity and category samples to be grouped into this correlation.
- `device`: The device that generated the data for this sample.
- `metadata`: The metadata dictionary containing extra information that describes this correlation. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects . The values may be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys.

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create custom keys as needed to extend the HealthKit sample’s capabilities.

  When creating correlations representing food, always use the [HKMetadataKeyFoodType](../hkmetadatakeyfoodtype.md) key to provide the food’s name.

<a id="return-value"></a>

## Return Value

A new correlation instance.

<a id="Discussion"></a>

## Discussion

Use a correlation object to represent composite data—that is, a sample that requires more than a single value. To create a correlation sample, first create the quantity and category samples you intend to combine into the correlation. Next, create the correlation’s type. Finally, instantiate the correlation, passing in the type, start date, end date, samples, device, and metadata as shown below.

Use this method when recording data using external hardware. If you do not need to include additional metadata, pass `nil` for the `metadata` parameter.

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
 
let device = HKDevice(name: deviceName,
                      manufacturer: manufacturerName,
                      model: modelName,
                      hardwareVersion: hardwareVersionNumber,
                      firmwareVersion: firmwareVersionNumber,
                      softwareVersion: softwareVersionNumber,
                      localIdentifier: localIdentifier,
                      UDIDeviceIdentifier: deviceIdentifier)
 
let metadata : [String : AnyObject] =
    [HKMetadataKeyDigitalSignature:digitalSignature,
     HKMetadataKeyTimeZone:timeZone]
 
let bloodpressure = HKCorrelation(type: bloodPressureType, startDate: date, endDate: date, objects:objects, device: device, metadata: metadata)
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
 
HKDevice *device = [[HKDevice alloc] initWithName:deviceName
                                     manufacturer:manufacturerName
                                            model:modelName
                                  hardwareVersion:hardwareVersionNumber
                                  firmwareVersion:firmwareVersionNumber
                                  softwareVersion:softwareVersionNumber
                                  localIdentifier:localIdentifier
                              UDIDeviceIdentifier:deviceIdentifier];
 
NSDictionary *metadata = @{HKMetadataKeyDigitalSignature:digitalSignature,
                           HKMetadataKeyTimeZone:timeZone};
 
 
HKCorrelation *bloodPressure =
[HKCorrelation correlationWithType:bloodPressureType
                         startDate:date
                           endDate:date
                           objects:objects
                            device:device
                          metadata:metadata];
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

- [correlationWithType:startDate:endDate:objects:](init%28type_start_end_objects_%29.md): Instantiates and returns a new correlation instance.
- [correlationWithType:startDate:endDate:objects:metadata:](init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.
