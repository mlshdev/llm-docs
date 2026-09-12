> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicaltypeidentifier/clinicalnoterecord](https://developer.apple.com/documentation/healthkit/hkclinicaltypeidentifier/clinicalnoterecord)

# clinicalNoteRecord (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+ · watchOS 9.4+

A type identifier for records of clinical notes.

## Declaration

```swift
static let clinicalNoteRecord: HKClinicalTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Clinical notes can have one or more attached files. While these files are often PDFs, HTML, or text files, they can be any format. Check the [HKAttachment](../hkattachment.md) object’s [contentType](../hkattachment/contenttype.md) property to determine the file type. For more information on accessing the attachments, see [HKAttachment](../hkattachment.md).

If your app has permission to read [clinicalNoteRecord](clinicalnoterecord.md) samples, it can also access the attachments. For more information on reading clinical note records, see [Accessing Health Records](../accessing-health-records.md).

## See Also

### Related Documentation

- [HKClinicalType](../hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [documentReference](../hkfhirresourcetype/documentreference.md): A type that identifies FHIR resources for document references.
- [diagnosticReport](../hkfhirresourcetype/diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.

### Clinical Record Type Identifiers

- [allergyRecord](allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [conditionRecord](conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [immunizationRecord](immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [labResultRecord](labresultrecord.md): A type identifier for records of lab results.
- [medicationRecord](medicationrecord.md): A type identifier for records of medication.
- [procedureRecord](procedurerecord.md): A type identifier for records of procedures.
- [vitalSignRecord](vitalsignrecord.md): A type identifier for records of vital signs.
- [coverageRecord](coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.

# HKClinicalTypeIdentifierClinicalNoteRecord (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+ · watchOS 9.4+

A type identifier for records of clinical notes.

## Declaration

```objectivec
extern HKClinicalTypeIdentifier const HKClinicalTypeIdentifierClinicalNoteRecord;
```

<a id="Discussion"></a>

## Discussion

Clinical notes can have one or more attached files. While these files are often PDFs, HTML, or text files, they can be any format. Check the [HKAttachment](../hkattachment.md) object’s [contentType](../hkattachment/contenttype.md) property to determine the file type. For more information on accessing the attachments, see [HKAttachment](../hkattachment.md).

If your app has permission to read [HKClinicalTypeIdentifierClinicalNoteRecord](clinicalnoterecord.md) samples, it can also access the attachments. For more information on reading clinical note records, see [Accessing Health Records](../accessing-health-records.md).

## See Also

### Related Documentation

- [HKClinicalType](../hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKFHIRResourceTypeDocumentReference](../hkfhirresourcetype/documentreference.md): A type that identifies FHIR resources for document references.
- [HKFHIRResourceTypeDiagnosticReport](../hkfhirresourcetype/diagnosticreport.md): A type that identifies FHIR resources for findings and interpretation of diagnostic tests.

### Clinical Record Type Identifiers

- [HKClinicalTypeIdentifierAllergyRecord](allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [HKClinicalTypeIdentifierConditionRecord](conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [HKClinicalTypeIdentifierImmunizationRecord](immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [HKClinicalTypeIdentifierLabResultRecord](labresultrecord.md): A type identifier for records of lab results.
- [HKClinicalTypeIdentifierMedicationRecord](medicationrecord.md): A type identifier for records of medication.
- [HKClinicalTypeIdentifierProcedureRecord](procedurerecord.md): A type identifier for records of procedures.
- [HKClinicalTypeIdentifierVitalSignRecord](vitalsignrecord.md): A type identifier for records of vital signs.
- [HKClinicalTypeIdentifierCoverageRecord](coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.
