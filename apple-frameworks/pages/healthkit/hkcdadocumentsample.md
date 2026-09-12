> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocumentsample](https://developer.apple.com/documentation/healthkit/hkcdadocumentsample)

# HKCDADocumentSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A Clinical Document Architecture (CDA) sample that stores a single document.

## Declaration

```swift
class HKCDADocumentSample
```

<a id="overview"></a>

## Overview

The sample’s `document` property contains an [HKCDADocument](hkcdadocument.md) object, representing the underlying XML document.

The [HKCDADocumentSample](hkcdadocumentsample.md) class is a concrete subclass of the [HKDocumentSample](hkdocumentsample.md) class. Document samples are immutable. HealthKit assigns the document’s properties when the sample is created. They cannot change. If you need to update a document in HealthKit, create a new document sample with the updated CDA document.

## Topics

### Creating CDA Samples

- [init(data:start:end:metadata:)](hkcdadocumentsample/init%28data_start_end_metadata_%29.md): Returns a CDA document sample containing the provided XML document and metadata.
- [HKDetailedCDAValidationErrorKey](hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.

### Accessing the Document

- [document](hkcdadocumentsample/document.md): The CDA document.
- [HKCDADocument](hkcdadocument.md): An object representing a Clinical Document Architecture (CDA) document in HealthKit.

### Accessing Validation Errors

- [HKDetailedCDAValidationErrorKey](hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCDAAuthorName](hkpredicatekeypathcdaauthorname.md): The key path for accessing the author’s name inside a predicate format string.
- [HKPredicateKeyPathCDACustodianName](hkpredicatekeypathcdacustodianname.md): The key path for accessing the custodian’s name inside a predicate format string.
- [HKPredicateKeyPathCDAPatientName](hkpredicatekeypathcdapatientname.md): The key path for accessing the patient’s name inside a predicate format string.
- [HKPredicateKeyPathCDATitle](hkpredicatekeypathcdatitle.md): The key path for accessing the document’s title inside a predicate format string.

### Initializers

- [init(data:startDate:endDate:metadata:)](hkcdadocumentsample/init%28data_startdate_enddate_metadata_%29.md)

## Relationships

### Inherits From

- [HKDocumentSample](hkdocumentsample.md)

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

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing a User’s Clinical Records](accessing-a-user-s-clinical-records.md): Request authorization to query HealthKit for a user’s clinical records and display them in your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.

# HKCDADocumentSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A Clinical Document Architecture (CDA) sample that stores a single document.

## Declaration

```objectivec
@interface HKCDADocumentSample : HKDocumentSample
```

<a id="overview"></a>

## Overview

The sample’s `document` property contains an [HKCDADocument](hkcdadocument.md) object, representing the underlying XML document.

The [HKCDADocumentSample](hkcdadocumentsample.md) class is a concrete subclass of the [HKDocumentSample](hkdocumentsample.md) class. Document samples are immutable. HealthKit assigns the document’s properties when the sample is created. They cannot change. If you need to update a document in HealthKit, create a new document sample with the updated CDA document.

## Topics

### Creating CDA Samples

- [CDADocumentSampleWithData:startDate:endDate:metadata:validationError:](hkcdadocumentsample/init%28data_start_end_metadata_%29.md): Returns a CDA document sample containing the provided XML document and metadata.
- [HKDetailedCDAValidationErrorKey](hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.

### Accessing the Document

- [document](hkcdadocumentsample/document.md): The CDA document.
- [HKCDADocument](hkcdadocument.md): An object representing a Clinical Document Architecture (CDA) document in HealthKit.

### Accessing Validation Errors

- [HKDetailedCDAValidationErrorKey](hkdetailedcdavalidationerrorkey.md): A key for accessing validation error information from an error object’s user information dictionary.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCDAAuthorName](hkpredicatekeypathcdaauthorname.md): The key path for accessing the author’s name inside a predicate format string.
- [HKPredicateKeyPathCDACustodianName](hkpredicatekeypathcdacustodianname.md): The key path for accessing the custodian’s name inside a predicate format string.
- [HKPredicateKeyPathCDAPatientName](hkpredicatekeypathcdapatientname.md): The key path for accessing the patient’s name inside a predicate format string.
- [HKPredicateKeyPathCDATitle](hkpredicatekeypathcdatitle.md): The key path for accessing the document’s title inside a predicate format string.

## Relationships

### Inherits From

- [HKDocumentSample](hkdocumentsample.md)

## See Also

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.
