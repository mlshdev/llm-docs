> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordsourcetype](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordsourcetype)

# HKVerifiableClinicalRecordSourceType (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.5+

The source type for the verifiable clinical record.

## Declaration

```swift
struct HKVerifiableClinicalRecordSourceType
```

## Topics

### Identifying Source Types

- [euDigitalCOVIDCertificate](hkverifiableclinicalrecordsourcetype/eudigitalcovidcertificate.md): A value indicating EU Digital COVID Certificates.
- [smartHealthCard](hkverifiableclinicalrecordsourcetype/smarthealthcard.md): A value indicating SMART health cards.

### Creating Source Types

- [init(rawValue:)](hkverifiableclinicalrecordsourcetype/init%28rawvalue_%29.md): Creates a source type based on the provided string.

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
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

# HKVerifiableClinicalRecordSourceType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.5+

The source type for the verifiable clinical record.

## Declaration

```objectivec
typedef NSString * HKVerifiableClinicalRecordSourceType;
```

## Topics

### Identifying Source Types

- [HKVerifiableClinicalRecordSourceTypeEUDigitalCOVIDCertificate](hkverifiableclinicalrecordsourcetype/eudigitalcovidcertificate.md): A value indicating EU Digital COVID Certificates.
- [HKVerifiableClinicalRecordSourceTypeSMARTHealthCard](hkverifiableclinicalrecordsourcetype/smarthealthcard.md): A value indicating SMART health cards.

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.
