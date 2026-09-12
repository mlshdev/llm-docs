> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicaltypeidentifier/medicationrecord](https://developer.apple.com/documentation/healthkit/hkclinicaltypeidentifier/medicationrecord)

# medicationRecord (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type identifier for records of medication.

## Declaration

```swift
static let medicationRecord: HKClinicalTypeIdentifier
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Related Documentation

- [HKClinicalType](../hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [medicationOrder](../hkfhirresourcetype/medicationorder.md): A type that identifies FHIR resources for prescriptions or other orders for medication.
- [medicationDispense](../hkfhirresourcetype/medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [medicationStatement](../hkfhirresourcetype/medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.

### Clinical Record Type Identifiers

- [allergyRecord](allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [clinicalNoteRecord](clinicalnoterecord.md): A type identifier for records of clinical notes.
- [conditionRecord](conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [immunizationRecord](immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [labResultRecord](labresultrecord.md): A type identifier for records of lab results.
- [procedureRecord](procedurerecord.md): A type identifier for records of procedures.
- [vitalSignRecord](vitalsignrecord.md): A type identifier for records of vital signs.
- [coverageRecord](coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.

# HKClinicalTypeIdentifierMedicationRecord (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type identifier for records of medication.

## Declaration

```objectivec
extern HKClinicalTypeIdentifier const HKClinicalTypeIdentifierMedicationRecord;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Related Documentation

- [HKClinicalType](../hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKFHIRResourceTypeMedicationOrder](../hkfhirresourcetype/medicationorder.md): A type that identifies FHIR resources for prescriptions or other orders for medication.
- [HKFHIRResourceTypeMedicationDispense](../hkfhirresourcetype/medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [HKFHIRResourceTypeMedicationStatement](../hkfhirresourcetype/medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.

### Clinical Record Type Identifiers

- [HKClinicalTypeIdentifierAllergyRecord](allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [HKClinicalTypeIdentifierClinicalNoteRecord](clinicalnoterecord.md): A type identifier for records of clinical notes.
- [HKClinicalTypeIdentifierConditionRecord](conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [HKClinicalTypeIdentifierImmunizationRecord](immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [HKClinicalTypeIdentifierLabResultRecord](labresultrecord.md): A type identifier for records of lab results.
- [HKClinicalTypeIdentifierProcedureRecord](procedurerecord.md): A type identifier for records of procedures.
- [HKClinicalTypeIdentifierVitalSignRecord](vitalsignrecord.md): A type identifier for records of vital signs.
- [HKClinicalTypeIdentifierCoverageRecord](coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.
