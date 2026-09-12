> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocumentsample/init(data:start:end:metadata:)](https://developer.apple.com/documentation/healthkit/hkcdadocumentsample/init(data:start:end:metadata:))

# init(data:start:end:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a CDA document sample containing the provided XML document and metadata.

## Declaration

```swift
convenience init(data documentData: Data, start startDate: Date, end endDate: Date, metadata: [String : Any]?) throws
```

## Parameters

- `documentData`: The CDA document in an XML format that meets the CDA standard. For more information on the CDA document format, see the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard.
- `startDate`: A fallback start date for the sample. This date is only used when the XML document does not include the document’s effective date. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: A fallback end date for the sample. This date is only used when the XML document does not include the document’s effective date. This date must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `metadata`: The metadata dictionary contains extra information describing this sample. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values may be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects, or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys in [HealthKit Constants](../healthkit-constants.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the sample’s capabilities.

<a id="return-value"></a>

## Return Value

A valid CDA document sample with the provided metadata.

<a id="Discussion"></a>

## Discussion

To create a CDA document sample:

1. Create [NSDate](../../foundation/nsdate.md) objects to represent fallback start and end dates for the sample. Where possible, the system uses the effective date from the document’s XML data to set the sample’s start and end dates. The start and end date parameters are only used when the effective date is not available. Use the current date and time.
2. Create an [NSData](../../foundation/nsdata.md) object that contains the CDA’s XML data.
3. (optionally) Create an [NSDictionary](../../foundation/nsdictionary.md) object containing any additional metadata for this sample.
4. Call the `HKCDADocumentSample` class’s [init(data:start:end:metadata:)](init%28data_start_end_metadata_%29.md) method. Handle any errors that occur during XML validation.
5. Save the sample to the HealthKit store. Handle any errors that occur while saving.

```swift
// Creating a Health Document Using HKCDADocumentSample
let today = Date()
let documentData: Data = ... // Use XML data provided by a health organization
do {
    let cdaSample = try HKCDADocumentSample.init(data: documentData, start: today, end:
        today, metadata: nil)
    healthStore.save(cdaSample) { success, error in
        // Handle save error here...
    }
} catch {
    // Handle validation error here...
}
```

## See Also

### Creating CDA Samples

- [HKDetailedCDAValidationErrorKey](../hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.

# CDADocumentSampleWithData:startDate:endDate:metadata:validationError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a CDA document sample containing the provided XML document and metadata.

## Declaration

```objectivec
+ (instancetype) CDADocumentSampleWithData:(NSData *) documentData startDate:(NSDate *) startDate endDate:(NSDate *) endDate metadata:(NSDictionary<NSString *,id> *) metadata validationError:(NSError **) validationError;
```

## Parameters

- `documentData`: The CDA document in an XML format that meets the CDA standard. For more information on the CDA document format, see the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard.
- `startDate`: A fallback start date for the sample. This date is only used when the XML document does not include the document’s effective date. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: A fallback end date for the sample. This date is only used when the XML document does not include the document’s effective date. This date must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `metadata`: The metadata dictionary contains extra information describing this sample. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values may be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects, or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys in [HealthKit Constants](../healthkit-constants.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the sample’s capabilities.
- `validationError`: An output parameter. Upon return, if an error occurred it contains an [NSError](../../foundation/nserror.md) object that describes the problem; otherwise it contains `nil`.  If you are not interested in possible errors, pass in `NULL`.

  When this method is called, HealthKit validates the document data using the schema definition provided by the HL7 standard. For more information, see [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7).  If the validation fails, then this parameter contains the relevant error object. You can access detailed information about the error from the `validationError` object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary using the [HKDetailedCDAValidationErrorKey](../hkdetailedcdavalidationerrorkey.md) key.

<a id="return-value"></a>

## Return Value

A valid CDA document sample with the provided metadata.

<a id="Discussion"></a>

## Discussion

To create a CDA document sample:

1. Create [NSDate](../../foundation/nsdate.md) objects to represent fallback start and end dates for the sample. Where possible, the system uses the effective date from the document’s XML data to set the sample’s start and end dates. The start and end date parameters are only used when the effective date is not available. Use the current date and time.
2. Create an [NSData](../../foundation/nsdata.md) object that contains the CDA’s XML data.
3. (optionally) Create an [NSDictionary](../../foundation/nsdictionary.md) object containing any additional metadata for this sample.
4. Call the `HKCDADocumentSample` class’s [CDADocumentSampleWithData:startDate:endDate:metadata:validationError:](init%28data_start_end_metadata_%29.md) method. Handle any errors that occur during XML validation.
5. Save the sample to the HealthKit store. Handle any errors that occur while saving.

```swift
// Creating a Health Document Using HKCDADocumentSample
let today = Date()
let documentData: Data = ... // Use XML data provided by a health organization
do {
    let cdaSample = try HKCDADocumentSample.init(data: documentData, start: today, end:
        today, metadata: nil)
    healthStore.save(cdaSample) { success, error in
        // Handle save error here...
    }
} catch {
    // Handle validation error here...
}
```

## See Also

### Creating CDA Samples

- [HKDetailedCDAValidationErrorKey](../hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.
