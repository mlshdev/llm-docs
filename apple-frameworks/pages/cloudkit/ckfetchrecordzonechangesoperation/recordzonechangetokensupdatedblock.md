> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzonechangetokensupdatedblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzonechangetokensupdatedblock)

# recordZoneChangeTokensUpdatedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the change token updates.

## Declaration

```swift
var recordZoneChangeTokensUpdatedBlock: ((CKRecordZone.ID, CKServerChangeToken?, Data?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The record zone’s ID.
- The new change token from the server. You can store this token locally and use it during subsequent fetch operations to limit the results to records that change after this operation executes.
- The most recent client change token from the device. If the change token isn’t the most recent change token you provided, the server might not have received the associated changes.

The operation executes this closure once for each retrieved change token. Each time the closure executes, it executes serially with respect to the other blocks of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-3z14c.md): The closure to execute when a record no longer exists.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordZoneChangeTokensUpdatedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the change token updates.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordZoneChangeTokensUpdatedBlock)(CKRecordZoneID *recordZoneID, CKServerChangeToken *serverChangeToken, NSData *clientChangeTokenData);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The record zone’s ID.
- The new change token from the server. You can store this token locally and use it during subsequent fetch operations to limit the results to records that change after this operation executes.
- The most recent client change token from the device. If the change token isn’t the most recent change token you provided, the server might not have received the associated changes.

The operation executes this closure once for each retrieved change token. Each time the closure executes, it executes serially with respect to the other blocks of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-912xy.md): The block to execute when a record no longer exists.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
