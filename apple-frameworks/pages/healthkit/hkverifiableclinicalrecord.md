> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord)

# HKVerifiableClinicalRecord (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.

## Declaration

```swift
class HKVerifiableClinicalRecord
```

<a id="overview"></a>

## Overview

[HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md) samples contain data from a SMART Health Card or EU Digital COVID Certificate. Verifiable clinical records combine information about the user’s identity with clinical data, like an immunization record or a lab test result. The organization that produced the data cryptographically signs the bundle.

Apps that use verifiable clinical records can use the cryptographic signature to verify the authenticity of the contents. To verify the card:

1. Access the card’s raw payload using the clinical record’s [dataRepresentation](hkverifiableclinicalrecord/datarepresentation.md) property.
2. Unzip the payload and parse out the `iss` value, which contains a URL that identifies the organization that issued the card.
3. Get the public key from the issuer.
4. Verify the payload’s signature.

For more information, see [SMART Health Cards Framework](https://smarthealth.cards) and [Electronic Health Certificates](https://github.com/ehn-dcc-development/hcert-spec). You can download example SMART cards for testing and development from [Examples](https://smarthealth.cards/examples/).

## Topics

### Identifying the Subject

- [subject](hkverifiableclinicalrecord/subject.md): Data about the person whose clinical data the card contains.

### Identifying the Issuer

- [issuerIdentifier](hkverifiableclinicalrecord/issueridentifier.md): An identifier that represents the card’s issuer.

### Reading Metadata

- [issuedDate](hkverifiableclinicalrecord/issueddate.md): The date when the issuer created the card.
- [relevantDate](hkverifiableclinicalrecord/relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](hkverifiableclinicalrecord/expirationdate.md): The date when the card expires.
- [recordTypes](hkverifiableclinicalrecord/recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](hkverifiableclinicalrecord/sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](hkverifiableclinicalrecord/itemnames.md): A human-readable description of the card’s contents.

### Accessing the Raw Payload

- [dataRepresentation](hkverifiableclinicalrecord/datarepresentation.md): A raw representation of the record’s data.
- [jwsRepresentation](hkverifiableclinicalrecord/jwsrepresentation.md): Deprecated. A raw representation of the SMART Health Card’s contents.

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
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.

# HKVerifiableClinicalRecord (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.

## Declaration

```objectivec
@interface HKVerifiableClinicalRecord : HKSample
```

<a id="overview"></a>

## Overview

[HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md) samples contain data from a SMART Health Card or EU Digital COVID Certificate. Verifiable clinical records combine information about the user’s identity with clinical data, like an immunization record or a lab test result. The organization that produced the data cryptographically signs the bundle.

Apps that use verifiable clinical records can use the cryptographic signature to verify the authenticity of the contents. To verify the card:

1. Access the card’s raw payload using the clinical record’s [dataRepresentation](hkverifiableclinicalrecord/datarepresentation.md) property.
2. Unzip the payload and parse out the `iss` value, which contains a URL that identifies the organization that issued the card.
3. Get the public key from the issuer.
4. Verify the payload’s signature.

For more information, see [SMART Health Cards Framework](https://smarthealth.cards) and [Electronic Health Certificates](https://github.com/ehn-dcc-development/hcert-spec). You can download example SMART cards for testing and development from [Examples](https://smarthealth.cards/examples/).

## Topics

### Identifying the Subject

- [subject](hkverifiableclinicalrecord/subject.md): Data about the person whose clinical data the card contains.

### Identifying the Issuer

- [issuerIdentifier](hkverifiableclinicalrecord/issueridentifier.md): An identifier that represents the card’s issuer.

### Reading Metadata

- [issuedDate](hkverifiableclinicalrecord/issueddate.md): The date when the issuer created the card.
- [relevantDate](hkverifiableclinicalrecord/relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](hkverifiableclinicalrecord/expirationdate.md): The date when the card expires.
- [recordTypes](hkverifiableclinicalrecord/recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](hkverifiableclinicalrecord/sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](hkverifiableclinicalrecord/itemnames.md): A human-readable description of the card’s contents.

### Accessing the Raw Payload

- [dataRepresentation](hkverifiableclinicalrecord/datarepresentation.md): A raw representation of the record’s data.
- [JWSRepresentation](hkverifiableclinicalrecord/jwsrepresentation.md): Deprecated. A raw representation of the SMART Health Card’s contents.

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.
