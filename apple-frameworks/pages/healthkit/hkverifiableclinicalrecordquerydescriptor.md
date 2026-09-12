> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor)

# HKVerifiableClinicalRecordQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

A query interface that provides one-time access to a SMART Health Card or EU Digital COVID Certificate using Swift concurrency.

## Declaration

```swift
struct HKVerifiableClinicalRecordQueryDescriptor
```

<a id="overview"></a>

## Overview

Use [HKVerifiableClinicalRecordQueryDescriptor](hkverifiableclinicalrecordquerydescriptor.md) to read verifiable clinical records.

```swift
// Calculate the start and end dates.
var sixMonthsAgo = DateComponents()
sixMonthsAgo.month = -6

let end = Date()
guard let start = Calendar.current.date(byAdding: sixMonthsAgo, to: end) else {
    fatalError("*** Unable to calculate a date using \(end) and \(sixMonthsAgo) ***")
}

// Create the predicate.
let lastSixMonthsPredicate =
HKQuery.predicateForVerifiableClinicalRecords(withRelevantDateWithin: DateInterval(start: start, end: end))

// Create the descriptor.
let healthRecordDescriptor = HKVerifiableClinicalRecordQueryDescriptor(
    recordTypes: [.covid19, .immunization],
    sourceTypes: [.smartHealthCard, .euDigitalCOVIDCertificate],
    predicate: lastSixMonthsPredicate)

// Asynchronously read the records.
let records = try await healthRecordDescriptor.result(for: store)

// Use the records here.
for record in records {
    print(record.recordTypes)
    print(record.itemNames)
    print(record.issuedDate)
    print(record.expirationDate ?? "No expiration date.")
}
```

When you call the descriptor’s [result(for:)](hkverifiableclinicalrecordquerydescriptor/result%28for_%29.md) method, it creates and executes an [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md) in the background, passing the results as an array of [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md) instances.

Unlike other HealthKit queries, you don’t need to request permission to read verifiable health records before using this descriptor. HealthKit prompts the user for permission to read the records each time your app runs the underlying query.

> **Note**

>  Running an [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md) requires a special entitlement from Apple, or the query fails with an [HKError.Code.errorAuthorizationDenied](hkerror/code/errorauthorizationdenied.md) error. To request the entitlement, see [Request Access to the Verifiable Health Records Entitlement](https://developer.apple.com/contact/request/verifiable-health-records/).

## Topics

### Creating Query Descriptors

- [init(recordTypes:sourceTypes:predicate:)](hkverifiableclinicalrecordquerydescriptor/init%28recordtypes_sourcetypes_predicate_%29.md): Creates a query descriptor for reading verifiable clinical records.

### Running Queries

- [result(for:)](hkverifiableclinicalrecordquerydescriptor/result%28for_%29.md): Runs a one-shot query that asynchronously reads matching clinical records.

### Accessing Query Properties

- [recordTypes](hkverifiableclinicalrecordquerydescriptor/recordtypes.md): The types of records returned by this query.
- [sourceTypes](hkverifiableclinicalrecordquerydescriptor/sourcetypes.md): The source for the verifiable clinical records, for example from a SMART Health Card or an EU Digital COVID Certificate.
- [predicate](hkverifiableclinicalrecordquerydescriptor/predicate.md): A predicate that limits the results returned by the query.

### Default Implementations

- [HKAsyncQuery Implementations](hkverifiableclinicalrecordquerydescriptor/hkasyncquery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.
