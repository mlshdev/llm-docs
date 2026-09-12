> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzonefetchcompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzonefetchcompletionblock)

# recordZoneFetchCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when a record zone’s fetch finishes.

> Use recordZoneFetchResultBlock instead

## Declaration

```swift
var recordZoneFetchCompletionBlock: ((CKRecordZone.ID, CKServerChangeToken?, Data?, Bool, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The record zone’s ID.
- The change token to store and use in subsequent instances of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md).
- The more recent client change token from the device. If the change token isn’t the more recent change token you provided, the server might not have received the associated changes.
- A Boolean that indicates whether this is the final record zone change. If [fetchAllChanges](fetchallchanges.md) is [false](https://developer.apple.com/documentation/swift/false), it’s the app’s responsibility to create additional instances of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md) to fetch further changes.
- An error object that contains information about a problem, or `nil` if the operation successfully retrieves the results.

The app is responsible for saving the change token at the end of the operation and providing it to future uses of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md). Each time the closure executes, it executes serially with respect to the other closures of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-3z14c.md): The closure to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordZoneFetchCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when a record zone’s fetch finishes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordZoneFetchCompletionBlock)(CKRecordZoneID *recordZoneID, CKServerChangeToken *serverChangeToken, NSData *clientChangeTokenData, BOOL moreComing, NSError *recordZoneError);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The record zone’s ID.
- The change token to store and use in subsequent instances of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md).
- The more recent client change token from the device. If the change token isn’t the more recent change token you provided, the server might not have received the associated changes.
- A Boolean that indicates whether this is the final record zone change. If [fetchAllChanges](fetchallchanges.md) is [false](https://developer.apple.com/documentation/swift/false), it’s the app’s responsibility to create additional instances of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md) to fetch further changes.
- An error object that contains information about a problem, or `nil` if the operation successfully retrieves the results.

The app is responsible for saving the change token at the end of the operation and providing it to future uses of [CKFetchRecordZoneChangesOperation](../ckfetchrecordzonechangesoperation.md). Each time the closure executes, it executes serially with respect to the other closures of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-912xy.md): The block to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
