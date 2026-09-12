> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:sourcetypes:predicate:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:sourcetypes:predicate:resultshandler:))

# init(recordTypes:sourceTypes:predicate:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

Creates a query for one-time access to a verifiable clinical record.

## Declaration

```swift
init(recordTypes: [String], sourceTypes: [HKVerifiableClinicalRecordSourceType], predicate: NSPredicate?, resultsHandler: @escaping @Sendable (HKVerifiableClinicalRecordQuery, [HKVerifiableClinicalRecord]?, (any Error)?) -> Void)
```

## Parameters

- `recordTypes`: The types of records that this query returns. For a list of valid record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).
- `sourceTypes`: The format of the verifiable clinical records. For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).
- `predicate`: A predicate that limits the results that this query returns. Pass `nil` to receive all records of the specified source and record type.
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`records`**: An array containing the verifiable health records found by the query, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

## See Also

### Creating Queries

- [init(recordTypes:predicate:resultsHandler:)](init%28recordtypes_predicate_resultshandler_%29.md): Creates a query for one-time access to a SMART Health Card.

# initWithRecordTypes:sourceTypes:predicate:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

Creates a query for one-time access to a verifiable clinical record.

## Declaration

```objectivec
- (instancetype) initWithRecordTypes:(NSArray<NSString *> *) recordTypes sourceTypes:(NSArray<NSString *> *) sourceTypes predicate:(NSPredicate *) predicate resultsHandler:(void (^)(HKVerifiableClinicalRecordQuery *query, NSArray<HKVerifiableClinicalRecord *> *records, NSError *error)) resultsHandler;
```

## Parameters

- `recordTypes`: The types of records that this query returns. For a list of valid record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).
- `sourceTypes`: The format of the verifiable clinical records. For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).
- `predicate`: A predicate that limits the results that this query returns. Pass `nil` to receive all records of the specified source and record type.
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`records`**: An array containing the verifiable health records found by the query, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

## See Also

### Creating Queries

- [initWithRecordTypes:predicate:resultsHandler:](init%28recordtypes_predicate_resultshandler_%29.md): Creates a query for one-time access to a SMART Health Card.
