> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/modifyrecordscompletionblock](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/modifyrecordscompletionblock)

# modifyRecordsCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute after CloudKit modifies all of the records.

> Use modifyRecordsResultBlock instead

## Declaration

```swift
var modifyRecordsCompletionBlock: (([CKRecord]?, [CKRecord.ID]?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The records that CloudKit saves.
- The IDs of the records that CloudKit deletes.
- If CloudKit can’t modify any of the records, this parameter provides information about the failure; otherwise, it’s `nil`.

The closure executes only once, and represents your final opportunity to process the operation’s results. It executes after all record progress closures and record completion closures finish. The closure executes serially with respect to the other closures of the operation.

Although this closure executes after the modification of records completes, it executes prior to the indexing of queries for those modified records. Therefore, if a query executes in this completion closure, the results of that query might not include the changes from this operation. Conversely, records that CloudKit fetches in the completion closure are up to date with the changes from the associated operation.

The closure reports an error of type [CKError.Code.partialFailure](../ckerror/code/partialfailure.md) when it modifies only some of the records successfully. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the IDs of the records that the operation can’t modify, and the corresponding values are errors that contain information about the failures.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Modify Record Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when CloudKit saves a record.

# modifyRecordsCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The closure to execute after CloudKit modifies all of the records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^modifyRecordsCompletionBlock)(NSArray<CKRecord *> *savedRecords, NSArray<CKRecordID *> *deletedRecordIDs, NSError *operationError);
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The records that CloudKit saves.
- The IDs of the records that CloudKit deletes.
- If CloudKit can’t modify any of the records, this parameter provides information about the failure; otherwise, it’s `nil`.

The closure executes only once, and represents your final opportunity to process the operation’s results. It executes after all record progress closures and record completion closures finish. The closure executes serially with respect to the other closures of the operation.

Although this closure executes after the modification of records completes, it executes prior to the indexing of queries for those modified records. Therefore, if a query executes in this completion closure, the results of that query might not include the changes from this operation. Conversely, records that CloudKit fetches in the completion closure are up to date with the changes from the associated operation.

The closure reports an error of type [CKErrorPartialFailure](../ckerror/code/partialfailure.md) when it modifies only some of the records successfully. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the IDs of the records that the operation can’t modify, and the corresponding values are errors that contain information about the failures.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Modify Record Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when CloudKit saves a record.
