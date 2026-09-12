> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidchangedblock](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidchangedblock)

# recordZoneWithIDChangedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute with a single record zone change.

## Declaration

```swift
var recordZoneWithIDChangedBlock: ((CKRecordZone.ID) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- **`zoneID`**: The ID of the  record zone that contains changes.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordZoneWithIDChangedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute with a single record zone change.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordZoneWithIDChangedBlock)(CKRecordZoneID *zoneID);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- **`zoneID`**: The ID of the  record zone that contains changes.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
