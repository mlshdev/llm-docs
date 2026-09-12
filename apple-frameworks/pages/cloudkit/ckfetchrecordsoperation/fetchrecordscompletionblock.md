> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordsoperation/fetchrecordscompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/fetchrecordscompletionblock)

# fetchRecordsCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute after CloudKit retrieves all of the records.

> Use fetchRecordsResultBlock instead

## Declaration

```swift
var fetchRecordsCompletionBlock: (([CKRecord.ID : CKRecord]?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- A dictionary that contains the records that CloudKit retrieves. Each key in the dictionary is a [CKRecord.ID](../ckrecord/id.md) object that corresponds to a record you request. The value of each key is the actual [CKRecord](../ckrecord.md) object that CloudKit returns.
- If CloudKit can’t retrieve any of the records, an error that provides information about the failure; otherwise, `nil`.

The fetch operation executes this closure only once, and it’s your final opportunity to process the results. The closure executes after all of the individual progress closures, but before the operation’s completion closure. The closure executes serially with respect to the other progress closures of the operation.

The closure reports an error of type [CKError.Code.partialFailure](../ckerror/code/partialfailure.md) when it retrieves only some of the records successfully. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the IDs of the records that the operation can’t retrieve, and the corresponding values are errors that contain information about the failures.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.

# fetchRecordsCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The closure to execute after CloudKit retrieves all of the records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^fetchRecordsCompletionBlock)(NSDictionary<CKRecordID *,CKRecord *> *recordsByRecordID, NSError *operationError);
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- A dictionary that contains the records that CloudKit retrieves. Each key in the dictionary is a [CKRecordID](../ckrecord/id.md) object that corresponds to a record you request. The value of each key is the actual [CKRecord](../ckrecord.md) object that CloudKit returns.
- If CloudKit can’t retrieve any of the records, an error that provides information about the failure; otherwise, `nil`.

The fetch operation executes this closure only once, and it’s your final opportunity to process the results. The closure executes after all of the individual progress closures, but before the operation’s completion closure. The closure executes serially with respect to the other progress closures of the operation.

The closure reports an error of type [CKErrorPartialFailure](../ckerror/code/partialfailure.md) when it retrieves only some of the records successfully. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the IDs of the records that the operation can’t retrieve, and the corresponding values are errors that contain information about the failures.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordProgressBlock](perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.
