> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicaltypeidentifier](https://developer.apple.com/documentation/healthkit/hkclinicaltypeidentifier)

# HKClinicalTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type identifier for the different categories of clinical records.

## Declaration

```swift
struct HKClinicalTypeIdentifier
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)
- [Authorizing access to health data](authorizing-access-to-health-data.md)

<a id="overview"></a>

## Overview

Clinical record samples are read-only, so you can’t request authorization to share clinical record types. You can’t create or save new [HKClinicalRecord](hkclinicalrecord.md) objects.

For additional information, see [Accessing Health Records](accessing-health-records.md).

## Topics

### Clinical Record Type Identifiers

- [allergyRecord](hkclinicaltypeidentifier/allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [clinicalNoteRecord](hkclinicaltypeidentifier/clinicalnoterecord.md): A type identifier for records of clinical notes.
- [conditionRecord](hkclinicaltypeidentifier/conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [immunizationRecord](hkclinicaltypeidentifier/immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [labResultRecord](hkclinicaltypeidentifier/labresultrecord.md): A type identifier for records of lab results.
- [medicationRecord](hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.
- [procedureRecord](hkclinicaltypeidentifier/procedurerecord.md): A type identifier for records of procedures.
- [vitalSignRecord](hkclinicaltypeidentifier/vitalsignrecord.md): A type identifier for records of vital signs.
- [coverageRecord](hkclinicaltypeidentifier/coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.

### Initializers

- [init(rawValue:)](hkclinicaltypeidentifier/init%28rawvalue_%29.md): Returns a new clinical record type identifier for the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKClinicalTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type identifier for the different categories of clinical records.

## Declaration

```objectivec
typedef NSString * HKClinicalTypeIdentifier;
```

## Mentioned In

- [Accessing Health Records](accessing-health-records.md)
- [Authorizing access to health data](authorizing-access-to-health-data.md)

<a id="overview"></a>

## Overview

Clinical record samples are read-only, so you can’t request authorization to share clinical record types. You can’t create or save new [HKClinicalRecord](hkclinicalrecord.md) objects.

For additional information, see [Accessing Health Records](accessing-health-records.md).

## Topics

### Clinical Record Type Identifiers

- [HKClinicalTypeIdentifierAllergyRecord](hkclinicaltypeidentifier/allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [HKClinicalTypeIdentifierClinicalNoteRecord](hkclinicaltypeidentifier/clinicalnoterecord.md): A type identifier for records of clinical notes.
- [HKClinicalTypeIdentifierConditionRecord](hkclinicaltypeidentifier/conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [HKClinicalTypeIdentifierImmunizationRecord](hkclinicaltypeidentifier/immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [HKClinicalTypeIdentifierLabResultRecord](hkclinicaltypeidentifier/labresultrecord.md): A type identifier for records of lab results.
- [HKClinicalTypeIdentifierMedicationRecord](hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.
- [HKClinicalTypeIdentifierProcedureRecord](hkclinicaltypeidentifier/procedurerecord.md): A type identifier for records of procedures.
- [HKClinicalTypeIdentifierVitalSignRecord](hkclinicaltypeidentifier/vitalsignrecord.md): A type identifier for records of vital signs.
- [HKClinicalTypeIdentifierCoverageRecord](hkclinicaltypeidentifier/coveragerecord.md): A type identifier for records containing information about the user’s insurance coverage.
