> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/recordchangedblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/recordchangedblock)

# recordChangedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute with the contents of a changed record.

> Use recordWasChangedBlock instead, which surfaces per-record errors

## Declaration

```swift
var recordChangedBlock: ((CKRecord) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- The changed record. If you specify a value for the [desiredKeys](../ckfetchrecordzonechangesconfiguration/desiredkeys.md) property, the record contains only the corresponding fields.

The operation executes this closure once for each record in the record zone with changes since the previous fetch request. Each time the closure executes, it executes serially with respect to the other closures of the operation. If there aren’t any record changes, this closure doesn’t execute.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-3z14c.md): The closure to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordChangedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute with the contents of a changed record.

> Use recordWasChangedBlock instead, which surfaces per-record errors

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordChangedBlock)(CKRecord *record);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- The changed record. If you specify a value for the [desiredKeys](../ckfetchrecordzonechangesconfiguration/desiredkeys.md) property, the record contains only the corresponding fields.

The operation executes this closure once for each record in the record zone with changes since the previous fetch request. Each time the closure executes, it executes serially with respect to the other closures of the operation. If there aren’t any record changes, this closure doesn’t execute.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-912xy.md): The block to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
