> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/recordwithidwasdeletedblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/recordwithidwasdeletedblock)

# recordWithIDWasDeletedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The block to execute with the ID of a deleted record.

## Declaration

```swift
var recordWithIDWasDeletedBlock: ((CKRecord.ID) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`recordID`**: The ID of the deleted record.

The operation object executes this block once for each record the server deletes in the record zone after the previous fetch request. Each time the block executes, it executes serially with respect to the other progress blocks of the operation. If there aren’t any deleted records, this block doesn’t execute.

If you intend to use this block to process results, set it before executing the operation or submitting it to a queue.

## See Also

### Processing the Fetch Record Changes Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The block to execute with the contents of a changed record.
- [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.

# recordWithIDWasDeletedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The block to execute with the ID of a deleted record.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordWithIDWasDeletedBlock)(CKRecordID *recordID);
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`recordID`**: The ID of the deleted record.

The operation object executes this block once for each record the server deletes in the record zone after the previous fetch request. Each time the block executes, it executes serially with respect to the other progress blocks of the operation. If there aren’t any deleted records, this block doesn’t execute.

If you intend to use this block to process results, set it before executing the operation or submitting it to a queue.

## See Also

### Processing the Fetch Record Changes Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The block to execute with the contents of a changed record.
- [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.
