> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserannotatedmedication](https://developer.apple.com/documentation/healthkit/hkuserannotatedmedication)

# HKUserAnnotatedMedication (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A reference to the tracked medication and the details a person can customize.

## Declaration

```swift
class HKUserAnnotatedMedication
```

<a id="overview"></a>

## Overview

The details are relevant to the medication tracking experience.

## Topics

### Initializers

- [init(coder:)](hkuserannotatedmedication/init%28coder_%29.md)

### Instance Properties

- [hasSchedule](hkuserannotatedmedication/hasschedule.md): A Boolean value that indicates whether a medication has a schedule set up.
- [isArchived](hkuserannotatedmedication/isarchived.md): A Boolean value that indicates whether a medication is archived.
- [medication](hkuserannotatedmedication/medication.md): A reference to the specific medication a person is tracking.
- [nickname](hkuserannotatedmedication/nickname.md): The nickname that a person added to a medication during the entry experience.

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
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

# HKUserAnnotatedMedication (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A reference to the tracked medication and the details a person can customize.

## Declaration

```objectivec
@interface HKUserAnnotatedMedication : NSObject
```

<a id="overview"></a>

## Overview

The details are relevant to the medication tracking experience.

## Topics

### Instance Properties

- [hasSchedule](hkuserannotatedmedication/hasschedule.md): A Boolean value that indicates whether a medication has a schedule set up.
- [isArchived](hkuserannotatedmedication/isarchived.md): A Boolean value that indicates whether a medication is archived.
- [medication](hkuserannotatedmedication/medication.md): A reference to the specific medication a person is tracking.
- [nickname](hkuserannotatedmedication/nickname.md): The nickname that a person added to a medication during the entry experience.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
