> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordsoperation/perrecordcompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/perrecordcompletionblock)

# perRecordCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when a record becomes available.

> Use perRecordResultBlock instead

## Declaration

```swift
var perRecordCompletionBlock: ((CKRecord?, CKRecord.ID?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The record, or `nil` if CloudKit can’t retrieve the record.
- The ID of the record.
- If CloudKit can’t retrieve the record, an error that provides information about the failure; otherwise, `nil`.

The fetch operation executes this closure once for each record ID in the [recordIDs](recordids.md) property. Each time the closure executes, it executes serially with respect to the other progress closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [fetchRecordsCompletionBlock](fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

# perRecordCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The closure to execute when a record becomes available.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^perRecordCompletionBlock)(CKRecord *record, CKRecordID *recordID, NSError *error);
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The record, or `nil` if CloudKit can’t retrieve the record.
- The ID of the record.
- If CloudKit can’t retrieve the record, an error that provides information about the failure; otherwise, `nil`.

The fetch operation executes this closure once for each record ID in the [recordIDs](recordids.md) property. Each time the closure executes, it executes serially with respect to the other progress closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [fetchRecordsCompletionBlock](fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.
