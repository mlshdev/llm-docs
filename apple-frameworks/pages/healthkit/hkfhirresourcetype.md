> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirresourcetype](https://developer.apple.com/documentation/healthkit/hkfhirresourcetype)

# HKFHIRResourceType (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The FHIR resource types supported in HealthKit.

## Declaration

```swift
struct HKFHIRResourceType
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)

## Topics

### Resource Types

- [allergyIntolerance](hkfhirresourcetype/allergyintolerance.md): A type that identifies FHIR resources for allergies and intolerances.
- [condition](hkfhirresourcetype/condition.md): A type that identifies FHIR resources for a condition, problem, diagnosis, or other event.
- [diagnosticReport](hkfhirresourcetype/diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.
- [documentReference](hkfhirresourcetype/documentreference.md): A type that identifies FHIR resources for document references.
- [immunization](hkfhirresourcetype/immunization.md): A type that identifies FHIR resources for the administration of vaccines.
- [medicationOrder](hkfhirresourcetype/medicationorder.md): A type that identifies FHIR resources for prescriptions or other orders for medication.
- [medicationDispense](hkfhirresourcetype/medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [medicationStatement](hkfhirresourcetype/medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.
- [medicationRequest](hkfhirresourcetype/medicationrequest.md): A type that identifies FHIR resources for prescriptions or other orders or requests for medication.
- [observation](hkfhirresourcetype/observation.md): A type that identifies FHIR resources for medical observations, including lab results and vital signs.
- [procedure](hkfhirresourcetype/procedure.md): A type that identifies FHIR resources for procedures performed on the patient.
- [coverage](hkfhirresourcetype/coverage.md): A type that identifies FHIR resources containing information about the user’s insurance coverage.

### Initializers

- [init(rawValue:)](hkfhirresourcetype/init%28rawvalue_%29.md): Returns a new resource type for the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing FHIR Data

- [identifier](hkfhirresource/identifier.md): The value from the FHIR resource’s `id` field.
- [fhirVersion](hkfhirresource/fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](hkfhirversion.md): The FHIR version.
- [resourceType](hkfhirresource/resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [sourceURL](hkfhirresource/sourceurl.md): The full URL for the source of the FHIR resource.
- [data](hkfhirresource/data.md): The JSON representation of the FHIR resource.

# HKFHIRResourceType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The FHIR resource types supported in HealthKit.

## Declaration

```objectivec
typedef NSString * HKFHIRResourceType;
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)

## Topics

### Resource Types

- [HKFHIRResourceTypeAllergyIntolerance](hkfhirresourcetype/allergyintolerance.md): A type that identifies FHIR resources for allergies and intolerances.
- [HKFHIRResourceTypeCondition](hkfhirresourcetype/condition.md): A type that identifies FHIR resources for a condition, problem, diagnosis, or other event.
- [HKFHIRResourceTypeDiagnosticReport](hkfhirresourcetype/diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.
- [HKFHIRResourceTypeDocumentReference](hkfhirresourcetype/documentreference.md): A type that identifies FHIR resources for document references.
- [HKFHIRResourceTypeImmunization](hkfhirresourcetype/immunization.md): A type that identifies FHIR resources for the administration of vaccines.
- [HKFHIRResourceTypeMedicationOrder](hkfhirresourcetype/medicationorder.md): A type that identifies FHIR resources for prescriptions or other orders for medication.
- [HKFHIRResourceTypeMedicationDispense](hkfhirresourcetype/medicationdispense.md): A type that identifies FHIR resources for the delivery of medication (usually in response to a prescription).
- [HKFHIRResourceTypeMedicationStatement](hkfhirresourcetype/medicationstatement.md): A type that identifies FHIR resources for statements about medication taken by the patient.
- [HKFHIRResourceTypeMedicationRequest](hkfhirresourcetype/medicationrequest.md): A type that identifies FHIR resources for prescriptions or other orders or requests for medication.
- [HKFHIRResourceTypeObservation](hkfhirresourcetype/observation.md): A type that identifies FHIR resources for medical observations, including lab results and vital signs.
- [HKFHIRResourceTypeProcedure](hkfhirresourcetype/procedure.md): A type that identifies FHIR resources for procedures performed on the patient.
- [HKFHIRResourceTypeCoverage](hkfhirresourcetype/coverage.md): A type that identifies FHIR resources containing information about the user’s insurance coverage.

## See Also

### Accessing FHIR Data

- [identifier](hkfhirresource/identifier.md): The value from the FHIR resource’s `id` field.
- [FHIRVersion](hkfhirresource/fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](hkfhirversion.md): The FHIR version.
- [resourceType](hkfhirresource/resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [sourceURL](hkfhirresource/sourceurl.md): The full URL for the source of the FHIR resource.
- [data](hkfhirresource/data.md): The JSON representation of the FHIR resource.
