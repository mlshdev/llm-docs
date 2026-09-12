> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordsoperation/perrecordprogressblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/perrecordprogressblock)

# perRecordProgressBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The closure to execute with progress information for individual records.

## Declaration

```swift
var perRecordProgressBlock: ((CKRecord.ID, Double) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record to retrieve.
- The amount of data, as a percentage, that CloudKit downloads for the record. The range is `0.0` to `1.0`, where `0.0` indicates that CloudKit hasn’t downloaded anything, and `1.0` means the download is complete.

The fetch operation executes this closure one or more times for each record ID in the [recordIDs](recordids.md) property. Each time the closure executes, it executes serially with respect to the other progress closures of the operation. You can use this closure to track the ongoing progress of the download operation.

If you intend to use this closure to process results, set it before you execute the operation or add the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.
- [fetchRecordsCompletionBlock](fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

# perRecordProgressBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The closure to execute with progress information for individual records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^perRecordProgressBlock)(CKRecordID *recordID, double progress);
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record to retrieve.
- The amount of data, as a percentage, that CloudKit downloads for the record. The range is `0.0` to `1.0`, where `0.0` indicates that CloudKit hasn’t downloaded anything, and `1.0` means the download is complete.

The fetch operation executes this closure one or more times for each record ID in the [recordIDs](recordids.md) property. Each time the closure executes, it executes serially with respect to the other progress closures of the operation. You can use this closure to track the ongoing progress of the download operation.

If you intend to use this closure to process results, set it before you execute the operation or add the operation to a queue.

## See Also

### Processing Record Fetch Results

- [perRecordCompletionBlock](perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.
- [fetchRecordsCompletionBlock](fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.
