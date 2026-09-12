> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalrecord](https://developer.apple.com/documentation/healthkit/hkclinicalrecord)

# HKClinicalRecord (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A sample that stores a clinical record.

## Declaration

```swift
class HKClinicalRecord
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md)

<a id="overview"></a>

## Overview

The clinical record stores information about a single condition, procedure, or result. While the record’s properties expose some high-level information, the  [fhirResource](hkclinicalrecord/fhirresource.md) property contains the underlying data from the user’s healthcare institution.

Note that the record inherits the [HKSample](hksample.md) class’s [startDate](hksample/startdate.md) and [endDate](hksample/enddate.md) properties. However, the system does not populate these properties with information from the FHIR data; instead, the [startDate](hksample/startdate.md) and [endDate](hksample/enddate.md) reflect the time and date when the system downloaded the FHIR data to the device.

## Topics

### Accessing Clinical Record Data

- [clinicalType](hkclinicalrecord/clinicaltype.md): An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.
- [displayName](hkclinicalrecord/displayname.md): The primary display name as shown in the Health app.
- [fhirResource](hkclinicalrecord/fhirresource.md): The Fast Healthcare Interoperability Resources (FHIR) data for this record.

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing a User’s Clinical Records](accessing-a-user-s-clinical-records.md): Request authorization to query HealthKit for a user’s clinical records and display them in your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.

# HKClinicalRecord (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A sample that stores a clinical record.

## Declaration

```objectivec
@interface HKClinicalRecord : HKSample
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md)

<a id="overview"></a>

## Overview

The clinical record stores information about a single condition, procedure, or result. While the record’s properties expose some high-level information, the  [FHIRResource](hkclinicalrecord/fhirresource.md) property contains the underlying data from the user’s healthcare institution.

Note that the record inherits the [HKSample](hksample.md) class’s [startDate](hksample/startdate.md) and [endDate](hksample/enddate.md) properties. However, the system does not populate these properties with information from the FHIR data; instead, the [startDate](hksample/startdate.md) and [endDate](hksample/enddate.md) reflect the time and date when the system downloaded the FHIR data to the device.

## Topics

### Accessing Clinical Record Data

- [clinicalType](hkclinicalrecord/clinicaltype.md): An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.
- [displayName](hkclinicalrecord/displayname.md): The primary display name as shown in the Health app.
- [FHIRResource](hkclinicalrecord/fhirresource.md): The Fast Healthcare Interoperability Resources (FHIR) data for this record.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Related Documentation

- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.
