> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirresourcetype/medicationorder](https://developer.apple.com/documentation/healthkit/hkfhirresourcetype/medicationorder)

# medicationOrder (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A type that identifies FHIR resources for prescriptions or other orders for medication.

## Declaration

```swift
static let medicationOrder: HKFHIRResourceType
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

FHIR renamed the resource type for medication requests and orders. FHIR DSTU2 uses the [medicationOrder](medicationorder.md) resource type, while FHIR R4 uses the [medicationRequest](medicationrequest.md) resource type.

## See Also

### Related Documentation

- [medicationRecord](../hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.

### Resource Types

- [allergyIntolerance](allergyintolerance.md): A type that identifies FHIR resources for allergies and intolerances.
- [condition](condition.md): A type that identifies FHIR resources for a condition, problem, diagnosis, or other event.
- [diagnosticReport](diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.
- [documentReference](documentreference.md): A type that identifies FHIR resources for document references.
- [immunization](immunization.md): A type that identifies FHIR resources for the administration of vaccines.
- [medicationDispense](medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [medicationStatement](medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.
- [medicationRequest](medicationrequest.md): A type that identifies FHIR resources for prescriptions or other orders or requests for medication.
- [observation](observation.md): A type that identifies FHIR resources for medical observations, including lab results and vital signs.
- [procedure](procedure.md): A type that identifies FHIR resources for procedures performed on the patient.
- [coverage](coverage.md): A type that identifies FHIR resources containing information about the user’s insurance coverage.

# HKFHIRResourceTypeMedicationOrder (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

A type that identifies FHIR resources for prescriptions or other orders for medication.

## Declaration

```objectivec
extern HKFHIRResourceType const HKFHIRResourceTypeMedicationOrder;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

FHIR renamed the resource type for medication requests and orders. FHIR DSTU2 uses the [HKFHIRResourceTypeMedicationOrder](medicationorder.md) resource type, while FHIR R4 uses the [HKFHIRResourceTypeMedicationRequest](medicationrequest.md) resource type.

## See Also

### Related Documentation

- [HKClinicalTypeIdentifierMedicationRecord](../hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.

### Resource Types

- [HKFHIRResourceTypeAllergyIntolerance](allergyintolerance.md): A type that identifies FHIR resources for allergies and intolerances.
- [HKFHIRResourceTypeCondition](condition.md): A type that identifies FHIR resources for a condition, problem, diagnosis, or other event.
- [HKFHIRResourceTypeDiagnosticReport](diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.
- [HKFHIRResourceTypeDocumentReference](documentreference.md): A type that identifies FHIR resources for document references.
- [HKFHIRResourceTypeImmunization](immunization.md): A type that identifies FHIR resources for the administration of vaccines.
- [HKFHIRResourceTypeMedicationDispense](medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [HKFHIRResourceTypeMedicationStatement](medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.
- [HKFHIRResourceTypeMedicationRequest](medicationrequest.md): A type that identifies FHIR resources for prescriptions or other orders or requests for medication.
- [HKFHIRResourceTypeObservation](observation.md): A type that identifies FHIR resources for medical observations, including lab results and vital signs.
- [HKFHIRResourceTypeProcedure](procedure.md): A type that identifies FHIR resources for procedures performed on the patient.
- [HKFHIRResourceTypeCoverage](coverage.md): A type that identifies FHIR resources containing information about the user’s insurance coverage.
