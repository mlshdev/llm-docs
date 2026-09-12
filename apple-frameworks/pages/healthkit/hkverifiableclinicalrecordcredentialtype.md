> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordcredentialtype](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordcredentialtype)

# HKVerifiableClinicalRecordCredentialType (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.5+

The type of record returned by a verifiable clinical record query.

## Declaration

```swift
struct HKVerifiableClinicalRecordCredentialType
```

## Topics

### Identifying Record Types

- [covid19](hkverifiableclinicalrecordcredentialtype/covid19.md): A value that represents records about COVID-19.
- [immunization](hkverifiableclinicalrecordcredentialtype/immunization.md): A value that represents immunizations.
- [laboratory](hkverifiableclinicalrecordcredentialtype/laboratory.md): A value that represents laboratory results.
- [recovery](hkverifiableclinicalrecordcredentialtype/recovery.md): A value that represents recovery information.

### Creating Record Types

- [init(rawValue:)](hkverifiableclinicalrecordcredentialtype/init%28rawvalue_%29.md): Creates a record type based on the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQueryDescriptor](hkverifiableclinicalrecordquerydescriptor.md): A query interface that provides one-time access to a SMART Health Card or EU Digital COVID Certificate using Swift concurrency.
- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

# HKVerifiableClinicalRecordCredentialType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.5+

The type of record returned by a verifiable clinical record query.

## Declaration

```objectivec
typedef NSString * HKVerifiableClinicalRecordCredentialType;
```

## Topics

### Identifying Record Types

- [HKVerifiableClinicalRecordCredentialTypeCOVID19](hkverifiableclinicalrecordcredentialtype/covid19.md): A value that represents records about COVID-19.
- [HKVerifiableClinicalRecordCredentialTypeImmunization](hkverifiableclinicalrecordcredentialtype/immunization.md): A value that represents immunizations.
- [HKVerifiableClinicalRecordCredentialTypeLaboratory](hkverifiableclinicalrecordcredentialtype/laboratory.md): A value that represents laboratory results.
- [HKVerifiableClinicalRecordCredentialTypeRecovery](hkverifiableclinicalrecordcredentialtype/recovery.md): A value that represents recovery information.

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.
