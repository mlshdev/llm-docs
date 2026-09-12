> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdocumentsample](https://developer.apple.com/documentation/healthkit/hkdocumentsample)

# HKDocumentSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class that represents a health document in the HealthKit store.

## Declaration

```swift
class HKDocumentSample
```

<a id="overview"></a>

## Overview

You should never instantiate an `HKDocumentSample` object directly. Instead, you always work with a concrete subclass. In iOS 10 and watchOS 3, the only concrete class is the [HKCDADocumentSample](hkcdadocumentsample.md) class.

Document samples are immutable: You set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Document-Samples"></a>

### Extend Document Samples

Like many HealthKit classes, you should not create any custom subclasses of the `HKDocumentSample` class. You can extend the `HKDocumentSample` class and its subclasses by adding custom metadata keys and values to the metadata dictionary when the object is instantiated.

## Topics

### Accessing the Document Sample Properties

- [documentType](hkdocumentsample/documenttype.md): The type of document represented by the sample.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKCDADocumentSample](hkcdadocumentsample.md)

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
- [HKCDADocumentSample](hkcdadocumentsample.md): A Clinical Document Architecture (CDA) sample that stores a single document.
- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.

# HKDocumentSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class that represents a health document in the HealthKit store.

## Declaration

```objectivec
@interface HKDocumentSample : HKSample
```

<a id="overview"></a>

## Overview

You should never instantiate an `HKDocumentSample` object directly. Instead, you always work with a concrete subclass. In iOS 10 and watchOS 3, the only concrete class is the [HKCDADocumentSample](hkcdadocumentsample.md) class.

Document samples are immutable: You set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Document-Samples"></a>

### Extend Document Samples

Like many HealthKit classes, you should not create any custom subclasses of the `HKDocumentSample` class. You can extend the `HKDocumentSample` class and its subclasses by adding custom metadata keys and values to the metadata dictionary when the object is instantiated.

## Topics

### Accessing the Document Sample Properties

- [documentType](hkdocumentsample/documenttype.md): The type of document represented by the sample.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKCDADocumentSample](hkcdadocumentsample.md)

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
- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.
- [HKDocumentType](hkdocumenttype.md): A sample type used to create queries for documents.
