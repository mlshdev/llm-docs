> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:predicate:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:predicate:resultshandler:))

# init(recordTypes:predicate:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Creates a query for one-time access to a SMART Health Card.

## Declaration

```swift
init(recordTypes: [String], predicate: NSPredicate?, resultsHandler: @escaping @Sendable (HKVerifiableClinicalRecordQuery, [HKVerifiableClinicalRecord]?, (any Error)?) -> Void)
```

## Parameters

- `recordTypes`: The types of records that the query returns.
- `predicate`: A predicate that limits the results that they query returns. Pass `nil` to receive all records of the specified type.
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`records`**: An array containing the verifiable health records found by the query, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

## See Also

### Creating Queries

- [init(recordTypes:sourceTypes:predicate:resultsHandler:)](init%28recordtypes_sourcetypes_predicate_resultshandler_%29.md): Creates a query for one-time access to a verifiable clinical record.

# initWithRecordTypes:predicate:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Creates a query for one-time access to a SMART Health Card.

## Declaration

```objectivec
- (instancetype) initWithRecordTypes:(NSArray<NSString *> *) recordTypes predicate:(NSPredicate *) predicate resultsHandler:(void (^)(HKVerifiableClinicalRecordQuery *query, NSArray<HKVerifiableClinicalRecord *> *records, NSError *error)) resultsHandler;
```

## Parameters

- `recordTypes`: The types of records that the query returns.
- `predicate`: A predicate that limits the results that they query returns. Pass `nil` to receive all records of the specified type.
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`records`**: An array containing the verifiable health records found by the query, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

## See Also

### Creating Queries

- [initWithRecordTypes:sourceTypes:predicate:resultsHandler:](init%28recordtypes_sourcetypes_predicate_resultshandler_%29.md): Creates a query for one-time access to a verifiable clinical record.
