> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserannotatedmedicationquerydescriptor](https://developer.apple.com/documentation/healthkit/hkuserannotatedmedicationquerydescriptor)

# HKUserAnnotatedMedicationQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct HKUserAnnotatedMedicationQueryDescriptor
```

## Topics

### Initializers

- [init(predicate:limit:)](hkuserannotatedmedicationquerydescriptor/init%28predicate_limit_%29.md)

### Instance Properties

- [limit](hkuserannotatedmedicationquerydescriptor/limit.md): The maximum number of resulting HKUserAnnotatedMedication objects.
- [predicate](hkuserannotatedmedicationquerydescriptor/predicate.md): The predicate that matches the desired HKUserAnnotatedMedication objects.

### Default Implementations

- [HKAsyncQuery Implementations](hkuserannotatedmedicationquerydescriptor/hkasyncquery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
