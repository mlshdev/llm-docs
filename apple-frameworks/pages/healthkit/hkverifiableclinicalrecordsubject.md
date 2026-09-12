> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordsubject](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordsubject)

# HKVerifiableClinicalRecordSubject (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

The subject associated with a signed clinical record.

## Declaration

```swift
class HKVerifiableClinicalRecordSubject
```

<a id="overview"></a>

## Overview

[HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md) objects contain data about the subject from a SMART Health Card.  These cards combine both the user’s identity and clinical data into a cryptographically-signed bundle. To protect the subject’s privacy, SMART Health Cards provide the minimum required data. For more information, see [SMART Health Cards Framework](https://smarthealth.cards).

## Topics

### Accessing Patient Data

- [fullName](hkverifiableclinicalrecordsubject/fullname.md): The subject’s full name.
- [dateOfBirthComponents](hkverifiableclinicalrecordsubject/dateofbirthcomponents.md): The subject’s birthdate.

### Initializers

- [init(coder:)](hkverifiableclinicalrecordsubject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing a User’s Clinical Records](accessing-a-user-s-clinical-records.md): Request authorization to query HealthKit for a user’s clinical records and display them in your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.

# HKVerifiableClinicalRecordSubject (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

The subject associated with a signed clinical record.

## Declaration

```objectivec
@interface HKVerifiableClinicalRecordSubject : NSObject
```

<a id="overview"></a>

## Overview

[HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md) objects contain data about the subject from a SMART Health Card.  These cards combine both the user’s identity and clinical data into a cryptographically-signed bundle. To protect the subject’s privacy, SMART Health Cards provide the minimum required data. For more information, see [SMART Health Cards Framework](https://smarthealth.cards).

## Topics

### Accessing Patient Data

- [fullName](hkverifiableclinicalrecordsubject/fullname.md): The subject’s full name.
- [dateOfBirthComponents](hkverifiableclinicalrecordsubject/dateofbirthcomponents.md): The subject’s birthdate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.
