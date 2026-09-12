> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidwasdeletedduetouserencrypteddataresetblock](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidwasdeletedduetouserencrypteddataresetblock)

# recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The closure to execute when a user-invoked account reset deletes a record zone.

## Declaration

```swift
var recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock: ((CKRecordZone.ID) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes a single parameter: the deleted record zone’s ID.

The operation executes this closure, instead of [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md), after a user action causes CloudKit to delete the record zone. Reupload any locally cached data to iCloud to minimize data loss.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The closure to execute when a user-invoked account reset deletes a record zone.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock)(CKRecordZoneID *zoneID);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes a single parameter: the deleted record zone’s ID.

The operation executes this closure, instead of [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md), after a user action causes CloudKit to delete the record zone. Reupload any locally cached data to iCloud to minimize data loss.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
