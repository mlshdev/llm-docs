> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthconceptidentifier](https://developer.apple.com/documentation/healthkit/hkhealthconceptidentifier)

# HKHealthConceptIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A unique identifier for a specific health concept within a domain.

## Declaration

```swift
class HKHealthConceptIdentifier
```

<a id="overview"></a>

## Overview

Each identifier points to one concept inside a domain. For example, within the medication domain, one identifier might represent ibuprofen while another represents insulin.

## Topics

### Initializers

- [init(coder:)](hkhealthconceptidentifier/init%28coder_%29.md)

### Instance Properties

- [domain](hkhealthconceptidentifier/domain.md): The domain this identifier belongs to.

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

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

# HKHealthConceptIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A unique identifier for a specific health concept within a domain.

## Declaration

```objectivec
@interface HKHealthConceptIdentifier : NSObject
```

<a id="overview"></a>

## Overview

Each identifier points to one concept inside a domain. For example, within the medication domain, one identifier might represent ibuprofen while another represents insulin.

## Topics

### Instance Properties

- [domain](hkhealthconceptidentifier/domain.md): The domain this identifier belongs to.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
