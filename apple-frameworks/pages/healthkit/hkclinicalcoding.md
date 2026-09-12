> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalcoding](https://developer.apple.com/documentation/healthkit/hkclinicalcoding)

# HKClinicalCoding (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A clinical coding that represents a medical concept using a standardized coding system.

## Declaration

```swift
class HKClinicalCoding
```

<a id="overview"></a>

## Overview

A clinical coding pairs a [system](hkclinicalcoding/system.md), an optional [version](hkclinicalcoding/version.md), and a [code](hkclinicalcoding/code.md) which identify a medical concept.

This model is closely related to the [FHIR Coding model](https://build.fhir.org/datatypes.html#Coding).

## Topics

### Initializers

- [init(coder:)](hkclinicalcoding/init%28coder_%29.md)
- [init(system:version:code:)](hkclinicalcoding/init%28system_version_code_%29.md): Creates a clinical coding with the specified system, version, and code.

### Instance Properties

- [code](hkclinicalcoding/code.md): The clinical code that represents a medical concept inside the coding system.
- [system](hkclinicalcoding/system.md): The string that identifies the coding system that defines this clinical code.
- [version](hkclinicalcoding/version.md): The version of the coding system.

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

- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

# HKClinicalCoding (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A clinical coding that represents a medical concept using a standardized coding system.

## Declaration

```objectivec
@interface HKClinicalCoding : NSObject
```

<a id="overview"></a>

## Overview

A clinical coding pairs a [system](hkclinicalcoding/system.md), an optional [version](hkclinicalcoding/version.md), and a [code](hkclinicalcoding/code.md) which identify a medical concept.

This model is closely related to the [FHIR Coding model](https://build.fhir.org/datatypes.html#Coding).

## Topics

### Instance Properties

- [code](hkclinicalcoding/code.md): The clinical code that represents a medical concept inside the coding system.
- [system](hkclinicalcoding/system.md): The string that identifies the coding system that defines this clinical code.
- [version](hkclinicalcoding/version.md): The version of the coding system.

### Instance Methods

- [initWithSystem:version:code:](hkclinicalcoding/init%28system_version_code_%29.md): Creates a clinical coding with the specified system, version, and code.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Medication queries

- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
