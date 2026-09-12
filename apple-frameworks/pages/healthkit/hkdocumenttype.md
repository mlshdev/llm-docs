> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdocumenttype](https://developer.apple.com/documentation/healthkit/hkdocumenttype)

# HKDocumentType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A sample type used to create queries for documents.

## Declaration

```swift
class HKDocumentType
```

<a id="overview"></a>

## Overview

To create a document type instance, use the [HKObjectType](hkobjecttype.md) class’s [documentType(forIdentifier:)](hkobjecttype/documenttype%28foridentifier_%29.md) convenience method.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

As with many HealthKit classes, don’t subclass document types.

Additionally, this class reuses the same instance whenever possible. Letting multiple queries share the same document type helps reduce the overall memory usage.

## Topics

### Creating Document Types

- [init(\_:)](hkdocumenttype/init%28__%29.md): Creates a document type using the provided identifier.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

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
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.

# HKDocumentType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A sample type used to create queries for documents.

## Declaration

```objectivec
@interface HKDocumentType : HKSampleType
```

<a id="overview"></a>

## Overview

To create a document type instance, use the [HKObjectType](hkobjecttype.md) class’s [documentTypeForIdentifier:](hkobjecttype/documenttype%28foridentifier_%29.md) convenience method.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

As with many HealthKit classes, don’t subclass document types.

Additionally, this class reuses the same instance whenever possible. Letting multiple queries share the same document type helps reduce the overall memory usage.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Medical records

- [Accessing Health Records](accessing-health-records.md): Read clinical record data from the HealthKit store.
- [Accessing Sample Data in the Simulator](accessing-sample-data-in-the-simulator.md): Set up sample accounts to build and test your app.
- [Accessing Data from a SMART Health Card](accessing-data-from-a-smart-health-card.md): Query for and validate a verifiable clinical record.
- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKFHIRResource](hkfhirresource.md): An object containing Fast Healthcare Interoperability Resources (FHIR) data.
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md): A sample that represents the contents of a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSubject](hkverifiableclinicalrecordsubject.md): The subject associated with a signed clinical record.
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [HKDocumentSample](hkdocumentsample.md): An abstract class that represents a health document in the HealthKit store.
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
