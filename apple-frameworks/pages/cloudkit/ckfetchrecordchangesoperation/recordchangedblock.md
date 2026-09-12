> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/recordchangedblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/recordchangedblock)

# recordChangedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The block to execute with the contents of a changed record.

## Declaration

```swift
var recordChangedBlock: ((CKRecord) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`record`**: The changed record. If you specify a value for the [desiredKeys](desiredkeys.md) property, the record only contains the fields in the [desiredKeys](desiredkeys.md) property.

The operation object executes this block once for each record in the zone with changes since the previous fetch request. Each time the block executes, it executes serially with respect to the other progress blocks of the operation. If no records change, the block doesn’t execute.

If you intend to use this block to process results, set it before executing the operation or submitting it to a queue.

## See Also

### Processing the Fetch Record Changes Results

- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock.md): Deprecated. The block to execute with the ID of a deleted record.
- [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.

# recordChangedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The block to execute with the contents of a changed record.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordChangedBlock)(CKRecord *record);
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`record`**: The changed record. If you specify a value for the [desiredKeys](desiredkeys.md) property, the record only contains the fields in the [desiredKeys](desiredkeys.md) property.

The operation object executes this block once for each record in the zone with changes since the previous fetch request. Each time the block executes, it executes serially with respect to the other progress blocks of the operation. If no records change, the block doesn’t execute.

If you intend to use this block to process results, set it before executing the operation or submitting it to a queue.

## See Also

### Processing the Fetch Record Changes Results

- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock.md): Deprecated. The block to execute with the ID of a deleted record.
- [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.
